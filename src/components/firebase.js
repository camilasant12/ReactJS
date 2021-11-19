import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBOzFSpeOW4gaVtU-xe8VIgba9WAk54xgw",
  authDomain: "reactjs-962c4.firebaseapp.com",
  projectId: "reactjs-962c4",
  storageBucket: "reactjs-962c4.appspot.com",
  messagingSenderId: "193635428196",
  appId: "1:193635428196:web:8d519291e6a70e452fbc71"
};
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
