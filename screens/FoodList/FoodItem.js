import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { images, fontSizes, colors, icons } from '../../constants/index'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const _getColorStatus = (status) => {
  return status.toLowerCase().trim() == 'opening now'
    ? colors.success
    : status.toLowerCase().trim() == 'closing soon'
    ? colors.warning
    : status.toLowerCase().trim() == 'closing now'
    ? colors.alert
    : status.toLowerCase().trim() == 'coming now'
    ? colors.success
    : colors.success
}

const FoodItem = (props) => {
  let { name, url, status, price, website, sosialNetwork } = props.food
  const { onPress } = props

  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Image
        style={styles.image}
        source={{
          uri: url,
        }}
      ></Image>
      <View style={styles.status}>
        <Text style={styles.text1}>{name}</Text>
        <View style={styles.line}></View>
        <View style={styles.viewStatus}>
          <Text style={styles.text2}>Status: </Text>
          <Text
            style={{ color: _getColorStatus(status), fontSize: fontSizes.h4 }}
          >
            {status.toUpperCase()}{' '}
          </Text>
        </View>
        <Text style={styles.text2}>Price: {price} $ </Text>
        <Text style={styles.text2}>Food Type: pizza </Text>
        <Text style={styles.text2}>Website: {website}</Text>
        <View style={styles.signorther}>
          {sosialNetwork['facebook'] != undefined && (
            <Image
              name="facebook"
              source={images.facebook}
              style={styles.icon}
            ></Image>
          )}
          {sosialNetwork['google'] != undefined && (
            <Image
              name="google"
              source={images.google}
              style={styles.icon}
            ></Image>
          )}

          {sosialNetwork['instagram'] != undefined && (
            <Image
              name="instagram"
              source={images.instagram}
              style={styles.icon}
            ></Image>
          )}
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default FoodItem

const styles = StyleSheet.create({
  item: {
    height: 168,
    paddingTop: 10,
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  image: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
    borderRadius: 15,
  },

  status: {
    flex: 1,
    marginHorizontal: 5,
  },
  text1: {
    color: 'black',
    fontSize: fontSizes.h4,
    fontWeight: 'bold',
  },
  text2: {
    color: colors.inactive,
    fontSize: fontSizes.h4,
  },

  line: {
    backgroundColor: 'black',
    height: 1,
  },
  viewStatus: {
    flexDirection: 'row',
  },
  icon: {
    width: 25,
    height: 25,
    marginHorizontal: 5,
  },
  signorther: {
    flexDirection: 'row',
  },
})
