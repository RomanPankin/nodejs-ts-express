export type ServerResponse<T = unknown> = {
  success: boolean;
  errors?: string[];
  data?: T;
};
