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
async function changeEmail(
  request: TypedRequestBody<User>,
  response: TypedResponse<ServerResponse<boolean>>
) {
  const data = await UserService.changeEmail({
    accessToken: getAuthorizationToken(request),
    user: request.body
  });

  response.json({
    success: true,
    data
  });
}

const changeEmailValidation: Partial<Record<keyof User, ParamSchema>> = {
  email: {
    errorMessage: 'Please provide email',
    trim: true,
    isEmail: true
  }
};

export const changeEmailRoute = Router().post(
  '/changeemail',
  checkSchema(changeEmailValidation),
  executionHandler(changeEmail)
);
