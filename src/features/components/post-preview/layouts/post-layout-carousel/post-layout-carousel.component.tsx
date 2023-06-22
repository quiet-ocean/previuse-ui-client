import React from 'react';
import { PlatformPostSerializerMaster } from '../../../../../swagger2Ts/interfaces';
import StyledContainer, {
  StyledPostContent,
  StyledPostBody,
  StyledImageWrapper,
} from './post-layout-carousel.styles';

import MockImage from '../../mock/post-image.png';

export interface PostLayoutCarouselComponentProps {
  post: PlatformPostSerializerMaster;
}

const PostLayoutCarouselComponent: React.FC<PostLayoutCarouselComponentProps> = (props) => {
  return (
    <StyledContainer>
      <h3 className='post-title'>Sponsored</h3>
      <StyledPostContent>
        <StyledImageWrapper>
          <img src={MockImage} alt='' />
        </StyledImageWrapper>
        <StyledPostBody>
          <h3 className='post-title'>{props.post.page_name}</h3>
          <p className='post-subtitle'>{props.post.headline}</p>
        </StyledPostBody>
      </StyledPostContent>
    </StyledContainer>
  );
}

export default PostLayoutCarouselComponent;