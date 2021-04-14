import React, {Component} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import style from './style';
const InitialState = {desc: ''};
export class AddTask extends Component {
  state = {
    ...InitialState,
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
