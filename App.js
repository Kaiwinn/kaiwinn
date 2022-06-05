import { StatusBar } from 'expo-status-bar'
import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MyApp from './navigation/MyApp'
import { LogBox } from 'react-native'

// Ignore log notification by message:
LogBox.ignoreLogs(['Remote debugger'])

// Ignore all log notifications:
LogBox.ignoreAllLogs()
export default function App() {
  return (
    <View style={styles.container}>
      <MyApp />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
