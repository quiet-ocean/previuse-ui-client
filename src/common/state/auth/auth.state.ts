import { UserCreation } from "../../../swagger2Ts/interfaces";

export interface AuthState {
  user?: UserCreation;
  users?: UserCreation[];
}

const authInitialState: AuthState = {
  user: undefined,
  users: [],
};

export default authInitialState;
