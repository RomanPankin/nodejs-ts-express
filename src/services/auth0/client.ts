import { AuthenticationClient } from 'auth0';

export const authClient = new AuthenticationClient({
  domain: `${process.env.AUTH0_ACCOUNT}.auth0.com`,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET
});
