import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Switch,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { images, fontSizes, colors, icons } from '../constants/index'

import { UIHeader } from '../components/index'

const Settings = () => {
  const [isEnabledLockApp, setEnabledLockApp] = useState(true)
  const [isUseFingerprint, setUseFingerprint] = useState(false)
  const [isEnableChangePassword, setEnableChangePassword] = useState(true)

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <UIHeader title={'Setting'} />
      <ScrollView>
        <View>
          <View
            style={{
              backgroundColor: 'rgba(50,50,50,0.1)',
              height: 50,
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                fontSize: fontSizes.h4,
                color: '#3f19aa',
                paddingStart: 10,
              }}
            >
              Common
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              height: 55,
              alignItems: 'center',
            }}
          >
            <Image
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                marginHorizontal: 5,
              }}
              source={images.world}
            />
            <Text
              style={{
                flex: 1,
                color: 'black',
                fontSize: 18,
                marginStart: 2,
              }}
            >
              Languages
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: fontSizes.h4,
                marginHorizontal: 8,
                opacity: 0.5,
              }}
            >
              English
            </Text>
            <Image
              style={{
                width: 16,
                height: 16,
                resizeMode: 'contain',
                marginHorizontal: 3,
                opacity: 0.5,
              }}
              source={images.menulan}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              height: 55,
              alignItems: 'center',
            }}
          >
            <Image
              style={{
                width: 22,
                height: 22,
                resizeMode: 'contain',
                marginHorizontal: 5,
              }}
              source={images.cloud}
            />
            <Text
              style={{
                flex: 1,
                color: 'black',
                fontSize: 18,
              }}
            >
              Environment
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: fontSizes.h4,
                marginHorizontal: 8,
                opacity: 0.5,
              }}
            >
              Production
            </Text>
            <Image
              style={{
                width: 16,
                height: 16,
                resizeMode: 'contain',
                marginHorizontal: 3,
                opacity: 0.5,
              }}
              source={images.menulan}
            />
          </View>
        </View>
        <View>
          <View
            style={{
              backgroundColor: 'rgba(50,50,50,0.1)',
              height: 50,
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                fontSize: fontSizes.h4,
                color: '#3f19aa',
                paddingStart: 10,
              }}
            >
              Account
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              height: 55,
              alignItems: 'center',
            }}
          >
            <Image
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                marginHorizontal: 5,
              }}
              source={images.phone}
            />
            <Text
              style={{
                flex: 1,
                color: 'black',
                fontSize: 18,
                marginStart: 2,
              }}
            >
              Phone number
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: fontSizes.h4,
                marginHorizontal: 8,
                opacity: 0.5,
              }}
            ></Text>
            <Image
              style={{
                width: 16,
                height: 16,
                resizeMode: 'contain',
                marginHorizontal: 3,
                opacity: 0.5,
              }}
              source={images.menulan}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              height: 55,
              alignItems: 'center',
            }}
          >
            <Image
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                marginHorizontal: 5,
              }}
              source={images.mail}
            />
            <Text
              style={{
                flex: 1,
                color: 'black',
                fontSize: 18,
                marginStart: 2,
              }}
            >
              Email
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: fontSizes.h4,
                marginHorizontal: 8,
                opacity: 0.5,
              }}
            ></Text>
            <Image
              style={{
                width: 16,
                height: 16,
                resizeMode: 'contain',
                marginHorizontal: 3,
                opacity: 0.5,
              }}
              source={images.menulan}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              height: 55,
              alignItems: 'center',
              marginTop: 3,
            }}
          >
            <Image
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                marginHorizontal: 5,
              }}
              source={images.logout}
            />
            <Text
              style={{
                flex: 1,
                color: 'black',
                fontSize: 18,
                marginStart: 2,
              }}
            >
              Sign out
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: fontSizes.h4,
                marginHorizontal: 8,
                opacity: 0.5,
              }}
            ></Text>
            <Image
              style={{
                width: 16,
                height: 16,
                resizeMode: 'contain',
                marginHorizontal: 3,
                opacity: 0.5,
              }}
              source={images.menulan}
            />
          </View>
        </View>

        <View>
          <View
            style={{
              backgroundColor: 'rgba(50,50,50,0.1)',
              height: 50,
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                fontSize: fontSizes.h4,
                color: '#3f19aa',
                paddingStart: 10,
              }}
            >
              Security
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              height: 55,
              alignItems: 'center',
            }}
          >
            <Image
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                marginHorizontal: 5,
              }}
              source={images.lock}
            />
            <Text
              style={{
                flex: 1,
                color: 'black',
                fontSize: 18,
                marginStart: 2,
              }}
            >
              Lock app in
            </Text>
            <Switch
              trackColor={{ false: '#767577', true: colors.pur }}
              thumbColor={isEnabledLockApp ? '#a689f7' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => {
                setEnabledLockApp(!isEnabledLockApp)
              }}
              value={isEnabledLockApp}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              height: 55,
              alignItems: 'center',
            }}
          >
            <Image
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                marginHorizontal: 5,
              }}
              source={images.finger}
            />
            <Text
              style={{
                flex: 1,
                color: 'black',
                fontSize: 18,
                marginStart: 2,
              }}
            >
              Use fingerprint
            </Text>
            <Switch
              trackColor={{ false: '#767577', true: colors.pur }}
              thumbColor={isUseFingerprint ? '#a689f7' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => {
                setUseFingerprint(!isUseFingerprint)
              }}
              value={isUseFingerprint}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              height: 55,
              alignItems: 'center',
            }}
          >
            <Image
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                marginHorizontal: 5,
              }}
              source={images.pass}
            />
            <Text
              style={{
                flex: 1,
                color: 'black',
                fontSize: 18,
                marginStart: 2,
              }}
            >
              Change password
            </Text>
            <Switch
              trackColor={{ false: '#767577', true: colors.pur }}
              thumbColor={isEnableChangePassword ? '#a689f7' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => {
                setEnableChangePassword(!isEnableChangePassword)
              }}
              value={isEnableChangePassword}
            />
          </View>
        </View>

        <View
          style={{
            backgroundColor: 'rgba(50,50,50,0.1)',
            height: 50,
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontSize: fontSizes.h4,
              color: '#3f19aa',
              paddingStart: 10,
            }}
          >
            Misc
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: 55,
            alignItems: 'center',
          }}
        >
          <Image
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
              marginHorizontal: 5,
            }}
            source={images.termof}
          />
          <Text
            style={{
              flex: 1,
              color: 'black',
              fontSize: 18,
              marginStart: 2,
            }}
          >
            Term of Service
          </Text>

          <Image
            style={{
              width: 16,
              height: 16,
              resizeMode: 'contain',
              marginHorizontal: 3,
              opacity: 0.5,
            }}
            source={images.menulan}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: 55,
            alignItems: 'center',
          }}
        >
          <Image
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
              marginHorizontal: 5,
            }}
            source={images.passport}
          />
          <Text
            style={{
              flex: 1,
              color: 'black',
              fontSize: 18,
              marginStart: 2,
            }}
          >
            Open source license
          </Text>

          <Image
            style={{
              width: 16,
              height: 16,
              resizeMode: 'contain',
              marginHorizontal: 3,
              opacity: 0.5,
            }}
            source={images.menulan}
          />
        </View>
        <View style={{ marginBottom: 10 }}></View>
      </ScrollView>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({})
