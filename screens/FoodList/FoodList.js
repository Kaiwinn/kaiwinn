import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { images, fontSizes, colors, icons } from '../../constants/index'

import FoodItem from './FoodItem'

const FoodList = (props) => {
  const [foods, setFood] = useState([
    {
      name: 'Chorizo & mozzarella gnocchi bake',
      url: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-1d16725.jpg?quality=90&webp=true&resize=375,341',
      status: 'Opening now',
      price: 10.13,
      website: 'http://kaiwin.cc.com',
      sosialNetwork: {
        facebook: 'https://www.facebook.com/KaiWin999/',
        google: 'https://twitter.com/kaiwin/',
        instagram: 'https://instagram.com/kaiwin/',
      },
    },
    {
      name: 'Easy butter chicken',
      url: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/butter-chicken-cf6f9e2.jpg?quality=90&webp=true&resize=375,341',
      status: 'Opening now',
      price: 13.33,
      website: 'http://kaiwin.cc.com',
      sosialNetwork: {
        facebook: 'https://www.facebook.com/KaiWin999/',
        instagram: 'https://instagram.com/kaiwin/',
      },
    },
    {
      name: 'Thai fried prawn & pineapple rice',
      url: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/classic-lasange-4a66137.jpg?quality=90&webp=true&resize=375,341',
      status: 'Closing now',
      price: 11.33,
      website: 'http://kaiwin.cc.com',
      sosialNetwork: {
        facebook: 'https://www.facebook.com/KaiWin999/',
        google: 'https://twitter.com/kaiwin/',
      },
    },
    {
      name: 'Unbelievably easy mince pies',
      url: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/thai-aea8468.jpg?quality=90&webp=true&resize=375,341',
      status: 'Closing soon',
      price: 20.03,
      website: 'http://kaiwin.cc.com',
      sosialNetwork: {
        facebook: 'https://www.facebook.com/KaiWin999/',
        google: 'https://twitter.com/kaiwin/',
      },
    },
    {
      name: 'One-pan spaghetti with nduja, fennel & olives',
      url: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/one-pan-spaghetti-with-nduja-fennel-olives-2308fb3.jpg?quality=90&webp=true&resize=375,341',
      status: 'Coming now',
      price: 50.35,
      website: 'http://kaiwin.cc.com',
      sosialNetwork: {
        facebook: 'https://www.facebook.com/KaiWin999/',
        google: 'https://twitter.com/kaiwin/',
        instagram: 'https://instagram.com/kaiwin/',
      },
    },
  ])

  const [categories, setCategories] = useState([
    {
      name: 'BBQ',
      url: 'https://cdn.tgdd.vn/2021/03/CookProduct/Bbq-la-gi-nguon-goc-va-cac-cach-tu-lam-bbq-tai-nha-vo-cung-don-gian-0-1200x676.jpg',
    },
    {
      name: 'Coffee',
      url: 'https://thecoffeevn.com/wp-content/uploads/2019/06/cach-nhan-biet-ca-phe-nguyen-chat-vs-don-phu-gia.jpg',
    },
    {
      name: 'Breakfast',
      url: 'https://restaurantclicks.com/wp-content/uploads/2022/01/breakfast-los-angeles.jpg',
    },
    {
      name: 'Noodles',
      url: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/12/Noodles-with-chilli-oil-eggs-6ec34e9.jpg?quality=90&webp=true&resize=375,341',
    },
    {
      name: 'Hotdog',
      url: 'https://kenh14cdn.com/2019/2/2/cr-health-inlinehero-healthy-hotdogs-07-18-15490912572491297258971.jpg',
    },
    {
      name: 'Dinner',
      url: 'https://images.immediate.co.uk/production/volatile/sites/2/2019/10/134_Roma_9780451497017_art_r1-facac84.jpg?quality=90&webp=true&resize=1100,733',
    },
    {
      name: 'Beverages',
      url: 'https://www.bethlehem.edu/wp-content/uploads/2021/01/873._Types_of_Decorations_and_Accompaniments_for_Non-Alcoholic_Beverages-AJAR.id-01-1200x600.jpg',
    },
    {
      name: 'wine',
      url: 'https://timeoutvietnam.com/files/2018/04/26/lam-the-nao-de-chon-ruou-vang-cho-bua-toi-1.jpg',
    },
  ])
  const [searchText, setSearchText] = useState('')
  return (
    <View style={styles.view}>
      <View>
        <View>
          <View style={styles.view1top}>
            <Image
              style={{
                top: 5,
                left: 3,
                margin: 3,
                height: 25,
                width: 25,
                position: 'absolute',
              }}
              source={images.search}
            ></Image>
            <TextInput
              onChangeText={(text) => {
                setSearchText(text)
              }}
              autoCorrect={false}
              style={{
                backgroundColor: colors.inactive,
                height: 38,
                flex: 1,
                marginRight: 5,
                opacity: 0.5,
                borderRadius: 8,
                color: 'white',
                fontWeight: 'bold',
                fontSize: fontSizes.h4,
                paddingStart: 33,
              }}
            ></TextInput>
            <Image
              style={{
                margin: 3,
                height: 35,
                width: 35,
              }}
              source={images.menu}
            ></Image>
          </View>
          <View style={styles.view1}>
            <View style={styles.linetop}></View>
            <FlatList
              horizontal={true}
              style={styles.view1body}
              data={categories}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      alert(`Press: ${item.name}`)
                    }}
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Image
                      style={styles.imge}
                      source={{
                        uri: item.url,
                      }}
                      resizeMode={'cover'}
                    />
                    <Text style={styles.text}>{item.name}</Text>
                  </TouchableOpacity>
                )
              }}
              keyExtractor={(item) => item.name}
            ></FlatList>
            <View style={styles.linetop}></View>
          </View>
          <FlatList
            data={foods.filter((eachFood) =>
              eachFood.name.toLowerCase().includes(searchText.toLowerCase())
            )}
            renderItem={({ item }) => (
              <FoodItem
                onPress={() => {
                  alert(`food: ${item.name}`)
                }}
                food={item}
              />
            )}
            keyExtractor={(eachfood) => eachfood.name}
          />
        </View>
      </View>
    </View>
  )
}

export default FoodList

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginTop: 23,
    marginBottom: 100,
    backgroundColor: 'white',
  },
  view1: {
    height: 90,
    marginHorizontal: 15,
  },
  linetop: {
    height: 1,
    backgroundColor: colors.inactive,
  },
  view1body: {
    flex: 1,
  },
  view1top: {
    height: 40,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
  imge: {
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: 25,
  },
  text: {
    color: 'black',
    fontSize: fontSizes.h6,
  },
})
