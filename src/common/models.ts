/* eslint-disable @typescript-eslint/no-explicit-any */
import { Action, StateType } from 'typesafe-actions';
import rootReducer from './reducers';
import { Dispatch, AnyAction } from 'redux';
import { UserCreation } from '../swagger2Ts/interfaces';

export interface StringMap {
  [s: string]: string;
}

export type RootState = StateType<typeof rootReducer>;

export interface Endpoint {
  url: string;
  method?: string;
  contentType?: string;
  body?: any;
}

export type ThunkAction = (params?: any) => (dispatch: Dispatch<any, RootState>, getState: () => RootState) => void;
export type AsyncAction = (type: string, fn: (params?: any) => Promise<any>) => any;

export type ActionCreator = (
  args?: any
) => (dispatch: Dispatch<Action, AnyAction>, getState: () => RootState) => any;

export declare type SnackBarType = 'error' | 'success';

export enum PostLayout {
  facebook1 = 'facebook1',
  facebook2 = 'facebook2',
  facebook3 = 'facebook3',
  facebook4 = 'facebook4',
  tiktok1 = 'tiktok1',
  instagram1 = 'instagram1',
  twitter1 = 'twitter1',
}

export interface WebSocketMessage {
  message: string;
  campaign_id: number;
  user_message_sender: UserCreation;
  user: UserCreation;
}
