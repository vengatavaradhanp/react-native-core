import React from 'react';
import { StyleSheet, View } from 'react-native';
import RootContainer from './src/navigations/RootNavigation';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (<NativeBaseProvider><RootContainer /></NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
