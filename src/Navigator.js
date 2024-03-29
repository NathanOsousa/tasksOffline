import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Auth from './screens/Auth';
import TaskList from './screens/taskList/TaskList';
import Menu from '../src/screens/menu';
import globalStyles from './globalStyles';
import AuthOrApp from './screens/AuthOrApp';

const menuConfig = {
  initialRouteName: 'today',
  contentComponent: Menu,
  contentOptions: {
    labelStyle: {
      fontFamily: globalStyles.fontFamily,
      fontWeight: 'normal',
      fontSize: 20,
    },
    activeLabelStyle: {
      color: '#080',
      fontWeight: 'bold',
    },
  },
};

const menuRoutes = {
  today: {
    name: 'Today',
    screen: props => <TaskList title="Hoje" daysAhead={0} {...props} />,
    navigationOptions: {
      title: 'Hoje',
    },
  },
  Tomorrow: {
    name: 'Tomorrow',
    screen: props => <TaskList title="Amanhã" daysAhead={1} {...props} />,
    navigationOptions: {
      title: 'Amanhã',
    },
  },
  Week: {
    name: 'Week',
    screen: props => <TaskList title="Semana" daysAhead={7} {...props} />,
    navigationOptions: {
      title: 'Semana',
    },
  },
  Month: {
    name: 'Month',
    screen: props => <TaskList title="Mês" daysAhead={30} {...props} />,
    navigationOptions: {
      title: 'Mês',
    },
  },
};

const menuNavigator = createDrawerNavigator(menuRoutes, menuConfig);

const mainRoutes = {
  Auth: {
    name: 'Auth',
    screen: Auth,
  },
  Home: {
    name: 'Home',
    screen: menuNavigator,
  },
  AuthOrApp: {
    name: 'AuthOrApp',
    screen: AuthOrApp,
  },
};

const mainNavigation = createSwitchNavigator(mainRoutes, {
  initialRouteName: 'Home',
  //initialRouteName: 'AuthOrApp',
});

export default createAppContainer(mainNavigation);
