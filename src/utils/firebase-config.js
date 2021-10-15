// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCFayfEsQjDhuO-EVaN3cw4auWDwHpuI58",
  authDomain: "clone-netflix-66cdf.firebaseapp.com",
  databaseURL: "https://clone-netflix-66cdf-default-rtdb.firebaseio.com",
  projectId: "clone-netflix-66cdf",
  storageBucket: "clone-netflix-66cdf.appspot.com",
  messagingSenderId: "592109910972",
  appId: "1:592109910972:web:1b3ed17baa392d633149b9",
  measurementId: "G-YJ20L0CK3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app