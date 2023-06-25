import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';

import ButtonComponent from '../button/button.component';
// import SwitchComponent from '../switch/switch.component';
import CampaignPermissionsComponent from '../campaign-permissions/campaign-permissions.component';
import { ReactComponent as Link } from '../../../assets/images/link.svg';
import { ReactComponent as Send } from '../../../assets/images/send-1.svg';
// import { ReactComponent as Comment } from '../../../assets/images/comment.svg';
import { Group, Close, Pause, CheckOutlined } from '@material-ui/icons';

import StyledContainer, {
  StyledActions,
  // StyledSwitchButton
} from './action-bar.styles';
import { RootState } from '../../../common/models';
import { ApproveStatus, UserType } from '../../../swagger2Ts/enums';
import { PlatformPostSerializerMaster, Campaigns, UserUpdate } from '../../../swagger2Ts/interfaces';
import { SetPostStatusAction } from '../../../common/state/post/post.actions';

import { ServicesContext } from '../../../common/contexts';
import { IServices } from '../../../common/services/initiate';
import { Box } from '@material-ui/core';
import httpService from '../../../common/services/http.service';

export interface ActionBarComponentProps {
  hasDrawer: boolean;
  post?: PlatformPostSerializerMaster;
  campaign?: Campaigns;
  onSetPostStatus: (approved: boolean) => void;
}

export interface ActionBarStateProps {
  
  user?: UserUpdate;
}
export interface ActionBarDispatchProps {
  setPostStatus: (args: any) => void;
}

const APPROVE = 1;
const PENDING = 0;
const DECLINE = -1;

const ActionBarComponent: React.FC<ActionBarComponentProps & ActionBarDispatchProps & ActionBarStateProps> = (props) => {
  
  const services: IServices | undefined = useContext(ServicesContext);

  const onPostStatusChange = (approve_status: ApproveStatus) => {
    if (props.post && props.post.id) {
      services?.loading.actions.start();
      props.setPostStatus({ postId: props.post.id, approve_status })
    }
  }
  const onInvite = () => {
    services?.dialog.actions.open({
      title: 'Publish Client Itay',
      content: <CampaignPermissionsComponent campaignId={props.campaign?.id} />
    })
  }
  const onLaunch = async () => {
    services?.loading.actions.start()
    await httpService.fetch({
      method: 'get',
      url: 'members/change_site_view',
    })
    services?.loading.actions.stop()
    services?.dialog.actions.open({
      title: 'Launch Client',
      content: (
        <div>
          <p>Campaign Launched Successfully!</p>
        </div>
      )
    })
  }

  const status = props.post && props.post.approve_status || 0;

  return (
    <StyledContainer hasDrawer={props.hasDrawer}>
      <div>{props.campaign && props.campaign.related_client.client_name}</div>
      <div>{props.campaign && props.campaign.campaign_name}</div>
      <StyledActions>
        <ButtonComponent
          type='icon'
          theme='natural'
          iconElement={
            <a href={props.post && props.post.related_platform.business_page} target='blank'>
              <Link />
            </a>
          }
        />
        <ButtonComponent
          type='button'
          theme='natural'
          onClick={() => onInvite()}
          text={
            <>
              <Group />
              <div>invite members</div>
            </>
          }
        />
        <Box display={props?.user && props.user.user_type === UserType.marketer ? 'block' : 'none'}>
          <ButtonComponent
            type='button'
            theme='natural'
            onClick={() => onLaunch()}
            text={
              <>
                <Send />
                <div>launch campaign</div>
              </>
            }
          />
        </Box>
        <ButtonComponent
          type='icon'
          theme='natural'
          className='close'
          disabled={status === DECLINE}
          onClick={() => onPostStatusChange(ApproveStatus.Decline)}
          iconElement={<Close />}
        />
        <ButtonComponent
          type='icon'
          theme='natural'
          className='pause'
          disabled={status === DECLINE || status === PENDING }
          onClick={() => onPostStatusChange(ApproveStatus.Pending)}
          iconElement={<Pause />} 
        />
        <ButtonComponent
          type='button'
          theme='natural'
          disabled={status === APPROVE}
          onClick={() => onPostStatusChange(ApproveStatus.Approve)}
          className={status === APPROVE ? 'approved' : ''}
          text={
            <>
              <CheckOutlined />
              <div>{status === APPROVE ? `campaign approved` : `approve campaign`}</div>
            </>
          } 
        />
        {/* <ButtonComponent type='icon' theme='natural' iconElement={<Comment />} />

        <SwitchComponent
          checkedButtonColor='#BDBDBD'
          unCheckedButtonColor='#3dd88c'
          color='#E0E0E0'
          checkedColor='#E0E0E0'
          className='themed'
          checkedIcon={<StyledSwitchButton className='on'>On</StyledSwitchButton>}
          icon={<StyledSwitchButton className='off'>Off</StyledSwitchButton>}
          onChange={props.onSetPostStatus}
          checked={props.postStatus === -1 || props.postStatus === 0 ? false : true}
        /> */}
      </StyledActions>
    </StyledContainer>
  );
}

export default connect((state: RootState) => ({
  user: state.app.member.user
}), (dispatch: Dispatch<AnyAction, RootState>) => ({
  setPostStatus: bindActionCreators(SetPostStatusAction, dispatch)
}))(ActionBarComponent);