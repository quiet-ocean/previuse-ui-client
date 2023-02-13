import {
  STARTED_SUFFIX,
  SUCCESS_SUFFIX,
  FAILED_SUFFIX
} from '../common/constants';

import { AnyAction, Dispatch } from 'redux';
import { AsyncAction, RootState } from '../common/models';
import { OpenSnackBarAction } from '../common/state/snackbar/snackbar.actions';

interface Args {
  id: string;
}

const createAsyncAction: AsyncAction = (
  type: string,
  fn: (args: Args, getState: () => RootState) => Promise<AnyAction>,
  catchError = true
) => {
  return (args: Args) => async (
    dispatch: Dispatch<AnyAction, RootState>,
    getState: () => RootState
  ) => {
    // dispatch starting action
    dispatch({
      type: `${type}${STARTED_SUFFIX}`,
      payload: args
    });
    let result;
    try {
      // activate promise call back
      result = await fn(args, getState);

    } catch (error: unknown) {
      // dispatch fail action
      dispatch({
        type: `${type}${FAILED_SUFFIX}`,
        error: true,
        payload: error
      });
      if (catchError) {
        dispatch(OpenSnackBarAction({
          content: JSON.parse((error as Error).message).message,
          type: 'error'
        }));
      }
      throw error;
    }
    // dispatch success action
    dispatch({
      type: `${type}${SUCCESS_SUFFIX}`,
      payload: result
    });

    return result;
  };
};

export default createAsyncAction;
