import { AnyAction, Reducer } from 'redux';
import campaignInitialState, { CampaignState } from './campaign.state';
import { CampaignActionTypes } from './campaign.actions';
import { SUCCESS_SUFFIX } from '../../constants';
import { CampaignPermission } from '../../../swagger2Ts/interfaces';


const campaignReducer: Reducer<CampaignState> = (
  state: CampaignState = campaignInitialState,
  action: AnyAction
) => {
  switch (action.type) {
    case `${CampaignActionTypes.LIST_CAMPAIGNS}${SUCCESS_SUFFIX}`:
      return { ...state, campaings: action.payload }

    case `${CampaignActionTypes.LIST_CAMPAIGN_PERMISSIONS}${SUCCESS_SUFFIX}`:
      return { ...state, campaignPermissions: action.payload }

    case `${CampaignActionTypes.CREATE_CAMPAIGN_PERMISSIONS}${SUCCESS_SUFFIX}`:
      return { ...state, campaignPermissions: state.campaignPermissions ? [ ...state.campaignPermissions, action.payload] : [action.payload] }

    case `${CampaignActionTypes.DELETE_CAMPAIGN_PERMISSIONS}${SUCCESS_SUFFIX}`:
      return {
        ...state,
        campaignPermissions: state.campaignPermissions &&
        state.campaignPermissions && state.campaignPermissions.filter((permission: CampaignPermission) => (
          permission.id !== action.payload.id
        ))
      }

    default:
      return state;
  }
};

export default campaignReducer;