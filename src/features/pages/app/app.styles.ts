import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primaryBackgroundColor};
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
`
