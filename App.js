/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Navigation from './src/navigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Navigation></Navigation>
    </>
  );
};

export default App;
