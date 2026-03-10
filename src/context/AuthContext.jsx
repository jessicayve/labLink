import React, { createContext, useMemo, useState } from "react"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    window.localStorage.getItem("lablink-token") || ""
  );

  const login = (newToken) => {
    window.localStorage.setItem("lablink-token", newToken);
    setToken(newToken);
  };

  const logout = () => {
    window.localStorage.removeItem("lablink-token");
    setToken("");
  };

  const isAuthenticated = !!token;

  const value = useMemo(() => {
    return {
      token,
      isAuthenticated,
      login,
      logout,
    };
  }, [token, isAuthenticated]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};