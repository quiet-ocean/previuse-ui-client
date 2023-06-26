import React from 'react';

import { MediaFiles, PlatformPostSerializerMaster } from '../../../../../swagger2Ts/interfaces';
import { PostAlignment } from '../../../../../common/models';
import PostCarouselFeed from './post-carousel.feed';
import PostCarouselRightComponent from './post-carousel.right';
import PostCarouselMobileComponent from './post-carousel.mobile';

export interface PostLayoutCarouselComponentProps {
  post: PlatformPostSerializerMaster;
  media: MediaFiles[];
  alignment: PostAlignment;
}

const PostLayoutCarouselComponent: React.FC<PostLayoutCarouselComponentProps> = (props) => {

  return (
    <div>
      {props.alignment === PostAlignment.feed ? (
        <PostCarouselFeed post={props.post} media={props.media} />
      ) : props.alignment === PostAlignment.right ? (
        <PostCarouselRightComponent post={props.post} media={props.media} />
      ) : (
        <PostCarouselMobileComponent post={props.post} media={props.media} />
      )}
    </div>
  )
}

export default PostLayoutCarouselComponent;