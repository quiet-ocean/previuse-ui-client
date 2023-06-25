import React, { FC } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import ClearIcon from '@material-ui/icons/Clear';
import { ButtonProps } from '@material-ui/core';
import { ButtonThemeType, ButtonType, ButtonHtmlType } from './button.constants';
import { Button, FabButton, IconButton } from './button.styles';

type MuiButtonProps = ButtonProps & { component?: string };

type ComponentType = ((props: MuiButtonProps) => JSX.Element) | JSX.Element | undefined;

const ELEMENTS_DICT: { [k in ButtonType]: ComponentType } = {
  button: Button,
  fab: FabButton,
  icon: IconButton
};

const ICON_DICT: Partial<{ [k in ButtonThemeType]: ComponentType }> = {
  add: <AddIcon />,
  addWithText: <AddIcon />,
  clear: <ClearIcon />,
  delete: <DeleteIcon />
};

export interface IButtonProps {
/** set this to true in order to disable the button */
  disabled?: boolean;
  /** Which theme to enforce. if not provided none is used */
  theme?: ButtonThemeType;
  /** the icon will be added inside the button */
  iconElement?: JSX.Element;
  /** button inner text */
  text?: string | JSX.Element;
  /** button element class name */
  className?: string;
  /** HTML button types */
  buttonType?: ButtonHtmlType;
  /** Which button to display */
  type?: ButtonType;
  /** Html title attribute */
  title?: string;
  /** Call back which fires on each button press */
  onClick?: (e: React.BaseSyntheticEvent) => unknown;
  /** Set the html container tag */
  component?: 'button' | 'div' | 'span';
}

export const ButtonComponent: FC<IButtonProps> = (props: IButtonProps) => {
  const ButtonElement = props.type ? ELEMENTS_DICT[props.type] : undefined;
  const icon = props.iconElement || (props.theme ? ICON_DICT[props.theme] : undefined);

  const Component = ButtonElement as (props: MuiButtonProps) => JSX.Element;

  return (
    <Component
      disabled={props.disabled}
      onClick={props.onClick && props.onClick}
      className={`${props.theme} ${props.className}`}
      type={props.buttonType}
      component={props.component}
      title={props.title}
    >
      <>
        {icon}
        {props.text}
      </>
    </Component>
  );
};

ButtonComponent.defaultProps = {
  type: 'button',
  component: 'button',
  buttonType: 'button'
};

export default ButtonComponent;
