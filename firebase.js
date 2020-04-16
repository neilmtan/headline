// var firebase = require('firebase');
// var firebaseui = require('firebaseui');
// import "firebase/auth";
import firebaseui from 'firebaseui';

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

const uiConfig = ({
  signInOptions: [
    window.firebase.auth.EmailAuthProvider.PROVIDER_ID,
    window.firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  // Other config options...
});

// Initialize Firebase
window.firebase.initializeApp(firebaseConfig);

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(window.firebase.auth());

// This adds firebaseui to the page
// It does everything else on its own
const startFirebaseUI = function (elementId) {
  ui.start(elementId, uiConfig);
}
  
export startFirebaseUI;
