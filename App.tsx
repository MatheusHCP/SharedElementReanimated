import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { Routes } from './src/routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}



export default App;
