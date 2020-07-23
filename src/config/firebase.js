import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA4rDTQ8iOdQeqVIXYxBpy52Lsj_GvfB4k",
    authDomain: "codefun-ba75f.firebaseapp.com",
    databaseURL: "https://codefun-ba75f.firebaseio.com",
    projectId: "codefun-ba75f",
    storageBucket: "codefun-ba75f.appspot.com",
    messagingSenderId: "414430234103",
    appId: "1:414430234103:web:ac282ff033af5879669af2",
    measurementId: "G-EK1NXGQBP4"
  };
export const fire = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
// login with google auth
const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};