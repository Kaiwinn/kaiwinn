import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  FlatList,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { images, fontSizes, colors, icons } from '../constants/index'
import { UIHeader } from '../components/index'
import MessengerItem from './MessengerItem'

const Messenger = (props) => {
  const [chatHistory, setChatHistory] = useState([
    {
      url: '',
      isSender: true,
      messenger: 'Hello',
      timestamp: 1654700769000,
    },
    {
      url: '',
      isSender: false,
      messenger: 'Hello',
      timestamp: 1654700829000,
    },
    {
      url: '',
      isSender: true,
      messenger: 'Hello',
      timestamp: 1654700869000,
    },
  ])
  const { name, message, url } = props.route.params.user

  const { navigate, goBack } = props.navigation
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}
    >
      <UIHeader
        title={name}
        leftIconName={images.left_menu}
        rightIconName={images.detail}
        style={{}}
        onPressLeftIcon={() => {
          goBack()
        }}
        onPressRightIcon={() => {
          alert('right')
        }}
      />
      <FlatList
        style={{}}
        data={chatHistory}
        renderItem={({ item }) => (
          <MessengerItem
            onPress={() => {
              alert(`Mess Item ${item.messenger}`)
            }}
            item={item}
            key={`${item.timestamp}`}
          />
        )}
      />
    </View>
  )
}

export default Messenger

const styles = StyleSheet.create({})
