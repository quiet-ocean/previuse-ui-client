import React from 'react';
import MockImage from './mock/tiktok.png';
import { MediaFiles, PlatformPostSerializerMaster } from '../../../../../swagger2Ts/interfaces';

import StyledContainer, {
  StyledWrapper,
  StyledFooter,
  StyledAction,
  StyledAvatar,
} from './post-layout-mobile.styles';


export interface PostCarouselMobileProps {
  post: PlatformPostSerializerMaster;
  media: MediaFiles[];
}

const PostCarouselMobile: React.FC<PostCarouselMobileProps> = (props) => {
  return (
    <StyledContainer>
      <StyledWrapper style={{backgroundImage: `url(${props.media && props.media.length > 0 && props.media[0]?.file_in || MockImage})`}}>
        <div className='header'>
          <div>
            <StyledAvatar>
              <div>
                <img src={props.post.logo} />
              </div>
            </StyledAvatar>
          </div>
          <div>
            <p className='post-title'>
              {props.post.page_name}
            </p>
            <p className='post-subtitle'>
              {`Sponsored`}
            </p>
          </div>
        </div>
      </StyledWrapper>

      <StyledFooter>
        <div>
          <p className='post-subtitle'>{props.post.description}</p>
        </div>
        <div>
          <StyledAction>
            <p className='post-subtitle'>Learn More</p>
          </StyledAction>
        </div>
      </StyledFooter>
    </StyledContainer>
  );
}
 
export default PostCarouselMobile;