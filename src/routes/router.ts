/** @format */

import React, { lazy } from 'react';

export interface Route {
  key?: string;
  path?: string;
  component?: React.ElementType;
  children?: Route[];
  redirect?: string;
  exact?: boolean;
  strict?: boolean;
}

const routers: Route[] = [
  {
    path: '/home',
    component: lazy(() => import('@pages/home/index')),
    exact: true,
  },
  {
    path: '/login',
    component: lazy(() => import('@pages/login/index')),
    exact: true,
  },
  {
    path: '/',
    redirect: '/home',
    exact: true,
  },
  {
    path: '/404',
    component: lazy(() => import('@pages/notFound')),
    exact: true,
  },
  {
    path: '*',
    redirect: '/404',
    exact: true,
  },
];

export default routers;
