import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppNavigation from './AppNavigation';
import { TestNav } from 'rn-test-library-sixdee'
import { Button } from 'react-test-6d-demo'

export default function App(props) {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
