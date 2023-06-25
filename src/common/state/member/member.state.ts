import { UserUpdate } from "../../../swagger2Ts/interfaces";

export interface MemberState {
  user?: UserUpdate
}

const memberInitialState: MemberState = {
  user: undefined
}

export default memberInitialState;

