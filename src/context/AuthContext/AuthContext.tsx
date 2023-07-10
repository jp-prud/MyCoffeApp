import {createContext, useCallback, useContext, useState} from 'react';

import {delay} from '@utils';

export interface AuthContextProps {
  isAuthenticated: boolean;
  handleLogin: (email: string) => void;
  handleRegister: () => void;
  handleLogout: () => void;
}

const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({children}: {children: React.ReactNode}) {
  const [isAuthenticated, setIsAuthenticate] = useState(true);

  const handleLogin = useCallback(async (email: string) => {
    console.log(email);

    await delay();

    setIsAuthenticate(true);
  }, []);

  const handleRegister = useCallback(async () => {
    await delay();

    setIsAuthenticate(true);
  }, []);

  const handleLogout = useCallback(async () => {
    await delay();

    setIsAuthenticate(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        handleLogin,
        handleLogout,
        handleRegister,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
