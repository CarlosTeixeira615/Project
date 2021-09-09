import React, { useEffect, useRef, useState } from "react";

import {
  View,
  Text,
  ActivityIndicator,
  ToastAndroid,
  ScrollView,
  Image,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Heatmap } from "react-native-maps";
import { useLocation } from "../../hooks/localization/index";
import { markers } from "../../utils/Markers";
import MarkerImpl from "../../Components/MarkerImpl";
import Fab from "../../Components/Fab";
import MapViewDirections from "react-native-maps-directions";
import { Title } from "react-native-paper";
import moment from "moment";
import { set } from "react-native-reanimated";
const mapView = ({ navigation }) => {
  const [latitude, setLatitude] = useState(-20.398259);
  const [longitude, setLongitude] = useState(-43.507726);
  const [GOOGLE_API_KEY] = useState("AIzaSyCRbPRryTolmhNlMIp0y0dEutmIDO75MaM");
  const [heatmapMode, setHeatmapMode] = useState(false);
  const [routeMode, setRouteMode] = useState(false);
  const [hora, setHora] = useState(
    moment().subtract(3, "hours").format("HH:mm")
  );
  const [localDirection, setLocalDirection] = useState(null);
  const [mapMarkers, setMapMarkers] = useState(markers);
  const [positions, setPositions] = useState(
    mapMarkers.map((item) => {
      return { latitude: item.latitude, longitude: item.longitude };
    })
  );

  // useEffect(() => {
  //   setInterval(function run() {
  //     let momento = moment().subtract(3, "hours").format("HH:mm");
  //     setHora(momento);
  //   }, 200);
  // }, []);
  const mapRef = useRef(null);

  const { coords, errorMsg } = useLocation();

  function handleRegionChanged(region) {
    setLatitude(region.latitude);
    setLongitude(region.longitude);
  }

  useEffect(() => {
    setPositions(
      mapMarkers.map((item) => {
        return { latitude: item.latitude, longitude: item.longitude };
      })
    );
  }, [mapMarkers]);

  useEffect(() => {
    if (errorMsg) {
      ToastAndroid.show(errorMsg, ToastAndroid.SHORT);
      console.log(errorMsg);
    }
  }, [errorMsg]);

  console.log(coords);
  return (
    <>
      {!coords || errorMsg ? (
        <>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
            }}
          >
            <ActivityIndicator size="large" color={"#b11111"} />
            <Text
              style={{
                marginTop: 10,
                color: "#000",
              }}
            >
              Carregando o mapa...
            </Text>
          </View>
        </>
      ) : (
        <>
          <MapView
            ref={mapRef}
            provider={PROVIDER_GOOGLE}
            onRegionChangeComplete={handleRegionChanged}
            showsUserLocation={true}
            showsMyLocationButton={false}
            toolbarEnabled={false}
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
            }}
            initialRegion={{
              latitude,
              longitude,
              latitudeDelta: 0.195,
              longitudeDelta: 0.1921,
              ...coords,
            }}
          >
            {!heatmapMode
              ? mapMarkers.map((_marker) => {
                  return (
                    <MarkerImpl
                      key={_marker._id}
                      mark={_marker}
                      onPress={() => setLocalDirection(_marker)}
                    />
                  );
                })
              : null}

            {positions && heatmapMode ? (
              <Heatmap points={positions} opacity={1} radius={30} />
            ) : null}

            {routeMode ? (
              <MapViewDirections
                strokeWidth={3}
                strokeColor="red"
                origin={coords}
                destination={localDirection}
                apikey={GOOGLE_API_KEY}
                mode="DRIVING"
              />
            ) : null}
          </MapView>
          {/* <View
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",

              justifyContent: "flex-end",
            }}
          >
            <View
              style={{
                display: "flex",
                flex: 1,
                width: "100%",
                marginBottom: "-50%",
                marginTop: "120%",
                alignItems: "flex-end",
              }}
            >
              <View
                style={{
                  backgroundColor: "#219653",
                  alignItems: "center",
                  margin: 5,
                  borderRadius: 5,
                  justifyContent: "center",
                  display: "flex",
                  flex: 1,
                  width: "30%",
                  height: "50%",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Image
                    style={{ height: 20, width: 20, marginRight: 10 }}
                    source={require("../../images/relogio.png")}
                  />
                  <Text style={{ color: "#fff" }}>{hora}</Text>
                </View>
              </View>
              <ScrollView horizontal={true} style={{ height: "50%" }}>
                <View
                  style={{
                    padding: 12,
                    backgroundColor: "#fff",
                    borderRadius: 15,
                    width: "33%",
                    alignItems: "center",
                    margin: 5,
                    flexDirection: "row",
                  }}
                >
                  <View>
                    <Image
                      style={{ height: 40, width: 40, marginRight: 10 }}
                      source={require("../../images/sala_estar.png")}
                    />
                  </View>
                  <View>
                    <Title>Ponto Controle 1o</Title>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Image
                        style={{ height: 15, width: 10, marginRight: 5 }}
                        source={require("../../images/local.png")}
                      />
                      <Text>Ponto Controle 1o</Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    padding: 12,
                    backgroundColor: "#fff",
                    borderRadius: 15,
                    width: "33%",
                    alignItems: "center",
                    margin: 5,
                    flexDirection: "row",
                  }}
                >
                  <View>
                    <Image
                      style={{ height: 40, width: 40, marginRight: 10 }}
                      source={require("../../images/sala_estar.png")}
                    />
                  </View>
                  <View>
                    <Title>Ponto Controle 1o</Title>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Image
                        style={{ height: 15, width: 10 }}
                        source={require("../../images/local.png")}
                      />
                      <Text>10 Mtr do Início</Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    padding: 12,
                    backgroundColor: "#fff",
                    borderRadius: 15,
                    width: "33%",
                    alignItems: "center",
                    margin: 5,
                    flexDirection: "row",
                  }}
                >
                  <View>
                    <Image
                      style={{ height: 40, width: 40, marginRight: 10 }}
                      source={require("../../images/sala_estar.png")}
                    />
                  </View>
                  <View>
                    <Title>Ponto Controle 1o</Title>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Image
                        style={{ height: 15, width: 10 }}
                        source={require("../../images/local.png")}
                      />
                      <Text>10 Mtr do Início</Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    padding: 12,
                    backgroundColor: "#fff",
                    borderRadius: 15,
                    width: "33%",
                    alignItems: "center",
                    margin: 5,
                    flexDirection: "row",
                  }}
                >
                  <View>
                    <Image
                      style={{ height: 40, width: 40, marginRight: 10 }}
                      source={require("../../images/sala_estar.png")}
                    />
                  </View>
                  <View>
                    <Title>Ponto Controle 1o</Title>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Image
                        style={{ height: 15, width: 10 }}
                        source={require("../../images/local.png")}
                      />
                      <Text>10 Mtr do Início</Text>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
            <View
              style={{
                justifyContent: "flex-end",
                paddingBottom: 15,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingBottom: -50,
                  marginBottom: -50,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#219653",
                    width: 100,
                    height: "50%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ color: "#fff" }}>Ocorrência</Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#219653",
                    width: 100,
                    height: "50%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                  }}
                >
                  <Image
                    style={{ height: 25, width: 25 }}
                    source={require("../../images/qr-code.png")}
                  />
                </View>
                <View
                  style={{
                    backgroundColor: "#219653",
                    width: 100,
                    height: "50%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                  }}
                >
                  <Image
                    style={{ height: 25, width: 25 }}
                    source={require("../../images/shape.png")}
                  />
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "#219653",
                  width: 350,
                  height: "23%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                }}
              >
                <Text style={{ color: "#ffff", fontSize: 15 }}>
                  Iniciar Serviço
                </Text>
              </View>
            </View>
          </View> */}
          <Fab
            iconName="add"
            iconColor={"#b11111"}
            color={"#fff"}
            containerStyle={{ right: 16, bottom: 30 }}
            onPress={() => {
              const lastMarker = mapMarkers[mapMarkers.length - 1];
              const newId = lastMarker._id + 1;

              const newMarker = {
                _id: newId,
                title: `Marker${newId}`,
                latitude,
                longitude,
              };

              setMapMarkers((old) => {
                return [...old, newMarker];
              });
            }}
            iconSize={45}
          />

          <Fab
            iconName="gps-fixed"
            iconColor={"#b11111"}
            color={"#fff"}
            containerStyle={{ right: 20, bottom: 90 }}
            onPress={() => {
              mapRef.current.animateToRegion({
                latitude: -20.398259, // posição padrão
                longitude: -43.507726,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
                ...coords, // Sobrescreve a posição padrão se tiver carregado a posição do user
              });
            }}
            iconSize={35}
          />
          <Fab
            iconName="explore"
            iconColor={"#b11111"}
            color={"#fff"}
            containerStyle={{ right: 20, bottom: 135 }}
            onPress={() => {
              setRouteMode(!routeMode);
            }}
            iconSize={35}
          />

          <Fab
            iconName="bubble-chart"
            iconColor={"#b11111"}
            color={"#fff"}
            containerStyle={{ right: 20, bottom: 180 }}
            iconSize={35}
            onPress={async () => {
              if (heatmapMode) {
                await mapRef.current.animateToRegion({
                  latitude: -20.398259, // posição padrão
                  longitude: -43.507726,
                  latitudeDelta: 0.195,
                  longitudeDelta: 0.1921,
                  ...coords, // Sobrescreve a posição padrão se tiver carregado a posição do user
                });

                setHeatmapMode(!heatmapMode);

                return;
              }

              await mapRef.current.animateToRegion({
                latitude: -20.398259, // posição padrão
                longitude: -43.507726,
                latitudeDelta: 3.2877014453955837,
                longitudeDelta: 2.181449979543693,
                ...coords, // Sobrescreve a posição padrão se tiver carregado a posição do user
              });

              setHeatmapMode(!heatmapMode);
            }}
          />
        </>
      )}
    </>
  );
};

export default mapView;
