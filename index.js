/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import './initialize';
import AppLayout from './layout';


AppRegistry.registerComponent(appName, () => AppLayout);