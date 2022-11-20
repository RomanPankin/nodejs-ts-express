import { ManagementClient } from 'auth0';
import { User } from '../../models';
import { getProfile } from './getProfile';

export async function changeEmail({
  accessToken,
  user
}: {
  accessToken: string;
  user: User;
}): Promise<boolean> {
  try {
    const currentUser = await getProfile({ accessToken });

    const managementClient = new ManagementClient({
      token: accessToken,
      domain: process.env.AUTH0_DOMAIN,
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET
    });

    await managementClient.updateUser(
      {
        id: currentUser.id
      },
      {
        email: user.email
      }
    );

    return true;
  } catch (err) {
    throw new Error(`filed to change email: ${err.toString()}`);
  }
}
