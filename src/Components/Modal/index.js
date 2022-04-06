import React, { useState, useEffect } from 'react';
import { Button, Modal, TextInput, Title } from 'react-native-paper';
import { Text, View } from 'react-native';
import moment from 'moment';
import api from '../../services/api';
import { createIconSetFromFontello } from 'react-native-vector-icons';

const ModalComponent = ({ isOpen, id, closeModal, enviar }) => {
  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    margin: 20,
    height: '30%',
    justifyContent: 'space-between',
  };
  const [itens, setItens] = useState({ lampada: '', armario: '' });
  const [checkListExist, setCheckListExist] = useState(false);

  const getRotas = async (id) => {
    const response = await api.get(`/atividade/item/tarefa/${id}`);
    console.log(response);
    if (response.data.data.length > 0) {
      setCheckListExist(false);
      setItens({
        lampada: response.data.data[0].descricao,
        armario: response.data.data[1].descricao,
      });
    } else {
      setCheckListExist(true);
      setItens({ lampada: '', armario: '' });
    }
  };

  useEffect(() => {
    if (id) {
      getRotas(id);
    }
  }, [id]);

  return (
    <Modal visible={isOpen} contentContainerStyle={containerStyle}>
      <Title style={{ color: '#219653' }}>
        Checklist das {new Date().getHours()}:{new Date().getMinutes()}
      </Title>
      <TextInput
        value={itens.lampada}
        onChange={(e) => setItens({ ...itens, lampada: e.nativeEvent.text })}
        theme={{ colors: { primary: '#219653' } }}
        label='A lâmpada estava acessa?'
      />
      <TextInput
        value={itens.armario}
        onChange={(e) => setItens({ ...itens, armario: e.nativeEvent.text })}
        theme={{ colors: { primary: '#219653' } }}
        label='Algum armário destrancado?'
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Button color='#219653' onPress={closeModal}>
          {!checkListExist ? 'Fechar' : 'Cancelar'}
        </Button>
        {checkListExist && (
          <Button
            style={{ backgroundColor: '#219653' }}
            onPress={() => enviar(itens)}
            mode='contained'
          >
            Salvar
          </Button>
        )}
      </View>
    </Modal>
  );
};

export default ModalComponent;
