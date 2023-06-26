import React from 'react';

import { MediaFiles, PlatformPostSerializerMaster } from '../../../../../swagger2Ts/interfaces';
import PostContentComponent from '../../post-content/post-content.component';
import PostFooterComponent from '../../post-footer/post-footer.component';
import PostTitleComponent from '../../post-title/post-title.component';
import StyledContainer from './post-layout-main.styles';
import { PostAlignment } from '../../../../../common/models';
import PostMainFeed from './post-main.feed';
import PostMainRightComponent from './post-main.right';
import PostMainMobileComponent from './post-main.mobile';

export interface PostLayoutMainComponentProps {
  post: PlatformPostSerializerMaster;
  media: MediaFiles[];
  alignment: PostAlignment;
}

const PostLayoutMainComponent: React.FC<PostLayoutMainComponentProps> = (props) => {

  return (
    <div>
      {props.alignment === PostAlignment.feed ? (
        <PostMainFeed post={props.post} media={props.media} />
      ) : props.alignment === PostAlignment.right ? (
        <PostMainRightComponent post={props.post} media={props.media} />
      ) : (
        <PostMainMobileComponent post={props.post} media={props.media} />
      )}
    </div>
  )
  // return (
  //   <StyledContainer>
  //     <div>
  //       <PostTitleComponent
  //         title={props.post.page_name}
  //         logo={props.post.logo}
  //       />
  //       <PostContentComponent
  //         headline={props.post.headline}
  //         description={props.post.description}
  //         callToAction={props.post.call_to_action}
  //         post={props.post}
  //         media={props.media}
  //       />
  //     </div>

  //     <PostFooterComponent />
  //   </StyledContainer>
  // )
}

export default PostLayoutMainComponent;