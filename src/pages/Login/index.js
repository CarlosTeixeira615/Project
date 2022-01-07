import React, { useState } from "react";
import { Text } from "react-native";
import { Container, Teste, Input } from "./styles";
import { Button, Title, Paragraph, TextInput } from "react-native-paper";
const Login = ({ navigation }) => {
  const [text, setText] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  return (
    <Container>
      <Teste>
        <Title>Entrar</Title>
        <Input>
          <TextInput
            label="Email"
            value={text}
            onChangeText={(text) => setText(text)}
          />
        </Input>

        <Input>
          <TextInput
            label="Password"
            secureTextEntry={true}
            right={
              <TextInput.Affix
                text="/100"
              />
            }
          />
        </Input>

        <Button
          mode="contained"
          color="#219653"
          style={{
            width: "80%",
            marginTop: "30%",
            borderRadius: 20,
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("Dashboard")}
        >
          Entrar
        </Button>
        <Paragraph style={{ color: "#868E96" }}>Esqueceu sua senha?</Paragraph>
      </Teste>
    </Container>
  );
};

export default Login;
