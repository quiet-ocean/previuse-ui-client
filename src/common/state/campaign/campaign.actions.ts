import createAsyncAction from "../../../utils/createAsyncAction";
import { Campaigns, CampaignPermission } from "../../../swagger2Ts/interfaces";
import httpService from "../../services/http.service";
import endpoints from "../../../swagger2Ts/endpoints";

export enum CampaignActionTypes {
  LIST_CAMPAIGNS = "@@campaign/LIST_CAMPAIGNS",
  LIST_CAMPAIGN_PERMISSIONS = "@@campaign/LIST_CAMPAIGN_PERMISSIONS",
  CREATE_CAMPAIGN_PERMISSIONS = "@@campaign/CREATE_CAMPAIGN_PERMISSIONS",
  DELETE_CAMPAIGN_PERMISSIONS = "@@campaign/DELETE_CAMPAIGN_PERMISSIONS",
  SET_OK = '@@campaign/SET_OK',
}

export const ListCampaignsAction: () => Promise<Campaigns[]> = createAsyncAction(
  CampaignActionTypes.LIST_CAMPAIGNS,
  () => {
    return httpService.fetch({ url: `/campaigns/` });
  }
);

export const ListCampaignPermissionsAction: (campaignId: number) => Promise<CampaignPermission[]> = createAsyncAction(
  CampaignActionTypes.LIST_CAMPAIGN_PERMISSIONS,
  (campaignId) => {
    return httpService.fetch({ url: `/campaigns/permission/${campaignId}` });
  }
);

export const CreateCampaignPermissionAction: (args: CampaignPermission) => Promise<CampaignPermission> = createAsyncAction(
  CampaignActionTypes.CREATE_CAMPAIGN_PERMISSIONS,
  
  (args) => {
    return httpService.fetch({
      ...endpoints.campaigns_permission_create,
      body: JSON.stringify(args),
      contentType: 'application/json'
    })
  }
)

export const DeleteCampaignPermissionAction: (args: { id: number }) => Promise<CampaignPermission> = createAsyncAction(
  CampaignActionTypes.DELETE_CAMPAIGN_PERMISSIONS,
  (args) => {
    return new Promise(async (resolve) => {
      
      try {
        await httpService.fetch({
          method: 'delete',
          url: `/campaigns/CampaignUserPermission/${args.id}`
        })
        resolve({
          id: args.id,
        } as CampaignPermission)
      } catch (e) {
        throw e;
      }
    })
  }
)

export const SetOkAction = (payload: { ok: boolean, error?: string }) => ({
  type: CampaignActionTypes.SET_OK,
  payload,
})
 