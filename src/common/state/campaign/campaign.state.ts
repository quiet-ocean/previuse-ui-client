import { Campaigns } from "../../../swagger2Ts/interfaces";

export interface CampaignState {
  campaings?: Campaigns[];
}

const campaignInitialState: CampaignState = {
  campaings: undefined
};

export default campaignInitialState;