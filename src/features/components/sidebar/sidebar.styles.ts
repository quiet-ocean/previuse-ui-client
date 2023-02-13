import styled from 'styled-components';
import { List } from '@material-ui/core';

export const StyledContainer = styled.div`
  height: ${({ theme }) => theme.sizes.fullHeight};
  width: 100px;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
`;

export const StyledList = styled(List)`
  height: ${({ theme }) => theme.sizes.fullHeight};
  padding: 0 !important;
  border-right: 1px solid ${({ theme }) => theme.colors.navigationBorder};

  a {
    text-decoration: none;
    outline: none !important;

    &.active li {
      background: ${({ theme }) => theme.colors.primaryBackgroundColor};
      color: ${({ theme }) => theme.colors.primaryWhite};
      svg {
        fill: ${({ theme }) => theme.colors.primaryWhite};
        g {
          fill: ${({ theme }) => theme.colors.primaryWhite};
        }
      }
      i {
        color: ${({ theme }) => theme.colors.primaryWhite};
      }
    }
  }

  li {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.tertiaryTextColor};
    font-size: 12px;
    font-weight: 600;
    height: 100px;

    > div {
      min-width: 0;
    }

    svg {
      fill: ${({ theme }) => theme.colors.svgColor};
      margin-bottom: 10px;
    }
    i {
      color: ${({ theme }) => theme.colors.svgColor};
      margin: 16px 0;
      font-size: 50px;
      font-weight: 100;
    }
  }
`;
