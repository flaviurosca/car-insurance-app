import React, { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  loggedIn: string | null;
  setLoggedIn?: React.Dispatch<React.SetStateAction<string | null>>;
  handleLogin: (userEmail: string) => void;
  handleLogout: () => void;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loggedIn, setLoggedIn] = useState<string | null>(() => {
    const storedLoggedIn = localStorage.getItem("loggedIn");
    return storedLoggedIn ? JSON.parse(storedLoggedIn) : null;
  });

  useEffect(() => {
    loggedIn
      ? localStorage.setItem("loggedIn", JSON.stringify(loggedIn))
      : localStorage.removeItem("loggedIn");
  }, [loggedIn]);

  const handleLogin = (userEmail: string) => {
    setLoggedIn(userEmail);
  };

  const handleLogout = () => {
    setLoggedIn(null);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
};
