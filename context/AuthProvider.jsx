import React, { useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errorUser, setErrorUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        errorUser,
        setErrorUser,
        login: () => {
          console.log("Call Login Function");
        },
        register: () => {
          console.log("Call Register Function");
        },
        logout: () => {
          console.log("Logout");
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
