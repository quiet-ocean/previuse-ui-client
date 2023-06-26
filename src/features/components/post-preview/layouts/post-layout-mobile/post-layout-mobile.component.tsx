import React from 'react';
import { KeyboardArrowRight } from '@material-ui/icons';

import MockImage from './mock/tiktok.png';
import { MediaFiles, PlatformPostSerializerMaster } from '../../../../../swagger2Ts/interfaces';

import { ReactComponent as Favorites } from '../../../../../assets/images/heart.svg';
import { ReactComponent as Comment } from '../../../../../assets/images/comment.svg';
import { ReactComponent as Share } from '../../../../../assets/images/share.svg';
import { ReactComponent as Music } from '../../../../../assets/images/music.svg';

import StyledContainer, {
  StyledIcons,
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
      <StyledWrapper style={{backgroundImage: `url(${props.media && props.media[0].file_in || MockImage})`}}>
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