import { authClient } from '../auth0';
import { getProfile } from './getProfile';

export async function changePassword({
  accessToken
}: {
  accessToken: string;
}): Promise<boolean> {
  try {
    const currentUser = await getProfile({ accessToken });

    await authClient.requestChangePasswordEmail({
      email: currentUser.email,
      connection: process.env.AUTH0_USERS_DATABASE
    });

    return true;
  } catch (err) {
    throw new Error(`filed to change password: ${err.toString()}`);
  }
}
