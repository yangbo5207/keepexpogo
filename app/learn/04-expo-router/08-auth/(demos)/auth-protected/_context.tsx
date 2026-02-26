import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Role = 'user' | 'admin' | 'guest';

interface Session {
  name: string;
  role: Role;
  emoji: string;
}

interface AuthContextType {
  session: Session | null;
  isLoading: boolean;
  loginAs: (role: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  session: null,
  isLoading: true,
  loginAs: () => {},
  logout: () => {},
});

const presetUsers: Record<string, Session> = {
  admin: { name: 'Admin', role: 'admin', emoji: '👑' },
  user: { name: 'Regular User', role: 'user', emoji: '👤' },
  guest: { name: 'Guest', role: 'guest', emoji: '👻' },
};

export function ProtectedAuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const loginAs = (role: string) => {
    setSession(presetUsers[role] || null);
  };

  const logout = () => {
    setSession(null);
  };

  return (
    <AuthContext.Provider value={{ session, isLoading, loginAs, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useProtectedAuth() {
  return useContext(AuthContext);
}

export default function AuthProtectedContextRoute() {
  return null;
}
