import { NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { ServerResponse, TypedRequestBody, TypedResponse } from '../types';
import { errorHandler } from './errorHandler';

export function executionHandler<T, D>(
  handler: (request: TypedRequestBody<T>) => Promise<ServerResponse<D>>
): (
  req: TypedRequestBody<T>,
  res: TypedResponse<ServerResponse>,
  next: NextFunction
) => void {
  return async (
    req: TypedRequestBody<T>,
    res: TypedResponse<ServerResponse>,
    next: NextFunction
  ) => {
    try {
      // validation
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array().map((x) => x.msg as string),
          success: false
        });
      }

      // controller
      const responseBody = await handler(req);
      res.json(responseBody);
    } catch (err) {
      errorHandler(err, req, res, next);
    }
  };
}
