import createAsyncAction from "../../../utils/createAsyncAction";
import { Campaigns } from "../../../swagger2Ts/interfaces";
import httpService from "../../services/http.service";

export enum CampaignActionTypes {
  LIST_CAMPAIGNS = "@@campaign/LIST_CAMPAIGNS",
}

export const ListCampaignsAction: () => Promise<Campaigns[]> = createAsyncAction(
  CampaignActionTypes.LIST_CAMPAIGNS,
  () => {
    return httpService.fetch({ url: `/campaigns/` });
  }
);
