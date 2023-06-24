import React, { useEffect, useState } from 'react';
import moment from 'moment';

import {
  Box,
  Divider,
  Grid,
  InputLabel,
} from '@material-ui/core';

import { Campaigns, MediaFiles, Platform, PlatformTypes } from '../../../swagger2Ts/interfaces';
import { ReactComponent as File } from '../../../assets/images/file.svg';

import StyledContainer, {
  StyledActivationState,
  StyledDates,
  StyledFileList
} from './campaign-panel.styles';
import { BudgetType } from '../../../swagger2Ts/enums';
import HttpService from '../../../common/services/http.service';

import TagsInputComponent from '../tags-input/tags-input.component'

export interface CampaignPanelComponentProps {
  campaign: Campaigns;
  platform: Platform;
  postMedia?: MediaFiles[];
}

const CampaignPanelComponent: React.FC<CampaignPanelComponentProps> = (props) => {
  const [tags, setTags] = useState<PlatformTypes[]>([])
  useEffect(() => {
    (async () => await getPlatformTags())();
  }, [])
  const getPlatformTags = async () => {
    const result = await HttpService.fetch({
      method: 'get',
      url: `/Platform/tags/${props.platform.id}`,
    })
    /* eslint-disable no-console */
    console.log('tags of platform: ', result)
    setTags(result)

  }
  return (
    <StyledContainer>
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
              <div className='campaign-detail start-date'>{moment(props.platform.start_date).format('DD/MM/YYYY')}</div>
            </div>
            <div>
              <InputLabel>Campaign end</InputLabel>
              {props.platform.end_date && (
                <div className='campaign-detail end-date'>{moment(props.platform.end_date).format('DD/MM/YYYY')}</div>
              )}
            </div>
          </StyledDates>
        </Box>
      )}

      <Divider />

      <Box className='column'>
        <InputLabel>Campaign type</InputLabel>
        <div>

          <TagsInputComponent tags={tags} name='campaign-type' errors={{}} />
        </div>
      </Box>

      <Box className='clean column'>
        <InputLabel>Campaign Budget</InputLabel>
        <div className="campaign-detail">
          <div>{props.platform.budget}$</div>
          <div>/ {props.platform.budget_type || BudgetType.daily}</div>
        </div>
      </Box>

      <Box className='clean column'>
        <InputLabel>Business Account</InputLabel>
        <div className="campaign-detail">
          <div>{props.platform.business_account}</div>
        </div>
      </Box>

      <Divider />

      <Box>
        <InputLabel>Upload Files: </InputLabel>
      </Box>

      <StyledFileList container>
        {props.postMedia && props.postMedia.map((f: any) => {
          if (!f?.file_in) return null;
          const fileRoutes = f?.file_in.split('/');
          
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