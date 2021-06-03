import styled from 'styled-components/native';

export const Modal = styled.Modal.attrs({
  transparent: true,
})``;

export const Container = styled.TouchableOpacity`
  flex: 1;
  background-color: #00000070;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View.attrs({
  onStartShouldSetResponder: () => true,
})`
  padding: 20px;
  width: 70%;
  background-color: white;
  border-radius: 20px;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 20px;
`;
