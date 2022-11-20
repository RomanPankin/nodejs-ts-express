import { User } from '../../models';
import { authClient } from '../auth0';

export async function signUp(user: User): Promise<User> {
  const response = await authClient.database.signUp({
    email: user.email,
    username: user.userName
  });

  return {
    email: response.email,
    userName: response.username
  };
}
