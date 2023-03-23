import { IUserService, UserService } from '../User';
import { IAuthentication } from '@/services/Authentication';
import { ILogService, LogService } from '@/services/Log';

class AuthenticationService implements IAuthentication {
  private readonly _userService: IUserService;
  private readonly _loggerService: ILogService;
  constructor(userService: IUserService) {
    this._userService = userService;
    this._loggerService = new LogService('AuthenticationService');
  }
}

const Initialize = () => {
  const userService = UserService();

  return new AuthenticationService(userService);
};
