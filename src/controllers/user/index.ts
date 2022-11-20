import { changeEmailRoute } from './changeEmail';
import { changePasswordRoute } from './changePassword';
import { profileRoute } from './profile';
import { resetPasswordRoute } from './resetPassword';
import { signInRoute } from './signin';
import { signUpRoute } from './signup';

export const USER_ROUTES = [
  signUpRoute,
  signInRoute,
  profileRoute,
  changePasswordRoute,
  changeEmailRoute,
  resetPasswordRoute
];
