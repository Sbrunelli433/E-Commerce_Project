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

  //function to take the user auth object from authentication library and store it in my DB
  export const createUserProfileDocument = async(userAuth, additionalData) => {
    //perform the save to the DB if we get back a userAuth (on sign in), not when they sign out
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email}=userAuth;
        const createdAt= new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
