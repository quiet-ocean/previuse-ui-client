import { Grid } from '@material-ui/core';
import styled, { AnyStyledComponent } from 'styled-components';
import theme from '../../../assets/themes/theme.default';

const StyledContainer = styled.div`
  padding: 24px;
  height: calc(100% - 48px);

  label {
    padding-bottom: 12px;
  }

  a {
    color: ${({ theme }) => theme.colors.additionalTextColor3};
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.additionalTextColor3}`};

    &:hover {
      cursor: pointer;
    }
  }

  hr {
    background-color: ${({ theme }) => theme.colors.secondaryBorderColor};
  }

  .budget {
    display: flex;

    div {
      margin-right: 8px;
    }
  }

  .MuiGrid-root {
    height: auto !important;
  }

  .external-link {
    width: 100%;
  }

  .MuiBox-root {
    margin: 24px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .flex {
      display: flex;
    }

    &.column {
      flex-direction: column;
      align-items: baseline;

      > div {
        width: 100%;
      }

      label {
        padding-bottom: 12px;
      }
    }

    &.clean {
      .MuiInputBase-root {
        border: none;
        width: auto;
      }
    }

    label {
      padding: 0;
    }

    button {
      text-transform: capitalize;
      background-color: ${({ theme }) => theme.colors.secondaryBorderColor};
      color: ${({ theme }) => theme.colors.additionalTextColor4};
      border-radius: 6px;
      height: 30px;
      font-weight: normal;
      font-size: 12px;

      label {
        position: absolute;
        width: 100%;
        height: 100%;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;

export const StyledActivationState: AnyStyledComponent = styled.div`
  background-color: ${(props: any) => props.active ? theme.colors.successColor : theme.colors.errorColor};
  height: 30px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  color: ${(props: any) => props.active ? theme.colors.primaryTextColor : '#fff'};
`;

export const StyledDates: AnyStyledComponent = styled.div`
  display: flex;
  width: 100%;
  
  > div {
    width: 50%;
    color: ${({ theme }) => theme.colors.green};
  }

  label {
    padding-bottom: 12px !important;
  }
`;

export const StyledFileList: AnyStyledComponent = styled(Grid)`
  display: flex;
  padding-bottom: 21px;
  line-height: 32px;

  .MuiGrid-item {
    display: flex;
    align-items: center;

    &:nth-child(2n) svg path {
      fill: ${({ theme }) => theme.colors.green};
    }

    svg {
      padding-right: 6px;
      min-width: 25px;
    }

    span {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.additionalTextColor4};
    }
  }
`;

export default StyledContainer;