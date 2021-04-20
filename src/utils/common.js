import {Alert, Platform} from 'react-native';

const server =
  Platform.OS === 'ios' ? 'http://localhost:3000' : 'http://10.0.2.2:3000';

const showError = error => {
  Alert.alert('Error: ', `Erro: ${error}`);
};

const showSuccess = msg => {
  Alert.alert('Sucesso: ', `Msg: ${msg}`);
};

export {server, showError, showSuccess};
