/** @format */

import React, { lazy } from 'react';
import BasicLayout from '@layout/BasicLayout';

export interface Route {
  path: string;
  component?: React.ElementType;
  children?: Route[];
  redirect?: string;
  push?: boolean;
  exact?: boolean;
}

const routers: Route[] = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/',
        redirect: '/home',
        exact: true,
        children: [
          {
            path: '/home',
            component: lazy(() => import('@pages/home/index')),
            exact: true,
          },
        ],
      },
    ],
  },
];

export default routers;
