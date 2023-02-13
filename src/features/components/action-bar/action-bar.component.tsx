import React from 'react';
import StyledContainer from './action-bar.styles';

export interface ActionBarComponentProps {
  hasDrawer: boolean;
  clientName?: string;
}

const ActionBarComponent: React.FC<ActionBarComponentProps> = (props) => {
  return (
    <StyledContainer hasDrawer={props.hasDrawer}>
      <span>{props.clientName}</span>
    </StyledContainer>
  );
}

export default ActionBarComponent;