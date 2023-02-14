import React from 'react';

import ButtonComponent from '../button/button.component';
import SwitchComponent from '../switch/switch.component';
import { ReactComponent as Link } from '../../../assets/images/link.svg';
import { ReactComponent as Comment } from '../../../assets/images/comment.svg';

import StyledContainer, {
  StyledActions,
} from './action-bar.styles';

export interface ActionBarComponentProps {
  hasDrawer: boolean;
  clientName?: string;
}

const ActionBarComponent: React.FC<ActionBarComponentProps> = (props) => {
  return (
    <StyledContainer hasDrawer={props.hasDrawer}>
      <div>{props.clientName}</div>

      <StyledActions>
        <ButtonComponent type='icon' theme='natural' iconElement={<Link />} />
        <ButtonComponent type='icon' theme='natural' iconElement={<Comment />} />

        <SwitchComponent
          checkedColor='#E0E0E0'
          color='#E0E0E0'
          className='themed'
        />

        <SwitchComponent
          checkedColor='#E0E0E0'
          color='#E0E0E0'
        />
      </StyledActions>
    </StyledContainer>
  );
}

export default ActionBarComponent;