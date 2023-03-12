import { Auth } from 'firebase/auth';

export interface IAuthService {
  signUp: (email: string, password: string) => Promise<UserCredential>;
  signUpWithGoogle: () => void;
  signIn: (email: string, password) => void;
  signInWithGoogle: () => void;
  signOut: () => Promise<void>;
}
