import {Alert, Platform} from 'react-native';

const server =
  Platform.OS === 'ios' ? 'http://localhost:3000' : 'http://10.0.2.2:3000';

const showError = error => {
  if (error.response && error.response.data) {
    Alert.alert('Error: ', `Mensagem: ${error.response.data}`);
  }
  Alert.alert('Ops! ocorreu um problema');
};

const showSuccess = msg => {
  Alert.alert('Sucesso: ', `Msg: ${msg}`);
};

export {server, showError, showSuccess};
