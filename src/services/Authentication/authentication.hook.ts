import useFirebaseService from '../Firebase/firebase.hook';
import AuthService from './authentication.service';
import { IAuthService } from './authentication.types';

const useAuthService = (): IAuthService => {
  const firebase = useFirebaseService();

  const authService: IAuthService = new AuthService(firebase.auth);

  return authService;
};

export default useAuthService;
