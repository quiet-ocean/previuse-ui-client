import React from 'react';
import { connect } from 'react-redux';
import { RouteChildrenProps } from 'react-router';
import { AnyAction, Dispatch } from 'redux';
import { RootState } from '../../../common/models';
import { Campaigns, UserCreation } from '../../../swagger2Ts/interfaces';
import ActionBarComponent from '../../components/action-bar/action-bar.component';
import LayoutComponent from '../../components/layout/layout.component';

import {
  StyledContainer,
} from './home.styles';

interface HomePageProps {
  isDrawerRender: boolean;
  user?: UserCreation;
  campaings?: Campaigns[];
}

const HomePage: React.FC<RouteChildrenProps & HomePageProps> = (props) => {
  return (
    <LayoutComponent hasDrawer={props.isDrawerRender}>
      <ActionBarComponent hasDrawer={props.isDrawerRender} clientName={props.user && props.user.email} />

      <StyledContainer hasDrawer={props.isDrawerRender}>
        home
      </StyledContainer>
    </LayoutComponent>
  );
};

const mapStateToProps = (state: RootState) => ({
  isDrawerRender: state.view.drawer.isRender,
  user: state.app.auth.user,
  campaings: state.app.campaign.campaings
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction, RootState>) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
