import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { images, fontSizes, colors, icons } from '../../constants/index'
const FiveStars = (props) => {
  const { numberupOfStars } = props
  return (
    <View style={{ flexDirection: 'row' }}>
      {[0, 1, 2, 3, 4, 5].map((item) => (
        <Image
          key={`${item}`}
          style={{
            width: 13,
            height: 13,
            resizeMode: 'contain',
          }}
          source={item <= numberupOfStars ? images.star : images.starblack}
        ></Image>
      ))}
    </View>
  )
}

export default FiveStars

const styles = StyleSheet.create({})
