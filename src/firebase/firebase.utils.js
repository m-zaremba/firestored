import firebase from "firebase/app";
import "firebase/firestore";

let firebaseConfig = null;
export let firestore = null;

export const configFirebase = (credentials) => {
  firebaseConfig = credentials;
  firebase.initializeApp(firebaseConfig);

  if (firebaseConfig != null) {
    firestore = firebase.firestore();
  }
};
