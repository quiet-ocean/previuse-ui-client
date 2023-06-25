import styled, { AnyStyledComponent } from 'styled-components';

const StyledContainer: AnyStyledComponent = styled.div`
  color: #000;
  display: flex;
  height: 90px;
  justify-content: space-between;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.secondaryBorderColor}`};
  left: ${(props: any) => props.hasDrawer ? '0' : '187px'};
  width: ${(props: any) => props.hasDrawer ? '100%' : 'calc(100% - 187px)'};
  align-items: center;
  transition: ${({ theme }) => theme.transitionRate};
  color: ${({ theme }) => theme.colors.additionalTextColor2};
  z-index: 2;
  position: relative;
  font-size: 24px;
  font-weight: 400;

  .on {
    color: #BDBDBD;
  }

  .off {
    color: #fff;
  }

  .checked {
    .on {
      color: #fff;
    }

    .off {
      color: #BDBDBD !important;
    }
  }
`;

export const StyledSwitchButton = styled.div`
  font-size: 18px;
`;

export const StyledActions = styled.div`
  display: flex;

  button {
    margin-left: 12px;
    width: auto !important;
    font-size: 14px !important;
    font-weight: 400 !important;

    div {
      margin-left: 8px;
      text-transform: capitalize;
    }

    svg {
      font-size: 18px;
    }
  }

  button.pause {
    background-color: #F3B001 !important;
    
    svg {
      color: white !important;
    }
  }

  button.approved {
    background-color: ${({ theme }) => theme.colors.successColor} !important;
    color: ${({ theme }) => theme.colors.primaryWhite} !important;
  }

  .MuiIconButton-label svg {
    color: ${({ theme }) => theme.colors.additionalTextColor2};
  }

  [class*=switchstyles__StyledContainer] {
    margin-left: 12px;
  }

  .themed {
    .MuiButtonBase-root {
      width: 50%;
    }

    .MuiIconButton-label {
      width: 100%;
    }

    .Mui-checked {
      transform: translateX(calc(100% - 9px));
    }
  }
`;

export default StyledContainer;