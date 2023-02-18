import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.lightBackgroundColor};
  font-size: ${({ theme }) => theme.sizes.fontSizeRegular};
  height: 100%;

  > div {
    height: 100%;
  }
`;

export const GlobalStyle = createGlobalStyle`
  #root {
    height: 100%;
  }

  .MuiCard-root {
    height: 100%;
    box-shadow: none !important;
    border: ${({ theme }) => `1px solid ${theme.colors.additionalTextColor2}`};
    border-radius: 12px !important;
    overflow: auto;
  }
`
