import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { LogBox } from 'react-native';
import Root from './src/root/Root';
import { Provider } from 'react-redux'
import store from './src/redux/store';

LogBox.ignoreAllLogs();

const App = () => {
  return (
      <Provider store={store}>
        <Root/>
      </Provider>
  );
};

export default App;
