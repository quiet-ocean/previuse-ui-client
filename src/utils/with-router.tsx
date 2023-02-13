import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

export interface IProps {
  children: JSX.Element;
}

const WithRouterHOC: React.FC<IProps> = props => {
  return <Router>{props.children}</Router>;
};

export default WithRouterHOC;
