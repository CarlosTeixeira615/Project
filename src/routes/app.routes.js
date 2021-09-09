import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const App = createStackNavigator();

const AppRoutes = () => (
  <>
    <App.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    ></App.Navigator>
  </>
);

export default AppRoutes;
