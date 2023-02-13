import { AnyAction, Dispatch, ActionCreator, bindActionCreators } from 'redux';
import { RootState } from '../reducers';
import { CloseDrawerAction, OpenDrawerAction } from '../state/drawer/drawer.actions';


export interface IDrawerActions {
  open: () => void;
  close: ActionCreator<void>;
}

interface IArgs {
  dispatch: Dispatch<AnyAction, RootState>;
  getState: () => RootState;
}

export default class DrawerService {
  static instance: DrawerService;
  actions: IDrawerActions;
  dispatch: Dispatch<AnyAction, RootState>;
  getState: () => RootState;

  constructor(args: IArgs) {

    if (DrawerService.instance) {
      throw new Error('drawer service is singleton');
    }

    this.dispatch = args.dispatch;
    this.getState = args.getState;

    this.actions = this._getActions();

    DrawerService.instance = this;

    return this;
  }

  _getActions: () => IDrawerActions = () => {
    return {
      open: bindActionCreators(OpenDrawerAction, this.dispatch),
      close: bindActionCreators(CloseDrawerAction, this.dispatch)
    };
  }
}
