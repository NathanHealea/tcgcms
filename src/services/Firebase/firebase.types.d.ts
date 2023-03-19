import { FirebaseApp as DefaultFirebaseApp } from 'firebase/app';
import { Auth as DefaultAuth } from 'firebase/auth';

export type FirebaseApp = DefaultFirebaseApp;
export type Auth = DefaultAuth;

export interface IFirebaseService {
  app: FirebaseApp;
  auth: Auth;
}
