import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDmHNAtGePX14RHfgS17Dymf4N9C6J7N0I",
  authDomain: "assetmanagement-24357.firebaseapp.com",
  projectId: "assetmanagement-24357",
  storageBucket: "assetmanagement-24357.firebasestorage.app",
  messagingSenderId: "1000806784925",
  appId: "1:1000806784925:web:b382ab895f2bfce1789974"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth