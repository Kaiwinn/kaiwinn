import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native'
import {
  user as UserRepository,
  population as PopulationRepository,
} from '../responsitories'
import React, { useState, useEffect } from 'react'
import { convertDateTimeToString } from '../utilities/DateTime'
import { fontSizes } from '../constants'

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit'

const Profile = (props) => {
  const [user, setUser] = useState({})

  const [populations, setPopulations] = useState({})

  useEffect(() => {
    UserRepository.getUserDetail().then((responeseUser) =>
      setUser(responeseUser)
    )
    PopulationRepository.getPopulation({
      drilldowns: 'Nation',
      measures: 'Population',
    }).then((responesePopulation) => setPopulations(responesePopulation))
  }, [])
  const {
    dateOfBirth,
    email,
    gender,
    userId,
    address,
    userName,
    url,
    phone,
    registerDate,
  } = user

  const chartConfig = {
    backgroundGradientFrom: 'white',
    backgroundGradientFromOpacity: 0.3,
    backgroundGradientTo: '#dad8ff',
    backgroundGradientToOpacity: 0.3,
    color: (opacity = 1) => `rgba(48, 2, 73, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 1,
    useShadowColorFromDataset: true, // optional
  }

  const screenWidth = Dimensions.get('window').width
  const screenHeight = Dimensions.get('window').height
  // UserRepository.getUserDetail()
  return (
    <View style={styles.bg}>
      <ScrollView>
        <View>
          <View
            style={{
              marginTop: 20,
              alignItems: 'center',
            }}
          >
            <Image
              style={{
                margin: 3,
                height: 160,
                width: 160,
                resizeMode: 'cover',
                borderRadius: 80,
              }}
              source={{
                uri: url,
              }}
            ></Image>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: fontSizes.h5 }}>
              UserName:{' '}
            </Text>
            <Text style={{ fontSize: fontSizes.h5 }}>{userName}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold', fontSize: fontSizes.h5 }}>
              Email:{' '}
            </Text>
            <Text style={{ fontSize: fontSizes.h5 }}>{email}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold', fontSize: fontSizes.h5 }}>
              Date of Birth:{' '}
            </Text>
            <Text style={{ fontSize: fontSizes.h5 }}>
              {convertDateTimeToString(dateOfBirth)}
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold', fontSize: fontSizes.h5 }}>
              Gender:{' '}
            </Text>
            <Text style={{ fontSize: fontSizes.h5 }}>{gender}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold', fontSize: fontSizes.h5 }}>
              Address:{' '}
            </Text>
            <Text style={{ fontSize: fontSizes.h5 }}>{address}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold', fontSize: fontSizes.h5 }}>
              Phone:{' '}
            </Text>
            <Text style={{ fontSize: fontSizes.h5 }}>{phone}</Text>
          </View>
        </View>
        <View>
          <LineChart
            style={{
              marginTop: 10,
            }}
            data={{
              labels: populations
                .sort((a, b) => parseInt(a.yearID) - parseInt(b.yearID))
                .map((item) => item.yearID),
              datasets: [
                {
                  data: populations.map((item) =>
                    Math.floor(item.population / 1000, 1)
                  ),
                  color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                  strokeWidth: 3, // optional
                },
              ],
              legend: ['Population'], // optional
            }}
            width={screenWidth}
            height={266}
            verticalLabelRotation={5}
            chartConfig={chartConfig}
            bezier
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  bg: {
    marginTop: 20,
    marginStart: 5,
    flex: 1,
  },
})
