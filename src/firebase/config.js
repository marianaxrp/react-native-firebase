import * as firebase from 'firebase';
import '@firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB6enWcLI8jzIucubzv9_CYB99Rwvcji5Y",
    authDomain: "fbauthtest-6ce0d.firebaseapp.com",
    projectId: "fbauthtest-6ce0d",
    storageBucket: "fbauthtest-6ce0d.appspot.com",
    messagingSenderId: "809149857603",
    appId: "1:809149857603:web:2997ebc082be5462a8f9f6"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };