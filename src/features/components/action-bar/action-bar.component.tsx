import React from 'react';
import StyledContainer from './action-bar.styles';

export interface ActionBarComponentProps {
  hasDrawer: boolean;
}

const ActionBarComponent: React.FC<ActionBarComponentProps> = (props) => {
  return (
    <StyledContainer hasDrawer={props.hasDrawer}>
      ActionBarComponent
    </StyledContainer>
  );
}
 
export default ActionBarComponent;