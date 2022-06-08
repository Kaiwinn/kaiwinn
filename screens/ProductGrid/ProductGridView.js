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
import FiveStars from './FiveStars'

const ProductGridView = () => {
  const [products, setProducts] = useState([
    {
      url: 'https://img.websosanh.vn/v2/users/root_product/images/may-hut-bui-samsung/hTlo1Tp_sxQN.jpg?compress=85&width=220',
      price: 75,
      productName: 'Samsung73',
      specification: [
        'dry clean',
        'cyclone filter',
        'convenience cord storage',
      ],
      review: 19,
      stars: 3,
    },
    {
      url: 'http://dailymayvesinh.com/wp-content/uploads/2019/04/may-hut-bui-robot-samsung.jpg',
      price: 55,
      productName: 'Samsun 5573',
      specification: [
        'dry clean',
        'cyclone filter',
        'convenience cord storage',
      ],
      review: 19,
      stars: 4,
    },
    {
      url: 'https://kimnamthanh.com/uploads/source/san-pham-1/may-hut-bui/panasonic/may-hut-bui-panasonic-mc-cl777hn49.jpg',
      price: 75,
      productName: 'SC 5573',
      specification: [
        'dry clean',
        'cyclone filter',
        'convenience cord storage',
      ],
      review: 19,
      stars: 4,
    },
    {
      url: 'https://hc.com.vn/i/ecommerce/media/00009511_DESKTOP_37123.jpg',
      price: 75,
      productName: 'SKaiwin SS 5573',
      specification: [
        'dry clean',
        'cyclone filter',
        'convenience cord storage',
      ],
      review: 19,
      stars: 2,
    },
    {
      url: 'https://f5pro.vn/media/product/40508_0_1.jpg',
      price: 75,
      productName: 'Kaiwin1997',
      specification: [
        'dry clean',
        'cyclone filter',
        'convenience cord storage',
      ],
      review: 19,
      stars: 3,
    },
    {
      url: 'https://webtuvan.com/wp-content/uploads/2018/06/may-hut-bui-vc18m3130v1.jpg',
      price: 75,
      productName: 'SaiGon 1234',
      specification: [
        'dry clean',
        'cyclone filter',
        'convenience cord storage',
      ],
      review: 19,
      stars: 4,
    },
    {
      url: 'https://img.websosanh.vn/v2/users/review/images/mjzgtrmw8vohn.jpg?compress=85',
      price: 75,
      productName: 'Yeu Em 1234',
      specification: [
        'dry clean',
        'cyclone filter',
        'convenience cord storage',
      ],
      review: 19,
      stars: 4,
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-BnyJNhv9DULcGq7ezMmp2BCyDzw1PG-tYhgVhFaUZrnGCEkFfkpV84qwOsNcpTVWsJk&usqp=CAU',
      price: 75,
      productName: 'May Tinh 1080',
      specification: [
        'dry clean',
        'cyclone filter',
        'convenience cord storage',
      ],
      review: 19,
      stars: 4,
    },
  ])
  return (
    <View
      style={{
        flex: 1,
        marginTop: 20,
        backgroundColor: 'white',
      }}
    >
      <FlatList
        style={{
          marginTop: 20,
          marginHorizontal: 1,
        }}
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.productName}
        renderItem={({ item, index }) => (
          <View
            style={{
              height: 220,
              margin: 6,
              borderRadius: 18,
              borderWidth: 1,
              padding: 3,
              borderColor: colors.inactive,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
              }}
            >
              <Image
                style={{
                  width: 60,
                  height: 60,
                  resizeMode: 'cover',
                  borderRadius: 22,
                  margin: 3,
                }}
                source={{
                  uri: item.url,
                }}
              ></Image>
              <Text
                style={{
                  color: '#03024e',
                  fontSize: fontSizes.h3,
                  marginLeft: 20,
                  marginTop: 10,
                  fontWeight: 'bold',
                }}
              >
                $ {item.price}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: 'blue',
                  fontSize: fontSizes.h3,
                  marginLeft: 20,
                  marginTop: 10,
                }}
              >
                {item.productName}
              </Text>
              {item.specification.map((specifications) => (
                <Text key={specifications}>* {specifications}</Text>
              ))}
            </View>
            <View
              style={{
                flexDirection: 'row',
                margin: 5,
              }}
            >
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                }}
                onPress={() => {
                  let cloneProducts = products.map((eachProducts) => {
                    if (item.productName == eachProducts.productName) {
                      return {
                        ...eachProducts,
                        isSaved:
                          eachProducts.isSaved == undefined ||
                          eachProducts.isSaved == false
                            ? true
                            : false,
                      }
                    }
                    return eachProducts
                  })
                  setProducts(cloneProducts)
                }}
              >
                <Image
                  style={{
                    width: 20,
                    height: 30,
                    resizeMode: 'contain',
                    marginHorizontal: 6,
                  }}
                  source={
                    products.isSaved == false || products.isSaved == undefined
                      ? images.heart
                      : images.love
                  }
                ></Image>
                <Text
                  style={{
                    fontSize: fontSizes.h6,
                    width: 50,
                  }}
                >
                  Save for later
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  marginHorizontal: 10,
                  justifyContent: 'center',
                }}
              >
                <FiveStars numberupOfStars={item.stars} />
                <Text
                  style={{
                    color: colors.success,
                    fontSize: fontSizes.h6,
                    padding: 3,
                  }}
                >
                  {item.review} Review
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default ProductGridView

const styles = StyleSheet.create({})
