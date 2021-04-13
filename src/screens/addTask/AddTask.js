import React, {Component} from 'react';
import {View, Text, Modal, TouchableWithoutFeedback} from 'react-native';
import style from './style';

export class AddTask extends Component {
  state = {};

  render() {
    return (
      <Modal
        transparent
        visible={this.props.isVisible}
        onRequestClose={this.props.onCancel}
        animationType="slide">
        <TouchableWithoutFeedback onPress={this.props.onCancel}>
          <View style={style.background}></View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

export default AddTask;
