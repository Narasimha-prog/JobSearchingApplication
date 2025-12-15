/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useMemo, useState } from 'react';

// 1️⃣ Create context
export const AuthContext = createContext({
  user: null,
  setUser: () => {},
});

console.log(AuthContext);

// 2️⃣ Provider component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('mani'); // initial user state

    const memo   = useMemo(()=>({user,setUser}),[user])

  return (
    <AuthContext.Provider value={memo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
