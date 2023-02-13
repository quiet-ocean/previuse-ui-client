import { Button } from '@material-ui/core';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }

  .MuiAvatar-root {
    margin-right: 12px;
    height: 50px;
    width: 50px;
  }
`;

export const StyledPageTitle = styled.div`
  font-size: 18px;
  line-height: 20px;
`;

export const StyledSubTitle = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.additionalTextColor4};
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