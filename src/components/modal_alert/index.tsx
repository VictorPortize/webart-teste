import React from 'react';
import {Container, Content, Modal, Text} from './styles';
import useModalAlert from './useModalAlert';

interface Props {
  onPress: () => void;
  visible: boolean;
  data: Array<number>;
}

const ModalAlert: React.FC<Props> = ({onPress, visible, data}) => {
  const {values} = useModalAlert(data);
  return (
    <Modal visible={visible}>
      <Container onPress={onPress}>
        <Content>
          {data.length > 0 ? (
            <>
              <Text>Idades na lista: {data.length}</Text>
              <Text>Menor idade: {values.min}</Text>
              <Text>Maior idade: {values.max}</Text>
              <Text>Média das idade: {values.media}</Text>
            </>
          ) : (
            <Text>
              Por favor, insira uma idade e pressione o botão "inserir"
            </Text>
          )}
        </Content>
      </Container>
    </Modal>
  );
};

export default ModalAlert;
