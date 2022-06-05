import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UITabs from './UITabs'
import { Welcome, Login, Register } from '../screens'

const MyApp = (props) => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={'Welcome'} component={Welcome}></Stack.Screen>
        <Stack.Screen name={'Login'} component={Login}></Stack.Screen>
        <Stack.Screen name={'Register'} component={Register}></Stack.Screen>
        <Stack.Screen name={'UITabs'} component={UITabs}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MyApp

const styles = StyleSheet.create({})
