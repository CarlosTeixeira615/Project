import React, { useState } from 'react';
import { Container, Teste, Input } from './styles';
import { Button, Title, Paragraph, TextInput } from 'react-native-paper';
import { useAuth } from '../../hooks/Auth/Auth';
const Login = ({ navigation }) => {
  const [login, setLogin] = useState({ email: '', password: '' });
  const { singIn, token, signOut } = useAuth();

  const hadleLogin = async () => {
    try {
      const response = await singIn(login);
      console.log(response);
    } catch (error) {
      alert('erro ao fazer login tente novamente ');
    }
  };

  return (
    <Container>
      <Teste>
        <Title>Entrar </Title>
        <Input>
          <TextInput
            label='Email'
            value={login.email}
            onChangeText={(text) => setLogin({ ...login, email: text })}
          />
        </Input>

        <Input>
          <TextInput
            label='Password'
            secureTextEntry={true}
            onChangeText={(text) => setLogin({ ...login, password: text })}
            right={<TextInput.Affix text='/100' />}
          />
        </Input>

        <Button
          mode='contained'
          color='#219653'
          style={{
            width: '80%',
            marginTop: '30%',
            borderRadius: 20,
            justifyContent: 'center',
          }}
          onPress={() => {
            hadleLogin();
          }}
        >
          Entrar
        </Button>
        <Paragraph style={{ color: '#868E96' }}>Esqueceu sua senha?</Paragraph>
      </Teste>
    </Container>
  );
};

export default Login;
