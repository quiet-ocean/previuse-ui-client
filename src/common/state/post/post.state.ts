import { PlatformPostSerializerMaster } from "../../../swagger2Ts/interfaces";
import { FbPostStatus } from "./post.actions";

export interface PostState {
  posts?: PlatformPostSerializerMaster[];
  campaignPosts?: PlatformPostSerializerMaster[];
  fbPostStatus: FbPostStatus;
  // postId
}

const postInitialState: PostState = {
  posts: undefined,
  campaignPosts: undefined,
  fbPostStatus: FbPostStatus.NEWS_FEED,
};

export default postInitialState;
