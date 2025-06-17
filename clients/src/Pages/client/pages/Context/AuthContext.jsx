import React, { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [clientId, setClientId] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log("Decoded JWT:", decoded);

        // Use decoded.clientId OR decoded.userId based on your actual token payload
        const id = decoded.clientId || decoded.userId;
        setClientId(id);
        setIsAuthenticated(true);
      } catch (err) {
        console.error("Invalid token", err);
        setClientId(null);
        setIsAuthenticated(false);
      }
    } else {
      setClientId(null);
      setIsAuthenticated(false);
    }
  }, []);

  // Optional: Logout handler
  const logout = () => {
    localStorage.removeItem("token");
    setClientId(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ clientId, isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access Auth context
export const useAuth = () => useContext(AuthContext);
