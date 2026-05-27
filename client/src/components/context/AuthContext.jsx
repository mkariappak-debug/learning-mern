import { createContext, useState } from "react";

// Create Context
export const AuthContext = createContext();

// Provider Component
export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState({
    name: "Neepa",
    role: "Frontend Developer"
  });

  // Login Function
  const login = () => {
    setUser({
      name: "Neepa",
      role: "MERN Stack Developer"
    });
  };

  // Logout Function
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};