import React from 'react'
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View,TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
const MovieList = ({ data,title,hideSeeAll }) => {
  const navigation = useNavigation()
  var { width, height } = Dimensions.get('window')
  const movieName = "The titanic: The Rouge 2018"

  return (
    <View className="">
      <View className="justify-between flex-row mt-4 items-baseline mb-3">
        <Text className="text-white  mx-4 text-lg font-semibold">{title}</Text>

        {!hideSeeAll && (<TouchableOpacity ><Text className="text-yellow-400 mx-6 text-sm">See all</Text></TouchableOpacity>)}
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} overScrollMode='never' contentContainerStyle={{paddingHorizontal:15}}>

        {data.map((item, index) => {
          return (<TouchableWithoutFeedback key={index} onPress={() => navigation.push('Movie', item)} >
            <View className="space-y-1 mr-6 ">
            <Image
              source={require('../assets/images/pic1.jpg')}
              // resizeMode="contain"
              style={{ width: width * 0.38, height: height * 0.25
               }}
              className="rounded-3xl"
            />
            <Text className="text-neutral-300  text-sm   ">
              {movieName.length>18? movieName.slice(0,18)+'...':movieName}
              </Text>
            </View>
          </TouchableWithoutFeedback>)
        })}
      </ScrollView>
    </View>
  )
}

export default MovieList