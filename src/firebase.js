import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDleIedTSDKYnzb9THsSPRKI85fmVCWrAU",
  authDomain: "headline-7ffd8.firebaseapp.com",
  databaseURL: "https://headline-7ffd8.firebaseio.com",
  projectId: "headline-7ffd8",
  storageBucket: "headline-7ffd8.appspot.com",
  messagingSenderId: "228188596809",
  appId: "1:228188596809:web:0bab44fe40da141aa9ed98",
  measurementId: "G-CYBSSJWVZ5"
};

// const uiConfig = ({
//   signInOptions: [
//     firebase.auth.EmailAuthProvider.PROVIDER_ID,
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//   ],
//   // Other config options...
// });

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
export default firebase;
