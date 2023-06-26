import React, { useEffect, useState, useContext } from 'react';
import { Card, Grid, Button } from '@material-ui/core';
import { groupBy } from 'lodash';
import { connect } from 'react-redux';
import { RouteChildrenProps, useHistory, useParams } from 'react-router';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';

import {
  FbPostStatus,
  ListPostMediaAction,
  ListPostsByCampaignAction,
  ListSpreadingsAction,
  SetPostStatusAction,
  SetFbPostStatusAction,
  UpdatePostSpreadAction,
} from '../../../common/state/post/post.actions';

import {
  Campaigns,
  MediaBoxWithFiles,
  MediaFiles,
  PlatformPostApproval,
  PlatformPostSerializerMaster,
  Spread,
  UserCreation,
  CampaignPermission
} from '../../../swagger2Ts/interfaces';

import { ServicesContext } from '../../../common/contexts';
import { IServices } from '../../../common/services/initiate';

import { PostAlignment, PostLayout, RootState, ThunkAction, WebSocketMessage } from '../../../common/models';
import { ApproveStatus, Platform } from '../../../swagger2Ts/enums';
import ActionBarComponent from '../../components/action-bar/action-bar.component';
import EmptyStateComponent from '../../components/empty-state/empty-state.component';
import LayoutComponent from '../../components/layout/layout.component';
import PostPreviewComponent from '../../components/post-preview/post-preview.component';
import LayoutsComponent from '../../components/layouts/layouts.component';
import CampaignPanelComponent from '../../components/campaign-panel/campaign-panel.component';

import {
  StyledContainer,
  StyledPostNavigation,
  StyledPostButton,
  StyledButtonContainer,
} from './home.styles';
import PostSummaryComponent from '../../components/post-summary/post-summary.component';
import { CloseWebSocketAction, InitiateWebSocketAction, ListChatMessagesAction } from '../../../common/state/websocket/websocket.actions';
import { ListCampaignPermissionsAction } from '../../../common/state/campaign/campaign.actions';
import ChatComponent from '../../components/chat/chat.component';

interface HomePageProps {
  isDrawerRender: boolean;
  user?: UserCreation;
  posts?: PlatformPostSerializerMaster[];
  campaings?: Campaigns[];
  campaignPosts?: PlatformPostSerializerMaster[]; 
  websocket?: WebSocket;
  websocketMessages: WebSocketMessage[];
  listSpreadings: (platformType: Platform) => Promise<Spread[]>;
  listPostMedia: (postId: number) => Promise<MediaBoxWithFiles>;
  setPostStatus: (args: PlatformPostApproval & { postId: number }) => Promise<void>;
  listWebSocketMessage: (campaignId: number) => Promise<WebSocketMessage[]>;
  initiateWebSocket: ThunkAction;
  closeWebSocket: ThunkAction;
  listPostsByCampaign: (campaignId: number) => Promise<PlatformPostSerializerMaster[]>;
  listCampaignPermissions: (campaignId: number) => Promise<CampaignPermission[]>;
  setFbPostStatus: (status: FbPostStatus) => void;
  updatePostSpread: (id: number, spread: number) => void;
}

