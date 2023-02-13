import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from './spinner.styles';

interface IProps {
  size?: number;
  className?: string;
}

const SpinnerComponent: React.FC<IProps> = props => (
  <Container className={props.className}>
    <CircularProgress size={props.size || 110} thickness={2} />
  </Container>
);

export default SpinnerComponent;
