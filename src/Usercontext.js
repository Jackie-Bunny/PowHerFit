// UserContext.js

import { createContext, useContext, useState } from 'react';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const updateUser = (data) => {
    setUserData(data);
  };

  return (
    <UserContext.Provider value={{ userData, updateUser, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
