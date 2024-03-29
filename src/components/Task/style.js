import globalStyles from '../../globalStyles';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'red',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#FFF',
  },
  checkContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pendding: {
    height: 25,
    width: 25,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#555',
  },
  done: {
    height: 25,
    width: 25,
    borderRadius: 13,
    backgroundColor: '#4d7031',
    alignItems: 'center',
    justifyContent: 'center',
  },
  desc: {
    fontFamily: globalStyles.fontFamily,
    color: globalStyles.colors.mainText,
    fontSize: 15,
  },
  date: {
    fontFamily: globalStyles.fontFamily,
    color: globalStyles.colors.subText,
    fontSize: 12,
  },
  right: {
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 20,
  },
  left: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteText: {
    fontFamily: globalStyles.fontFamily,
    color: '#FFF',
    fontSize: 20,
    margin: 10,
  },
  deleteItem: {
    marginLeft: 10,
  },
});
