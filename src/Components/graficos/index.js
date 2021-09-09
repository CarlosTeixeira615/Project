import React from "react";
import ProgressCircle from "react-native-progress-circle";
import { Title } from "react-native-paper";

import { View } from "react-native";
const Graficos = ({ valor }) => {
  return (
    <View>
      <ProgressCircle
        percent={valor}
        radius={50}
        borderWidth={8}
        color="#cfffe3"
        shadowColor="#ffF"
        bgColor="#219653"
      >
        <Title
          style={{
            fontSize: 18,
            color: "#fff",
          }}
        >
          {valor + "%"}
        </Title>
      </ProgressCircle>
    </View>
  );
};

export default Graficos;
