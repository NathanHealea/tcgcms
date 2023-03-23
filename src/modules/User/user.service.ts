import { IUserService } from './user.type';
import { ILogService, LogService } from '@/services/Log';

class UserService implements IUserService {
  private readonly _logService: ILogService;

  constructor() {
    this._logService = new LogService('UserService');
  }
}

const initialize = () => {
  return new UserService();
};

export default initialize;
