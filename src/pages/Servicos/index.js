import React, { useCallback, useEffect, useState } from 'react';
import { Container, Teste, Grid } from './styles';
import { Title, Divider, Text } from 'react-native-paper';
import CustomSwitch from '../../Components/CustomSwitch';
import { View, Image, ScrollView } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import api from '../../services/api';
import moment from 'moment';
const Servicos = ({ navigation }) => {
  const [tabSelected, setTabSelected] = useState(1);
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    getServicos();
  }, []);

  const getServicos = useCallback(async () => {
    const response = await api.get('/servico/all');
    setServicos(response.data);
  }, []);

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
        <View
          style={{ alignItems: 'center', minHeight: '75%', paddingTop: 50 }}
        >
          <Title>Victorio Robertson</Title>
          <Title style={{ fontSize: 15 }}>Segurança para Todos</Title>
          <View style={{ alignItems: 'center', margin: 20 }}>
            <CustomSwitch
              selectionMode={1}
              roundCorner={true}
              option1={'À Realizar'}
              option2={'Realizados'}
              onSelectSwitch={onSelectSwitch}
              selectionColor={'#219653'}
            />
          </View>
          <View style={{ display: 'flex', alignItems: 'center' }}>
            {tabSelected == 1 ? (
              <>
                {servicos.map((servico) => (
                  <>
                    <View
                      key={servico.id}
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '90%',
                        paddingBottom: 15,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Image
                        style={{ height: 40, width: 40 }}
                        source={require('../../images/selected_green.png')}
                      />

                      <View>
                        <Title>{servico.nome}</Title>
                        <Text style={{ width: '80%' }}>
                          Visitar todas áreas do estacionament.
                        </Text>
                      </View>
                      <View>
                        <Text style={{ color: '#BDBDBD' }}>
                          {servico.nome
                            ? moment(servico.criado_dt).format('DD-MM-YYYY')
                            : ''}
                        </Text>
                        <Text style={{ color: '#BDBDBD' }}>
                          {' '}
                          {servico.nome
                            ? moment(servico.criado_dt).format('HH:mm')
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
                  </>
                ))}
              </>
            ) : (
              <>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '90%',
                    paddingBottom: 15,
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
                    paddingBottom: 15,
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
                    paddingBottom: 15,
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
                    paddingBottom: 15,
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
                paddingBottom: 15,
                justifyContent: 'space-around',
              }}
            >
              <TouchableNativeFeedback
                style={{
                  backgroundColor: '#219653',
                  height: 54,
                  borderRadius: 25,
                  padding: 10,
                  width: '200%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  style={{ height: 30, width: 25 }}
                  source={require('../../images/icon_navigate.png')}
                />
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
                onPress={() => {
                  navigation.navigate('Ocorrencias');
                }}
                style={{
                  height: 54,
                  alignItems: 'center',
                  color: '#219653',
                  marginLeft: 40,
                  backgroundColor: '#e8e8e8',
                  borderRadius: 25,
                  padding: 10,
                  justifyContent: 'center',
                }}
              >
                <Text>Ocorrências</Text>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
                onPress={() => {
                  alert('data');

                  navigation.navigate('Atividades');
                }}
                style={{
                  height: 54,
                  alignItems: 'center',
                  color: '#219653',
                  backgroundColor: '#e8e8e8',
                  borderRadius: 25,
                  padding: 10,
                  justifyContent: 'center',
                }}
              >
                <Text>Atividades</Text>
              </TouchableNativeFeedback>
            </View>
          </View>
        </View>
      </Teste>
    </Container>
  );
};

export default Servicos;
