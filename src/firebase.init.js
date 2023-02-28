// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD2Xc4CJZeCcBqw3Mmk3rX6SYcd3mtDXj8",
  authDomain: "lucky-enterprise-eb766.firebaseapp.com",
  projectId: "lucky-enterprise-eb766",
  storageBucket: "lucky-enterprise-eb766.appspot.com",
  messagingSenderId: "690644681705",
  appId: "1:690644681705:web:fa17f43619fe6d3df54178",
  measurementId: "G-XMJHYTGHTY",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export default auth;
