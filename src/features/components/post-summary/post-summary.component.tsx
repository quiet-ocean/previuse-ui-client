import React from 'react';
import { Platform } from '../../../swagger2Ts/interfaces';
import ButtonComponent from '../button/button.component';

import StyledContainer, {
  StyledAudienceInidication,
  StyledBox,
  StyledAudience,
  StyledDailyResult
} from './post-summary.styles';

export interface PostSummaryComponentProps {
  platform: Platform;
}

const PostSummaryComponent: React.FC<PostSummaryComponentProps> = (props) => {
  const onNavigateToBusinessPage = () => {
    if (props.platform.business_page) {
      window.open(`http://${props.platform.business_page}`, '_blank');
    }
  }

  return (
    <StyledContainer>
      <StyledBox>
        <label>External Link</label>
        <ButtonComponent
          text='Click Here'
          className='external-link-button'
          onClick={onNavigateToBusinessPage}
          disabled={!props.platform.business_page}
        />
      </StyledBox>

      <StyledBox>
        <label>Estimated Audience Size</label>
        <StyledAudienceInidication>
          <div className='audience-count'>37,000 - 43,500</div>
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
            <label>Reach</label>
            <div>651-1.9K</div>
          </StyledBox>
          
          <StyledBox>
            <label>Link Clicked</label>
            <div>4-20</div>
          </StyledBox>
        </StyledDailyResult>
      </StyledBox>
    </StyledContainer>
  );
}

export default PostSummaryComponent;