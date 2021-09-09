import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Ocorrencias from "../pages/Ocorrencias";
import Servicos from "../pages/Servicos";
import OcorrenciaCreate from "../pages/OcorrenciaCreate";
import mapView from "../pages/mapView";

const Auth = createStackNavigator();

const AuthRoutes = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: "#ffffff" },
    }}
    initialRouteName="Login"
  >
    <Auth.Screen name="Login" component={Login} />
    <Auth.Screen name="Dashboard" component={Dashboard} />
    <Auth.Screen name="Ocorrencias" component={Ocorrencias} />
    <Auth.Screen name="Servicos" component={Servicos} />
    <Auth.Screen name="OcorrenciaCreate" component={OcorrenciaCreate} />
    <Auth.Screen name="mapView" component={mapView} />
  </Auth.Navigator>
);

export default AuthRoutes;
