import { AnyAction, Dispatch, ActionCreator, bindActionCreators } from 'redux';
import { RootState } from '../reducers';
import {
  OpenDialogAction,
  CloseDialogAction,
  DialogProps
} from '../state/dialog/dialog.actions';

export interface IDialogActions {
  open: (props: DialogProps) => void;
  close: ActionCreator<void>;
}

interface IArgs {
  dispatch: Dispatch<AnyAction, RootState>;
  getState: () => RootState;
}

export default class DialogService {
  static instance: DialogService;
  actions: IDialogActions;
  dispatch: Dispatch<AnyAction, RootState>;
  getState: () => RootState;

  constructor(args: IArgs) {

    if (DialogService.instance) {
      throw new Error('dialog service is singleton');
    }

    this.dispatch = args.dispatch;
    this.getState = args.getState;

    this.actions = this._getActions();

    DialogService.instance = this;

    return this;
  }

  _getActions: () => IDialogActions = () => {
    return {
      open: bindActionCreators(OpenDialogAction, this.dispatch),
      close: bindActionCreators(CloseDialogAction, this.dispatch)
    };
  }
}
