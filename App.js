import React from 'react';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import MainNavigation from 'src/routes/MainNavigation';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/store/reducers';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <MainNavigation />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
