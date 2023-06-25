import { AnyAction, Reducer } from "redux";
import memberInitialState, { MemberState } from "./member.state";
import { MemberActionTypes } from "./member.action";
import { SUCCESS_SUFFIX } from "../../constants";

const memberReducer: Reducer<MemberState> = (
  state: MemberState = memberInitialState,
  action: AnyAction
) => {
  switch (action.type) {
    case `${MemberActionTypes.SHOW_USER}${SUCCESS_SUFFIX}`:
      return { user: action.payload };
      
    default:
      return state;
  }
}

export default memberReducer;
