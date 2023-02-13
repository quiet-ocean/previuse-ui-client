import MaterialButton from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import MaterialIconButton from '@material-ui/core/IconButton';
import styled, { AnyStyledComponent } from 'styled-components';
import DefaultTheme from '../../assets/themes/theme.default';

const properties = ({ theme }: { theme: typeof DefaultTheme }) => `
  font-weight: bold;

  && {
    font-size: ${theme.sizes.fontSizeRegular};
    font-family: inherit;
  }

  &:disabled{
    opacity: 0.5;
  }

  &.link{
    color: ${theme.colors.selectedMarkerBoxShadow};
  }

  &.positive, &.addWithText{
    ${theme.mixins.positive}
  }

  &.negative{
    ${theme.mixins.negative}
  }

  &.natural {
    ${theme.mixins.natural}
  }

  &.add{
    ${theme.mixins.positive}
    && {
      min-width: 36px;
      background-color: ${theme.colors.primaryBackgroundColor};
      padding: 0!important;
    }
  }

  &.addWithText{
    display: flex;
    justify-content: space-between;
    width: 125.7px;

    span{
      text-transform: capitalize;
      font-weight: bold;
      line-height: normal;
    }

    svg{
      font-size: 27px;
    }
  }
`;

export const Button = styled(MaterialButton)`
  height: 38px;

  && {
    padding: 0 13px;
    border-radius: 1px;
    text-transform: capitalize;
    ${properties}
  }
`;

export const FabButton: AnyStyledComponent = styled(Fab)`
  && {
    color: #fff;
    padding: 0 13px;
    ${properties}
  }
`;

export const IconButton: AnyStyledComponent = styled(MaterialIconButton)`
  width: 45px;
  height: 45px;

  &.clear{
    svg{
      position: absolute;
      font-size: 30px;
      font-weight: lighter;
      color: ${({ theme }) => theme.colors.primaryIconColor};
    }
  }

  ${properties}
`;
