import { useState, useEffect, useContext, createContext } from 'react';
import { auth } from '../services/firebase';

interface User {
  uid: string;
  email: string | null;
}

const authContext = createContext<{ user: User | null; loading: boolean }>({
  user: null,
  loading: true,
});

export function ProvideAuth({ children }: { children: React.ReactNode }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({ uid: user.uid, email: user.email });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
  };
}