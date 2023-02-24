import { Button } from '@material-ui/core';
import styled, { AnyStyledComponent } from 'styled-components';

const StyledContainer = styled.div`
  height: 100%;
  
`;

export const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const StyledInput = styled.div`
  height: 52px !important;
  display: flex;
  align-items: center;
  padding: 12px;

  input {
    padding: 0;
    padding-left: 12px;
    height: 40px;
    
  }

  .MuiTextField-root {
    border: 1px solid #E0E0E0;
    background-color: #e6e6e6;
    border-radius: 10px;
    width: 100%;
  }
`;

export const StyledMessages = styled.div`
  padding: 24px;
  height: calc(100% - 48px);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  overflow: auto;
`;

export const StyledMessage: AnyStyledComponent = styled.div`
  background-color: ${(props: any) => props.isLoggedInUser ? '#3DD88C4D' : '#F64F5933' };
  padding: 12px;
  border-radius: 10px;
  margin-bottom: 12px;
  width: ${(props: any) => props.isLoggedInUser ? 'calc(100% - 24px)' : 'calc(70% - 24px)' };
  display: flex;
  align-items: center;

  .MuiAvatar-root {
    margin-right: 12px;
  }

  span {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const StyledSendButton = styled(Button)`
  && {
    min-width: 40px;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.additionalTextColor3} !important;
    border-radius: 10px;
    color: #fff;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 18px;
  }
`;

export default StyledContainer;