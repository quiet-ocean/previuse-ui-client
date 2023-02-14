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
`;

export const StyledActions = styled.div`
  display: flex;

  button {
    margin-left: 12px;
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