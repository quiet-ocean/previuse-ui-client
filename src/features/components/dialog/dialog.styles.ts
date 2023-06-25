import styled, { AnyStyledComponent } from 'styled-components';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';

const StyledDialog = styled(Dialog)`
  font-size: ${({ theme }) => theme.sizes.fontSizeRegular};

  .root{
    background-color: ${({ theme }) => theme.colors.lightBackgroundColor};
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: 0;
  }

  .backdrop{
    background-color: ${({ theme }) => theme.colors.backdropBackgroundColor};
    transition: ${({ theme }) => theme.transitionRate};
  }
`;

export const StyledTitle = styled(DialogTitle)`
  padding: 0 16px!important;
  
  h2:after{
    content: "";
    display: table;
    clear: both;
  }

  h2{
    color: ${({ theme }) => theme.colors.primaryTextColor};
    font-size: ${({ theme }) => theme.sizes.fontSizeLarge};
    font-weight: bold;
    text-transform: capitalize;
    text-align: center;
    line-height: 55px;
    height: 55px;
    
    > div{
      display: inline-block;      
    }

    svg {
      color: ${({ theme }) => theme.colors.primaryIconColor};
    }
  }
`;

export const StyledTitleText = styled.div`
  overflow: hidden;
  max-width: 392px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const StyledCloseButtonContainer: AnyStyledComponent = styled.div`
  position: absolute;
  right: 0;
  margin: ${({ theme }) => `0 ${theme.spacing.smallPadding}`};
`;

export const StyledDialogContent = styled(DialogContent)`
  padding: ${({ theme }) => theme.spacing.framePadding};
`;

export default StyledDialog;
