import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './style';

const Input = props => {
  return (
    <View style={[style.container, props.style]}>
      <Icon name={props.icon} size={20} style={style.icon} />
      <TextInput {...props} style={style.inputComponent} />
    </View>
  );
};

export default Input;
