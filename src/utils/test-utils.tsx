import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { I18nextProvider } from 'react-i18next';
import { myTheme } from '../assets/themes/default';
import i18n from '../i18nForTest';

export default class TestUtils {
  component: React.ReactElement;

  constructor(component: React.ReactElement) {
    this.component = component;
  }

  public getWrapper(): JSX.Element {
    if (this.component) {
      return (
        <ThemeProvider theme={myTheme}>
          <I18nextProvider i18n={i18n}>{this.component}</I18nextProvider>
        </ThemeProvider>
      );
    }
    throw Error('[test-utils]: undefined component supplied');
  }
}
