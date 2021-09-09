import React, { useState } from "react";
import { View, Image } from "react-native";
import { Container, Teste, Input } from "./styles";
import { Button, Title, Text, TextInput, Paragraph } from "react-native-paper";
const OcorrenciaCreate = ({ navigation }) => {
  const [text, setText] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  return (
    <Container>
      <Teste>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "80%",
          }}
        >
          <Paragraph style={{ color: "#219653" }}>Voltar</Paragraph>
          <Title>Ocorrência</Title>
          <Paragraph style={{ color: "#219653" }}>Salvar</Paragraph>
        </View>

        <Input>
          <Paragraph style={{ color: "#219653" }}>Ocorrência</Paragraph>

          <TextInput
            label="Tipo Ocorrência"
            value={text}
            onChangeText={(text) => setText(text)}
          />
        </Input>

        <Input>
          <Paragraph style={{ color: "#219653" }}>Prioridade</Paragraph>

          <TextInput label="Prioridade" />
        </Input>

        <Input>
          <Paragraph style={{ color: "#219653" }}>Descrição</Paragraph>

          <TextInput
            label="Descrição"
            style={{ height: 150, margingTop: 120 }}
          />
        </Input>
        <View
          style={{
            marginTop: "23%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            padding: 10,
            borderColor: "#BDBDBD",
            borderWidth: 2,
            borderRadius: 15,
            width: "80%",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              height: 30,
              width: 42,
              marginRight: 8,
            }}
            source={require("../../images/camera.png")}
          />
          <Text>Inserir Evidência</Text>
        </View>
        <Button
          mode="contained"
          color="#219653"
          style={{
            width: "80%",
            marginTop: "10%",
            borderRadius: 20,
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("Dashboard")}
        >
          Salvar Ocorrência
        </Button>
      </Teste>
    </Container>
  );
};

export default OcorrenciaCreate;
