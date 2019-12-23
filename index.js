import { AppRegistry } from 'react-native';
import App from 'src/App';
// eslint-disable-next-line no-restricted-imports
import { name as appName } from './app.json';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));
