import React, {Component} from 'react';
import {Text, View, ImageBackground, FlatList} from 'react-native';
import style from './style';
import todayImage from '../../../assets/imgs/today.jpg';
import moment from 'moment';
import 'moment/locale/pt';
import Task from '../../components/Task/task';

const today = moment().local('pt-br').format('ddd, D [de] MMMM');
export default class TaskList extends Component {
  state = {
    tasks: [
      {
        id: Math.random(),
        desc: 'Estudar node js',
        estimatedAt: new Date(),
        doneAt: new Date(),
      },
      {
        id: Math.random(),
        desc: 'Estudar node js',
        estimatedAt: new Date(),
        doneAt: null,
      },
    ],
  };

  toggleTask = taskId => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === taskId) {
        task.doneAt = task.doneAt ? null : new Date();
      }
    });
    this.setState({tasks});
  };

  render() {
    return (
      <View style={style.container}>
        <ImageBackground style={style.backGround} source={todayImage}>
          <View style={style.titleBar}>
            <Text style={style.title}>Hoje</Text>
            <Text style={style.subtitle}>{today}</Text>
          </View>
        </ImageBackground>
        <View style={style.taskList}>
          <FlatList
            data={this.state.tasks}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Task {...item} toggleTask={this.toggleTask} />
            )}
          />
        </View>
      </View>
    );
  }
}
