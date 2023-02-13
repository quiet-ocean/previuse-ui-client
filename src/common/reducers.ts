import { combineReducers } from 'redux';
import auth from './state/auth/auth.reducer';
import dialog from './state/dialog/dialog.reducer';
import general from './state/general/general.reducer';
import drawer from './state/drawer/drawer.reducer';
import snackbar from './state/snackbar/snackbar.reducer';
import campaign from './state/campaign/campaign.reducer';

import { AuthState } from './state/auth/auth.state';
import { DialogState } from './state/dialog/dialog.state';
import { GeneralState } from './state/general/general.state';
import { DrawerState } from './state/drawer/drawer.state';
import { SnackbarState } from './state/snackbar/snackbar.state';
import { CampaignState } from './state/campaign/campaign.state';

export interface AppState {
  auth: AuthState;
  campaign: CampaignState;
}

export interface ViewState {
  dialog: DialogState;
  general: GeneralState;
  drawer: DrawerState;
  snackbar: SnackbarState;
}

export interface RootState {
  app: AppState;
  view: ViewState;
}

const rootReducer = combineReducers<RootState>({
  app: combineReducers({
    auth,
    campaign
  }),
  view: combineReducers({
    dialog,
    general,
    drawer,
    snackbar
  })
});

export default rootReducer;
