import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const MessengerItem = (props) => {
  const { onPress } = props
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 80,
        backgroundColor: 'blue',
      }}
    ></TouchableOpacity>
  )
}

export default MessengerItem

const styles = StyleSheet.create({})
