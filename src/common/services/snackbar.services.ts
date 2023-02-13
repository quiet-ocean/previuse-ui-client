import { AnyAction, Dispatch, ActionCreator, bindActionCreators } from 'redux';
import { RootState } from '../reducers';
import { CloseSnackBarAction, OpenSnackBarAction } from '../state/snackbar/snackbar.actions';

export interface SnackbarActions {
  open: ActionCreator<void>;
  close: ActionCreator<void>;
}

interface IArgs {
  dispatch: Dispatch<AnyAction, RootState>;
  getState: () => RootState;
}

export default class SnackbarService {
  static instance: SnackbarService;
  actions: SnackbarActions;
  dispatch: Dispatch<AnyAction, RootState>;
  getState: () => RootState;

  constructor(args: IArgs) {

    if (SnackbarService.instance) {
      throw new Error('snackbar service is singleton');
    }

    this.dispatch = args.dispatch;
    this.getState = args.getState;

    this.actions = this._getActions();

    SnackbarService.instance = this;

    return this;
  }

  _getActions: () => SnackbarActions = () => {
    return {
      open: bindActionCreators(OpenSnackBarAction, this.dispatch),
      close: bindActionCreators(CloseSnackBarAction, this.dispatch)
    };
  }
}
