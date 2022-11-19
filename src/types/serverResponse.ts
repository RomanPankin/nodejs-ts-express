export type ServerResponse<T = unknown> = {
  success: boolean;
  error?: string;
  data?: T;
};
