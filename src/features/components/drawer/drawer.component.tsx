import React from 'react';

import {
  ChevronLeft,
  Face,
  Group,
} from '@material-ui/icons';

import {
  CardActionArea,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';

import {
  StyledDrawer,
  StyledCloseButton,
  StyledLogo,
  StyledUser,
  StyledWrapper,
  StyledAvatar,
} from './drawer.styles';

import logo from '../../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import { UserCreation } from '../../../swagger2Ts/interfaces';

interface DrawerProps {
  open?: boolean;
  user?: UserCreation;
  onClose: () => void;
}

const DrawerComponent: React.FC<DrawerProps> = (props) => {
  const getAvatar = () => {
    if (props.user && props.user.avatar) {
      return <img src={props.user.avatar} alt="" />;
    }

    return <Face />;
  }

  return (
    <StyledDrawer
      open={props.open}
      onClose={props.onClose}
      variant="persistent"
      anchor="left"
    >
      <StyledLogo><img src={logo} /></StyledLogo>
      <StyledWrapper>

        <List>
          <NavLink to={'/'}>
            <ListItem button>
              <ListItemIcon><Group /></ListItemIcon>
              <ListItemText primary='Clients' />
            </ListItem>
          </NavLink>
        </List>

        <Divider />

      </StyledWrapper>

      {props.user && (
        <StyledUser>
          <div>
            <CardActionArea>
              <CardContent>
                <StyledAvatar>{getAvatar()}</StyledAvatar>
              </CardContent>
            </CardActionArea>
            {props.user.first_name && props.user.last_name ? (
              <span>{props.user.first_name} {props.user.last_name}</span>
            ) : (
              <span>{props.user.email}</span>
            )}
          </div>
        </StyledUser>
      )}

      <StyledCloseButton onClick={props.onClose} iconElement={<ChevronLeft />} />
    </StyledDrawer>
  );
};

export default DrawerComponent;
