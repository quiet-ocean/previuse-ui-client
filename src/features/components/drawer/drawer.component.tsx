import React, { useState } from 'react';

import {
  ChevronLeft,
  ExpandLess,
  ExpandMore,
  Face,
  Facebook,
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
} from './drawer.styles';

import logo from '../../../assets/images/logo.png';
import { Campaigns, UserCreation } from '../../../swagger2Ts/interfaces';

interface DrawerProps {
  open?: boolean;
  user?: UserCreation;
  campaings: Campaigns[];
  onClose: () => void;
}

const DrawerComponent: React.FC<DrawerProps> = (props) => {
  const [campaignsCollapsed, setCampaignsCollapsed] = useState<boolean>(true);

  const toggleCampaigns = () => setCampaignsCollapsed(!campaignsCollapsed);

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
          <ListItem button onClick={toggleCampaigns} className='collapse-title'>
            <ListItemText primary='Campaigns' />
            {campaignsCollapsed ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={campaignsCollapsed} timeout="auto" unmountOnExit>
            <List>
              {props.campaings.map((campaign) => (
                <ListItem key={campaign.id} button className='nested'>
                  <ListItemIcon><Facebook /></ListItemIcon>
                  <ListItemText primary={campaign.campaign_name} />
                </ListItem>
              ))}
            </List>
          </Collapse>

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
