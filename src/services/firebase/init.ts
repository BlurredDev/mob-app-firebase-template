import firebase from "firebase";

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA-ictleAW15ODPHZ_GRofOTCozV1NJ_XQ",
  authDomain: "mobapp-295e0.firebaseapp.com",
  projectId: "mobapp-295e0",
  storageBucket: "mobapp-295e0.appspot.com",
  messagingSenderId: "1037595057760",
  appId: "1:1037595057760:web:4e02c5b4196740010b2d05",
  measurementId: "G-4TQLKK0882",
};

export const initFirebase = () => {
  if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);
};
