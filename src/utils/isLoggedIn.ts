import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { ServerResponse } from '../types';

const NOT_AUTHORISED_RESPONSE: ServerResponse = {
  success: false,
  errors: ['Sign in to continue.']
};

export function isLoggedIn(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(
      token,
      process.env.JWT_SECRET,
      {
        audience: process.env.JWT_AUDIENCE,
        issuer: process.env.JWT_ISSUER,
        algorithms: ['HS256']
      },
      (err) => {
        if (err) {
          return res.status(401).send(NOT_AUTHORISED_RESPONSE);
        } else {
          next();
        }
      }
    );
  } else {
    return res.status(401).send(NOT_AUTHORISED_RESPONSE);
  }
}
