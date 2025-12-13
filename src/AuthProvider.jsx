/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from 'react';

// 1️⃣ Create context
export const AuthContext = createContext({
  user: null,
  setUser: () => {},
});

console.log(AuthContext);

// 2️⃣ Provider component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('mani'); // initial user state

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
