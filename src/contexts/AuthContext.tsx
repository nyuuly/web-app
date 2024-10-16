import React, { createContext, useState, useContext, useEffect } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  login: (token: string) => void;
  logout: () => void;
  getToken: () => string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const login = (token: string) => {
    localStorage.setItem("access_token", token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    setIsLoggedIn(false);
  };

  const getToken = () => {
    return localStorage.getItem("access_token");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, login, logout, getToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
