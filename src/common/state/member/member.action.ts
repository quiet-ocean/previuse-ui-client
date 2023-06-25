import { UserUpdate } from "../../../swagger2Ts/interfaces";
import createAsyncAction from "../../../utils/createAsyncAction";
import httpService from "../../services/http.service";

export enum MemberActionTypes {
  SHOW_USER = '@@member/SHOW_USER',
}
export const ShowUserAction: () => Promise<UserUpdate> = createAsyncAction(
  MemberActionTypes.SHOW_USER,
  () => httpService.fetch({
    method: 'get',
    url: '/members/show_user'
  })
)
