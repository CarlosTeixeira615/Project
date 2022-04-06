import React, { useCallback, useEffect, useState } from 'react';
import { Container, Teste, Grid } from './styles';
import { Title, Divider, Text } from 'react-native-paper';
import CustomSwitch from '../../Components/CustomSwitch';
import { View, Image } from 'react-native';
import api from '../../services/api/index';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
const Atividades = () => {
  const navigation = useNavigation();
  const [tabSelected, setTabSelected] = useState(1);
  const [atividade, setatividade] = useState([]);

  useEffect(() => {
    getAtividades();
  }, []);

  const getAtividades = async () => {
    let url = `/atividade/all`;
    const response = await api.get(url);
    setatividade(response.data);
  };

  const onSelectSwitch = useCallback((index) => {
    setTabSelected(index);
  }, []);

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
        <View
          style={{ alignItems: 'center', minHeight: '75%', paddingTop: '4%' }}
        >
          <Title>Victorio Robertson</Title>
          <Title style={{ fontSize: 15 }}>Segurança para Todos</Title>
          <View style={{ alignItems: 'center', margin: '2%' }}>
            <CustomSwitch
              selectionMode={1}
              roundCorner={true}
              option1={'Abertas'}
              option2={'Fechadas'}
              onSelectSwitch={onSelectSwitch}
              selectionColor={'#219653'}
            />
          </View>
          <View style={{ display: 'flex', alignItems: 'center' }}>
            {tabSelected == 1 ? (
              <>
                {atividade?.map((info) => (
                  <TouchableOpacity
                    key={info.id}
                    onPress={() =>
                      navigation.navigate(`AtividadesItens`, {
                        name: 'AtividadeItensItens',
                        id: info.id,
                      })
                    }
                  >
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '90%',
                        paddingBottom: '2%',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Image
                        style={{ height: 40, width: 40 }}
                        source={require('../../images/selected_green.png')}
                      />

                      <View>
                        <Title>{info.nome}</Title>
                        <Text style={{ width: '80%' }}>
                          Visitar todas áreas do estacionament.
                        </Text>
                      </View>
                      <View>
                        <Text style={{ color: '#BDBDBD' }}>
                          {' '}
                          {info.criado_dt
                            ? moment(info.criado_dt).format('DD-MM-YYYY')
                            : ''}
                        </Text>
                        <Text style={{ color: '#BDBDBD' }}>
                          {info.criado_dt
                            ? moment(info.criado_dt).format('HH:mm')
                            : ''}
                        </Text>
                      </View>
                    </View>
                    <Divider
                      style={{
                        height: '0.3%',
                        alignItems: 'center',
                        width: '80%',
                        justifyContent: 'center',
                      }}
                    />
                  </TouchableOpacity>
                ))}
              </>
            ) : (
              <>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '90%',
                    paddingBottom: '2%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Image
                    style={{ height: 40, width: 40 }}
                    source={require('../../images/clock_red.png')}
                  />

                  <View>
                    <Title>Ronda Estacionamento</Title>
                    <Text style={{ width: '80%' }}>
                      Visitar todas áreas do estacionament..
                    </Text>
                  </View>
                  <View>
                    <Text style={{ color: '#BDBDBD' }}>11-11-21</Text>
                    <Text style={{ color: '#BDBDBD' }}>21:00</Text>
                  </View>
                </View>
                <Divider
                  style={{
                    height: '0.3%',
                    alignItems: 'center',
                    width: '80%',
                    justifyContent: 'center',
                  }}
                />
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '90%',
                    paddingBottom: '2%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Image
                    style={{ height: 40, width: 40, paddingRight: 5 }}
                    source={require('../../images/clock_grey.png')}
                  />

                  <View>
                    <Title>Ronda pelos Limites</Title>
                    <Text style={{ width: '80%' }}>
                      Chegar se toda as áreas esportivas.
                    </Text>
                  </View>
                  <View>
                    <Text style={{ color: '#BDBDBD' }}>12-11-21</Text>
                    <Text style={{ color: '#BDBDBD' }}>02:00</Text>
                  </View>
                </View>
                <Divider
                  style={{
                    height: '0.3%',
                    alignItems: 'center',
                    width: '80%',
                    justifyContent: 'center',
                  }}
                />
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '90%',
                    paddingBottom: '2%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Image
                    style={{ height: 40, width: 40, paddingRight: 5 }}
                    source={require('../../images/clock_grey.png')}
                  />

                  <View>
                    <Title>Ronda pelos Limites</Title>
                    <Text style={{ width: '80%' }}>
                      Chegar se toda as áreas esportivas.
                    </Text>
                  </View>
                  <View>
                    <Text style={{ color: '#BDBDBD' }}>12-11-21</Text>
                    <Text style={{ color: '#BDBDBD' }}>02:00</Text>
                  </View>
                </View>
                <Divider
                  style={{
                    height: '0.3%',
                    alignItems: 'center',
                    width: '100%',
                    justifyContent: 'center',
                  }}
                />
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '90%',
                    paddingBottom: '2%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Image
                    style={{ height: 40, width: 40, paddingRight: 5 }}
                    source={require('../../images/selected_red.png')}
                  />

                  <View>
                    <Title>Ronda Área Esportiva</Title>
                    <Text style={{ width: '80%' }}>
                      Checar se todas as áreas esportivas.
                    </Text>
                  </View>
                  <View>
                    <Text style={{ color: '#BDBDBD' }}>12-11-21</Text>
                    <Text style={{ color: '#BDBDBD' }}>02:00</Text>
                  </View>
                </View>
                <Divider
                  style={{
                    height: '0.3%',
                    alignItems: 'center',
                    width: '80%',
                    justifyContent: 'center',
                  }}
                />
              </>
            )}
            <View
              style={{
                flexDirection: 'row',
                margin: 5,
                width: '100%',
                paddingBottom: '2%',
                justifyContent: 'space-around',
              }}
            >
              <TouchableNativeFeedback
                style={{
                  height: 54,
                  backgroundColor: '#e8e8e8',

                  borderRadius: 25,
                  padding: 10,
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  navigation.navigate('Servicos');
                }}
              >
                <Text>Serviços</Text>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
                onPress={() => {
                  navigation.navigate('Ocorrencias');
                }}
                style={{
                  height: 54,
                  backgroundColor: '#e8e8e8',
                  borderRadius: 25,
                  padding: 10,
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text>Ocorrências</Text>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
                onPress={() => {
                  navigation.navigate('Atividades');
                }}
                style={{
                  height: 54,
                  alignItems: 'center',
                  color: '#fff',
                  backgroundColor: '#219653',

                  borderRadius: 25,

                  padding: 10,
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    color: '#fff',
                  }}
                >
                  Atividades
                </Text>
              </TouchableNativeFeedback>
            </View>
          </View>
        </View>
      </Teste>
    </Container>
  );
};

export default Atividades;
