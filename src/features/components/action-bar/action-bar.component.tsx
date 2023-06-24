import React from 'react';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';

import ButtonComponent from '../button/button.component';
// import SwitchComponent from '../switch/switch.component';
import { ReactComponent as Link } from '../../../assets/images/link.svg';
// import { ReactComponent as Comment } from '../../../assets/images/comment.svg';
import { Group, Close, Pause, CheckOutlined } from '@material-ui/icons';

import StyledContainer, {
  StyledActions,
  // StyledSwitchButton
} from './action-bar.styles';
import { RootState } from '../../../common/models';
import { ApproveStatus } from '../../../swagger2Ts/enums';
import { SetPostStatusAction } from '../../../common/state/post/post.actions';

export interface ActionBarComponentProps {
  postId?: number;
  hasDrawer: boolean;
  clientName?: string;
  campaignName?: string;
  postStatus?: number;
  onSetPostStatus: (approved: boolean) => void;
}

export interface ActionBarDispatchProps {
  setPostStatus: (args: any) => void;
}

const Approves: Record<ApproveStatus, string> = {
  [ApproveStatus.Approve]: 'Approve',
  [ApproveStatus.Pending]: 'Pending',
  [ApproveStatus.Decline]: 'Decline',
}

const ActionBarComponent: React.FC<ActionBarComponentProps & ActionBarDispatchProps> = (props) => {
  /* eslint-disable no-console */
  console.log('action bar props: ', props)
  const onPostStatusChange = (approve_status: ApproveStatus) => {
    if (props.postId) {
      try {
        props.setPostStatus({ postId: props.postId, approve_status: Approves[approve_status] })
      } catch (e) {
        console.log('error: ', e)
      }
    }
  }
  const status = ((props?.postStatus || -1) as unknown) as ApproveStatus
  return (
    <StyledContainer hasDrawer={props.hasDrawer}>
      <div>{props.clientName}</div>
      <div>{props.campaignName}</div>
      <StyledActions>
        <ButtonComponent type='icon' theme='natural' iconElement={<Link />} />
        <ButtonComponent type='button' theme='natural' text={
          <>
            <Group />
            <div>invite members</div>
          </>
        } />
        <ButtonComponent
          type='icon'
          theme='natural'
          className='close'
          disabled={status === ApproveStatus.Decline}
          iconElement={<Close />}
        />
        <ButtonComponent
          type='icon'
          theme='natural'
          className='pause'
          disabled={status === ApproveStatus.Decline || status === ApproveStatus.Pending}
          iconElement={<Pause />} 
        />
        <ButtonComponent
          type='button'
          theme='natural'
          disabled={status === ApproveStatus.Approve}
          onClick={() => onPostStatusChange(ApproveStatus.Approve)}
          className={status === ApproveStatus.Approve ? 'approved' : ''}
          text={
            <>
              <CheckOutlined />
              <div>approve campaign</div>
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

export default connect(null, (dispatch: Dispatch<AnyAction, RootState>) => ({
  setPostStatus: bindActionCreators(SetPostStatusAction, dispatch)
}))(ActionBarComponent);