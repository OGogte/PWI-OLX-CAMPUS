import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCD8Zbni2gEPltif9n14Hab1oAj0AUbi8k",
  authDomain: "campus-olx-47433.firebaseapp.com",
  projectId: "campus-olx-47433",
  storageBucket: "campus-olx-47433.appspot.com",
  messagingSenderId: "705961612541",
  appId: "1:705961612541:web:01603dad751eda25765a94",
  measurementId: "G-TTCDK8HVQX",
};

export const Firebase = firebase.initializeApp(firebaseConfig); //named export
