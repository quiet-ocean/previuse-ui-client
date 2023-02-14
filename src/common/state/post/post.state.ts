import { PlatformPostSerializerMaster } from "../../../swagger2Ts/interfaces";

export interface PostState {
  posts?: PlatformPostSerializerMaster[];
}

const postInitialState: PostState = {
  posts: undefined
};

export default postInitialState;