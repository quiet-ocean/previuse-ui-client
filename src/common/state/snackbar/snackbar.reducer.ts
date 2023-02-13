import { AnyAction, Reducer } from 'redux';
import snackbarInitialState, { SnackbarState } from './snackbar.state';
import { SnackbarActionTypes } from './snackbar.actions';


const snackbarReducer: Reducer<SnackbarState> = (
  state: SnackbarState = snackbarInitialState,
  action: AnyAction
) => {
  switch (action.type) {
    case SnackbarActionTypes.OPEN_SNACKBAR:
      return { ...state, open: true, content: action.payload.content, type: action.payload.type };
    
    case SnackbarActionTypes.CLOSE_SNACKBAR:
      return { ...state, open: false };

    default:
      return state;
  }
};

export default snackbarReducer;