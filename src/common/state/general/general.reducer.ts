import initialGeneralState, { GeneralState } from './general.state';
import { GeneralActionTypes } from './general.actions';
import { MOBILE_MAX_WIDTH } from '../../constants';
import { Reducer } from 'redux';

const generalReducer: Reducer<GeneralState> = (
  state = initialGeneralState,
  action
) => {
  switch (action.type) {
    case GeneralActionTypes.LOADING_START:
      return { ...state, loading: true };

    case GeneralActionTypes.LOADING_DONE:
      return { ...state, loading: false };

    case GeneralActionTypes.CHANGE_LANGUAGE:
      return { ...state, language: action.payload };

    case GeneralActionTypes.ON_SCREEN_RESIZE:
      return { ...state, isMobile: window.innerWidth <= MOBILE_MAX_WIDTH };

    default:
      return state;
  }
};

export default generalReducer;
