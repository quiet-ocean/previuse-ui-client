import createAsyncAction from '../../../utils/createAsyncAction';
import EndPoints from '../../../swagger2Ts/endpoints';
import httpService from '../../services/http.service';
import { PlatformPostSerializerMaster, Spread } from '../../../swagger2Ts/interfaces';
import { Platform } from '../../../swagger2Ts/enums';


export enum PostActionTypes {
  LIST_POSTS = '@@post/LIST_POSTS',
  LIST_SPREADINGS = '@@post/LIST_SPREADINGS'
}

export const ListPostsAction: () => Promise<
PlatformPostSerializerMaster[]
> = createAsyncAction(PostActionTypes.LIST_POSTS, () => {
  return httpService.fetch(EndPoints.posts_list);
});

export const ListSpreadingsAction: (platformType: Platform) => Promise<
Spread[]
> = createAsyncAction(PostActionTypes.LIST_SPREADINGS, (platformType) => {
  return httpService.fetch({ url: `/posts/spread_by_platform/${platformType}/` });
});
