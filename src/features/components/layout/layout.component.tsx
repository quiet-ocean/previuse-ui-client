import React from 'react';
import { StyledContainer } from './layout.styles';

export interface LayoutComponentProps {
  hasDrawer: boolean;
  children: any;
}

const LayoutComponent: React.FC<LayoutComponentProps> = (props) => {
  return (
    <StyledContainer hasDrawer={props.hasDrawer}>{props.children}</StyledContainer>
  );
}

export default LayoutComponent;