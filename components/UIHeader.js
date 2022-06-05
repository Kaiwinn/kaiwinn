import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { images, icons, colors, fontSizes } from '../constants/index'

const UIHeader = (props) => {
  const { title } = props
  return (
    <View
      style={{
        marginTop: 20,
        height: 55,
        backgroundColor: '#744ef3',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          color: 'white',
          marginTop: 20,
          fontSize: fontSizes.h3,
          fontWeight: 'bold',
        }}
      >
        {title}
      </Text>
    </View>
  )
}

export default UIHeader

const styles = StyleSheet.create({})
