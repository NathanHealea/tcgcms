import { Result, StatusEnum } from '../Core';
import { Auth } from '../Firebase';
import { auth } from '../Firebase/firebase.service';
import { IAuthentication } from './authentication.types';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
  UserCredential,
} from 'firebase/auth';

class Authentication implements IAuthentication {
  readonly _auth: Auth;

  constructor() {
    this._auth = auth;
  }

  signUpWithEmailAndPassword = (
    email: string,
    password: string
  ): Promise<Result<User>> => {
    let result = {} as Result<User>;

    return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(this._auth, email, password)
        .then((value: UserCredential) => {
          result.status = StatusEnum.SUCCESS;
          result.data = value.user;
        })
        .catch((error: any) => {
          console.error(`Authentication: ${error.code} - ${error.message}`);
          result.status = StatusEnum.FAILURE;
          result.error = error.message;
        })
        .finally(() => {
          resolve(result);
        });
    });
  };

  signUpWithGoogle = (): Promise<Result<User>> => {
    let result = {} as Result<User>;
    return new Promise((resolve, reject) => {
      let provider = new GoogleAuthProvider();

      signInWithPopup(this._auth, provider)
        .then((value: UserCredential) => {
          result.status = StatusEnum.SUCCESS;
          result.data = value.user;
        })
        .catch((error: any) => {
          console.error(`Authentication: ${error.code} - ${error.message}`);
          result.status = StatusEnum.FAILURE;
          result.error = error.message;
        })
        .finally(() => {
          resolve(result);
        });
    });
  };

  loginWithEmailAndPassword = (
    email: string,
    password: string
  ): Promise<Result<UserCredential>> => {
    let result = {} as Result<UserCredential>;
    return new Promise((resolve, rejects) => {
      signInWithEmailAndPassword(this._auth, email, password)
        .then((value: UserCredential) => {
          result.status = StatusEnum.SUCCESS;
          result.data = value;
        })
        .catch((error: any) => {
          console.error(`Authentication: ${error.code} - ${error.message}`);
          result.status = StatusEnum.FAILURE;
          result.error = error.message;
        })
        .finally(() => {
          resolve(result);
        });
    });
  };

  loginWithGoogle = (): Promise<Result<User>> => {
    let result = {} as Result<User>;
    return new Promise((resolve, reject) => {
      let provider = new GoogleAuthProvider();

      signInWithPopup(this._auth, provider)
        .then((value: UserCredential) => {
          result.status = StatusEnum.SUCCESS;
          result.data = value.user;
        })
        .catch((error: any) => {
          console.error(`Authentication: ${error.code} - ${error.message}`);
          result.status = StatusEnum.FAILURE;
          result.error = error.message;
        })
        .finally(() => {
          resolve(result);
        });
    });
  };

  logout = (): Promise<Result<void>> => {
    let result = {} as Result<void>;
    return new Promise((resolve, rejects) => {
      signOut(this._auth)
        .then(() => {
          result.status = StatusEnum.SUCCESS;
        })
        .catch((error) => {
          console.error(`Authentication: ${error.code} - ${error.message}`);
          result.status = StatusEnum.FAILURE;
          result.error = error.message;
        })
        .then(() => {
          resolve(result);
        });
    });
  };
}

const AuthenticationService = new Authentication();

export default AuthenticationService;
