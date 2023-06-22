import { PlayArrow } from '@material-ui/icons';
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { CallToAction } from '../../../../swagger2Ts/enums';
import { camelCaseToWords } from '../../../../utils/general-utils';

import ButtonComponent from '../../button/button.component';
import MockPostImage from '../mock/post-image.png';
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

export interface PostContentComponentProps {
  video?: boolean;
  carousel?: boolean;
  headline?: string;
  description?: string;
  callToAction?: CallToAction;
}

const PostContentComponent: React.FC<PostContentComponentProps> = (props) => {
  const image = (
    <StyledPostImage>
      <img src={MockPostImage} />
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
      <StyledImageDescription className='img-description'>Write something here ...</StyledImageDescription>
      <StyledWrapper>
        {props.carousel ? (
          <Carousel>
            {image}
            <StyledPostImage><img src={MockPostImage2} /></StyledPostImage>
          </Carousel>
        ) : (
          image
        )}

        <div className='bottom'>
          <StyledHeadline>{props.headline || 'Headline'}</StyledHeadline>

          <StyledPostDescription>{props.description || 'Description'}</StyledPostDescription>

          <div className="flex">
            <StyledCaption>Caption</StyledCaption>
            <StyledLikeButton>{props.callToAction ? camelCaseToWords(props.callToAction) : 'Learn more'}</StyledLikeButton>
          </div>
        </div>
      </StyledWrapper>
    </StyledContainer>
  );
}

export default PostContentComponent;