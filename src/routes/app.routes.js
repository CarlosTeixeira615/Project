import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login';

const App = createStackNavigator();

const AppRoutes = () => (
  <>
    <App.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='Login'
    >
      <App.Screen name='Login' component={Login} />
    </App.Navigator>
  </>
);

export default AppRoutes;
