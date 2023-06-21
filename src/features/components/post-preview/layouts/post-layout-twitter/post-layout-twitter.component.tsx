import React from 'react';

import { PlatformPostSerializerMaster } from '../../../../../swagger2Ts/interfaces';
import PostContentComponent from '../../post-content/post-content.component';
import PostFooterComponent from '../../post-footer/post-footer.component';
import PostTitleComponent from '../../post-title/post-title.component';
import StyledContainer from './post-layout-twitter.styles';

export interface TwitterPreviewComponentProps {
  post: PlatformPostSerializerMaster;
}

const TwitterPreviewComponent: React.FC<TwitterPreviewComponentProps> = (props) => {
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
        />
      </div>

      <PostFooterComponent />
    </StyledContainer>
  )
}

export default TwitterPreviewComponent;