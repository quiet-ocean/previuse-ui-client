import React from 'react';

import { MediaFiles, PlatformPostSerializerMaster } from '../../../../../swagger2Ts/interfaces';
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
}

export default PostLayoutMainComponent;