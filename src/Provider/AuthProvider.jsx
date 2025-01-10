import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const Gitprovider = new GithubAuthProvider();
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const singInUserByGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const singInUserByGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, Gitprovider);
  };
  const creatNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (displayName, photoURL) => {
    setLoading(true);

    const profileData = {};
    if (displayName) {
      profileData.displayName = displayName;
    }
    if (photoURL) {
      profileData.photoURL = photoURL;
    }
    return updateProfile(auth.currentUser, profileData)
      .then(() => {
        console.log("User profile updated successfully");
      })
      .catch((error) => {
        console.error("Error updating user profile:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      },
      (error) => {
        console.error("Authentication error:", error);
        setLoading(false);
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    creatNewUser,
    updateUserProfile,
    signOutUser,
    signInUser,
    singInUserByGoogle,
    singInUserByGithub,
    loading,
    setLoading

  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
