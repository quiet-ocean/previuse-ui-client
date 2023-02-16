import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import {
  ChevronLeft,
  ExpandLess,
  ExpandMore,
  Face,
  Facebook,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from '@material-ui/icons';

import {
  CardActionArea,
  CardContent,
  Collapse,
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
  StyledAlert,
  StyledAlertIcon,
  StyledTitle
} from './drawer.styles';

import logo from '../../../assets/images/logo.png';
import { ReactComponent as LightBulb } from '../../../assets/images/light-bulb.svg';
import { Campaigns, UserCreation } from '../../../swagger2Ts/interfaces';
import ButtonComponent from '../button/button.component';

interface DrawerProps {
  open?: boolean;
  user?: UserCreation;
  campaings: Campaigns[];
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

      <Divider className='padding' />

      <StyledWrapper>
        <StyledTitle>Campaign Network/Type:</StyledTitle>
        <List>
          {props.campaings.map((campaign) => (
            <NavLink key={campaign.id} to={`/home/${campaign.id}`}>
              <ListItem button className='nested'>
                <ListItemIcon><Facebook /></ListItemIcon>
                <ListItemText primary={campaign.campaign_name} />
              </ListItem>
            </NavLink>
          ))}
        </List>
      </StyledWrapper>

      <StyledAlert>
        <StyledAlertIcon><LightBulb /></StyledAlertIcon>
        <div className="buttons">
          <ButtonComponent type='icon' iconElement={<KeyboardArrowLeft />} />
          <ButtonComponent type='icon' iconElement={<KeyboardArrowRight />} />
        </div>
        <span>Did you know ? our system is more convenient then chat/email</span>
      </StyledAlert>

      <StyledCloseButton onClick={props.onClose} iconElement={<ChevronLeft />} />
    </StyledDrawer>
  );
};

export default DrawerComponent;
