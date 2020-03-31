import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDL1FSiOHXsVlPUBfm8jgNQzxm6ft_jiKA",
    authDomain: "react-e-commerce-project.firebaseapp.com",
    databaseURL: "https://react-e-commerce-project.firebaseio.com",
    projectId: "react-e-commerce-project",
    storageBucket: "react-e-commerce-project.appspot.com",
    messagingSenderId: "95596149583",
    appId: "1:95596149583:web:8dae145857d8516f47e33a",
    measurementId: "G-WGBVJ88TSQ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
