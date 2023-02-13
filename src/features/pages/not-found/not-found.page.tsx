import React from 'react';
import { Redirect } from 'react-router-dom';
import { RouteChildrenProps } from 'react-router';
import { ROUTES } from '../../../common/constants';

const PageNotFound: React.FC<RouteChildrenProps<Record<string, never>, unknown>> = () => <Redirect to={ROUTES.home} />;

export default PageNotFound;
