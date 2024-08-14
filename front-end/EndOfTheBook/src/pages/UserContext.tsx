import React, { createContext, useState, useContext, ReactNode } from 'react';

// יצירת סוג פרטי משתמש
interface User {
  userId: number;
  username: string;
}

// יצירת סוג עבור הקונטקסט
interface UserContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

// יצירת הקונטקסט עם ברירת מחדל ריקה
export const UserContext = createContext<UserContextType | undefined>(undefined);

// יצירת קומפוננטת קונטקסט
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // פונקציה להתחברות המשתמש
  const login = (userData: User) => {
    setUser(userData);
  };

  // פונקציה להתנתקות המשתמש
  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// פונקציה לשימוש בקונטקסט
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
