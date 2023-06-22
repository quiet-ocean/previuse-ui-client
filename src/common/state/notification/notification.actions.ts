import createAsyncAction from '../../../utils/createAsyncAction';
import HttpService from '../../services/http.service';
import EndPoints from '../../../swagger2Ts/endpoints'
import { UserNotifications } from '../../../swagger2Ts/interfaces';

export enum NotificationActionTypes {
  GET_NOTIFICATIONS = '@@notifications/GET_NOTIFICATIONS'
}

export const GetNotificationsAction: () => Promise<UserNotifications[]> = createAsyncAction(
  NotificationActionTypes.GET_NOTIFICATIONS,
  () => HttpService.fetch(EndPoints.notifications_generics_list)
)
