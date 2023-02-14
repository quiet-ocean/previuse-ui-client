import createAsyncAction from '../../../utils/createAsyncAction';
import EndPoints from '../../../swagger2Ts/endpoints';
import httpService from '../../services/http.service';
import { PlatformPostSerializerMaster } from '../../../swagger2Ts/interfaces';


export enum PostActionTypes {
  LIST_POSTS = '@@post/LIST_POSTS'
}

export const ListPostsAction: () => Promise<
PlatformPostSerializerMaster[]
> = createAsyncAction(PostActionTypes.LIST_POSTS, () => {
  return httpService.fetch(EndPoints.posts_list);
});
