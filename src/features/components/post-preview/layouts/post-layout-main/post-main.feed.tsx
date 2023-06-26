import React from 'react';

import { MediaFiles, PlatformPostSerializerMaster } from '../../../../../swagger2Ts/interfaces';
import PostContentComponent from '../../post-content/post-content.component';
import PostFooterComponent from '../../post-footer/post-footer.component';
import PostTitleComponent from '../../post-title/post-title.component';
import StyledContainer from './post-main.feed.styles';

export interface PostLayoutMainFeedProps {
  post: PlatformPostSerializerMaster;
  media: MediaFiles[];
}

const PostMainFeed: React.FC<PostLayoutMainFeedProps> = (props) => {

  return (
    <StyledContainer>
      <div>
        <PostTitleComponent
          title={props.post.page_name}
          logo={props.post.logo}
        />
        <PostContentComponent
          headline={props.post.headline}
          description={props.post.description}
          callToAction={props.post.call_to_action}
          post={props.post}
          media={props.media}
        />
      </div>

      <PostFooterComponent />
    </StyledContainer>
  )
}

export default PostMainFeed;