import React, {Component} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import style from './style';
import moment from 'moment';

const InitialState = {desc: '', date: new Date(), showDatePicker: false};
export class AddTask extends Component {
  state = {
    ...InitialState,
  };

  getDateTimePicker = () => {
    let datePicker = (
      <DateTimePicker
        value={this.state.date}
        onChange={(_, date) => this.setState({date, showDatePicker: false})}
        mode="date"
      />
    );

    const dateString = moment(this.state.date).format(
      'ddd, D [de] MMMM [de] YYYY',
    );

    if (Platform.OS === 'android') {
      datePicker = (
        <View>
          <TouchableOpacity
            onPress={() => this.setState({showDatePicker: true})}>
            <Text style={style.date}>{dateString}</Text>
          </TouchableOpacity>
          {this.state.showDatePicker && datePicker}
        </View>
      );
    }
    return datePicker;
  };

  render() {
    return (
      <Modal
        transparent
        visible={this.props.isVisible}
        onRequestClose={this.props.onCancel}
        animationType="slide">
        <TouchableWithoutFeedback onPress={this.props.onCancel}>
          <View style={style.background} />
        </TouchableWithoutFeedback>
        <View style={style.container}>
          <Text style={style.header}>Nova Tarefa</Text>
          {this.getDateTimePicker()}
          <TextInput
            style={style.input}
            placeholder="Descrição da Tarefa"
            value={this.state.desc}
            onChangeText={desc => this.setState({desc})}
          />
          <View style={style.buttons}>
            <TouchableOpacity
              style={style.button}
              onPress={this.props.onCancel}>
              <Text>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button}>
              <Text>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={this.props.onCancel}>
          <View style={style.background} />
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

export default AddTask;
