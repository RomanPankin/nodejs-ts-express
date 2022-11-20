import fetch from 'node-fetch-commonjs';
import jwt_decode from 'jwt-decode';
import path from 'path';

import { User } from '../../models';

export async function getProfile({
  accessToken
}: {
  accessToken: string;
}): Promise<User> {
  try {
    const { sub } = jwt_decode<{ sub: string }>(accessToken);

    const url = path.join(process.env.JWT_AUDIENCE, `/users/${sub}`);
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${accessToken}`
      }
    });

    const data = (await response.json()) as { user_id: string; email: string };

    return {
      id: data.user_id,
      email: data.email
    };
  } catch (err) {
    throw new Error('User not found');
  }
}
