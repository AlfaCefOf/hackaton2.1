import { createContext, useContext, useState, useEffect } from 'react';
import users from '../data/users.json';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      // setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email, password) => {
    // Check static users first
    let foundUser = users.find(u => u.email === email && u.password === password);
    if (!foundUser) {
      // Check registered users
      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      foundUser = registeredUsers.find(u => u.email === email && u.password === password);
    }
    if (foundUser) {
      const userData = { id: foundUser.id, name: foundUser.name, email: foundUser.email, role: foundUser.role };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};