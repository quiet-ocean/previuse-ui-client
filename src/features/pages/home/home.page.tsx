import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { RouteChildrenProps, useParams } from 'react-router';
import { AnyAction, Dispatch } from 'redux';
import { RootState } from '../../../common/models';
import { Campaigns, PlatformPostSerializerMaster, UserCreation } from '../../../swagger2Ts/interfaces';
import ActionBarComponent from '../../components/action-bar/action-bar.component';
import EmptyStateComponent from '../../components/empty-state/empty-state.component';
import LayoutComponent from '../../components/layout/layout.component';

import {
  StyledContainer,
  StyledPostNavigation,
  StyledPostButton,
  StyledPreview
} from './home.styles';

interface HomePageProps {
  isDrawerRender: boolean;
  user?: UserCreation;
  campaings?: Campaigns[];
  posts?: PlatformPostSerializerMaster[];
}

const HomePage: React.FC<RouteChildrenProps & HomePageProps> = (props) => {
  const [selectedCampaign, setSelectedCampaign] = useState<Campaigns>();
  const [campaignPosts, setCampaignPosts] = useState<PlatformPostSerializerMaster[]>();
  const [selectedPost, setSelectedPost] = useState<PlatformPostSerializerMaster>();

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
      setSelectedPost(filteredPosts[0]);
    }
  }, [selectedCampaign, props.posts])

  const onSelectPost = (post: PlatformPostSerializerMaster) => {
    setSelectedPost(post);
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

        <StyledPreview>
          {selectedPost && (
            <div>
              <div>{selectedPost.page_name}</div>
            </div>
          )}
        </StyledPreview>

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

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
