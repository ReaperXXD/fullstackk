import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxRUJInpBZuDV2zrdKGaAagFElLP-MF7s",

  authDomain: "screenscape-40bbc.firebaseapp.com",

  projectId: "screenscape-40bbc",

  storageBucket: "screenscape-40bbc.appspot.com",

  messagingSenderId: "358155594046",

  appId: "1:358155594046:web:25203caae15d3cb2b8a46f",

  measurementId: "G-D4HXRVS7M6",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
