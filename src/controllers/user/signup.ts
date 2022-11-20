import { Router } from 'express';
import { checkSchema, ParamSchema } from 'express-validator';
import { executionHandler } from '../../middlewares';
import { User } from '../../models';
import { UserService } from '../../services';
import { ServerResponse, TypedRequestBody, TypedResponse } from '../../types';

/**
 * Sign up the user
 */
async function signUp(
  request: TypedRequestBody<User>,
  response: TypedResponse<ServerResponse<User>>
) {
  const user = await UserService.signUp(request.body);

  response.json({
    success: true,
    data: user
  });
}

const signUpValidation: Partial<Record<keyof User, ParamSchema>> = {
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

export const signUpRoute = Router().post(
  '/signup',
  checkSchema(signUpValidation),
  executionHandler(signUp)
);
