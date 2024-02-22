import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useContext, createContext, useState, useEffect } from "react";
import { auth } from '../config/firebase'; 
import Loading from "../components/Loading";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  const signOutOfGoogle = () => {
    signOut(auth);
  }

  useEffect(() => {
    const authChange = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => authChange();
  }, [])

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, signOutOfGoogle }}>
      {!loading ? children : <Loading/>}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext)
} 

