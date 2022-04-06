import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';
const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [data, setData] = useState({ token: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const token = await AsyncStorage.getItem('@Gobarber:token');
      if (token) {
        api.defaults.headers.authorization = `Bearer ${token}`;
        setData({ token: token });
      }
      setLoading(false);
    }
    loadStorageData();
  }, []);

  const singIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/login', {
      email,
      password,
    });
    if (response.status != 200) {
      throw new Error('Falha ao fazer login');
    }
    const { token } = response.data;

    api.defaults.headers.authorization = `Bearer ${token}`;

    await AsyncStorage.multiSet([['@Gobarber:token', token]]);

    setData({ token });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem('@Gobarber:token');

    setData({});
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token: data.token,
        singIn,
        signOut,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('UseAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
