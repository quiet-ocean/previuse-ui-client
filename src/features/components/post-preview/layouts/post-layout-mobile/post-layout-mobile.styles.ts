import { Button } from '@material-ui/core';
import styled from 'styled-components';

const StyledContainer = styled.div`
  height: 100%;
`;

export const StyledImage = styled.div`
  margin: 0 -32px;
  padding-top: 24px;
  height: 70%;

  img {
    height: 100%;
    width: 100%;
  }
`;

export const StyledFooter = styled.div`
  height: calc(30% - 50px);
`;

export const StyledDescription = styled.div`
  padding-top: 12px;
  font-size: 14px;
`;

export const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 24px);
  flex-direction: column;
`;

export const StyledMoreButton = styled(Button)`
  && {
    text-transform: capitalize;
    background-color: ${({ theme }) => theme.colors.secondaryBorderColor};
    border-radius: 50px;
    height: 32px;
    font-weight: normal;
  }
`;

export default StyledContainer;