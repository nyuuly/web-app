import React, { createContext, useState, useContext, useEffect } from "react";

interface User {
  email: string;
  username: string | null;
  preferredLanguage: string;
  destination: string | null;
  fromCountry: string | null;
  movingDate: string | null;
}

interface AuthContextType {
  user: User | null;
  login: (token: string, userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (token: string, userData: User) => {
    localStorage.setItem("access_token", token);
    localStorage.setItem("user_data", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_data");
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const storedUserData = localStorage.getItem("user_data");
    if (token && storedUserData) {
      try {
        const userData = JSON.parse(storedUserData) as User;
        setUser(userData);
      } catch (error) {
        console.error("Failed to parse user data:", error);
        logout();
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
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
