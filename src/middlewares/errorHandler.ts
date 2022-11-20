import { Request, NextFunction } from 'express';
import { ServerResponse, TypedResponse } from '../types';

export function errorHandler(
  err: Error,
  req: Request,
  res: TypedResponse<ServerResponse>,
  next: NextFunction
) {
  if (res.headersSent) {
    return next(err);
  }

  res.status(500);
  res.json({ errors: [err?.message || ''], success: false });
}
