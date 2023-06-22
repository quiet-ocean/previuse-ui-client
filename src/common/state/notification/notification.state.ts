import { UserNotifications } from '../../../swagger2Ts/interfaces'

export interface NotificationState {
  notifications?: UserNotifications[];
}

const authInitialState: NotificationState = {
  notifications: undefined
};
  
export default authInitialState;
  