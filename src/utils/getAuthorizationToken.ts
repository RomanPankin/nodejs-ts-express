import { Request } from 'express';

export function getAuthorizationToken(request: Request) {
  const values = request.headers.authorization?.split(' ');
  return values?.length === 2 && values[0] === 'Bearer' ? values[1] : null;
}
