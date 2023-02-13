import { AnyAction } from 'redux';
import { SnackBarType } from '../../models';

export enum SnackbarActionTypes {
  OPEN_SNACKBAR = '@@snackbar/OPEN_SNACKBAR',
  CLOSE_SNACKBAR = '@@snackbar/CLOSE_SNACKBAR',
}

export interface SnackBarArgs {
  content: Element | string;
  type: SnackBarType;
}

export const OpenSnackBarAction = (args: SnackBarArgs): AnyAction => ({
  type: SnackbarActionTypes.OPEN_SNACKBAR,
  payload: args
});

export const CloseSnackBarAction = (): AnyAction => ({
  type: SnackbarActionTypes.CLOSE_SNACKBAR
});
