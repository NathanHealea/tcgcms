import * as Firebase from './firebase.service';
import { IFirebaseService } from './firebase.types';

const useFirebase = (): IFirebaseService => Firebase;

export default useFirebase;
