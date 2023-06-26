import React, { useState, useEffect, ChangeEvent, useContext, useRef } from "react";
import { TextField, IconButton, Chip, Divider, FormControl } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { Add, Delete } from "@material-ui/icons";

import ButtonComponent from "../button/button.component";

import StyledContainer, {
  StyledContent,
  StyledInputWrapper,
  StyledFooter,
  StyledMemberContainer,
  StyledMembers,
  StyledDividerWrapper
} from './campaign-permissions.style'
import { StyledVerticalCenter } from "../styled-elements";
import { connect } from "react-redux";
import { RootState } from "../../../common/models";
import { CampaignPermission, UserCreation } from "../../../swagger2Ts/interfaces";
import { CampaignUserPermission } from "../../../swagger2Ts/enums";
import { AnyAction, Dispatch, bindActionCreators } from "redux";
import { DeleteCampaignPermissionAction, CreateCampaignPermissionAction } from "../../../common/state/campaign/campaign.actions";

import { ServicesContext } from '../../../common/contexts';
import { IServices } from '../../../common/services/initiate';

interface CampaignMemberComponentProps {
  email?: string;
  permission?: CampaignUserPermission
  onDelete: () => void;
}

interface CampaignMembersComponentProps {
  permissions?: CampaignPermission[],
  users?: UserCreation[],
  deleteCampaignPermission: (args: {id: number}) => Promise<CampaignPermission>;
  createCampaignPermission: (args: CampaignPermission) => Promise<CampaignPermission>;
}

const CampaignPermissionComponent: React.FC<CampaignMemberComponentProps> = (props) => (
  <StyledMemberContainer>
    <div>
      <ButtonComponent theme='natural' text={props.email && props.email.at(0)} />
      <StyledVerticalCenter>
        <p className='post-subtitle'>{props.email}</p>
      </StyledVerticalCenter>
    </div>
    <div>
      <StyledVerticalCenter>
        <Chip size='small' label={props.permission as string} />
      </StyledVerticalCenter>
      <IconButton size='small' onClick={props.onDelete}>
        <Delete />
      </IconButton>
    </div>
  </StyledMemberContainer>
)

const CampaignPermissionsComponent: React.FC<CampaignMembersComponentProps & { campaignId?: number }> = (props) => {
  /* eslint-disable no-console */
  console.log(props)
  const autocompleteRef = useRef<HTMLInputElement>(null)
  const services: IServices | undefined = useContext(ServicesContext);

  const [userId, setUserId] = useState<number | null>()
  const [value, setValue] = useState<string>()
  const [options, setOptions] = useState<string[]>([])
  const [permission, setPermission] = useState<CampaignUserPermission>(CampaignUserPermission.owner)

  useEffect(() => {
    console.log(userId, permission)
  }, [userId, permission])

  useEffect(() => {
    if (userId)
      setValue(props.users?.find((user) => user.id === userId)?.email)
    // else setValue('')
  }, [userId])

  useEffect(() => {
    setValue(options[0])
  }, [options])

  useEffect(() => {
    console.log('updated data')
    setOptions(props.users?.filter((user) => !props.permissions?.find((pm) => pm.related_user?.toString() === user.email)).map((user: UserCreation) => user.email) || [])
  }, [props.permissions, props.users])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPermission(event.target.value as CampaignUserPermission)
  }
  
  const handleEmailChange = (event: ChangeEvent<{}>, value: string | null) => {
    console.log(value)
    setUserId(props.users?.find((user: UserCreation) => user.email === value)?.id)
  }

  const onCreatePermission = async () => {
    
    if (userId && permission && props.campaignId) {
      services?.loading.actions.start()
      console.log('create permission: ', userId, permission, props.campaignId)
      await props.createCampaignPermission({
        campaign_user_permission: permission,
        related_campaign: props.campaignId,
        related_user: userId,
      })
      services?.loading.actions.stop()
    }
    if (autocompleteRef?.current !== null) {
      console.log(autocompleteRef?.current)
      // autocompleteRef?.current?.querySelector('input')?.focus()
      const el: HTMLButtonElement = autocompleteRef?.current?.getElementsByClassName('MuiAutocomplete-clearIndicator')[0] as HTMLButtonElement;
      console.log(el)
      if (el) el.click()
    }
  }

  const onDeletePermission = async (id?: number) => {
    if (id) {
      console.log('delete permission: ', id)
      services?.loading.actions.start()
      await props.deleteCampaignPermission({ id })
      services?.loading.actions.stop()
    }
  }

  return (
    <StyledContainer>
      <StyledContent>
        <StyledInputWrapper>
          <div>
            <FormControl fullWidth>
              <Autocomplete<string>
                disablePortal
                // value={value}
                ref={autocompleteRef}
                id="combo-box-demo"
                options={options}
                onChange={handleEmailChange}
                renderInput={(params: any) => (
                  <TextField {...params} value={value} onChange={handleEmailChange} />
                )}
              />
            </FormControl>
            <StyledVerticalCenter>
              <FormControl>
                <TextField
                  id="outlined-select-currency-native"
                  select
                  value={permission}
                  className='rounded-4'
                  SelectProps={{
                    native: true,
                  }}
                  onChange={handleChange}
                >
                  <option value={CampaignUserPermission.owner}>owner</option>
                  <option value={CampaignUserPermission.edit}>edit</option>
                  <option value={CampaignUserPermission.comment}>comment</option>
                  <option value={CampaignUserPermission.view}>view</option>
                </TextField>
              </FormControl>
            </StyledVerticalCenter>
          </div>
          
          <ButtonComponent onClick={onCreatePermission} theme='natural' type='icon' iconElement={<Add />} />
        </StyledInputWrapper>
        <StyledMembers>
          {props.permissions?.map((permission: CampaignPermission, key: number) => (
            <CampaignPermissionComponent
              key={key}
              email={
                typeof permission?.related_user === 'number' ? 
                  props.users?.find((user: UserCreation) => user.id === permission.related_user)?.email : 
                  permission?.related_user
              }
              permission={permission?.campaign_user_permission}
              onDelete={() => onDeletePermission(permission?.id)} 
            />
          ))}
        </StyledMembers>
      </StyledContent>
      <StyledDividerWrapper>
        <Divider />
      </StyledDividerWrapper>
      <StyledFooter>
        <p>Only owner can create, duplicate, edit campaigns and content</p>
      </StyledFooter>
    </StyledContainer>
  )
}

const mapStateToProps = (state: RootState) => ({
  permissions: state.app.campaign.campaignPermissions,
  users: state.app.auth.users,
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction, RootState>) => ({
  deleteCampaignPermission: bindActionCreators(DeleteCampaignPermissionAction, dispatch),
  createCampaignPermission: bindActionCreators(CreateCampaignPermissionAction, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(CampaignPermissionsComponent);
