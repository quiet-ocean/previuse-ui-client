import React from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { Store, AnyAction } from 'redux';

import i18n from '../i18n';
import { ROUTES } from './constants';
import myTheme from '../assets/themes/theme.default';
import { ServicesContext } from '../common/contexts';

import HomePage from '../features/pages/home/home.page';

import DefaultLayout from '../features/pages/default-layout/default-layout.page';
import App from '../features/pages/app/app.page';
import PageNotFound from '../features/pages/not-found/not-found.page';

import { RootState } from './reducers';
import { IServices } from './services/initiate';

interface RootProps {
  store: Store<RootState, AnyAction>;
  services: IServices;
}

const Root: React.FC<RootProps> = ({ store, services }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <ThemeProvider theme={myTheme}>
          <ServicesContext.Provider value={services}>
            <Router>
              <App>
                <Switch>
                  <DefaultLayout
                    path={ROUTES.home}
                    component={ HomePage }
                  />

                  {/* Keep at bottom */}
                  <DefaultLayout path="*" component={PageNotFound} />
                </Switch>
              </App>
            </Router>
          </ServicesContext.Provider>
        </ThemeProvider>
      </Provider>
    </I18nextProvider>
  );
};

export default Root;
