/**
 * @format
 */

import { AppRegistry } from 'react-native';
import TaskList from './src/screens/taskList/TaskList';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => TaskList);
