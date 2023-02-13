import React from 'react';
import { createStore, Store } from 'redux';
import rootReducer from '../common/reducers';
import ServicesContext from '../common/context';
import DialogService from '../common/services/dialog.service';
import { RootState } from '../common/models';

export interface WithServicesHOC {
  children: JSX.Element;
}

const store: Store<RootState> = createStore(rootReducer);

const services = {
  dialog: new DialogService(store)
};

const WithServicesHOC: React.FC<WithServicesHOC> = props => {
  return (
    <ServicesContext.Provider value={services}>
      {props.children}
    </ServicesContext.Provider>
  );
};

export default WithServicesHOC;
