import { expressjwt } from 'express-jwt';
import { expressJwtSecret, GetVerificationKey } from 'jwks-rsa';
import path from 'path';
import fetch from 'node-fetch-commonjs';

export const authHandler = expressjwt({
  secret: expressJwtSecret({
    cache: true,
    cacheMaxAge: 600000,
    jwksUri: path.join(process.env.JWT_ISSUER, '/.well-known/jwks.json'),

    fetcher: async (url) => {
      return (await (await fetch(url)).json()) as { keys };
    }
  }) as GetVerificationKey,

  audience: process.env.JWT_AUDIENCE,
  issuer: process.env.JWT_ISSUER,
  algorithms: ['RS256']
});
