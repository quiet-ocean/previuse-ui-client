import React from 'react';
import { Button } from '@material-ui/core'
import { MoreHoriz } from '@material-ui/icons';

import MockPostImage from '../../mock/post-image3.png';
import { MediaFiles, PlatformPostSerializerMaster } from '../../../../../swagger2Ts/interfaces';
import ButtonComponent from '../../../button/button.component';
import PostTitleComponent from '../../post-title/post-title.component';

import { ReactComponent as Like } from '../../../../../assets/images/thumbs-up.svg';
import { ReactComponent as Comment } from '../../../../../assets/images/comment-1.svg';
import { ReactComponent as Share } from '../../../../../assets/images/share-1.svg';

import StyledContainer, {
  StyledImage,
  StyledIcons,
  StyledPostContent,
  StyledPostBody,
  StyledTitle,
  StyledIconWrapper,
} from './post-layout-linkedin-1.styles';

export interface LinkedInPreviewComponentProps {
  post: PlatformPostSerializerMaster;
  media: MediaFiles[];
}

const LinkedInPreviewComponent: React.FC<LinkedInPreviewComponentProps> = (props) => {
  return (
    <StyledContainer>
      <PostTitleComponent
        title={props.post.page_name}
        logo={props.post.logo}
        action={<ButtonComponent type='icon' iconElement={<MoreHoriz />} />}
      />
      <StyledPostContent>
        <p className='post-subtitle'>{props.media && props.media[0]?.description}</p>
        <StyledImage>
          <img src={props.media && props.media[0]?.file_in || MockPostImage} />
        </StyledImage>

        <StyledPostBody>
          <StyledTitle>
            <h3 className='post-title'>{props.media && props.media[0]?.headline}</h3>
            <div>
              <ButtonComponent text={<p className='post-subtitle'>Request Demo</p>} />
            </div>
          </StyledTitle>
          <div>
            <p className='post-subtitle'>{props.media && props.media[0]?.caption}</p>
          </div>
        </StyledPostBody>
      </StyledPostContent>

      <StyledIcons>
        <Button variant='text' startIcon={
          <StyledIconWrapper>
            <Like />
          </StyledIconWrapper>
        }>
          <div>Like</div>
        </Button>
        <Button variant='text' startIcon={
          <StyledIconWrapper>
            <Comment />
          </StyledIconWrapper>
        }>
          <div>Comment</div>
        </Button>
        <Button variant='text' startIcon={
          <StyledIconWrapper>
            <Share />
          </StyledIconWrapper>
        }>
          <div>Share</div>
        </Button>
      </StyledIcons>
    </StyledContainer>
  );
}

export default LinkedInPreviewComponent;