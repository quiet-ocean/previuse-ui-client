import React from 'react';
import { Container } from './app.styles';
import { GlobalStyle } from './app.styles';

const App: React.FC<any> = ({ children }) => (
  <Container>
    <GlobalStyle />
    {children}
  </Container>
);

export default App;
