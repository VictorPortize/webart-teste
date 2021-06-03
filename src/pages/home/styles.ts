import styled, {css} from 'styled-components/native';
import colors from '../../config/colors';

interface PropsText {
  children: number;
}

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  padding: 20px;
  background-color: ${colors.background};
  flex: 1;
`;

export const Title = styled.Text`
  color: ${colors.title};
  font-size: 20px;
  font-weight: bold;
`;

export const Row = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

export const AgeInput = styled.TextInput.attrs({
  placeholder: 'Insira a idade',
  keyboardType: 'numeric',
})`
  flex: 1;
  background-color: ${colors.input};
  padding: 14px;
  font-size: 16px;
`;

export const TextInsert = styled.Text`
  color: ${colors.textInsert};
  font-size: 18px;
`;

export const ButtonInsert = styled.TouchableOpacity`
  flex: 1;
  background-color: ${colors.buttonInsert};
  margin-left: 10px;
  align-items: center;
  justify-content: center;
`;

export const ListAges = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 20,
  },
})`
  background-color: white;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const TextAge = styled.Text<PropsText>`
  font-size: 16px;
  margin-top: 10px;
  font-weight: bold;
  ${props => {
    if (Number(props.children) < 20) {
      return css`
        color: ${colors.ageList.below20};
      `;
    } else if (Number(props.children) < 40) {
      return css`
        color: ${colors.ageList.below40};
      `;
    } else {
      return css`
        color: ${colors.ageList.above40};
      `;
    }
  }}
`;

export const ButtonSubmit = styled.TouchableOpacity`
  padding: 14px;
  background-color: ${colors.buttonCalc};
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled(TextInsert)`
  color: ${colors.textButtonCalc};
  font-weight: bold;
  font-size; 20px;
`;
