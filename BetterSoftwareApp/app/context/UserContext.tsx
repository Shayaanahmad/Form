import React, { createContext, useState, useContext, ReactNode } from 'react';

interface UserContextType {
  users: { [key: string]: string };
  setUsers: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
}

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<{ [key: string]: string }>({});

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};
