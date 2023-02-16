import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import {
  ChevronLeft,
  Face,
  Facebook,
  KeyboardArrowLeft,
  KeyboardArrowRight,
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
  StyledAlert,
  StyledAlertIcon,
  StyledTitle,
  StyledBulb
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
  alertMessages: string[];
}

const DrawerComponent: React.FC<DrawerProps> = (props) => {
  const [alertIndex, setAlertIndex] = useState<number>(0);
  const [renderAlertMessages, setRenderAlertMessages] = useState<boolean>(true);

  const prevMessage = () => alertIndex < props.alertMessages.length - 1 && setAlertIndex(alertIndex + 1);

  const nextMessage = () => alertIndex > 0 && setAlertIndex(alertIndex - 1);

  const toggleAlertMessages = () => setRenderAlertMessages(!renderAlertMessages);

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


      {renderAlertMessages && (
        <StyledAlert>
          <ButtonComponent theme='clear' type='icon' onClick={toggleAlertMessages} />

          <StyledAlertIcon><LightBulb /></StyledAlertIcon>

          <div className="buttons">
            <ButtonComponent
              type='icon'
              iconElement={<KeyboardArrowLeft />}
              onClick={nextMessage}
              disabled={alertIndex === 0}
            />

            <ButtonComponent
              type='icon'
              iconElement={<KeyboardArrowRight />}
              onClick={prevMessage}
              disabled={alertIndex === props.alertMessages.length - 1}
            />
          </div>
          <span>{props.alertMessages[alertIndex]}</span>
        </StyledAlert>
      )}

      {!renderAlertMessages && (
        <StyledBulb>
          <CardActionArea>
            <StyledAlertIcon onClick={toggleAlertMessages}><LightBulb /></StyledAlertIcon>
          </CardActionArea>
        </StyledBulb>
      )}

      <StyledCloseButton onClick={props.onClose} iconElement={<ChevronLeft />} />
    </StyledDrawer>
  );
};

export default DrawerComponent;
