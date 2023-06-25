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
} from './post-layout-tiktok.styles';


export interface TiktokPreviewComponentProps {
  post: PlatformPostSerializerMaster;
  media: MediaFiles[];
}

const TiktokPreviewComponent: React.FC<TiktokPreviewComponentProps> = (props) => {
  return (
    <StyledContainer>
      <StyledWrapper style={{backgroundImage: `url(${props.media && props.media[0].file_in || MockImage})`}}>
        <div className='header'>
          <p className='post-subtitle'>
            following
            <span> For you</span>
          </p>
        </div>
        <div className='side-actions'>
          <div>
            <StyledAvatar>
              <div>
                <img src={props.post.logo} />
              </div>
            </StyledAvatar>
            <StyledIcons>
              <div>
                <div><Favorites /></div>
                <div>71.1k</div>
              </div>
              <div>
                <div><Comment /></div>
                <div>1324</div>
              </div>
              <div>
                <div><Share /></div>
                <div>232</div>
              </div>
            </StyledIcons>
          </div>
        </div>
      </StyledWrapper>

      <StyledFooter>
        <p className='post-subtitle'>{props.post.page_name}</p>
        <p className='post-subtitle'>{props.media && props.media[0].description}</p>
        <div className='sponsored'>Sponsered</div>
        <div>
          <span><Music /></span>
          <span>{props.media && props.media[0].headline || 'Promoted Music'}</span>
        </div>

        <StyledAction><KeyboardArrowRight /></StyledAction>
      </StyledFooter>
    </StyledContainer>
  );
}
 
export default TiktokPreviewComponent;