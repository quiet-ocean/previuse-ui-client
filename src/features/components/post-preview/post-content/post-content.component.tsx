import { PlayArrow } from '@material-ui/icons';
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { CallToAction } from '../../../../swagger2Ts/enums';
import { camelCaseToWords } from '../../../../utils/general-utils';

import ButtonComponent from '../../button/button.component';
import MockPostImage3 from '../mock/post-image3.png';
import MockPostImage2 from '../mock/post-image2.png';

import StyledContainer, {
  StyledCaption,
  StyledHeadline,
  StyledImageDescription,
  StyledLikeButton,
  StyledPostDescription,
  StyledPostImage,
  StyledWrapper
} from './post-content.styles';
import { MediaFiles, PlatformPostSerializerMaster } from '../../../../swagger2Ts/interfaces';

export interface PostContentComponentProps {
  video?: boolean;
  carousel?: boolean;
  headline?: string;
  description?: string;
  callToAction?: CallToAction;
  media?: MediaFiles[];
  post?: PlatformPostSerializerMaster;
  mobile?: boolean;
}

const PostContentComponent: React.FC<PostContentComponentProps> = (props) => {
  const image = (
    <StyledPostImage>
      <img src={props.media && props.media.length > 0 && props?.media[0].file_in || MockPostImage3} />
      {props.video && (
        <ButtonComponent
          type='icon'
          iconElement={<PlayArrow />}
          className='video-button'
        />
      )}
    </StyledPostImage>
  )

  return (
    <StyledContainer>
      <StyledImageDescription className='img-description'>{props.post?.primary_text}</StyledImageDescription>
      <StyledWrapper>
        {props.carousel ? (
          <Carousel>
            {image}
            <StyledPostImage>
              <img src={props.media && props.media.length > 0 && props?.media[0].file_in || MockPostImage2} />
            </StyledPostImage>
          </Carousel>
        ) : (
          image
        )}

        <div className='bottom'>
          <StyledHeadline>{props.media && props.media.length > 0 && props.media[0].headline}</StyledHeadline>

          <StyledPostDescription>{props.media && props.media.length > 0 && props.media[0].description}</StyledPostDescription>

          <div className="flex">
            <StyledCaption $show={!props.mobile}>{props.media && props.media.length > 0 && props.media[0].caption}</StyledCaption>
            <StyledLikeButton>{props.callToAction ? camelCaseToWords(props.callToAction) : 'Learn more'}</StyledLikeButton>
          </div>
        </div>
      </StyledWrapper>
    </StyledContainer>
  );
}

export default PostContentComponent;