import React from 'react';
import { connect } from 'react-redux';

import { MediaFiles, PlatformPostSerializerMaster } from '../../../../../swagger2Ts/interfaces';
import PostContentComponent from '../../post-content/post-content.component';
import PostFooterComponent from '../../post-footer/post-footer.component';
import PostTitleComponent from '../../post-title/post-title.component';
import StyledContainer from './post-layout-main.styles';
import { FbPostStatus } from '../../../../../common/state/post/post.actions';
import { RootState } from '../../../../../common/reducers';

export interface PostLayoutMainComponentProps {
  post: PlatformPostSerializerMaster;
  media: MediaFiles[];
}

interface StateProps {
  fbPostStatus: FbPostStatus
}
const PostLayoutMainComponent: React.FC<StateProps & PostLayoutMainComponentProps> = (props) => {

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

export default connect((state: RootState) => ({
  fbPostStatus: state.app.post.fbPostStatus
}))(PostLayoutMainComponent);