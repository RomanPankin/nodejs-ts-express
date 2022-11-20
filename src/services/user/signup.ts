import { User } from '../../models';
import { authClient } from '../auth0';

export async function signUp(user: User): Promise<User> {
  try {
    const response = await authClient.database.signUp({
      email: user.email,
      password: user.password,
      verify_email: true,
      connection: process.env.AUTH0_USERS_DATABASE
    });

    return {
      id: response._id,
      email: response.email
    };
  } catch (err) {
    throw new Error(`filed to create a user: ${err.toString()}`);
  }
}
