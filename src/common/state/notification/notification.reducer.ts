import notificationInitialState, { NotificationState } from './notification.state';
import { NotificationActionTypes } from './notification.actions';
import { SUCCESS_SUFFIX } from '../../constants';
import { AnyAction, Reducer } from 'redux';

const notificationReducer: Reducer<NotificationState> = (
  state = notificationInitialState,
  action: AnyAction
) => {
  switch (action.type) {
    case `${NotificationActionTypes.GET_NOTIFICATIONS}${SUCCESS_SUFFIX}`:
      return { ...state, notifications: action.payload };
    default:
      return state;
  }
}

export default notificationReducer;
