import React from 'react';
import { KeyboardArrowRight, MoreHoriz } from '@material-ui/icons';

import MockPostImage from '../../mock/post-image.png';
import { PlatformPostSerializerMaster } from '../../../../../swagger2Ts/interfaces';
import ButtonComponent from '../../../button/button.component';
import PostTitleComponent from '../../post-title/post-title.component';

import { ReactComponent as Icons } from './icons.svg';
import { ReactComponent as Bookmark } from '../../../../../assets/images/bookmark.svg';
import { camelCaseToWords } from '../../../../../utils/general-utils';

import StyledContainer, {
  StyledImage,
  StyledHeader,
  StyledAction,
  StyledIcons,
  StyledDescription
} from './post-layout-instagram-1.styles';

export interface InstragramPreviewComponentProps {
  post: PlatformPostSerializerMaster;
}

const InstragramPreviewComponent: React.FC<InstragramPreviewComponentProps> = (props) => {
  return (
    <StyledContainer>
      <StyledHeader>Feed / Explore</StyledHeader>
      <PostTitleComponent
        title={props.post.page_name}
        logo={props.post.logo}
        action={<ButtonComponent type='icon' iconElement={<MoreHoriz />} />}
      />

      <StyledImage>
        <img src={MockPostImage} />
      </StyledImage>

      <StyledAction>
        <ButtonComponent text={props.post.call_to_action ? camelCaseToWords(props.post.call_to_action) : 'Learn More'} />
        <KeyboardArrowRight />
      </StyledAction>

      <StyledIcons>
        <div>
          <Icons />
        </div>

        <div><Bookmark /></div>
      </StyledIcons>

      <StyledDescription>{props.post.description || 'post description'}</StyledDescription>
    </StyledContainer>
  );
}

export default InstragramPreviewComponent;