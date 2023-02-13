import { AnyAction, Dispatch, ActionCreator, bindActionCreators } from 'redux';
import {
  StartLoaderAction,
  StopLoaderAction
} from '../state/general/general.actions';
import { RootState } from '../reducers';

export interface ILoadingActions {
  start: ActionCreator<void>;
  stop: ActionCreator<void>;
}

interface IArgs {
  dispatch: Dispatch<AnyAction, RootState>;
  getState: () => RootState;
}

export default class LoadingService {
  static instance: LoadingService;
  actions: ILoadingActions;
  dispatch: Dispatch<AnyAction, RootState>;
  getState: () => RootState;

  constructor(args: IArgs) {

    if (LoadingService.instance) {
      throw new Error('dialog service is singleton');
    }

    this.dispatch = args.dispatch;
    this.getState = args.getState;

    this.actions = this._getActions();

    LoadingService.instance = this;

    return this;
  }

  _getActions: () => ILoadingActions = () => {
    return {
      start: bindActionCreators(StartLoaderAction, this.dispatch),
      stop: bindActionCreators(StopLoaderAction, this.dispatch)
    };
  }
}
