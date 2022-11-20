import { Request, NextFunction } from 'express';
import { ServerResponse, TypedResponse } from '../types';

export function page404Handler(
  req: Request,
  res: TypedResponse<ServerResponse>,
  next: NextFunction
) {
  if (res.headersSent) {
    return next();
  }

  res.status(404);
  res.json({ errors: ['Page not found'], success: false });
}
