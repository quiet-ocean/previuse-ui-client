import { SnackBarType } from "../../models";

export interface SnackbarState {
  open: boolean;
  content?: JSX.Element;
  type?: SnackBarType;
}

const snackbarInitialState: SnackbarState = {
  open: false,
  content: undefined,
  type: 'success'
};

export default snackbarInitialState;