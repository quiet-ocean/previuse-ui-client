import React, { useEffect, useState } from 'react';
import { Card, Grid } from '@material-ui/core';
import { groupBy } from 'lodash';
import { connect } from 'react-redux';
import { RouteChildrenProps, useHistory, useParams } from 'react-router';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';

import { RootState } from '../../../common/models';
import { ListPostMediaAction, ListSpreadingsAction } from '../../../common/state/post/post.actions';
import { Platform } from '../../../swagger2Ts/enums';
import { Campaigns, MediaBoxWithFiles, MediaFiles, PlatformPostSerializerMaster, Spread, UserCreation } from '../../../swagger2Ts/interfaces';
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
} from './home.styles';

interface HomePageProps {
  isDrawerRender: boolean;
  user?: UserCreation;
  campaings?: Campaigns[];
  posts?: PlatformPostSerializerMaster[];
  listSpreadings: (platformType: Platform) => Promise<Spread[]>;
  listPostMedia: (postId: number) => Promise<MediaBoxWithFiles>;
}

const HomePage: React.FC<RouteChildrenProps & HomePageProps> = (props) => {
  const [selectedCampaign, setSelectedCampaign] = useState<Campaigns>();
  const [campaignPosts, setCampaignPosts] = useState<PlatformPostSerializerMaster[]>();
  const [selectedPost, setSelectedPost] = useState<PlatformPostSerializerMaster>();
  const [postMedia, setPostMedia] = useState<MediaFiles[]>();
  const [platformPosts, setPlatformPosts] = useState<Record<Platform, PlatformPostSerializerMaster[]>>();

  const [spreadings, setSpreadings] = useState<Spread[]>();

  const { campaignId } = useParams() as { campaignId: string };

  const history = useHistory();

  useEffect(() => {
    if (props.campaings) {
      if (campaignId === ':campaignId') {
        setSelectedCampaign(props.campaings[0]);
        history.replace(`/home/${props.campaings[0].id}`);

      } else {
        setSelectedCampaign(props.campaings.find((campaign) => campaign.id === parseInt(campaignId)));
      }
    }
  }, [campaignId, props.campaings])

  useEffect(() => {
    if (props.posts && selectedCampaign) {
      const filteredPosts = props.posts.filter((post) => post.related_platform.related_campaign.id === selectedCampaign.id);
      setPlatformPosts(groupBy(filteredPosts, (post: PlatformPostSerializerMaster) => post.related_platform.platform));
      setCampaignPosts(filteredPosts);
      onSelectPost(filteredPosts[0]);
    }
  }, [selectedCampaign, props.posts])

  const onSelectPost = async (post: PlatformPostSerializerMaster) => {
    setSelectedPost(post);
    const postSpreadings = await props.listSpreadings(post.related_platform.platform);
    const media = await props.listPostMedia(post.id as number);
    setPostMedia(media.file_in_media);
    setSpreadings(postSpreadings);
  }

  if (campaignPosts && !campaignPosts.length) {
    return <EmptyStateComponent title='No Posts Yet' />
  }

  const selectedSpread = spreadings && selectedPost &&
    spreadings.find((spread) => spread.id === selectedPost.spread);

  return (
    <LayoutComponent hasDrawer={props.isDrawerRender}>
      <ActionBarComponent
        hasDrawer={props.isDrawerRender}
        clientName={selectedCampaign && selectedCampaign.related_client.client_name}
      />

      <StyledContainer hasDrawer={props.isDrawerRender}>
        {campaignPosts && !campaignPosts.length && (
          <EmptyStateComponent title='No Posts Yet' />
        )}

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div className="left">
              <div className="preview">
                <Card>
                  {selectedPost && selectedSpread && (
                    <PostPreviewComponent
                      post={selectedPost}
                      selectedSpread={selectedSpread}
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
                  {campaignPosts && campaignPosts.map((post, i) => (
                    <StyledPostButton
                      key={post.id}
                      theme='natural'
                      text={(i + 1).toString()}
                      selected={selectedPost && selectedPost.id === post.id}
                      onClick={onSelectPost.bind(null, post)}
                    />
                  ))}
                </StyledPostNavigation>
              </div>

              <div className="summary"><Card></Card></div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="right">
              <div className="panel1">
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

              <div className="panel2"><Card></Card></div>

              <div className="chat"><Card></Card></div>
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
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction, RootState>) => ({
  listSpreadings: bindActionCreators(ListSpreadingsAction, dispatch),
  listPostMedia: bindActionCreators(ListPostMediaAction, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
