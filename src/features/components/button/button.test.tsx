import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import HomeIcon from '@material-ui/icons/Home';
import ButtonComponent, { IButtonProps } from './button.component';
import WithThemeHOC from '../../../utils/with-theme';

const onClick = jest.fn();

const Button = (props: IButtonProps) => (
  <WithThemeHOC>
    <ButtonComponent
      {...props}
      onClick={onClick}
    />
  </WithThemeHOC>
);

test('should fire the onclick callback', () => {
  const { container } = render(<Button text="hello" />);
  const button = container.querySelector('button');

  if (button) {
    fireEvent.click(button);
  }

  expect(onClick).toHaveBeenCalled();
});

test('should render the provided icon', () => {
  const { container } = render(<Button text="hello" type="icon" iconElement={<HomeIcon />} />);

  expect(container.querySelector('svg')).toBeTruthy();
});

test('should render default icons based on theme props', () => {
  const { rerender, container } = render(<Button type="icon" theme="delete" />);

  expect(container.querySelector('svg')).toBeTruthy();

  rerender(<Button type="icon" theme="addWithText" />);

  expect(container.querySelector('svg')).toBeTruthy();

  rerender(<Button type="icon" theme="clear" />);

  expect(container.querySelector('svg')).toBeTruthy();

  rerender(<Button type="icon" theme="add" />);

  expect(container.querySelector('svg')).toBeTruthy();
});
