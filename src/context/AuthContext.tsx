import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  name: string;
  email: string;
}

interface StoredUser extends User {
  password: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (name: string, email: string, password: string) => boolean;
  logout: () => void;
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('currentUser');
    return saved ? JSON.parse(saved) : null;
  });
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Загружаем базу пользователей из localStorage
  const getUsers = (): StoredUser[] => {
    const stored = localStorage.getItem('users');
    return stored ? JSON.parse(stored) : [];
  };

  const saveUsers = (users: StoredUser[]) => {
    localStorage.setItem('users', JSON.stringify(users));
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('currentUser');
    }
  }, [user]);

  const login = (email: string, password: string): boolean => {
    const users = getUsers();
    const found = users.find(u => u.email === email && u.password === password);
    if (found) {
      setUser({ name: found.name, email: found.email });
      setIsLoginModalOpen(false);
      return true;
    }
    return false;
  };

  const register = (name: string, email: string, password: string): boolean => {
    const users = getUsers();
    if (users.some(u => u.email === email)) {
      return false; // пользователь с таким email уже существует
    }
    const newUser: StoredUser = { name, email, password };
    saveUsers([...users, newUser]);
    setUser({ name, email });
    setIsLoginModalOpen(false);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoginModalOpen, openLoginModal, closeLoginModal }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}