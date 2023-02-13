import { Avatar } from '@material-ui/core';
import React from 'react';
import MockClientImage from '../mock/client.png';

import StyledContainer, {
  StyledLikeButton,
  StyledPageTitle,
  StyledSubTitle
} from './post-title.styles';

export interface PostTitleComponentProps {
  logo?: string;
  title?: string;
  action?: JSX.Element
}

const PostTitleComponent: React.FC<PostTitleComponentProps> = (props) => {
  return (
    <StyledContainer>
      <div>
        <Avatar src={props.logo || MockClientImage} />
        <StyledPageTitle>
          <span>{props.title || 'Page Title'}</span>
          <StyledSubTitle>subtitle</StyledSubTitle>
        </StyledPageTitle>
      </div>
      <div>
        {props.action || <StyledLikeButton>Like Page</StyledLikeButton>}
      </div>
    </StyledContainer>
  );
}

export default PostTitleComponent;