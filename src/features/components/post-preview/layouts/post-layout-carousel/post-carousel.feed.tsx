import React from 'react';
import Slider from 'react-slick'

import { MediaFiles, PlatformPostSerializerMaster } from '../../../../../swagger2Ts/interfaces';
import PostContentComponent from '../../post-content/post-content.component';
import PostFooterComponent from '../../post-footer/post-footer.component';
import PostTitleComponent from '../../post-title/post-title.component';
import StyledContainer from './post-carousel.feed.styles';

export interface PostCarouselFeedProps {
  post: PlatformPostSerializerMaster;
  media: MediaFiles[];
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true
};

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
            <div style={{ marginRight: 12, width: 280 }} key={key}>
              <PostContentComponent
                headline={props.post.headline}
                description={props.post.description}
                callToAction={props.post.call_to_action}
                post={props.post}
                media={[media]}
              />
            </div>
          ))}
        </Slider>
      </div>

      <PostFooterComponent />
    </StyledContainer>
  )
}

export default PostCarouselFeed;