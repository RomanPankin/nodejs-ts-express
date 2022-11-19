import express from 'express';
import { userRouter } from '../routes/user.route';

export function configureRoutes(app: express.Express) {
  app.use('/api/v1/user', userRouter);
}
