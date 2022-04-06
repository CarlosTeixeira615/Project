import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { useAuth } from '../hooks/Auth/Auth';

const Routes = () => {
  const { token } = useAuth();

  return token != null ? <AuthRoutes /> : <AppRoutes />;
};
export default Routes;
