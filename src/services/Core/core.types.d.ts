import { StatusEnum } from './core.enums';

/**
 * Status of a result from a service
 */
export type Status = keyof typeof StatusEnum;

/**
 * Result from a service
 */
export type Result<T> = {
  status: Status;
  data: T;
  error: string;
};
