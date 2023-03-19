import { Result, StatusEnum } from '../Core';
import useAuthenticationService from './authentication.hook';
import { User } from 'firebase/auth';
import { useRouter } from 'next/router';
import { createContext, FC, useContext, useEffect, useState } from 'react';

interface IAuthenticationContext {
  user: User | null;
  signUpWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<string | void>;
  signUpWithGoogle: () => Promise<string | void>;
  loginWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<string | void>;
  loginWithGoogle: () => Promise<string | void>;

  logout: () => Promise<void>;
}

const authContext = createContext<IAuthenticationContext>(
  {} as IAuthenticationContext
);

interface AuthProviderProps {
  children: React.ReactNode;
}

const DEFAULT_ROUTE = '/dashboard';

export const AuthProvider: FC<AuthProviderProps> = (props) => {
  const { children } = props;
  const router = useRouter();
  const authentication = useAuthenticationService();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {}, [user]);

  const signUpWithEmailAndPassword = async (
    email: string,
    password: string
  ): Promise<string | void> => {
    const result: Result<User> =
      await authentication.signUpWithEmailAndPassword(email, password);

    if (result.status === StatusEnum.FAILURE) {
      console.error(result.error);
      return result.error;
    }
    setUser(result.data);
    router.push(DEFAULT_ROUTE);
  };

  const signUpWithGoogle = async (): Promise<string | void> => {
    const result: Result<User> = await authentication.signUpWithGoogle();

    if (result.status === StatusEnum.FAILURE) {
      console.error(result.error);
      return result.error;
    }
    setUser(result.data);
    router.push(DEFAULT_ROUTE);
  };

  const loginWithEmailAndPassword = async (
    email: string,
    password: string
  ): Promise<string | void> => {
    const result: Result<User> = await authentication.loginWithEmailAndPassword(
      email,
      password
    );

    if (result.status === StatusEnum.FAILURE) {
      console.error(result.error);
      return result.error;
    }
    setUser(result.data);
    router.push(DEFAULT_ROUTE);
  };

  const loginWithGoogle = async (): Promise<string | void> => {
    const result: Result<User> = await authentication.loginWithGoogle();

    if (result.status === StatusEnum.FAILURE) {
      console.error(result.error);
      return result.error;
    }
    setUser(result.data);
    router.push(DEFAULT_ROUTE);
  };

  const logout = async (): Promise<void> => {
    const result: Result<void> = await authentication.logout();
    if (result.status == StatusEnum.SUCCESS) {
      setUser(null);
      router.push('/');
    }
  };

  return (
    <authContext.Provider
      value={{
        user,
        signUpWithEmailAndPassword,
        signUpWithGoogle,
        loginWithEmailAndPassword,
        loginWithGoogle,
        logout,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
