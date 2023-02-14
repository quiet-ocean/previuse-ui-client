import createAsyncAction from '../../../utils/createAsyncAction';
import EndPoints from '../../../swagger2Ts/endpoints';
import httpService from '../../services/http.service';
import { MediaBoxWithFiles, PlatformPostSerializerMaster, Spread } from '../../../swagger2Ts/interfaces';
import { Platform } from '../../../swagger2Ts/enums';


export enum PostActionTypes {
  LIST_POSTS = '@@post/LIST_POSTS',
  LIST_SPREADINGS = '@@post/LIST_SPREADINGS',
  LIST_POST_MEDIA = '@@post/LIST_POST_MEDIA',
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

export const ListPostMediaAction: (postId: number) => Promise<
MediaBoxWithFiles
> = createAsyncAction(PostActionTypes.LIST_POST_MEDIA, (postId) => {
  return httpService.fetch({ url: `/posts/media_box/${postId}/` });
});
