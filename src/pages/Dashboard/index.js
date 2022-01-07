import React, { useState } from 'react';
import { Container, Teste, Grid } from './styles';
import {
  Title,
  Divider,
  Dialog,
  Portal,
  Button,
  Text,
  TextInput,
  Provider,
} from 'react-native-paper';
import Graficos from '../../Components/graficos';
import { View, Image } from 'react-native';
import { Input } from '../Login/styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Dashboard = ({ navigation }) => {
  const [modal, setModal] = useState(true);
  return (
    <Container>
      <Teste>
        <Grid>
          <Title
            style={{
              fontSize: 15,
              color: '#fff',
              width: '30%',
              alignItems: 'flex-start',
            }}
          >
            Configurações
          </Title>
          <Title
            style={{
              color: '#fff',
              width: '30%',
              paddingLeft: 5,
              marginLeft: '5%',
            }}
          >
            Olá
          </Title>
          <Title style={{ fontSize: 15, color: '#fff', width: '10%' }}>
            Sair
          </Title>
        </Grid>
        <View
          style={{
            backgroundColor: '#219553',
            height: '17%',
            width: '100%',
            alignItems: 'center',
          }}
        >
          <Image size={184} source={require('../../images/user.png')} />
        </View>
        <View style={{ display: 'flex', alignItems: 'center', paddingTop: 50 }}>
          <Title>Victorio Robertson</Title>
          <Title style={{ fontSize: 15 }}>Segurança para Todos</Title>
          <Title style={{ fontSize: 15 }}>Perfomance</Title>
          <View
            style={{
              display: 'flex',
              backgroundColor: '#219653',
              margin: '3%',
              flexDirection: 'row',
              borderRadius: 15,
              color: '#fff',
              alignItems: 'center',
              padding: '3%',
              width: '80%',
            }}
          >
            <View style={{ display: 'flex', alignItems: 'center' }}>
              <Graficos valor={60} />
              <Title style={{ fontSize: 15, color: '#cfffe3' }}>Sucesso</Title>
            </View>
            <View style={{ paddingLeft: 50 }}>
              <Title style={{ fontSize: 15, color: '#cfffe3' }}>
                Serviço Realizados
              </Title>
              <Title style={{ color: '#fff' }}># 23 </Title>
            </View>
          </View>

          <View
            style={{
              display: 'flex',
              backgroundColor: '#219653',
              margin: 10,
              flexDirection: 'row',
              borderRadius: 15,
              color: '#fff',
              alignItems: 'center',
              padding: 10,
              width: '80%',
            }}
          >
            <View style={{ display: 'flex', alignItems: 'center' }}>
              <Graficos valor={60} />
              <Title style={{ fontSize: 15, color: '#cfffe3' }}>Sucesso</Title>
            </View>
            <View style={{ paddingLeft: 50 }}>
              <Title style={{ fontSize: 15, color: '#cfffe3' }}>
                Serviço Realizados
              </Title>
              <Title style={{ color: '#fff' }}># 23 </Title>
            </View>
          </View>
        </View>
        <Divider
          style={{
            height: '0.1%',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'center',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            margin: 5,
            width: '100%',
            justifyContent: 'space-around',
          }}
        >
          <View
            style={{
              backgroundColor: '#219653',
              height: 54,
              borderRadius: 25,
              padding: 10,
              width: '20%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              style={{ height: 30, width: 25 }}
              source={require('../../images/icon_navigate.png')}
            />
          </View>
          <TouchableWithoutFeedback
            style={{
              height: 54,
              alignItems: 'center',
              color: '#219653',
              backgroundColor: '#e8e8e8',
              borderRadius: 25,
              padding: 10,
              justifyContent: 'center',
            }}
            onPress={() => {
              navigation.navigate('Ocorrencias');
            }}
          >
            <Text>Ocorrências</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            style={{
              height: 54,
              alignItems: 'center',
              color: '#219653',
              backgroundColor: '#e8e8e8',
              borderRadius: 25,
              padding: 10,
              justifyContent: 'center',
            }}
            onPress={() => {
              navigation.navigate('Atividades');
            }}
          >
            <Text>Atividades</Text>
          </TouchableWithoutFeedback>
        </View>
      </Teste>

      <Provider
        style={{
          alignItems: 'center',
        }}
      >
        <Portal
          style={{
            alignItems: 'center',
          }}
        >
          <Dialog
            visible={modal}
            style={{
              backgroundColor: 'white',
              borderRadius: 15,
              padding: 15,
              alignItems: 'center',
              width: '88%',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                alignItems: 'flex-start',
                width: '80%',
              }}
            >
              <Text style={{ color: '#219653', fontSize: 25 }}>Alerta</Text>
              <Text style={{ color: '#979797' }}>
                Sempre Alerta, digite o código:
              </Text>
            </View>
            <Input>
              <TextInput
                placeholderTextColor='green'
                underlineColorAndroid='green'
                style={{
                  alignItems: 'center',
                  fontSize: 30,
                }}
                theme={{ colors: { text: '#219653' } }}
                value='9999'
                // onChangeText={(text) => setText(text)}
              />
            </Input>
            <Input>
              <TextInput
                placeholderTextColor='green'
                underlineColorAndroid='green'
                style={{ alignItems: 'center', fontSize: 30, color: '#219653' }}
                value=''
                // onChangeText={(text) => setText(text)}
              />
            </Input>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                paddingTop: 8,
                marginBottom: '-12%',

                width: '80%',
                justifyContent: 'space-between',
              }}
            >
              <Button
                mode='outlined'
                style={{ color: '#219653', borderRadius: 15 }}
                onPress={() => setModal(false)}
              >
                <Text style={{ color: '#219653' }}> Cancelar </Text>
              </Button>
              <Button
                style={{
                  backgroundColor: '#219653',
                  color: '#fff',
                  borderRadius: 15,
                }}
                mode='contained'
              >
                Enviar
              </Button>
            </View>
          </Dialog>
        </Portal>
      </Provider>
    </Container>
  );
};

export default Dashboard;
