import React from 'react';
import Slider from 'react-slick'
import { MediaFiles, PlatformPostSerializerMaster } from '../../../../../swagger2Ts/interfaces';
import StyledContainer, {
  StyledPostContent,
  StyledPostBody,
  StyledImageWrapper,
  StyledFooter,
  StyledSickWrapper,
} from './post-carousel.right.styles';

import MockImage3 from '../../mock/post-image3.png';
import ButtonComponent from '../../../button/button.component';
import { settings } from './post-layout-carousel.component';

export interface PostCarouselRightComponentProps {
  post: PlatformPostSerializerMaster;
  media: MediaFiles[];
}

const PostCarouselRightComponent: React.FC<PostCarouselRightComponentProps> = (props) => {
  return (
    <StyledContainer>
      <h3 className='post-title'>Sponsored</h3>
      <Slider {...settings}>
        {props.media && props.media.map((media: MediaFiles, key: number) => (
          <StyledSickWrapper key={key}>
            <StyledPostContent>
              <StyledImageWrapper>
                <img src={props.media && media.file_in || MockImage3} alt='' />
              </StyledImageWrapper>
              <StyledPostBody>
                <h3 className='post-title'>{props.post.page_name}</h3>
                <p className='post-subtitle'>{props.media && media.caption}</p>
              </StyledPostBody>
            </StyledPostContent>
          </StyledSickWrapper>
        ))}
      </Slider>
      <StyledFooter>
        <ButtonComponent buttonType='button' text={`learn more`} theme='natural' />
      </StyledFooter>
    </StyledContainer>
  );
}

export default PostCarouselRightComponent;