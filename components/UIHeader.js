import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { images, icons, colors, fontSizes } from '../constants/index'

const UIHeader = (props) => {
  const {
    title,
    leftIconName = '',
    rightIconName = '',
    onPressLeftIcon,
    onPressRightIcon,
  } = props
  return (
    <View
      style={{
        marginTop: 20,
        height: 55,
        backgroundColor: '#744ef3',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}
    >
      {leftIconName == '' || leftIconName == undefined ? (
        <View
          style={{
            height: 35,
            width: 35,
            paddingHorizontal: 25,
          }}
        ></View>
      ) : (
        <TouchableOpacity onPress={onPressLeftIcon}>
          <Image
            style={{
              height: 35,
              width: 35,
              marginStart: 5,
            }}
            source={leftIconName}
          ></Image>
        </TouchableOpacity>
      )}
      <Text
        style={{
          color: 'white',
          fontSize: fontSizes.h3,
          fontWeight: 'bold',
        }}
      >
        {title}
      </Text>

      {rightIconName == '' || rightIconName == undefined ? (
        <View
          style={{
            height: 35,
            width: 35,
            paddingHorizontal: 25,
          }}
        ></View>
      ) : (
        <TouchableOpacity onPress={onPressRightIcon}>
          <Image
            style={{
              height: 35,
              width: 35,
              paddingHorizontal: 25,
              resizeMode: 'contain',
            }}
            source={rightIconName}
          ></Image>
        </TouchableOpacity>
      )}
    </View>
  )
}

export default UIHeader

const styles = StyleSheet.create({})
