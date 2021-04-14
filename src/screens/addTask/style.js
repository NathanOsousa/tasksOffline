import globalStyles from '../../globalStyles';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  container: {
    // flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontFamily: globalStyles.fontFamily,
    backgroundColor: globalStyles.colors.today,
    textAlign: 'center',
    padding: 15,
    fontSize: 18,
    color: 'white',
  },
  input: {
    fontFamily: globalStyles.fontFamily,
    width: '90%',
    height: 40,
    margin: 15,
    backgroundColor: '#FFF',
    borderColor: '#e3e3e3',
    borderWidth: 1,
    borderRadius: 6,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    margin: 20,
    marginRight: 30,
    color: globalStyles.colors.today,
  },
});
