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
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {server, showError} from '../../utils/common';

const today = moment().local('pt-br').format('ddd, D [de] MMMM');
const initialState = {
  showAddTask: false,
  showDoneTasks: true,
  visibleTasks: [],
  tasks: [],
  showAlert: false,
};
export default class TaskList extends Component {
  state = {
    ...initialState,
  };

  loadTasks = async () => {
    try {
      const maxDate = moment().endOf('day').format('YYYY-MM-DD 23:59:59');
      const res = await axios.get(`${server}/tasks?date=${maxDate}`);
      this.setState({tasks: res.data}, this.filterTasks);
    } catch (error) {
      showError(error);
    }
  };

  componentDidMount = async () => {
    const stateString = await AsyncStorage.getItem('tasksState'); //pega o estado do asyncStorage em string
    const savedState = JSON.parse(stateString) || initialState; //salva o state como json ou pega o state inical
    this.setState({showDoneTasks: savedState.showDoneTasks}, this.filterTasks); //salva no state da pagina
    this.loadTasks();
  };

  toggleTask = async taskId => {
    try {
      await axios.put(`${server}/tasks/${taskId}/toggle`);
      this.loadTasks();
    } catch (error) {
      showError(error);
    }

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
    AsyncStorage.setItem(
      'tasksState',
      JSON.stringify({
        showDoneTasks: this.state.showDoneTasks,
      }),
    ); //salva estado no asyncStorage
  };

  toggleFilter = () => {
    this.setState({showDoneTasks: !this.state.showDoneTasks}, this.filterTasks);
  };

  addTask = async newTask => {
    if (!newTask.desc || !newTask.desc.trim()) {
      Alert.alert('Dados inválidos', 'desc vazia');
      return;
    }
    try {
      await axios.post(`${server}/tasks`, {
        desc: newTask.desc,
        estimatedAt: newTask.date,
      });
    } catch (error) {
      showError(error);
    }

    this.setState({tasks, showAddTask: false}, this.loadTasks);
  };

  deleteTask = async taskId => {
    try {
      await axios.delete(`${server}/tasks/${taskId}`);
      this.loadTasks();
    } catch (error) {
      showError(error);
    }
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
              <Task
                {...item}
                toggleTask={this.toggleTask}
                onDelete={this.deleteTask}
              />
            )}
          />

          <TouchableOpacity
            activeOpacity={0.7}
            style={style.addButton}
            onPress={() => this.setState({showAddTask: true})}>
            <Icon name={'plus'} size={20} color="#FFF" />
          </TouchableOpacity>
        </View>

        {this.state.showAlert && (
          <View style={style.deleteAlert}>
            <Text style={style.alertText}>
              Estamos excluindo o registo "
              {this.state.tasks[0] ? this.state.tasks[0].desc : ''}"
            </Text>
            <Icon name="undo" size={15} color="#FFF" />
          </View>
        )}
      </View>
    );
  }
}
