/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import { StatusBar } from 'react-native';
import AppProvider from './hooks/Auth';
const App = () => {
  return (
    <NavigationContainer>
      <AppProvider>
        <StatusBar translucent backgroundColor='transparent' />

        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
