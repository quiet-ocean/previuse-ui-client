import React from 'react';
import { Button } from '@material-ui/core'
import { PlatformPostSerializerMaster } from '../../../../../swagger2Ts/interfaces';
import PostTitleComponent from '../../post-title/post-title.component';

import StyledContainer, {
  StyledActions,
  StyledPostFooterWrapper,
  StyledIconWrapper,
} from './post-layout-mobile.styles';
import PostContentComponent from '../../post-content/post-content.component'
import PostFooterComponent from '../../post-footer/post-footer.component'

import { ReactComponent as Like } from '../../../../../assets/images/thumbs-up.svg';
import { ReactComponent as Comment } from '../../../../../assets/images/comment-1.svg';
import { ReactComponent as Share } from '../../../../../assets/images/share-1.svg';


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
      <PostContentComponent
        headline={props.post.headline}
        description={props.post.description}
        callToAction={props.post.call_to_action}
      />
      <StyledPostFooterWrapper>
        <PostFooterComponent />
      </StyledPostFooterWrapper>
      <StyledActions>
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
      </StyledActions>
    </StyledContainer>
  );
}

export default PostLayoutMobileComponent;