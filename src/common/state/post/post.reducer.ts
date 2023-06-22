import { AnyAction, Reducer } from 'redux';
import postInitialState, { PostState } from './post.state';
import { PostActionTypes } from './post.actions';
import { SUCCESS_SUFFIX } from '../../constants';


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
      /* eslint-disable no-console */
      console.log(action.payload)
      return {
        ...state,
        campaignPosts: state.campaignPosts?.map(
          post => post.id === action.payload.id? { ...post, spread: action.payload.spread }: post
        ),
      }
    default:
      return state;
  }
};

export default postReducer;