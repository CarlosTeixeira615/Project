/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./routes";
import { StatusBar } from "react-native";
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />

      <Routes />
    </NavigationContainer>
  );
};

export default App;
