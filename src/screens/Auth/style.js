import {StyleSheet} from 'react-native';
import globalStyles from '../../globalStyles';

const style = StyleSheet.create({
  background: {
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: globalStyles.fontFamily,
    color: globalStyles.colors.secondary,
    fontSize: 70,
    marginBottom: 10,
  },
  formContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 20,
    width: '90%',
    borderRadius: 24,
  },
  input: {
    marginTop: 10,
    backgroundColor: '#FFF',
  },
  button: {
    backgroundColor: '#080',
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 7,
  },
  buttonText: {
    fontFamily: globalStyles.fontFamily,
    color: '#FFF',
    fontSize: 20,
  },
  subtitle: {
    fontFamily: globalStyles.fontFamily,
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },

  container: {
    width: '100%',
    height: 40,
    backgroundColor: '#EEE',
    borderRadius: 12,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  icon: {
    color: '#333',
    marginLeft: 20,
    alignSelf: 'center',
  },
  inputComponent: {
    marginLeft: 20,
    width: '70%',
  },
});

export default style;
