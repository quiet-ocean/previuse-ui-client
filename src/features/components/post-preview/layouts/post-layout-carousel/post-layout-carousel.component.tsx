import React from 'react';
import { MediaFiles, PlatformPostSerializerMaster } from '../../../../../swagger2Ts/interfaces';
import StyledContainer, {
  StyledPostContent,
  StyledPostBody,
  StyledImageWrapper,
} from './post-layout-carousel.styles';

import MockImage3 from '../../mock/post-image3.png';

export interface PostLayoutCarouselComponentProps {
  post: PlatformPostSerializerMaster;
  media: MediaFiles[];
}

const PostLayoutCarouselComponent: React.FC<PostLayoutCarouselComponentProps> = (props) => {
  return (
    <StyledContainer>
      <h3 className='post-title'>Sponsored</h3>
      <StyledPostContent>
        <StyledImageWrapper>
          <img src={props.media && props?.media[0].file_in || MockImage3} alt='' />
        </StyledImageWrapper>
        <StyledPostBody>
          <h3 className='post-title'>{props.post.page_name}</h3>
          <p className='post-subtitle'>{props.media && props.media[0].caption}</p>
        </StyledPostBody>
      </StyledPostContent>
    </StyledContainer>
  );
}

export default PostLayoutCarouselComponent;