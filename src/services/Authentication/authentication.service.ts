import { IAuthService } from './authentication.types';
import {
  Auth,
  AuthCredential,
  createUserWithEmailAndPassword,
  signInWithCredential,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from 'firebase/auth';

class AuthService implements IAuthService {
  #auth: Auth;
  constructor(auth: Auth) {
    this.#auth = auth || ({} as Auth);
  }

  signUp = async (email: string, password: string): Promise<UserCredential> => {
    let credentials = {} as UserCredential;

    try {
      credentials = await createUserWithEmailAndPassword(
        this.#auth,
        email,
        password
      );
    } catch (error: any) {
      // TODO: Implement Logging Service
      console.error(error.code);
    }

    return credentials;
  };

  signUpWithGoogle = () => {};

  signIn = async (email: string, password: any): Promise<UserCredential> => {
    let credentials = {} as UserCredential;
    try {
      credentials = await signInWithEmailAndPassword(
        this.#auth,
        email,
        password
      );
    } catch (error: any) {
      console.log(error);
    }
    return credentials;
  };

  signInWithGoogle = () => {};

  signOut = async (): Promise<void> => {
    try {
      await signOut(this.#auth);
    } catch (error: any) {
      console.log(error);
    }
  };
}

export default AuthService;
