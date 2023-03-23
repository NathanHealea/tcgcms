import { IUserService, User, UserService } from '../User';
import {
  BasicCredentials,
  IAuthentication,
  IAuthProvider,
  Registration,
} from './authentication.type';
import { FirebaseService, IFirebaseService } from '@/services/Firebase';
import { ILogService, LogService } from '@/services/Log';
import { createUserWithEmailAndPassword, UserCredential } from 'firebase/auth';

class AuthenticationService implements IAuthentication {
  private readonly _userService: IUserService;
  private readonly _loggerService: ILogService;
  private readonly _firebaseService: IFirebaseService;
  constructor(userService: IUserService, firebaseService: IFirebaseService) {
    this._userService = userService;
    this._firebaseService = firebaseService;
    this._loggerService = new LogService('AuthenticationService');
  }
  signUp = async (
    registration: Registration<BasicCredentials>
  ): Promise<User> => {
    let user = {} as User;

    try {
      const {
        user: fbUser,
        providerId,
        operationType,
      }: UserCredential = await createUserWithEmailAndPassword(
        this._firebaseService.auth,
        registration.credentials.email,
        registration.credentials.password
      );

      if (fbUser.uid === null || fbUser.uid === undefined) {
        throw new Error('Firebase user does not contain a uid.');
      }

      user = {
        uid: fbUser.uid,
        username: registration.username || fbUser.displayName || '',
        firstName: registration.firstName || '',
        lastName: registration.lastName || '',
        email: registration.credentials.email,
        profilePictureURL: fbUser.photoURL || '',
      };

      // create user record
      // this._userService.create({fbUser.uid})
    } catch (error: any) {
      this._loggerService.error(error.message);
    }

    return user;
  };
}

const initialize = () => {
  const userService = UserService();
  const firebaseService = FirebaseService();

  return new AuthenticationService(userService, firebaseService);
};

export default initialize;
