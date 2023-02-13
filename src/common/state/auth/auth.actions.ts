import createAsyncAction from '../../../utils/createAsyncAction';
import HttpService from '../../services/http.service';
import EndPoints from '../../../swagger2Ts/endpoints'
import { UserCreation } from '../../../swagger2Ts/interfaces';

export enum AuthActionTypes {
  GET_LOGGED_IN_USER = '@@auth/GET_LOGGED_IN_USER'
}

export const GetLoggedInUserAction: () => Promise<UserCreation> = createAsyncAction(
  AuthActionTypes.GET_LOGGED_IN_USER,
  () => HttpService.fetch(EndPoints.auth_users_me_read)
);

