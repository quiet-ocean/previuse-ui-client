import { WebSocketMessage } from "../../models";

export interface WebsocketState {
  instance?: WebSocket;
  messages: WebSocketMessage[];
}

const websocketInitialState: WebsocketState = {
  instance: undefined,
  messages: []
};

export default websocketInitialState;