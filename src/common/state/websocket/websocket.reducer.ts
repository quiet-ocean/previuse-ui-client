import { AnyAction, Reducer } from 'redux';
import websocketInitialState, { WebsocketState } from './websocket.state';
import { WebsocketActionTypes } from './websocket.actions';
import { SUCCESS_SUFFIX } from '../../constants';


const websocketReducer: Reducer<WebsocketState> = (
  state: WebsocketState = websocketInitialState,
  action: AnyAction
) => {
  switch (action.type) {
    case WebsocketActionTypes.SET_WEBSOCKET:
      return { ...state, instance: action.payload, messages: [] }

    case WebsocketActionTypes.RECEIVE_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] }
    
    case `${WebsocketActionTypes.LIST_CHAT_MESSAGES}${SUCCESS_SUFFIX}`:
      return { ...state, messages: action.payload }

    default:
      return state;
  }
};

export default websocketReducer;