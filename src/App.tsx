import React from 'react';
import './i18n';
import MainNavigator from './navigation/MainNavigator';
import {ThemeProvider} from './theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
       <MainNavigator />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
