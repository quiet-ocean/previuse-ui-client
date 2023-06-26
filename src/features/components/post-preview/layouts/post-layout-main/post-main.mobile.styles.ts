import { Button } from '@material-ui/core';
import styled from 'styled-components';

const StyledContainer = styled.div`
  height: 100%;

  .img-description {
    visibility: hidden;
  }
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

export const StyledActions = styled.div`
  margin: 0 -24px;
  border-top: 1px solid #E0E0E0;
  padding: 12px 24px 0px 24px;
  height: 42px;

  display: flex;
  justify-content: space-between;

  button.MuiButton-root {
    > span {
      text-transform: capitalize;
      font-weight: 400;
      font-family: Rubik;
      font-size: 13px;
    }
  }
`
export const StyledPostFooterWrapper = styled.div`
  padding: 16px 0px;
`

export const StyledIconWrapper = styled.div`
  width: 18px;

  svg {
    width: 100%;
    height: 100%;
  }
`

export default StyledContainer;