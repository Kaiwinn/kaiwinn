import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { images, icons, colors, fontSizes } from '../constants/index'

const UIButton = (props) => {
  const { onPress, title, isSelected } = props
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderColor: '#f0c4ff',
        borderWidth: 0,
        borderRadius: 20,
        height: 45,
        marginHorizontal: 38,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:
          props.isSelected == true ? colors.pinklight : '#cba2f7',
      }}
    >
      {isSelected == true && (
        <Image source={icons.check} style={styles.icon_btn} />
      )}

      <Text
        style={{
          color: isSelected == true ? '#111' : colors.pinklight,
          fontSize: 19,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default UIButton

const styles = StyleSheet.create({
  icon_btn: {
    position: 'absolute',
    left: 10,
    top: 9,
    height: 28,
    width: 28,
  },
})
