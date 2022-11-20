import { checkSchema, ParamSchema } from 'express-validator';
import { User } from '../../models';

const userSchema: Partial<Record<keyof User, ParamSchema>> = {
  email: {
    errorMessage: 'Please provide email',
    isEmail: true,
    trim: true
  }
};

export const VALIDATE_USER_BODY = checkSchema(userSchema);
