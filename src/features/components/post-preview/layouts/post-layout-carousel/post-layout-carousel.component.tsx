import React from 'react';

import { MediaFiles, PlatformPostSerializerMaster } from '../../../../../swagger2Ts/interfaces';
import PostContentComponent from '../../post-content/post-content.component';
import PostFooterComponent from '../../post-footer/post-footer.component';
import PostTitleComponent from '../../post-title/post-title.component';
import StyledContainer from './post-layout-carousel.styles';
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

export default PostLayoutCarouselComponent;