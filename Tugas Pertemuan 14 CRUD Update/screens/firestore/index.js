import firebase from  'firebase'
import 'firebase/firestore'
import 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyBomAZ7JJSJQBUVpnUT0iNXxNNfTqsCEP0",
  authDomain: "absensidatabase-ff701.firebaseapp.com",
  projectId: "absensidatabase-ff701",
  storageBucket: "absensidatabase-ff701.appspot.com",
  messagingSenderId: "428790805594",
  appId: "1:428790805594:web:ad72d9643063ecad525463",
  measurementId: "G-W0401WWHLW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
   const db = firebase.firestore()
   const bd = firebase.database()
  
   export default {
    firebase,db,bd
}