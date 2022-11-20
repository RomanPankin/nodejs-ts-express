import { Request, Response } from 'express';
import { ServerResponse } from './serverResponse';

export type TypedResponse<T> = Omit<Response, 'json' | 'status'> & {
  json(data: T): TypedResponse<T>;
} & { status(code: number): TypedResponse<T> };

export interface TypedRequestBody<T> extends Request {
  body: T;
}

export type CustomerRoute<T, D> = {
  method: string;
  path: string;
  handler: (data: T) => Promise<ServerResponse<D>>;
};
