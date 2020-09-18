import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyDsVVidR4UoKZpl30ChWIBldFMlmLakGGw",
  authDomain: "alterateindia.firebaseapp.com",
  databaseURL: "https://alterateindia.firebaseio.com",
  projectId: "alterateindia",
  storageBucket: "alterateindia.appspot.com",
  messagingSenderId: "531082137631",
  appId: "1:531082137631:web:c72faaec37175e4086052a",
  measurementId: "G-999P2KSCDP"
};
// Initialize Firebase
 const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebaseApp.firestore()