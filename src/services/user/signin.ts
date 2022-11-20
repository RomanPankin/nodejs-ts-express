import { User } from '../../models';
import { authClient } from '../auth0';

export async function signIn(user: User): Promise<{ accessToken: string }> {
  try {
    const response = await authClient.passwordGrant({
      username: user.email,
      password: user.password,
      audience: process.env.JWT_AUDIENCE
    });

    return {
      accessToken: response.access_token
    };
  } catch (err) {
    throw new Error('User not found');
  }
}
