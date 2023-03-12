import { app, auth } from './firebase.service';
import { FirebaseApp } from 'firebase/app';
import { Auth } from 'firebase/auth';

type FirebaseService = {
  app: FirebaseApp;
  auth: Auth;
};

const useFirebaseService = (): FirebaseService => {
  return {
    app,
    auth,
  };
};

export default useFirebaseService;
