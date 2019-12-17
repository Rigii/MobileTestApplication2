/**
 * @format
 */
import React from 'react'
import { AppRegistry } from 'react-native';
import App from './src/screens/app.navigator';
import { name as appName } from './app.json';
import { Provider } from 'react-redux'
import { store } from './src/services/redux/store'
import { persistor } from './src/services/redux/store'
import { PersistGate } from 'redux-persist/integration/react'

const RNRedux = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
