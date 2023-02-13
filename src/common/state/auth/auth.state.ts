import { UserCreation } from "../../../swagger2Ts/interfaces";

export interface AuthState {
  user?: UserCreation;
}

const authInitialState: AuthState = {
  user: undefined
};

export default authInitialState;
