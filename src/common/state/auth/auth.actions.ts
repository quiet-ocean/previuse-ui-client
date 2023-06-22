import createAsyncAction from '../../../utils/createAsyncAction';
import HttpService from '../../services/http.service';
import EndPoints from '../../../swagger2Ts/endpoints'
import { UserCreation } from '../../../swagger2Ts/interfaces';

export enum AuthActionTypes {
  GET_LOGGED_IN_USER = '@@auth/GET_LOGGED_IN_USER',
  LIST_USERS = '@@auth/LIST_USERS'
}

export const GetLoggedInUserAction: () => Promise<UserCreation> = createAsyncAction(
  AuthActionTypes.GET_LOGGED_IN_USER,
  () => HttpService.fetch(EndPoints.auth_users_me_read)
);

export const ListUsersAction: () => Promise<UserCreation[]> = createAsyncAction(
  AuthActionTypes.LIST_USERS,
  () => HttpService.fetch(EndPoints.auth_users_list)
)
