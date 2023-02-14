import React from 'react';
import Lottie from 'react-lottie-player';

import StyledContainer from './lottie.styles';
import animationData from './mock/astronaut.json';

export interface LottieComponentProps {

}

const LottieComponent: React.FC<LottieComponentProps> = (props) => {
  return (
    <StyledContainer>
      <Lottie
        animationData={animationData}
        play
        loop
      />
    </StyledContainer>
  );
}

export default LottieComponent;