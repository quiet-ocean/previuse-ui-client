import { AnyAction, Dispatch } from "redux";
import createAsyncAction from "../../../utils/createAsyncAction";
import { RootState, ThunkAction, WebSocketMessage } from "../../models"
import httpService from "../../services/http.service";

export enum WebsocketActionTypes {
  SET_WEBSOCKET = '@@websocket/SET_WEBSOCKET',
  INITIATE_WEBSOCKET = '@@websocket/INITIATE_WEBSOCKET',
  RECEIVE_MESSAGE = '@@websocket/RECEIVE_MESSAGE',
  CLOSE_WEBSOCKET = '@@websocket/CLOSE_WEBSOCKET',
  LIST_CHAT_MESSAGES = '@@campaign/LIST_CHAT_MESSAGES',
}

export const InitiateWebSocketAction: ThunkAction = (address: string) => (dispatch: Dispatch<AnyAction, RootState>, getState: () => RootState) => {
  const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
  const host = process.env.NODE_ENV === 'production' ? window.location.host : 'dev.previuse.com:8000';
  // const host = process.env.NODE_ENV === 'production' ? window.location.host : '127.0.0.1:8000';

  const user = getState().app.auth.user;

  if (user) {
    const websocket = new WebSocket(`${protocol}://${host}/${address}`);
    /* eslint-disable no-console */
    console.log(websocket)
    websocket.onopen = () => {
      console.log('websocket is opened')
      dispatch(SetWebSocketAction(websocket))
    };

    websocket.onmessage = (e) => {
      const message = JSON.parse(e.data);
      console.log('onmessage websocket:', e.data)
      if (!message.error) {
        dispatch(ReceiveWebSocketMessageAction(message));
      }
    };
  }
}

export const CloseWebSocketAction: ThunkAction = () => (dispatch: Dispatch<AnyAction, RootState>, getState: () => RootState) => {
  const socket = getState().app.websocket.instance;

  if (socket) {
    socket.close();
  }

  dispatch(SetWebSocketAction(undefined))
}

export const SetWebSocketAction = (instance?: WebSocket) => ({
  type: WebsocketActionTypes.SET_WEBSOCKET,
  payload: instance
})

export const ReceiveWebSocketMessageAction = (msg: WebSocketMessage) => ({
  type: WebsocketActionTypes.RECEIVE_MESSAGE,
  payload: msg
})

export const ListChatMessagesAction: (campaignId: number) => Promise<
WebSocketMessage[]
> = createAsyncAction(WebsocketActionTypes.LIST_CHAT_MESSAGES, (campaignId) =>
  httpService.fetch({ url: `/chats/${campaignId}` })
);
