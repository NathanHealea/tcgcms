import { Result } from '../Core';
import { UserCredential, UserInfo } from 'firebase/auth';

export interface IAuthentication {
  signUpWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<Result<User>>;

  signUpWithGoogle: () => Promise<Result<User>>;

  loginWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<Result<User>>;

  loginWithGoogle: () => Promise<Result<User>>;

  logout: () => Promise<Result<void>>;
}
