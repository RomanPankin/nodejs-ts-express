import express from 'express';
import { userController } from '../controllers';
import { executionHandler } from '../middlewares/executionHandler';

export const userRouter = express.Router();

userRouter.get('/signup', executionHandler(userController.signUp));
