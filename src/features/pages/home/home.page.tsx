import React, { useEffect, useState } from 'react';
import { Card } from '@material-ui/core';
import { connect } from 'react-redux';
import { RouteChildrenProps, useParams } from 'react-router';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';

import { RootState } from '../../../common/models';
import { ListSpreadingsAction } from '../../../common/state/post/post.actions';
import { Platform } from '../../../swagger2Ts/enums';
import { Campaigns, PlatformPostSerializerMaster, Spread, UserCreation } from '../../../swagger2Ts/interfaces';
import ActionBarComponent from '../../components/action-bar/action-bar.component';
import EmptyStateComponent from '../../components/empty-state/empty-state.component';
import LayoutComponent from '../../components/layout/layout.component';
import PostPreviewComponent from '../../components/post-preview/post-preview.component';

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
}

const HomePage: React.FC<RouteChildrenProps & HomePageProps> = (props) => {
  const [selectedCampaign, setSelectedCampaign] = useState<Campaigns>();
  const [campaignPosts, setCampaignPosts] = useState<PlatformPostSerializerMaster[]>();
  const [selectedPost, setSelectedPost] = useState<PlatformPostSerializerMaster>();
  const [spreadings, setSpreadings] = useState<Spread[]>();

  const { campaignId } = useParams() as { campaignId: string };

  useEffect(() => {
    if (props.campaings) {
      setSelectedCampaign(props.campaings.find((campaign) => campaign.id === parseInt(campaignId)));
    }
  }, [campaignId, props.campaings])

  useEffect(() => {
    if (props.posts && selectedCampaign) {
      const filteredPosts = props.posts.filter((post) => post.related_platform.related_campaign.id === selectedCampaign.id);
      setCampaignPosts(filteredPosts);
      onSelectPost(filteredPosts[0]);
    }
  }, [selectedCampaign, props.posts])

  const onSelectPost = async (post: PlatformPostSerializerMaster) => {
    setSelectedPost(post);
    const postSpreadings = await props.listSpreadings(post.related_platform.platform);
    setSpreadings(postSpreadings);
  }

  if (campaignPosts && !campaignPosts.length) {
    return <EmptyStateComponent title='No Posts Yet' />
  }

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

        <div className="container">
          <div className="preview">
            <Card>
              {selectedPost && spreadings && (
                <PostPreviewComponent
                  post={selectedPost}
                  selectedSpread={spreadings.find((spread) => spread.id === selectedPost.spread) as Spread}
                />
              )}
            </Card>
          </div>

          <div className="layout"><Card>layout</Card></div>

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

          <div className="summary"><Card>summary</Card></div>

          <div className="panel1"><Card>panel1</Card></div>

          <div className="panel2"><Card>panel2</Card></div>

          <div className="chat"><Card>chat</Card></div>
        </div>
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
  listSpreadings: bindActionCreators(ListSpreadingsAction, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
