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

    default:
      return state;
  }
};

export default postReducer;