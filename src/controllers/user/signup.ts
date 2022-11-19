import { ServerResponse, TypedRequestBody } from '../../types';

export async function signUp(
  _request: TypedRequestBody<unknown>
): Promise<ServerResponse> {
  throw new Error('AAAAAAA');

  //res.json({ data: 'sinup' });
}
