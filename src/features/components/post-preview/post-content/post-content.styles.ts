import { Button } from '@material-ui/core';
import styled from 'styled-components';

const StyledContainer = styled.div`
  [class*='Carousel-buttonHidden'] {
    opacity: 1;
  }
`;

export const StyledImageDescription = styled.div`
  padding: 12px 0;
  font-size: 14px;
`;

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  border: ${({ theme }) => `1px solid ${theme.colors.additionalTextColor2}`};
  border-radius: 10px;

  .bottom {
    padding: 12px;

    > div {
      padding-top: 12px;
    }
  }

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledPostImage = styled.div`
  position: relative;

  height: 200px;
  img {
    width: 100%;
    height: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  .video-button {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    background-color: ${({ theme }) => theme.colors.dark}!important;
    opacity: 50%;
    color: #fff;
  }
`;

export const StyledHeadline = styled.div`
  font-size: 18px;
`;

export const StyledPostDescription = styled.div`
`;

export const StyledCaption = styled.div<{ $show: boolean }>`
  color: ${({ theme }) => theme.colors.additionalTextColor4};
  font-size: 14px;
  visibility: ${props => props.$show ? "visible" : "hidden"}
`;

export const StyledLikeButton = styled(Button)`
  &&& {
    background-color: ${({ theme }) => theme.colors.secondaryBorderColor};
    text-transform: capitalize;
    font-weight: normal;
    font-size: 14px;
    height: 32px;
  }
`;

export default StyledContainer;