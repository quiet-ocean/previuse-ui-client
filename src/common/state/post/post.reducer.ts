import { AnyAction, Reducer } from 'redux';
import postInitialState, { PostState } from './post.state';
import { PostActionTypes } from './post.actions';
import { SUCCESS_SUFFIX } from '../../constants';

const status: Record<string, number> = {
  'Approve': 1,
  'Pending': 0,
  'Decline': -1.
}
const postReducer: Reducer<PostState> = (
  state: PostState = postInitialState,
  action: AnyAction
) => {
  switch (action.type) {
    case `${PostActionTypes.LIST_POSTS}${SUCCESS_SUFFIX}`:
      return { ...state, posts: action.payload }

    case `${PostActionTypes.LIST_POSTS_BY_CAMPAIGN}${SUCCESS_SUFFIX}`:
      return { ...state, campaignPosts: action.payload }

    case PostActionTypes.SET_FB_POST_STATUS:
      return { ...state, fbPostStatus: action.payload }

    case PostActionTypes.UPDATE_POST_SPREAD:
      return {
        ...state,
        campaignPosts: state.campaignPosts?.map(
          post => post.id === action.payload.id? { ...post, spread: action.payload.spread }: post
        ),
      }
    case `${PostActionTypes.SET_POST_STATUS}${SUCCESS_SUFFIX}`:
      return {
        ...state,
        posts: state.posts?.map(
          post => (post.id === action.payload.id ? { ...post, approve_status: status[action.payload.approve_status]} : post)
        )
      }
    default:
      return state;
  }
};

export default postReducer;