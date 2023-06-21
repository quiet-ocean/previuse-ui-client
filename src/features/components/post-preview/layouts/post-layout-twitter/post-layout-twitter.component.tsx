import React from 'react';

import { Avatar } from '@material-ui/core';
import { PlatformPostSerializerMaster } from '../../../../../swagger2Ts/interfaces';
import PostContentComponent from '../../post-content/post-content.component';
import PostFooterComponent from '../../post-footer/post-footer.component';
import PostTitleComponent from '../../post-title/post-title.component';

import StyledContainer, {
  StyledPostContent,
  StyledPostImage,
  StyledPostTitle,
  StyledActions,
  MuiAvatar,
  StyledPostFooter,
  StyledBlankLine,
  StyledBlankIcon,
} from './post-layout-twitter.styles';
import MockPostImage from '../../mock/post-image.png';
import MockClientImage from '../../mock/client.png';
import ButtonComponent from '../../../button/button.component';

import { ReactComponent as Comment} from '../../../../../assets/images/comment-1.svg'
import { ReactComponent as Heart} from '../../../../../assets/images/heart-1.svg'
import { ReactComponent as Share} from '../../../../../assets/images/share-1.svg'
import { ReactComponent as Upload} from '../../../../../assets/images/upload.svg'

export interface TwitterPreviewComponentProps {
  post: PlatformPostSerializerMaster;
}

const TwitterPreviewComponent: React.FC<TwitterPreviewComponentProps> = (props) => {
  return (
    <StyledContainer>
      <div>
        <StyledPostTitle>
          <div className='avatar'>
            <MuiAvatar src={props.post.logo || MockClientImage} />
          </div>
          <div className='title'>
            <div>
              <h3 className='post-title'>{props.post.page_name || 'Twitter Title'}</h3>
              <p className='post-title'>@user_name</p>
            </div>
            <div className='description'>
              <p>Write something here...</p>
            </div>
          </div>
        </StyledPostTitle>
        <StyledPostContent>
          <StyledPostImage>
            <img src={MockPostImage} alt='' />
          </StyledPostImage>
          <StyledActions>
            <div>
              <ButtonComponent type='icon' theme='natural' iconElement={<Comment />} />
              <ButtonComponent type='icon' theme='natural' iconElement={<Heart />} />
              <ButtonComponent type='icon' theme='natural' iconElement={<Share />} />
              <ButtonComponent type='icon' theme='natural' iconElement={<Upload />} />
            </div>
            <p className='post-subtitle'>Promoted</p>
          </StyledActions>
        </StyledPostContent>
      </div>
      <StyledPostFooter>
        <div className='avatar'>
          <div></div>
        </div>
        <div>
          <div className='lines'>
            <StyledBlankLine $width={`70%`} />
            <StyledBlankLine $width={`50%`} />
            <StyledBlankLine $width={`100%`} />
            <StyledBlankLine $width={`55%`} />
          </div>
          <div className='icons'>
            <StyledBlankIcon />
            <StyledBlankIcon />
            <StyledBlankIcon />
            <StyledBlankIcon />
          </div>
        </div>
      </StyledPostFooter>
    </StyledContainer>
  )
}

export default TwitterPreviewComponent;