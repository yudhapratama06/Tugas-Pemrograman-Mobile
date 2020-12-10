import firebase from  'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyD6Xo1AjNq2WT_NwnSBTGlfBjSaCldm7s0",
    authDomain: "absensipmb.firebaseapp.com",
    projectId: "absensipmb",
    storageBucket: "absensipmb.appspot.com",
    messagingSenderId: "346410581420",
    appId: "1:346410581420:web:b92014b2ad442bf6c84e09",
    measurementId: "G-7ZJCM4Q3NN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()
  
  export default {firebase,
  db};