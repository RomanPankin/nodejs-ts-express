import { Router } from 'express';
import { authHandler, executionHandler } from '../../middlewares';
import { User } from '../../models';
import { UserService } from '../../services';
import { ServerResponse, TypedRequestBody, TypedResponse } from '../../types';
import { getAuthorizationToken } from '../../utils';

/**
 * Returns information about the user by access_token
 */
async function getProfile(
  request: TypedRequestBody<unknown>,
  response: TypedResponse<ServerResponse<User>>
) {
  const data = await UserService.getProfile({
    accessToken: getAuthorizationToken(request)
  });

  response.json({
    success: true,
    data
  });
}

export const profileRoute = Router().get(
  '/profile',
  authHandler,
  executionHandler(getProfile)
);
