/*
npm install react-navigation
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/bottom-tabs
npm install @react-navigation/native
npm install @react-navigation/native-stack
**/

import * as React from 'react'
import { FoodList, Settings, ProductGridView, Profile, Chat } from '../screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import { images, fontSizes, colors, icons } from '../constants/index'
import Icon from 'react-native-vector-icons/FontAwesome'

const Tabs = createBottomTabNavigator()
const screenOptions = ({ route }) => ({
  headerShown: false,
  tabBarActiveBackgroundColor: '#f5eaff',
  tabBarInactiveBackgroundColor: '#f5eaff',
  tabBarActiveTintColor: colors.pur,
  tabBarInactiveTintColor: colors.inactive,

  tabBarIcon: ({ focused, color, size }) => {
    let screenName = route.name
    // let iconName = images.default
    // if (screenName == 'ProductGridView') {
    //   iconName = images.product
    // } else if (screenName == 'FoodList') {
    //   iconName = images.dish
    // } else if (screenName == 'Settings') {
    //   iconName = images.settings
    // }
    const iconName =
      screenName == 'ProductGridView'
        ? images.product
        : screenName == 'FoodList'
        ? images.dish
        : screenName == 'Settings'
        ? images.settings
        : screenName == 'Profile'
        ? images.profile
        : screenName == 'Chat'
        ? images.chat
        : images.default
    return (
      <Image
        style={{
          height: 23,
          width: 23,
          tintColor: focused ? colors.pur : colors.inactive,
        }}
        source={iconName}
      ></Image>
    )
  },
})
const UITabs = (props) => {
  return (
    <Tabs.Navigator screenOptions={screenOptions}>
      <Tabs.Screen
        name={'ProductGridView'}
        component={ProductGridView}
        options={{
          tabBarLabel: 'Product',
          tabBarLabelStyle: {
            fontSize: fontSizes.h4,
            marginBottom: 5,
          },
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name={'FoodList'}
        component={FoodList}
        options={{
          tabBarLabel: 'Food',
          tabBarLabelStyle: {
            fontSize: fontSizes.h4,
            marginBottom: 5,
          },
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name={'Chat'}
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarLabelStyle: {
            fontSize: fontSizes.h4,
            marginBottom: 5,
          },
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name={'Settings'}
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarLabelStyle: {
            fontSize: fontSizes.h4,
            marginBottom: 5,
          },
        }}
      ></Tabs.Screen>

      <Tabs.Screen
        name={'Profile'}
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarLabelStyle: {
            fontSize: fontSizes.h4,
            marginBottom: 5,
          },
        }}
      ></Tabs.Screen>
    </Tabs.Navigator>
  )
}

export default UITabs

const styles = StyleSheet.create({})
