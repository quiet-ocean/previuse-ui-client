import createAsyncAction from '../../../utils/createAsyncAction';
import EndPoints from '../../../swagger2Ts/endpoints';
import httpService from '../../services/http.service';
import { MediaBoxWithFiles, PlatformPostApproval, PlatformPostSerializerMaster, Spread } from '../../../swagger2Ts/interfaces';
import { Platform } from '../../../swagger2Ts/enums';


export enum PostActionTypes {
  LIST_POSTS = '@@post/LIST_POSTS',
  LIST_SPREADINGS = '@@post/LIST_SPREADINGS',
  LIST_POST_MEDIA = '@@post/LIST_POST_MEDIA',
  SET_POST_STATUS = '@@post/SET_POST_STATUS',
  LIST_POSTS_BY_CAMPAIGN = '@@post/LIST_POSTS_BY_CAMPAIGN',
}

export const ListPostsAction: () => Promise<
PlatformPostSerializerMaster[]
> = createAsyncAction(PostActionTypes.LIST_POSTS, () => {
  return httpService.fetch(EndPoints.posts_list);
});

export const ListPostsByCampaignAction: () => Promise<
PlatformPostSerializerMaster[]
> = createAsyncAction(PostActionTypes.LIST_POSTS_BY_CAMPAIGN, (campaignId: number) => {
  return httpService.fetch({ url: `/posts/bycampaign/${campaignId}/` })
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

export const SetPostStatusAction: (args: PlatformPostApproval & {postId: number}) => Promise<
void
> = createAsyncAction(PostActionTypes.SET_POST_STATUS, (args) => {
  const formData = new FormData();
  formData.append('approve_status', args.approve_status);
  
  return httpService.fetch({
    url: `/posts/approve/${args.postId}`,
    body: formData,
    method: 'POST',
    contentType: undefined
  });
});
