import drawerInitialState, { DrawerState } from './drawer.state';
import { DrawerActionTypes } from './drawer.actions';
import { Reducer } from 'redux';

const drawerReducer: Reducer<DrawerState> = (
  state = drawerInitialState,
  action
) => {
  switch (action.type) {
    case DrawerActionTypes.OPEN_DRAWER:
      return { ...state, isRender: true };

    case DrawerActionTypes.CLOSE_DRAWER:
      return { ...state, isRender: false };

    default:
      return state;
  }
};

export default drawerReducer;
