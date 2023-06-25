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
  SET_FB_POST_STATUS = '@@post/SET_FB_POST_STATUS',
  UPDATE_POST_SPREAD = '@@post/UPDATE_POST_SPREAD',
}

export enum FbPostStatus {
  NEWS_FEED,
  RIGHT_SIDE,
  MOBILE,
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

  return new Promise (async (resolve) => {
    const response = await httpService.fetch({
      url: `/posts/approve/${args.postId}`,
      body: formData,
      method: 'POST',
    });
    resolve({
      id: args.postId,
      ...response,
    })
  })  
});

export const SetFbPostStatusAction = (status: FbPostStatus) => ({
  type: PostActionTypes.SET_FB_POST_STATUS,
  payload: status,
})

export const UpdatePostSpreadAction = (id: number, spread: number) => ({
  type: PostActionTypes.UPDATE_POST_SPREAD,
  payload: { id, spread }
})