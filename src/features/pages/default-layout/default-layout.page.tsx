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
import { Campaigns, PlatformPostSerializerMaster, UserCreation, UserNotifications, UserUpdate } from '../../../swagger2Ts/interfaces';
import { GetLoggedInUserAction } from '../../../common/state/auth/auth.actions';
import DrawerComponent from '../../components/drawer/drawer.component';
import { ListCampaignsAction } from '../../../common/state/campaign/campaign.actions';
import { ListPostsAction } from '../../../common/state/post/post.actions';
import { GetNotificationsAction } from '../../../common/state/notification/notification.actions';
import { ListUsersAction } from '../../../common/state/auth/auth.actions';
import EmptyStateComponent from '../../components/empty-state/empty-state.component';
import { LinearProgress } from '@material-ui/core';
import { ShowUserAction } from '../../../common/state/member/member.action';

const mockMessage = [
  'Did you know ? our system is more convenient then chat/email',
  'Try our new feature',
]

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
  campaigns?: Campaigns[];
  notifications?: UserNotifications[];
}

interface DispatchProps {
  changeLanguage: (args0: string) => void;
  getDirection: () => ActionCreator<string>;
  onScreenResize: () => void;
  onCloseDialog?: () => void;
  getLoggedInUser: () => Promise<UserCreation>;
  listCampaigns: (clientId: number) => Promise<Campaigns[]>;
  listPosts: () => Promise<PlatformPostSerializerMaster[]>;
  getNotifications: () => Promise<UserNotifications[]>;
  listUsers: () => Promise<UserCreation[]>;
  getUser: () => Promise<UserUpdate>;
}

const DefaultLayout: React.FC<AppProps & DispatchProps> = ({ ...props }) => {
  const Component = props.component;
  const services: IServices | undefined = useContext(ServicesContext);

  if (!services) {
    return null;
  }

  const [direction, setDirection] = useState<string>(props.getDirection());

  useEffect(() => {
    init();
    window.addEventListener('resize', props.onScreenResize);

    return () => {
      window.removeEventListener('resize', props.onScreenResize);
    };
  }, []);

  useEffect(() => {
    setDirection(props.getDirection());
  }, [props.language]);

  const init = async () => {
    try {
      services.loading.actions.start();
      const user = await props.getLoggedInUser();
      props.listCampaigns(user.id as number);
      props.listPosts();
      props.listUsers();
      props.getUser();
      props.getNotifications();
    } finally {
      services.loading.actions.stop();
    }
  }

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

  if (!props.campaigns) {
    return <LinearProgress style={{height: '10px'}} />
  }

  if (props.campaigns && !props.campaigns.length) {
    return (
      <StyledContainer hasDrawer={props.isDrawerRender}>
        <EmptyStateComponent title='No Campaigns Yet' />
      </StyledContainer>
    )
  }

  return (
    <DirectionContext.Provider value={direction}>
      <Route
        path={props.path}
        render={(matchProps: RouteChildrenProps) => (
          <div dir={direction}>
            <HeaderComponent onShowMenu={services.drawer.actions.open} />

            {props.campaigns && (
              <DrawerComponent
                open={props.isDrawerRender}
                onClose={services.drawer.actions.close}
                user={props.user}
                campaings={props.campaigns}
                alertMessages={mockMessage}
              />
            )}

            <StyledContainer style={{ backgroundImage: `url(${background})` }}>
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
    listCampaigns: bindActionCreators(ListCampaignsAction, dispatch),
    listPosts: bindActionCreators(ListPostsAction, dispatch),
    getNotifications: bindActionCreators(GetNotificationsAction, dispatch),
    listUsers: bindActionCreators(ListUsersAction, dispatch),
    getUser: bindActionCreators(ShowUserAction, dispatch),
  };
};

const mapStateToProps = (state: RootState) => {
  const { general, dialog, drawer, snackbar } = state.view;
  const { auth, campaign, notification } = state.app;
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
    campaigns: campaign.campaings,
    notifications: notification.notifications,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultLayout);
