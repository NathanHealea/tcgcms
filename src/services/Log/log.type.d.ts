export type Details = Array<any>;

export interface ILogService {
  log: (message: string, details?: Details) => void;
  info: (message: string, details?: Details) => void;
  debug: (message: string, details?: Details) => void;
  warn: (message: string, details?: Details) => void;
  error: (message: string, details?: Details) => void;
}
