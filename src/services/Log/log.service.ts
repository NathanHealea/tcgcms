import { Details, ILogService } from './log.type';

enum LogLevelEnum {
  LOG = 'LOG',
  INFO = 'INFO',
  DEBUG = 'DEBUG',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

type LogLevel = keyof typeof LogLevelEnum;

class LogService implements ILogService {
  private readonly _name: string;
  constructor(name: string) {
    this._name = name;
  }

  private _write = (level: LogLevel, message: string, details?: Details) => {
    const timestamp = new Date().toString();

    const log = `[${timestamp}] ${level} ${this._name}: ${message}`;
    if (details !== undefined) {
      console.group(log);
      details.forEach((detail) => {
        console.log(detail);
      });
      console.groupEnd();
    } else {
      console.log(log);
    }
  };

  log = (message: string, details?: Details) => {
    this._write(LogLevelEnum.LOG, message, details);
  };

  info = (message: string, details?: Details) => {
    this._write(LogLevelEnum.INFO, message, details);
  };

  debug = (message: string, details?: Details) => {
    this._write(LogLevelEnum.DEBUG, message, details);
  };

  warn = (message: string, details?: Details) => {
    this._write(LogLevelEnum.WARN, message, details);
  };

  error = (message: string, details?: Details) => {
    this._write(LogLevelEnum.ERROR, message, details);
  };
}

export default LogService;
