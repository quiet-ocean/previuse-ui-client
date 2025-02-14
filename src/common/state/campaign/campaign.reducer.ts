import { AnyAction, Reducer } from 'redux';
import campaignInitialState, { CampaignState } from './campaign.state';
import { CampaignActionTypes } from './campaign.actions';
import { SUCCESS_SUFFIX, FAILED_SUFFIX } from '../../constants';
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
    case `${CampaignActionTypes.CREATE_CAMPAIGN_PERMISSIONS}${FAILED_SUFFIX}`:
      /* eslint-disable */
      console.log('failed to create campaign permission')

      return { ...state, ok: false, error: 'failed to create campaign permission' }
  
    case `${CampaignActionTypes.DELETE_CAMPAIGN_PERMISSIONS}${SUCCESS_SUFFIX}`:
      return {
        ...state,
        campaignPermissions: state.campaignPermissions &&
        state.campaignPermissions && state.campaignPermissions.filter((permission: CampaignPermission) => (
          permission.id !== action.payload.id
        ))
      }
    case `${CampaignActionTypes.DELETE_CAMPAIGN_PERMISSIONS}${FAILED_SUFFIX}`:
      console.log('failed to delete campaign permission', action.payload)
      return { ...state, ok: false, error: 'failed to delete campaign permission' }

    case CampaignActionTypes.SET_OK:
      return { ...state, ok: action.payload.ok, error: action.payload?.error ? action.payload.error : '' }

    default:
      return state;
  }
};

export default campaignReducer;