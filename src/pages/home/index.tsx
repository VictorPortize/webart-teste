import React from 'react';
import {
  Container,
  AgeInput,
  ButtonSubmit,
  ButtonInsert,
  TextInsert,
  Row,
  TextAge,
  Content,
  ListAges,
  TextButton,
  Title,
} from './styles';
import useHome from './useHome';
import ModalAlert from '../../components/modal_alert';

const Home: React.FC = () => {
  const {
    addToAgeList,
    ageList,
    ageInput,
    toggleModal,
    showModalAlert,
    handleInputText,
  } = useHome();

  return (
    <>
      <ModalAlert
        data={ageList}
        visible={showModalAlert}
        onPress={toggleModal}
      />
      <Container>
        <Content>
          <Title>Idades</Title>
          <Row>
            <AgeInput value={ageInput} onChangeText={handleInputText} />
            <ButtonInsert onPress={addToAgeList}>
              <TextInsert>Inserir</TextInsert>
            </ButtonInsert>
          </Row>
          <ListAges
            data={ageList}
            renderItem={({item}) => <TextAge>{item}</TextAge>}
            keyExtractor={(item, index) => String(index)}
          />
          <ButtonSubmit onPress={toggleModal}>
            <TextButton>Calcular média</TextButton>
          </ButtonSubmit>
        </Content>
      </Container>
    </>
  );
};

export default Home;