const HomePage: React.FC<RouteChildrenProps & HomePageProps> = (props) => {
  
  const [selectedCampaign, setSelectedCampaign] = useState<Campaigns>();
  const [campaignPosts, setCampaignPosts] = useState<PlatformPostSerializerMaster[]>();
  const [selectedPost, setSelectedPost] = useState<PlatformPostSerializerMaster>();
  const [postId, setPostId] = useState<number>(0)
  const [postMedia, setPostMedia] = useState<MediaFiles[]>();
  const [platformPosts, setPlatformPosts] = useState<Record<Platform, PlatformPostSerializerMaster[]>>();

  const [spreadings, setSpreadings] = useState<Spread[]>();

  const [show, setShow] = useState<boolean>(false);
  const [alignment, setAlignment] = useState<PostAlignment>(PostAlignment.feed);
  const { campaignId } = useParams() as { campaignId: string };

  const history = useHistory();

  const services: IServices | undefined = useContext(ServicesContext);

  useEffect(() => {
    if (props.campaings && props.campaings.length) {
      let id: string | number = campaignId;
      if (campaignId === ':campaignId') {
        setSelectedCampaign(props.campaings[0]);
        history.replace(`/home/${props.campaings[0].id}`);
        id = props.campaings[0].id as number;
      } else {
        setSelectedCampaign(props.campaings.find((campaign) => campaign.id === parseInt(campaignId)));
      }
      setWebSocket(id as number, props.user?.id as number);
    }
    // props.listPostsByCampaign(Number(campaignId))
  }, [campaignId, props.campaings])

  useEffect(() => {
    if (selectedCampaign) {
      props.listWebSocketMessage(selectedCampaign.id as number);
      props.listCampaignPermissions(selectedCampaign.id as number)
    }

    return () => {
      props.closeWebSocket()
    };
  }, [selectedCampaign])

  useEffect(() => {
    if (props.posts && selectedCampaign) {
      const filteredPosts = props.posts?.filter((post) => post.related_platform.related_campaign.id === selectedCampaign.id);
      setPlatformPosts(groupBy(filteredPosts, (post: PlatformPostSerializerMaster) => post.related_platform.platform));
      setCampaignPosts(props.posts?.filter((post) => post.related_platform.related_campaign.id === selectedCampaign.id));
      if (filteredPosts && filteredPosts?.length > 0) {
        if (postId === 0) onSelectPost(filteredPosts[0]);
        else {
          filteredPosts.forEach((post: PlatformPostSerializerMaster) => {
            if (post?.id === postId) onSelectPost(post);
          })
        }
      }
      // setPlatformPosts(groupBy(campaignPosts, (post: PlatformPostSerializerMaster) => post.related_platform.platform));
      // onSelectPost(campaignPosts[0]);
    }
  }, [selectedCampaign, props.posts])

  const setWebSocket = (campaign: number, userId: number) => {
    props.initiateWebSocket(`ws/chat/${campaign}/${userId}`);
  }

  const onSelectPost = async (post: PlatformPostSerializerMaster) => {
    setPostId(post?.id as number)
    setSelectedPost(post);
    const platform = post?.related_platform.platform;

    if (platform === 'facebook' && post?.spread !== 4) setShow(true)
    else setShow(false)

    services?.loading.actions.start();

    const postSpreadings = await props.listSpreadings(platform);
    const media = await props.listPostMedia(post?.id as number);

    setPostMedia(media.file_in_media || []);
    setSpreadings(postSpreadings);

    services?.loading.actions.stop();
  }

  const onSetPostStatus = (approved: boolean) => {
    if (!selectedPost) return;

    props.setPostStatus({
      postId: selectedPost.id as number,
      approve_status: approved ? ApproveStatus.Approve : ApproveStatus.Decline
    });
  }

  const onSetPostLayout = (_alignment: PostAlignment) => setAlignment(_alignment)

  if (platformPosts && !Object.keys(platformPosts).length) {
    return <EmptyStateComponent title='No Posts Yet' />
  }

  const selectedSpread = spreadings && selectedPost &&
    spreadings.find((spread) => spread.id === selectedPost.spread);

  return (
    <LayoutComponent hasDrawer={props.isDrawerRender}>
      {selectedPost && (
        <ActionBarComponent
          campaign={selectedCampaign}
          post={selectedPost}
          hasDrawer={props.isDrawerRender}
          onSetPostStatus={onSetPostStatus}
        />
      )}

      <StyledContainer hasDrawer={props.isDrawerRender}>
        {campaignPosts && !campaignPosts.length && (
          <EmptyStateComponent title='No Posts Yet' />
        )}
        <Grid container spacing={3}>
          <Grid item xs={6}>

            <StyledButtonContainer $show={show}>
              <Button
                variant='outlined' 
                onClick={() => onSetPostLayout(PostAlignment.feed)}
                className={alignment === PostAlignment.feed ? 'active' : ''}
              >News Feed</Button>
              <Button 
                variant='outlined' 
                onClick={() => onSetPostLayout(PostAlignment.right)}
                className={alignment === PostAlignment.right ? 'active' : ''}
              >Right Side</Button>
              <Button 
                variant='outlined' 
                onClick={() => onSetPostLayout(PostAlignment.mobile)}
                className={alignment === PostAlignment.mobile ? 'active' : ''}
              >Mobile</Button>
            </StyledButtonContainer>
            <div className="left">
              <div className="preview">
                <Card>
                  {selectedPost && selectedSpread && (
                    <PostPreviewComponent
                      post={selectedPost}
                      selectedSpread={selectedSpread}
                      media={postMedia}
                      alignment={alignment}
                    />
                  )}
                </Card>
              </div>

              <div className="layout">
                <Card>
                  {platformPosts && (
                    <LayoutsComponent
                      posts={platformPosts}
                      onPostClick={onSelectPost}
                      selectedPost={selectedPost}
                    />
                  )}
                </Card>
              </div>

              <div className="navigation">
                <StyledPostNavigation>
                  {campaignPosts && campaignPosts.map((post: any, i: number) => (
                    <StyledPostButton
                      key={post?.id}
                      theme='natural'
                      text={(i + 1).toString()}
                      selected={selectedPost && selectedPost?.id === post?.id}
                      onClick={onSelectPost.bind(null, post)}
                    />
                  ))}
                </StyledPostNavigation>
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="right">
              <div className="panel1">
                <Card>
                  <h3 className='post-title'>{selectedSpread?.related_platform_type}</h3>
                </Card>
                <Card>
                  {selectedPost && selectedCampaign && postMedia && (
                    <CampaignPanelComponent
                      platform={selectedPost.related_platform}
                      postMedia={postMedia}
                      campaign={selectedCampaign}
                    />

                  )}
                </Card>
              </div>

              <div className="panel2">
                <Card>
                  {selectedPost && (
                    <PostSummaryComponent platform={selectedPost.related_platform} />
                  )}
                </Card>
              </div>

              <div className="chat">
                <Card>
                  {props.websocket && props.user && props.websocketMessages && (
                    <ChatComponent
                      websocket={props.websocket}
                      user={props.user}
                      messages={props.websocketMessages}
                    />
                  )}
                </Card>
              </div>
            </div>
          </Grid>
        </Grid>

      </StyledContainer>
    </LayoutComponent>
  );
};

const mapStateToProps = (state: RootState) => ({
  isDrawerRender: state.view.drawer.isRender,
  user: state.app.auth.user,
  campaings: state.app.campaign.campaings,
  posts: state.app.post.posts,
  campaignPosts: state.app.post.campaignPosts,
  websocket: state.app.websocket.instance,
  websocketMessages: state.app.websocket.messages
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction, RootState>) => ({
  listSpreadings: bindActionCreators(ListSpreadingsAction, dispatch),
  listPostMedia: bindActionCreators(ListPostMediaAction, dispatch),
  setPostStatus: bindActionCreators(SetPostStatusAction, dispatch),
  initiateWebSocket: bindActionCreators(InitiateWebSocketAction, dispatch),
  closeWebSocket: bindActionCreators(CloseWebSocketAction, dispatch),
  listWebSocketMessage: bindActionCreators(ListChatMessagesAction, dispatch),
  listPostsByCampaign: bindActionCreators(ListPostsByCampaignAction, dispatch),
  setFbPostStatus: bindActionCreators(SetFbPostStatusAction, dispatch),
  updatePostSpread: bindActionCreators(UpdatePostSpreadAction, dispatch),
  listCampaignPermissions: bindActionCreators(ListCampaignPermissionsAction, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
