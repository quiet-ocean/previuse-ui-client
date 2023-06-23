import { Box } from '@material-ui/core';
import styled from 'styled-components';

const StyledContainer = styled.div`
  padding: 24px;

  .external-link-button {
    width: 107px;
    height: 25px;
    background-color: ${({ theme }) => theme.colors.additionalTextColor2} !important;
    border-radius: 5px;
    color: #fff;
  }
`;

export const StyledBox = styled(Box)<{ $hide?: boolean }>`
  display: ${props => props.$hide ? 'none' : 'flex'};
  flex-direction: column;
  
  &:not(:last-child) {
    padding-bottom: 12px;
  }

  label {
    padding-bottom: 8px;
    color: ${({ theme }) => theme.colors.additionalTextColor4};
    font-size: 14px;
  }
`;

export const StyledAudienceInidication = styled.div`
  .audience-count {
    font-size: 18px;
    margin-bottom: 24px;
  }
`;

export const StyledDailyResult = styled.div`
  display: flex;

  > div {
    padding: 24px 24px 0 0;    
  }

  ${StyledBox} {
    label {
      color: ${({ theme }) => theme.colors.additionalTextColor2};
      font-size: 16px;
    }

    > div {
      font-size: 18px;
    }
  }
`;

export const StyledAudience = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    width: 73px;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.errorColor};
    border-radius: 10px;
    opacity: 0.2;

    margin-right: 16px;
    
    &.selected {
      background-color: ${({ theme }) => theme.colors.pending};
      opacity: 1;
    }
  }
`;

export default StyledContainer;