import authInitialState, { AuthState } from './auth.state';
import { AuthActionTypes } from './auth.actions';
import { SUCCESS_SUFFIX } from '../../constants';
import { AnyAction, Reducer } from 'redux';

const authReducer: Reducer<AuthState> = (
  state = authInitialState,
  action: AnyAction
) => {
  switch (action.type) {
    case `${AuthActionTypes.GET_LOGGED_IN_USER}${SUCCESS_SUFFIX}`:
      return { ...state, user: action.payload };
    case `${AuthActionTypes.LIST_USERS}${SUCCESS_SUFFIX}`:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default authReducer;
