import { Router } from 'express';
import { checkSchema, ParamSchema } from 'express-validator';
import { executionHandler } from '../../middlewares';
import { User } from '../../models';
import { UserService } from '../../services';
import { ServerResponse, TypedRequestBody, TypedResponse } from '../../types';
import { getAuthorizationToken } from '../../utils';

/**
 * Sends verification email to reset password
 */
async function changePassword(
  request: TypedRequestBody<User>,
  response: TypedResponse<ServerResponse<boolean>>
) {
  const data = await UserService.changePassword({
    accessToken: getAuthorizationToken(request)
  });

  response.json({
    success: true,
    data
  });
}

export const changePasswordRoute = Router().post(
  '/changepassword',
  executionHandler(changePassword)
);
