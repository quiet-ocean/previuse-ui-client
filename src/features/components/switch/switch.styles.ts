import styled, { AnyStyledComponent } from 'styled-components';

const size = () => `
  width: 153px;
  height: 41px;
`;

const StyledContainer: AnyStyledComponent = styled.div`
  ${size};
  position: relative;

  .MuiSwitch-switchBase {
    padding: 0;
    top: 4px;
    left: 4px;

    &.Mui-checked {
      transform: translateX(111px);

      input {
        left: -104px;
      }
    }
  }

  input { 
    ${size};
    left: -4px;
  }

  .MuiSwitch-track {
    background-color: ${(props: any) => props.color as string || props.theme.colors.successColor as string};
  }

  .Mui-checked + .MuiSwitch-track {
    background-color: ${(props: any) => props.checkedColor as string || props.theme.colors.errorColor as string} !important;
  }

  .MuiSwitch-track, .MuiSwitch-root {
    ${size};
    opacity: 1 !important;
    padding: 0;
    border-radius: 10px;
  }

  .MuiSwitch-thumb, .MuiIconButton-label {
    width: 33px;
    height: 33px;
    border-radius: 10px;
    background-color: #fff;
  }

  .MuiIconButton-label svg {
    color: #000;
  }
`;

export const StyledLabel: AnyStyledComponent = styled.div`
  position: absolute;
  top: 10px;
  color: #fff;
  left: ${(props: any) => props.checked ? '8px' : 'auto'};
  right: ${(props: any) => props.checked ? 'auto' : '8px'};
  transition: ${({ theme }) => theme.transitionRate};
  font-size: 18px;
  text-transform: capitalize;
  white-space: nowrap;

  &:hover { 
    cursor: pointer;
  }
`;

export default StyledContainer;