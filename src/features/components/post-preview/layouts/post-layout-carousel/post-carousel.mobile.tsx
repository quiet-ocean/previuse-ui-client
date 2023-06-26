import React from 'react';
import Slider from 'react-slick'
import { Button } from '@material-ui/core'
import { PlatformPostSerializerMaster, MediaFiles } from '../../../../../swagger2Ts/interfaces';
import PostTitleComponent from '../../post-title/post-title.component';

import StyledContainer, {
  StyledActions,
  StyledPostFooterWrapper,
  StyledIconWrapper,
  StyledSickWrapper,
} from './post-carousel.mobile.styles';
import PostContentComponent from '../../post-content/post-content.component'
import PostFooterComponent from '../../post-footer/post-footer.component'

import { ReactComponent as Like } from '../../../../../assets/images/thumbs-up.svg';
import { ReactComponent as Comment } from '../../../../../assets/images/comment-1.svg';
import { ReactComponent as Share } from '../../../../../assets/images/share-1.svg';


export interface PostCarouselMobileComponentProps {
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


const PostCarouselMobileComponent: React.FC<PostCarouselMobileComponentProps> = (props) => {
  return (
    <StyledContainer>
      <PostTitleComponent
        title={props.post.page_name}
        logo={props.post.logo}
      />
      <Slider {...settings}>
        {props.media && props.media.map((media: MediaFiles, key: number) => (
          <StyledSickWrapper key={key}>
            <PostContentComponent
              headline={props.post.headline}
              description={props.post.description}
              callToAction={props.post.call_to_action}
              post={props.post}
              media={[media]}
              mobile={true}
            />
          </StyledSickWrapper>
        ))}
      </Slider>
      <StyledPostFooterWrapper>
        <PostFooterComponent />
      </StyledPostFooterWrapper>
      <StyledActions>
        <Button variant='text' startIcon={
          <StyledIconWrapper>
            <Like />
          </StyledIconWrapper>
        }>
          <div>Like</div>
        </Button>
        <Button variant='text' startIcon={
          <StyledIconWrapper>
            <Comment />
          </StyledIconWrapper>
        }>
          <div>Comment</div>
        </Button>
        <Button variant='text' startIcon={
          <StyledIconWrapper>
            <Share />
          </StyledIconWrapper>
        }>
          <div>Share</div>
        </Button>
      </StyledActions>
    </StyledContainer>
  );
}

export default PostCarouselMobileComponent;