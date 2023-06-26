import React from 'react';
import Slider from 'react-slick'

import { MediaFiles, PlatformPostSerializerMaster } from '../../../../../swagger2Ts/interfaces';
import PostContentComponent from '../../post-content/post-content.component';
import PostFooterComponent from '../../post-footer/post-footer.component';
import PostTitleComponent from '../../post-title/post-title.component';
import StyledContainer, { StyledSickWrapper } from './post-carousel.feed.styles';
import { settings } from './post-layout-carousel.component';

export interface PostCarouselFeedProps {
  post: PlatformPostSerializerMaster;
  media: MediaFiles[];
}

const PostCarouselFeed: React.FC<PostCarouselFeedProps> = (props) => {

  return (
    <StyledContainer>
      <div>
        <PostTitleComponent
          title={props.post.page_name}
          logo={props.post.logo}
        />
        <Slider {...settings}>
          {props.media && props.media.length > 0 && props.media.map((media: MediaFiles, key: number) => (
            <StyledSickWrapper key={key}>
              <PostContentComponent
                headline={props.post.headline}
                description={props.post.description}
                callToAction={props.post.call_to_action}
                post={props.post}
                media={[media]}
              />
            </StyledSickWrapper>
          ))}
        </Slider>
      </div>

      <PostFooterComponent />
    </StyledContainer>
  )
}

export default PostCarouselFeed;