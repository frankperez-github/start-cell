// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC25ii895nlYIozG1EoBOMmovaP8c73B50",
  authDomain: "start-cell.firebaseapp.com",
  projectId: "start-cell",
  storageBucket: "start-cell.appspot.com",
  messagingSenderId: "796585329891",
  appId: "1:796585329891:web:fd29e70c4e7553b3ea71d6",
  measurementId: "G-CZ1B8WDD35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);