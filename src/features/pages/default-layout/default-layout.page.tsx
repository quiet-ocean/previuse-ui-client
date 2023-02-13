import React, { useEffect, useState, useContext } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { RouteChildrenProps } from 'react-router';
import { StyledContainer, StyledContent } from './default-layout.styles';
import { AnyAction, bindActionCreators, Dispatch, ActionCreator } from 'redux';

import {
  ChangeLanguageAction,
  GetDirectionAction,
  OnScreenResizeAction
} from '../../../common/state/general/general.actions';

import background from '../../../assets/images/background.png';
import { DirectionContext } from '../../../common/contexts';
import { RootState, SnackBarType, StringMap } from '../../../common/models';
import SpinnerComponent from '../../components/spinner/spinner.component';
import { ServicesContext } from '../../../common/contexts';
import { IServices } from '../../../common/services/initiate';
import HeaderComponent from '../../components/header/header.component';
import DialogComponent from '../../components/dialog/dialog.component';
import { DialogTypes } from '../../../common/state/dialog/dialog.state';
import SnackBarComponent from '../../components/snackbar/snackbar.component';
import { UserCreation } from '../../../swagger2Ts/interfaces';
import { GetLoggedInUserAction } from '../../../common/state/auth/auth.actions';
import DrawerComponent from '../../components/drawer/drawer.component';

interface AppProps {
  path: string;
  component: any;
  user?: UserCreation;
  isDialogRender: boolean;
  dialogTitle?: string;
  dialogContent?: React.ReactElement | string;
  loading: boolean;
  isDrawerRender: boolean;
  language: string;
  languages: StringMap;
  dialogType?: DialogTypes;
  snackbackContent?: JSX.Element;
  snackbarType?: SnackBarType;
  isSnackbarOpen: boolean;
}

interface DispatchProps {
  changeLanguage: (args0: string) => void;
  getDirection: () => ActionCreator<string>;
  onScreenResize: () => void;
  onCloseDialog?: () => void;
  getLoggedInUser: () => Promise<UserCreation>;
}

const DefaultLayout: React.FC<AppProps & DispatchProps> = ({ ...props }) => {
  const Component = props.component;
  const services: IServices | undefined = useContext(ServicesContext);

  if (!services) {
    return null;
  }

  const [direction, setDirection] = useState<string>(props.getDirection());

  const fetchUser = async () => {
    try {
      services.loading.actions.start();
      const user = await props.getLoggedInUser();
      services.snackbar.actions.open({ content: `Welcome user ${user.email}` })
    } finally {
      services.loading.actions.stop();
    }
  }

  useEffect(() => {
    fetchUser();
    window.addEventListener('resize', props.onScreenResize);

    return () => {
      window.removeEventListener('resize', props.onScreenResize);
    };
  }, []);

  useEffect(() => {
    setDirection(props.getDirection());
  }, [props.language]);


  const onCloseDialog = () => {
    services.dialog.actions.close();
    props.onCloseDialog && props.onCloseDialog();
  }

  const getDialogWidth = () => {
    switch (props.dialogType) {
      case DialogTypes.MEDIUM:
        return 'lg';

      case DialogTypes.MEDIUM_LARGE:
        return 'md';

      default:
        return 'sm';
    }
  }

  return (
    <DirectionContext.Provider value={direction}>
      <Route
        path={props.path}
        render={(matchProps: RouteChildrenProps) => (
          <div dir={direction}>
            <HeaderComponent onShowMenu={services.drawer.actions.open} />

            <DrawerComponent
              open={props.isDrawerRender}
              onClose={services.drawer.actions.close}
              user={props.user}
            />

            <StyledContainer style={{backgroundImage: `url(${background})`}}>
              {props.loading && <SpinnerComponent />}

              <StyledContent><Component {...matchProps} /></StyledContent>

              <DialogComponent
                title={props.dialogTitle as string}
                content={props.dialogContent || ''}
                open={props.isDialogRender}
                onClose={onCloseDialog}
                fullScreen={props.dialogType === DialogTypes.FULL}
                maxWidth={getDialogWidth()}
              />

              <SnackBarComponent
                open={props.isSnackbarOpen}
                message={props.snackbackContent as any}
                onClose={services.snackbar.actions.close}
                type={props.snackbarType}
                autoHideDuration={6000}
              />
            </StyledContainer>
          </div>
        )}
      />
    </DirectionContext.Provider>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction, RootState>) => {
  return {
    changeLanguage: bindActionCreators(ChangeLanguageAction, dispatch),
    getDirection: bindActionCreators(GetDirectionAction, dispatch),
    onScreenResize: bindActionCreators(OnScreenResizeAction, dispatch),
    getLoggedInUser: bindActionCreators(GetLoggedInUserAction, dispatch),
  };
};

const mapStateToProps = (state: RootState) => {
  const { general, dialog, drawer, snackbar } = state.view;
  const { auth } = state.app;
  return {
    user: auth.user,
    isDialogRender: dialog.isRender,
    dialogTitle: dialog.title,
    dialogContent: dialog.content,
    dialogType: dialog.type,
    loading: general.loading,
    isDrawerRender: drawer.isRender,
    language: general.language,
    languages: general.languages,
    snackbackContent: snackbar.content,
    snackbarType: snackbar.type,
    isSnackbarOpen: snackbar.open,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultLayout);
