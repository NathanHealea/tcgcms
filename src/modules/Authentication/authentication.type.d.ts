import { User } from '../User';

/**
 * Basic Authentication
 */
export type BasicCredentials = {
  email: string;
  password: string;
};

/**
 * Registration with @see Basic credentials
 */
export type Registration<T = Basic> = {
  username: string;
  firstName: string;
  lastName: string;
  credentials: T;
};

/**
 * User information provided by provider
 */
export type ProviderUser = {
  uid: string;
  provider: {
    name: string;
  };
};

/**
 * Interface for authentication providers
 */
export interface IAuthProvider {
  name: string;
  authenticate: () => Promise<ProviderUser>;
}

/**
 * Interface for Authentication Service
 */
interface IAuthentication {
  signUp<T>(): (registration: Registration, credentials: T) => Promise<User>;
  signUpWithProvider<T = null, P extends IAuthProvider>(): (
    registration: Registration<T>,
    provider: P
  ) => Promise<User>;
}
