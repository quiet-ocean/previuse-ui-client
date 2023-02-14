import React from 'react';
import LottieComponent from '../lottie/lottie.component';

import StyledContainer, {
  StyledTitle,
  StyledInstructions,
  StyledIcon,
  StyledBox
} from './empty-state.styles';

export interface EmptyStateComponentProps {
  title: string;
  instructions?: string;
  icon?: JSX.Element;
  action?: () => void;
}

const EmptyStateComponent: React.FC<EmptyStateComponentProps> = (props) => {
  return (
    <StyledContainer>
      <div>
        <StyledIcon><LottieComponent /></StyledIcon>
        <StyledBox>
          <StyledTitle>{props.title}</StyledTitle>
          {props.instructions && (
            <StyledInstructions
              Action={props.action}
              onClick={props.action}
            >
              <span>{props.instructions}</span>
            </StyledInstructions>
          )}
        </StyledBox>
      </div>
    </StyledContainer>
  );
}

export default EmptyStateComponent;