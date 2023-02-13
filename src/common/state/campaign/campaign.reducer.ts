import { AnyAction, Reducer } from 'redux';
import campaignInitialState, { CampaignState } from './campaign.state';
import { CampaignActionTypes } from './campaign.actions';
import { SUCCESS_SUFFIX } from '../../constants';


const campaignReducer: Reducer<CampaignState> = (
  state: CampaignState = campaignInitialState,
  action: AnyAction
) => {
  switch (action.type) {
    case `${CampaignActionTypes.LIST_CAMPAIGNS}${SUCCESS_SUFFIX}`:
      return { ...state, campaings: action.payload }

    default:
      return state;
  }
};

export default campaignReducer;