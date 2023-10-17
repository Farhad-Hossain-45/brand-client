// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCybglT8tFMa_hQX56Z-QuHB1jb46UvydI",
  authDomain: "tenth-assignment-client.firebaseapp.com",
  projectId: "tenth-assignment-client",
  storageBucket: "tenth-assignment-client.appspot.com",
  messagingSenderId: "924636894110",
  appId: "1:924636894110:web:bf9d86296f1fc6b61d3c8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;