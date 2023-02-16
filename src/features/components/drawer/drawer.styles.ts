import { Drawer } from "@material-ui/core";
import styled from "styled-components";
import ButtonComponent from "../button/button.component";

export const StyledDrawer = styled(Drawer)`
  .MuiPaper-root {
    width: ${({ theme }) => theme.sizes.drawerWidth};
    border-right: none;
  }

  .MuiListItemText-root .MuiTypography-root {
    font-size: ${({ theme }) => theme.sizes.fontSizeMedium};
  }
  
  .MuiListItem-root, .MuiListItem-root svg {
    color: ${({ theme }) => theme.colors.additionalTextColor2};
  }

  a.active {
    .MuiListItem-root, .MuiListItem-root svg {
      color: ${({ theme }) => theme.colors.additionalTextColor3};
    }
  }

  .MuiListItemIcon-root {
    min-width: 40px;
  }

  .collapse-title {
    color: ${({ theme }) => theme.colors.additionalTextColor3};

    .MuiTypography-root {
      font-weight: bold;
    }
  }

  .nested {
    padding-left: 23px;
  }

  .svg svg {
    width: 25px;
    height: 25px;
    fill: #bdbdbd;
  }

  .MuiCardActionArea-root {
    width: 50px;
    height: 50px;
    border-radius: 10px;

    .MuiCardContent-root {
      padding: 0;
    }
  }

  hr.padding {
    margin: 0 24px;
  }
`;

export const StyledCloseButton = styled(ButtonComponent)`
  && {
    position: absolute;
    min-width: 50px;
  }

  width: 50px;
  height: 50px;
  bottom: 0;
  left: 0;
  box-shadow: 0 8px 24px 0 rgb(0 0 0 / 15%);
  border-radius: 10px !important;
  margin: 24px!important;
`;

export const StyledLogo = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 16px;
`;

export const StyledUser = styled.div`
  height: 125px;
  padding: 24px;
  color: ${({ theme }) => theme.colors.additionalTextColor4};
  font-size: 14px;
  display: flex;
  align-items: end;

  > div {
    display: flex;
    align-items: center;

    > span {
      padding-left: 12px;
      text-overflow: ellipsis;
      display: block;
      width: 100%;
      min-width: 0;
      overflow: hidden;
      padding-bottom: 1px;
    }
  }

  label {
    width: 50px;
    height: 50px;
    position: absolute;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const StyledAvatar = styled.div`
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;

  svg {
    font-size: 36px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
`;

export const StyledAlertIcon = styled.div`
  width: 50px;
  height: 50px;
  background: #fff;
  position: absolute;
  top: -28px;
  border: ${({ theme }) => `1px solid ${theme.colors.additionalTextColor3}`};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledTitle = styled.div`
  color: ${({ theme }) => theme.colors.additionalTextColor4};
  padding: 24px;
  padding-bottom: 12px;
  font-size: 14px;
`;

export const StyledAlert = styled.div`
  position: absolute;
  bottom: 0;
  width: 175px;
  height: 94px;
  line-height: 23px;
  background-color: ${({ theme }) => theme.colors.light};
  margin: auto;
  right: 0;
  left: 0;
  bottom: 100px;
  border-radius: 5px;
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.15);
  font-size: 14px;
  padding: 24px;

  .buttons {
    display: flex;
    justify-content: end;    
    position: relative;
    margin: -12px;
    margin-bottom: 0;

    button svg {
      color: ${({ theme }) => theme.colors.additionalTextColor3};
    }
  }
`;
