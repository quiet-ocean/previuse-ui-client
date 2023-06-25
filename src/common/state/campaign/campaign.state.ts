import { Campaigns, CampaignPermission } from "../../../swagger2Ts/interfaces";

export interface CampaignState {
  campaings?: Campaigns[];
  campaignPermissions?: CampaignPermission[];
}

const campaignInitialState: CampaignState = {
  campaings: undefined,
  campaignPermissions: undefined,
};

export default campaignInitialState;