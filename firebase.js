import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import  {privateConfig} from "./privateConfig";

const firebaseConfig = {
  apiKey: privateConfig.apiKey,
  authDomain: privateConfig.authDomain,
  projectId: privateConfig.projectId,
  storageBucket: privateConfig.storageBucket,
  messagingSenderId: privateConfig.messagingSenderId,
  appId: privateConfig.appId
};

let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db, auth};