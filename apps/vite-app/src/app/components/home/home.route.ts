import { ROUTE_HOME } from '@/constants/routes';
import { RouteObject } from 'react-router-dom';
import Page from './home.page';

export const routeHome: RouteObject = {
  path: ROUTE_HOME,
  Component: Page,
};
