import { RouteObject, redirect } from 'react-router-dom';
import { routeHealth } from './app/components/health/health.route';
import { routeHome } from './app/components/home/home.route';
import { ROUTE_HOME } from './constants/routes';
import authService from './services/auth.service';

const router: Array<RouteObject> = [
  {
    loader() {
      if (!authService.isLoggedIn()) {
        return redirect(ROUTE_HOME);
      }
      return null;
    },
    children: [routeHealth],
  },
  routeHome,
];

export default router;
