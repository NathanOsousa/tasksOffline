import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  FlatList,
  Pressable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import style from './style';
import todayImage from '../../../assets/imgs/today.jpg';
import moment from 'moment';
import 'moment/locale/pt';
import Task from '../../components/Task/task';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AddTask} from '../addTask/AddTask';

const today = moment().local('pt-br').format('ddd, D [de] MMMM');
export default class TaskList extends Component {
  state = {
    showAddTask: false,
    showDoneTasks: true,
    visibleTasks: [],
    tasks: [
      {
        id: Math.random(),
        desc: 'Estudar node js',
        estimatedAt: new Date(),
        doneAt: new Date(),
      },
      {
        id: Math.random(),
        desc: 'Estudar React native',
        estimatedAt: new Date(),
        doneAt: null,
      },
    ],
  };

  componentDidMount = () => {
    this.filterTasks();
  };

  toggleTask = taskId => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === taskId) {
        task.doneAt = task.doneAt ? null : new Date();
      }
    });
    this.setState({tasks}, this.filterTasks);
  };

  filterTasks = () => {
    let visibleTasks = null;

    if (this.state.showDoneTasks) {
      visibleTasks = [...this.state.tasks];
    } else {
      const pending = task => task.doneAt === null;
      visibleTasks = this.state.tasks.filter(pending);
    }

    this.setState({visibleTasks});
  };

  toggleFilter = () => {
    this.setState({showDoneTasks: !this.state.showDoneTasks}, this.filterTasks);
  };

  addTask = newTask => {
    if (!newTask.desc || !newTask.desc.trim()) {
      Alert.alert('Dados inválidos', 'desc vazia');
      return;
    }
    const tasks = [...this.state.tasks];
    tasks.push({
      id: Math.random(),
      desc: newTask.desc,
      estimatedAt: newTask.data,
      doneAt: null,
    });

    this.setState({tasks, showAddTask: false}, this.filterTasks);
  };

  render() {
    return (
      <View style={style.container}>
        <AddTask
          isVisible={this.state.showAddTask}
          onCancel={() => this.setState({showAddTask: false})}
          onSave={this.addTask}
        />
        <ImageBackground style={style.backGround} source={todayImage}>
          <View style={style.iconBar}>
            <Pressable
              onPress={this.toggleFilter}
              hitSlop={{top: 30, bottom: 30, left: 30, right: 30}}>
              <Icon
                name={this.state.showDoneTasks ? 'eye' : 'eye-slash'}
                size={20}
                color="#FFF"
              />
            </Pressable>
          </View>

          <View style={style.titleBar}>
            <Text style={style.title}>Hoje</Text>
            <Text style={style.subtitle}>{today}</Text>
          </View>
        </ImageBackground>
        <View style={style.taskList}>
          <FlatList
            data={this.state.visibleTasks}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <Task {...item} toggleTask={this.toggleTask} />
            )}
          />

          <TouchableOpacity
            activeOpacity={0.7}
            style={style.addButton}
            onPress={() => this.setState({showAddTask: true})}>
            <Icon name={'plus'} size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
