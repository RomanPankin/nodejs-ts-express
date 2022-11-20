import { Router } from 'express';
import { executionHandler } from '../../middlewares';
import { User } from '../../models';
import { UserService } from '../../services';
import { ServerResponse, TypedRequestBody } from '../../types';
import { VALIDATE_USER_BODY } from '../validation';

async function signUp(
  request: TypedRequestBody<User>
): Promise<ServerResponse<null>> {
  //const response = await UserService.signUp(user);
  console.log(request.body);

  return {
    success: true,
    data: null
  };
}

export const signUpRoute = Router().post(
  '/signup',
  VALIDATE_USER_BODY,
  executionHandler(signUp)
);
