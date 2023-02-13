import React from 'react';
import StyledContainer, { StyledIcons, StyledMetrics } from './post-footer.styles';

export interface PostFooterComponentProps {

}

const PostFooterComponent: React.FC<PostFooterComponentProps> = (props) => {
  return (
    <StyledContainer>
      <StyledIcons>🥰 💜 🤎 💥</StyledIcons>
      <StyledMetrics>
        <div>1.4k Comments</div>
        <div>3000 Shares</div>
      </StyledMetrics>
    </StyledContainer>
  );
}

export default PostFooterComponent;