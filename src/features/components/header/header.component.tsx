import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';

import {
  StyledHeader,
  StyledLogo,
  StyledWrapper
} from './header.styles';

import ButtonComponent from '../button/button.component';
import { ROUTES } from '../../../common/constants';
import logo from '../../../assets/images/logo.png';

export interface HeaderMenuItem {
  label: string;
  onItemClick: () => void;
  icon?: JSX.Element;
}

export interface HeaderProps {
  onShowMenu?: () => void;
}

const HeaderComponent: React.FC<HeaderProps> = (props) => (
  <StyledHeader position="fixed">
    <Toolbar>
      {props.onShowMenu && (
        <ButtonComponent
          className="hamburger"
          type="icon"
          iconElement={<MenuIcon />}
          onClick={() => props.onShowMenu && props.onShowMenu()}
        />
      )}
      <StyledWrapper>
        <StyledLogo href={'/#' + ROUTES.home}><img src={logo} /></StyledLogo>
      </StyledWrapper>
    </Toolbar>
  </StyledHeader>
);

export default HeaderComponent;
