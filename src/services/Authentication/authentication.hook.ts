import AuthenticationService from './authentication.service';
import { IAuthentication } from './authentication.types';

const useAuthenticationService = (): IAuthentication => AuthenticationService;

export default useAuthenticationService;
