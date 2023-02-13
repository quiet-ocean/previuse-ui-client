import i18n from '../../../i18n';
import { Dispatch, AnyAction } from 'redux';
import { Directions, RtlLanguages, SupportedLanguages } from './general.state';
import { ActionCreator, RootState } from '../../models';

export enum GeneralActionTypes {
  LOADING_START = '@@general/LOADING_START',
  LOADING_DONE = '@@general/LOADING_DONE',
  CHANGE_LANGUAGE = '@@general/CHANGE_LANGUAGE',
  ON_SCREEN_RESIZE = '@@general/ON_SCREEN_RESIZE',
  GET_DIRECTION = '@@general/GET_DIRECTION'
}

export const StartLoaderAction = (): GeneralAction => {
  return {
    type: GeneralActionTypes.LOADING_START
  };
};

export const StopLoaderAction = (): GeneralAction => {
  return {
    type: GeneralActionTypes.LOADING_DONE
  };
};

export const ChangeLanguageAction = (language: string): GeneralAction => {
  i18n.changeLanguage(language);
  return {
    type: GeneralActionTypes.CHANGE_LANGUAGE,
    payload: language
  };
};

export const GetDirectionAction: ActionCreator = () => (
  dispatch: Dispatch<AnyAction, RootState>,
  getState: () => RootState
) => {
  const { language } = getState().view.general;
  let direction;
  if (RtlLanguages.indexOf(language as SupportedLanguages) > -1) {
    direction = Directions.RTL;
  } else {
    direction = Directions.LTR;
  }
  return direction;
};

export function OnScreenResizeAction(): GeneralAction {
  return {
    type: GeneralActionTypes.ON_SCREEN_RESIZE
  };
}

export type GeneralAction =
  | { type: GeneralActionTypes.CHANGE_LANGUAGE; payload: string }
  | { type: GeneralActionTypes.LOADING_DONE }
  | { type: GeneralActionTypes.LOADING_START }
  | { type: GeneralActionTypes.GET_DIRECTION; payload: string }
  | { type: GeneralActionTypes.ON_SCREEN_RESIZE };
