import { PlatformPostSerializerMaster } from "../../../swagger2Ts/interfaces";

export interface PostState {
  posts?: PlatformPostSerializerMaster[];
  campaignPosts?: PlatformPostSerializerMaster[]
}

const postInitialState: PostState = {
  posts: undefined,
  campaignPosts: undefined,
};

export default postInitialState;