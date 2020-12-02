// external dependencies
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';

// internal dependencies
// import AppHeader from './src/components/header/header'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <AppHeader /> */}
      <Text>Open up App.js to start working on your app!</Text>
      <Button 
        title="Testing testing"
      />
      <StatusBar style="auto" />
    </View>
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
