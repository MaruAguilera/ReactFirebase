import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAKXSz8j49ccFdIxdB0MQZjcLEsTbt1CY8",
    authDomain: "fb-crud-react-b86f3.firebaseapp.com",
    projectId: "fb-crud-react-b86f3",
    storageBucket: "fb-crud-react-b86f3.appspot.com",
    messagingSenderId: "830721320425",
    appId: "1:830721320425:web:103c75396006ccb3481778"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
