import { Router } from 'express';
import RouteGroup from 'express-route-grouping';
import { USER_ROUTES } from './user';

const userRoute = new RouteGroup('', Router());
userRoute.group('/user', (route) => {
  route.use('', USER_ROUTES);
});

export const routes = new RouteGroup('', Router());
routes.group('/api/v1/', (route) => {
  route.use('', userRoute.export());
});
