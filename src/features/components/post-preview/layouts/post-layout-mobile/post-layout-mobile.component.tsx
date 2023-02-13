import React from 'react';
import { PlatformPostSerializerMaster } from '../../../../../swagger2Ts/interfaces';
import PostTitleComponent from '../../post-title/post-title.component';
import MockPostImage from '../../mock/post-image.png';

import StyledContainer, {
  StyledImage,
  StyledDescription,
  StyledMoreButton,
  StyledButton,
  StyledFooter
} from './post-layout-mobile.styles';
import { KeyboardArrowUp } from '@material-ui/icons';
import { camelCaseToWords } from '../../../../../utils/general-utils';

export interface PostLayoutMobileComponentProps {
  post: PlatformPostSerializerMaster;
}

const PostLayoutMobileComponent: React.FC<PostLayoutMobileComponentProps> = (props) => {
  return (
    <StyledContainer>
      <PostTitleComponent
        title={props.post.page_name}
        logo={props.post.logo}
      />
      <StyledImage>
        <img src={MockPostImage} />
      </StyledImage>

      <StyledFooter>
        <StyledDescription>{props.post.description || 'description'}</StyledDescription>

        <StyledButton>
          <KeyboardArrowUp />
          <StyledMoreButton>{props.post.call_to_action ? camelCaseToWords(props.post.call_to_action) : 'Learn More'}</StyledMoreButton>
        </StyledButton>
      </StyledFooter>
    </StyledContainer>
  );
}

export default PostLayoutMobileComponent;