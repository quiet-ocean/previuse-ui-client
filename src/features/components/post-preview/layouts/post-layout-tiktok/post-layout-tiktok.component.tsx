import React from 'react';
import { KeyboardArrowRight } from '@material-ui/icons';

import MockImage from './mock/tiktok.png';
import { PlatformPostSerializerMaster } from '../../../../../swagger2Ts/interfaces';

import { ReactComponent as Favorites } from '../../../../../assets/images/heart.svg';
import { ReactComponent as Comment } from '../../../../../assets/images/comment.svg';
import { ReactComponent as Share } from '../../../../../assets/images/share.svg';
import { ReactComponent as Music } from '../../../../../assets/images/music.svg';

import StyledContainer, {
  StyledIcons,
  StyledTitle,
  StyledWrapper,
  StyledFooter,
  StyledAction,
} from './post-layout-tiktok.styles';


export interface TiktokPreviewComponentProps {
  post: PlatformPostSerializerMaster;
}

const TiktokPreviewComponent: React.FC<TiktokPreviewComponentProps> = (props) => {
  return (
    <StyledContainer>
      <StyledTitle>{props.post.page_name}</StyledTitle>

      <StyledWrapper style={{backgroundImage: `url(${MockImage})`}}>
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
      </StyledWrapper>

      <StyledFooter>
        <div className='sponsered'>Sponsered</div>
        <div>
          <span><Music /></span>
          <span>{props.post.headline || 'Headline'}</span>
        </div>

        <StyledAction><KeyboardArrowRight /></StyledAction>
      </StyledFooter>
    </StyledContainer>
  );
}
 
export default TiktokPreviewComponent;