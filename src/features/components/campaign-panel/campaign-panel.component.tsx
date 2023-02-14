import React from 'react';
import moment from 'moment';

import {
  Box,
  Divider,
  Grid,
  InputLabel,
} from '@material-ui/core';

import { Campaigns, MediaFiles, Platform } from '../../../swagger2Ts/interfaces';
import { ReactComponent as File } from '../../../assets/images/file.svg';

import StyledContainer, {
  StyledActivationState,
  StyledDates,
  StyledFileList
} from './campaign-panel.styles';
import { BudgetType } from '../../../swagger2Ts/enums';

export interface CampaignPanelComponentProps {
  campaign: Campaigns;
  platform: Platform;
  postMedia?: MediaFiles[];
}

const CampaignPanelComponent: React.FC<CampaignPanelComponentProps> = (props) => {
  return (
    <StyledContainer>
      <InputLabel>External Link</InputLabel>
      <Box>
        <InputLabel>Pixel / Analytics Code:</InputLabel>
      </Box>

      <Box>
        <StyledActivationState active={props.campaign.active}>
          {props.campaign.active ? 'Active' : 'Inactive'}
        </StyledActivationState>
      </Box>

      {props.platform && (
        <Box>
          <StyledDates>
            <div>
              <InputLabel>Campaign start</InputLabel>
              <div>{moment(props.platform.start_date).format('DD/MM/YYYY')}</div>
            </div>
            <div>
              <InputLabel>Campaign end</InputLabel>
              <div>{moment(props.platform.end_date).format('DD/MM/YYYY')}</div>
            </div>
          </StyledDates>
        </Box>
      )}

      <Divider />

      <Box className='column'>
        <InputLabel>Campaign type</InputLabel>
        {/* <TagsInputComponent tags={[]} name='campaign-type' errors={{}} /> */}
      </Box>

      <Box className='clean column'>
        <InputLabel>Budget type</InputLabel>
        <div className="budget">
          <div>{props.platform.budget}$</div>
          <div>/ {props.platform.budget_type || BudgetType.daily}</div>
        </div>
      </Box>

      <Divider />

      <Box>
        <InputLabel>Upload Files: </InputLabel>
      </Box>

      <StyledFileList container>
        {props.postMedia && props.postMedia.map((f: any) => {
          const fileRoutes = f.file_in.split('/');
          const filename = fileRoutes[fileRoutes.length - 1];
          return (
            <Grid key={filename} item xs={6} title={filename}>
              <File /><span>{filename}</span>
            </Grid>
          )
        })}
      </StyledFileList>
      <Divider />
    </StyledContainer>
  );
}

export default CampaignPanelComponent;