import { Router } from 'express';
import { checkSchema, ParamSchema } from 'express-validator';
import { executionHandler } from '../../middlewares';
import { User } from '../../models';
import { UserService } from '../../services';
import { ServerResponse, TypedRequestBody, TypedResponse } from '../../types';

async function signIn(
  request: TypedRequestBody<User>,
  response: TypedResponse<ServerResponse<{ accessToken: string }>>
) {
  const data = await UserService.signIn(request.body);

  response.json({
    success: true,
    data
  });
}

const signInValidation: Partial<Record<keyof User, ParamSchema>> = {
  email: {
    errorMessage: 'Please provide email',
    trim: true,
    isEmail: true
  },
  password: {
    errorMessage: 'Please provide password',
    trim: true
  }
};

export const signInRoute = Router().post(
  '/signin',
  checkSchema(signInValidation),
  executionHandler(signIn)
);
