import React from 'react';
import { PostLayout } from '../../../common/models';

import { PlatformPostSerializerMaster, Spread } from '../../../swagger2Ts/interfaces';

import PostLayoutCarouselComponent from './layouts/post-layout-carousel/post-layout-carousel.component';
import InstragramPreviewComponent from './layouts/post-layout-instagram-1/post-layout-instagram-1.component';
import PostLayoutMainComponent from './layouts/post-layout-main/post-layout-main.component';
import PostLayoutMobileComponent from './layouts/post-layout-mobile/post-layout-mobile.component';
import TiktokPreviewComponent from './layouts/post-layout-tiktok/post-layout-tiktok.component';
import PostLayoutVideoComponent from './layouts/post-layout-video/post-layout-video.component';
import StyledContainer from './post-preview.styles';

export interface PostPreviewComponentProps {
  post: PlatformPostSerializerMaster;
  spreadings: Spread[];
  selectedSpread: Spread;
}

const layoutBySpread: Record<PostLayout, any> = {
  [PostLayout.facebook1]: PostLayoutMainComponent,
  [PostLayout.facebook2]: PostLayoutCarouselComponent,
  [PostLayout.facebook3]: PostLayoutVideoComponent,
  [PostLayout.facebook4]: PostLayoutMobileComponent,
  [PostLayout.tiktok1]: TiktokPreviewComponent,
  [PostLayout.instagram1]: InstragramPreviewComponent,
}

const PostPreviewComponent: React.FC<PostPreviewComponentProps> = (props) => {
  const Component = layoutBySpread[props.selectedSpread.spread as PostLayout];

  if (!Component) return null;
  
  return (
    <StyledContainer>
      <Component post={props.post} />
    </StyledContainer>
  );
}

export default PostPreviewComponent;