// src/UserContext.js
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // This will hold the user data

  const login = (userData) => {
    setUser(userData); // Set user data upon login
  };

  const logout = () => {
    setUser(null); // Clear user data upon logout
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
