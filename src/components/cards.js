import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Icon from 'react-native-vector-icons/Octicons'
import { color, StackLanguage } from '../styles/app'

export default function Cards({item}) {

  return (
    <View style={tw`bg-white p-3 rounded-2 w-90 ml-2`}>
      <View style={tw`flex flex-row`}>
        <Image style={[styles.image, tw`rounded-5`]} source={{ uri:item.owner.avatar_url }} />
        <Text style={tw`ml-2 text-gray-400 p-1`}>{item.owner.login}</Text>
      </View>

      <View style={tw`pt-3`}>
        <Text style={tw`text-black font-bold`}>{item.name}</Text>
      </View>

      <View style={tw`pt-3`}>
        <Text style={tw`leading-6`}>{item.description}</Text>
      </View>

      <View style={tw`flex flex-row mt-5`}>
        <Icon name="star" size={15} color={color.IconColor} />
        <Text style={tw` ml-2`}>{item.stargazers_count}</Text>
        {
          item.language &&
          <View style={tw` ml-2 flex-row`}>
          <Icon name="dot-fill" size={15} color={StackLanguage(item.language)} />
          <Text style={tw` ml-1`}>{item.language}</Text>
        </View>
        }
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30
  }
})