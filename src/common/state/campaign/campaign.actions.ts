import createAsyncAction from "../../../utils/createAsyncAction";
import { Campaigns } from "../../../swagger2Ts/interfaces";
import httpService from "../../services/http.service";

export enum CampaignActionTypes {
  LIST_CAMPAIGNS = "@@campaign/LIST_CAMPAIGNS",
}

export const ListCampaignsAction: (clientId: number) => Promise<Campaigns[]> = createAsyncAction(
  CampaignActionTypes.LIST_CAMPAIGNS,
  (clientId: number) => {
    return httpService.fetch({ url: `/campaigns` });
  }
);

export const ListCampaignsByClientAction: (clientId: number) => Promise<Campaigns[]> =
  createAsyncAction(CampaignActionTypes.LIST_CAMPAIGNS, (clientId: number) => {
    return httpService.fetch({ url: `/campaigns/by_client/${clientId}` });
  });
