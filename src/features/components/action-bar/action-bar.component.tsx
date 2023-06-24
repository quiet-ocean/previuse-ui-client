import React from 'react';

import ButtonComponent from '../button/button.component';
// import SwitchComponent from '../switch/switch.component';
import { ReactComponent as Link } from '../../../assets/images/link.svg';
// import { ReactComponent as Comment } from '../../../assets/images/comment.svg';
import { Group, Close, Pause, CheckOutlined } from '@material-ui/icons';

import StyledContainer, {
  StyledActions,
  // StyledSwitchButton
} from './action-bar.styles';

export interface ActionBarComponentProps {
  hasDrawer: boolean;
  clientName?: string;
  campaignName?: string;
  postStatus?: number;
  onSetPostStatus: (approved: boolean) => void;
}

const ActionBarComponent: React.FC<ActionBarComponentProps> = (props) => {
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
        <ButtonComponent type='icon' theme='natural' className='close' iconElement={<Close />} />
        <ButtonComponent type='icon' theme='natural' className='pause' iconElement={<Pause />} />
        <ButtonComponent type='button' theme='natural' text={
          <>
            <CheckOutlined />
            <div>approve campaign</div>
          </>
        } />
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

export default ActionBarComponent;