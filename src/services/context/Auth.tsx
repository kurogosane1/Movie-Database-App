import React, { useEffect, useState, createContext } from "react";
import { app } from "../firebase/service-auth";

export const AuthContext = createContext();

function AuthProvider({ children: any }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    app.auth().onAuthStateChange(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
