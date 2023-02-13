import React, { FC } from 'react';
import { StyledContainer, StyledList } from './sidebar.styles';

export interface SideBarProps {
  children: JSX.Element | JSX.Element[];
}

const SideBarComponent: FC<SideBarProps> = ({ children }) => (
  <StyledContainer>
    <StyledList>{children}</StyledList>
  </StyledContainer>
);

export default SideBarComponent;
