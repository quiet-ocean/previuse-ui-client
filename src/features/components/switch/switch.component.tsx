import { Switch, SwitchProps } from '@material-ui/core';
import { Check, Clear } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';

import StyledContainer, {
  StyledLabel
} from './switch.styles';

export interface SwitchComponentProps {
  onChange?: (checked: boolean) => void;
  checked?: boolean;
  checkedIcon?: JSX.Element;
  icon?: JSX.Element;
  checkedColor?: string;
  color?: string;
  checkedText?: string;
  unCheckedText?: string;
  className?: string;
}

const SwitchComponent: React.FC<SwitchComponentProps> = (props) => {
  const [checked, setChecked] = useState<boolean>(props.checked || false);

  useEffect(() => {
    if (props.checked !== undefined) {
      setChecked(props.checked);
    }
  }, [props.checked])

  const onChange: SwitchProps['onChange'] = (e, value) => {
    setChecked(value);
    props.onChange && props.onChange(value);
  };

  return (
    <StyledContainer
      checked={checked}
      color={props.color}
      checkedColor={props.checkedColor}
    >
      <Switch
        checked={checked}
        onChange={onChange}
        icon={props.icon || <Check />}
        checkedIcon={props.checkedIcon || <Clear />}
        className={props.className}
      />
      <StyledLabel
        checked={checked}
        onClick={() => onChange({} as any, !checked)}
      >
        {checked ? props.checkedText || 'off' : props.unCheckedText || 'on'}
      </StyledLabel>
    </StyledContainer>
  );
}
 
export default SwitchComponent;