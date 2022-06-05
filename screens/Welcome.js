import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Platform,
} from 'react-native'
import { images, icons, colors, fontSizes } from '../constants/index'
import React, { useState, useEffect } from 'react'
import { UIButton, LoginButton } from '../components/index'
const Welcome = (props) => {
  //state ++  when a state chaned => UI reload.

  // like getter and setter
  const [accountTypes, setAccountTypes] = useState([
    {
      name: 'Influencer',
      isSelected: true,
    },
    {
      name: 'Bisiness',
      isSelected: false,
    },
    {
      name: 'Individual',
      isSelected: false,
    },
  ])

  // navigation
  const { navigation, route } = props
  // function of navigate to/back
  const { navigate, goBack } = navigation
  return (
    <View style={styles.wel}>
      <ImageBackground
        style={styles.imageBackground}
        resizeMode="cover"
        source={images.background}
      >
        <View style={styles.body0}>
          <View style={styles.navbar}>
            <Image source={icons.pen} style={styles.icon_img} />
            <Text style={styles.title}>KaiWin.Co</Text>
            <View style={styles.nav_help}></View>

            <Image source={icons.help} style={styles.ic_help} />
          </View>
        </View>
        <View style={styles.body1}>
          <Text style={styles.text1}>Wellcome to</Text>
          <Text style={styles.text2}>KaiWin.co</Text>
          <Text style={styles.text3}>Please select your account type</Text>
        </View>
        <View style={styles.body2}>
          {accountTypes.map((accountType) => (
            <UIButton
              key={accountType.name}
              onPress={() => {
                // get each AccountType on arrayList AccountType

                let newAccountType = accountTypes.map((eachAccountType) => {
                  // compare eachAccount (of List) with account selected
                  return {
                    ...eachAccountType,
                    isSelected: eachAccountType.name == accountType.name,
                  }

                  //Different ways
                  // if (eachAccountType.name == accountType.name) {
                  //   return { ...eachAccountType, isSelected: true }
                  // } else {

                  // }
                })
                setAccountTypes(newAccountType)
              }}
              title={accountType.name}
              isSelected={accountType.isSelected}
            />
          ))}
        </View>
        <View style={styles.body3}>
          <LoginButton
            onPress={() => {
              navigate('Login')
            }}
            title={'Login'.toUpperCase()}
          />
          <Text
            style={{
              fontSize: fontSizes.h6,
              alignSelf: 'center',
              color: 'white',
            }}
          >
            Want to register new account?
          </Text>
          <TouchableOpacity
            style={{ padding: 5 }}
            onPress={() => {
              navigate('Register')
            }}
          >
            <Text
              style={{
                fontSize: fontSizes.h4,
                alignSelf: 'center',
                color: colors.pinklight,
                textDecorationLine: 'underline',
                marginVertical: 5,
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  wel: {
    flex: 100,
    marginTop: 23,
  },
  icon_img: {
    padding: 2,
    marginHorizontal: 3,
    height: 40,
    width: 40,
  },
  navbar: {
    height: 50,
    marginTop: Platform === 'ios' ? 15 : 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white',
  },
  ic_help: {
    marginHorizontal: 15,
    padding: 1,
    height: 30,
    width: 30,
  },
  nav_help: {
    flex: 1,
  },
  imageBackground: {
    flex: 100,
  },
  body0: {
    flex: 15,
  },
  body1: {
    flex: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body2: {
    flex: 35,
  },
  body3: {
    flex: 25,
  },
  text1: {
    marginBottom: 13,
    color: 'white',
    fontSize: fontSizes.h2,
  },
  text2: {
    color: 'white',
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: fontSizes.h1,
  },
  text3: {
    marginBottom: 10,
    color: '#fff',
    fontSize: fontSizes.h3,
  },
})
