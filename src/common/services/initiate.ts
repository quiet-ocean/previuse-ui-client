import { Store } from 'redux';
import DialogService from './dialog.service';
import DrawerService from './drawer.service';
import LoadingService from './loading.service';
import SnackbarService from './snackbar.services';

export interface IServices {
  dialog: DialogService;
  loading: LoadingService;
  snackbar: SnackbarService;
  drawer: DrawerService;
}

const initiateServices: (arg0: Store) => IServices = store => ({
  dialog: new DialogService(store),
  loading: new LoadingService(store),
  snackbar: new SnackbarService(store),
  drawer: new DrawerService(store),
});

export default initiateServices;
