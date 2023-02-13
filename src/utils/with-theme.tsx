import React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultGsTheme from '../assets/themes/theme.default';

export interface IProps {
  children: JSX.Element;
}

const WithThemeHOC: React.FC<IProps> = props => {
  return <ThemeProvider theme={defaultGsTheme}>{props.children}</ThemeProvider>;
};

export default WithThemeHOC;
