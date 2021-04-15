import React from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import 'moment/locale/pt-br';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default props => {
  const isDoneStyle =
    props.doneAt != null ? {textDecorationLine: 'line-through'} : {};

  const getCheckView = doneAt => {
    if (doneAt != null) {
      return (
        <View style={style.done}>
          <Icon name="check" size={20} color="#FFF" />
        </View>
      );
    } else {
      return <View style={style.pendding} />;
    }
  };

  const date = props.doneAt ? props.doneAt : props.estimatedAt;
  const formatedDate = moment(date).locale('pt-br').format('ddd, D [de] MMMM');
  const renderRightContent = () => {
    return (
      <TouchableOpacity
        style={style.right}
        onPress={() => props.onDelete(props.id)}>
        <Icon name="trash" size={30} color="#FFF" />
      </TouchableOpacity>
    );
  };

  const renderLefthContent = () => {
    return (
      <View style={style.left}>
        <Icon name="trash" size={20} color="#FFF" style={style.deleteItem} />
        <Text style={style.deleteText}>Excluir</Text>
      </View>
    );
  };

  return (
    <Swipeable
      renderRightActions={renderRightContent}
      renderLeftActions={renderLefthContent}
      onSwipeableLeftOpen={() => props.onDelete(props.id)}>
      <View style={style.container}>
        <TouchableWithoutFeedback onPress={() => props.toggleTask(props.id)}>
          <View style={style.checkContainer}>{getCheckView(props.doneAt)}</View>
        </TouchableWithoutFeedback>
        <View>
          <Text style={[style.desc, isDoneStyle]}> {props.desc} </Text>
          <Text style={style.date}> {formatedDate}</Text>
        </View>
      </View>
    </Swipeable>
  );
};
