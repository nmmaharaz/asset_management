import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser]= useState(null)
  console.log("miya user  ache", user)
  const provider = new GoogleAuthProvider();

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  };

const signUp = (email, password)=>{
  setLoading(true)
  return createUserWithEmailAndPassword(auth, email, password)
}

const googlesignin = ()=>{
  setLoading(true)
  return signInWithPopup(auth, provider)
}

const log0ut = ()=>{
  setLoading(true)
  return signOut(auth)
}

const updateUserProfile = (name, photo) => {
  return updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: photo,
  });
};

useEffect(() => {
  const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false);
  });
  return () => {
    unSubcribe();
  };
});


  const authInfo = {
    signIn,
    loading,
    setLoading,
    signUp,
    googlesignin,
    user,
    updateUserProfile,
    log0ut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
