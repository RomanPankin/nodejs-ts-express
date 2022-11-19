import { ServerResponse, TypedRequestBody, TypedResponse } from '../types';

export function executionHandler<T, D>(
  callback: (request: TypedRequestBody<T>) => Promise<ServerResponse<D>>
): (req: TypedRequestBody<T>, res: TypedResponse<ServerResponse>) => void {
  return async (
    req: TypedRequestBody<T>,
    res: TypedResponse<ServerResponse>
  ) => {
    try {
      const responseBody = await callback(req);
      res.json(responseBody);
    } catch (err) {
      res.status(500);
      res.json({ error: err?.message, success: false });
    }
  };
}
