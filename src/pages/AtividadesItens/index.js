import React, { useCallback, useEffect, useState } from 'react';
import { Container, Teste, Grid } from './styles';
import { Title, Divider, Text, Subheading } from 'react-native-paper';
import { View, Image, TextBase, BackHandler } from 'react-native';
import api from '../../services/api/index';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import moment from 'moment';
import { useNavigation, useRoute } from '@react-navigation/native';

import Modal from '../../Components/Modal';
import { set } from 'react-native-reanimated';

const AtividadeItens = () => {
  const routes = useRoute();
  const navigation = useNavigation();
  const [atividade, setatividade] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState('');

  useEffect(() => {
    getAtividadeItens();
  }, []);

  const getAtividadeItens = async () => {
    let url = `/atividade/item/${routes.params.id}`;
    const response = await api.get(url);
    setatividade(response.data.data);
    setLoading(false);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleRonda = (dados) => {
    const dados1 = {
      nome: 'armario',
      descricao: dados.armario,
      id_atividade_item: id,
    };

    const dados2 = {
      nome: 'lampada',
      descricao: dados.lampada,
      id_atividade_item: id,
    };

    const dados3 = [dados1, dados2];

    dados3.map(async (item, index) => {
      await api.post('/atividade/item/tarefa/create', item);
    });

    closeModal();
  };

  return (
    <Container>
      <Teste>
        <View
          style={{ alignItems: 'center', minHeight: '75%', paddingTop: '4%' }}
        >
          <View
            style={{
              shadowColor: '#000',

              shadowOpacity: 90,
              width: 150,
              height: 40,
              elevation: 1,
            }}
          >
            <Subheading>Ronda estacionamento</Subheading>
          </View>
          <TouchableOpacity
            style={{
              width: 350,
              display: 'flex',
              alignItems: 'flex-start',
            }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={{ color: '#219653', fontWeight: 'bold' }}>Voltar</Text>
          </TouchableOpacity>

          <View style={{ display: 'flex', alignItems: 'center' }}>
            <>
              {loading ? (
                <Text>Carregando</Text>
              ) : (
                atividade.length === 0 && <Text>Não contem nenhuma ronda</Text>
              )}
              {atividade.length != 0 &&
                atividade?.map((info, index) => (
                  <TouchableOpacity
                    key={info.id}
                    onPress={() => {
                      setId(info.id);
                      setModalVisible(true);
                    }}
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
                        <Title>
                          Passo {index + 1} {info.nome}
                        </Title>
                        <Text style={{ width: '80%' }}>
                          Visitar todas áreas do estacionament.
                        </Text>
                      </View>
                      <View>
                        <Text style={{ color: '#BDBDBD' }}>
                          {' '}
                          {moment(info.criado_dt).format('DD/MM/YYYY')}
                        </Text>
                        <Text style={{ color: '#BDBDBD' }}>
                          {moment(info.criado_dt).format('HH:mm')}
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
          </View>
        </View>
        <Modal
          enviar={handleRonda}
          isOpen={modalVisible}
          id={id}
          closeModal={closeModal}
        />
      </Teste>
    </Container>
  );
};

export default AtividadeItens;
