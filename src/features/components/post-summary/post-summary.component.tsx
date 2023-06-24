import React from 'react';
import { Divider } from '@material-ui/core'
import { Platform } from '../../../swagger2Ts/interfaces';
import ButtonComponent from '../button/button.component';

import StyledContainer, {
  StyledAudienceInidication,
  StyledBox,
  StyledAudience,
  StyledDailyResult
} from './post-summary.styles';

export enum PostSummaryVariant {
  primary, secondary
}
export interface PostSummaryComponentProps {
  platform: Platform;
  variant?: PostSummaryVariant;
}

const PostSummaryComponent: React.FC<PostSummaryComponentProps> = ({ platform, variant = PostSummaryVariant.primary }) => {
  const onNavigateToBusinessPage = () => {
    if (platform.business_page) {
      window.open(`http://${platform.business_page}`, '_blank');
    }
  }
  return (
    <StyledContainer>
      <StyledBox
        display={variant === PostSummaryVariant.secondary ? 'none' : 'flex'}
        flexDirection='row'
        justifyContent='space-between'
      >
        <div className='label external-link'>
          <label>External Link</label>
        </div>
        <ButtonComponent
          text='Click Here'
          className='external-link-button'
          onClick={onNavigateToBusinessPage}
          disabled={!platform.business_page}
        />
      </StyledBox>

      <StyledBox>
        <Divider />
      </StyledBox>
      <StyledBox>
        <div className='label'>
          <label>Estimated Audience Size</label>
        </div>
        <StyledAudienceInidication>
          <div className='audience-count'>{platform.audience_size_from || 0} - {platform.audience_size_to || 0}</div>
          <StyledAudience>
            <div />
            <div className='selected' />
            <div />
          </StyledAudience>
        </StyledAudienceInidication>
      </StyledBox>

      <StyledBox>
        <label>Estimated Daily Result</label>
        <StyledDailyResult>
          <StyledBox>
            <div className='label'>
              <label>Reach</label>
            </div>
            {/* <div>651-1.9K</div> */}
            <div>{platform.reach || 0}</div>
          </StyledBox>
          
          <StyledBox>
            <div className='label'>
              <label>Link Clicked</label>
            </div>
            {/* <div>4-20</div> */}
            <div>{platform.link_clicks || 0}</div>
          </StyledBox>
        </StyledDailyResult>
      </StyledBox>
    </StyledContainer>
  );
}

export default PostSummaryComponent;