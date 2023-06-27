import { Campaigns, CampaignPermission } from "../../../swagger2Ts/interfaces";

export interface CampaignState {
  campaings?: Campaigns[];
  campaignPermissions?: CampaignPermission[];
  isOk: boolean;
  error: string;
}

const campaignInitialState: CampaignState = {
  campaings: undefined,
  campaignPermissions: undefined,
  isOk: true,
  error: '',
};

export default campaignInitialState;