import { ROUTE_HEALTH } from '@/constants/routes';
import { RouteObject } from 'react-router-dom';
import Page from './health.page';

export const routeHealth: RouteObject = {
  path: ROUTE_HEALTH,
  Component: Page,
};
