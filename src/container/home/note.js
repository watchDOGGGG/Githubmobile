import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Icon  from 'react-native-vector-icons/Octicons'
import { noteTxt } from '../../utils'


export default function Note() {
  return (
    <View style={tw`p-4 bg-white`}>
      <View style={tw`flex flex-row border-b border-gray-300 pb-3`}>
        <Text style={tw`text-black font-bold text-2xl mr-1`}>Sup Nerds</Text>
        <Icon name="square" size={24} color={"#0000"}/>
      </View>

      <View  style={tw`pt-3`}>
        <Text>{noteTxt.topic}</Text>

        <View style={tw`mt-3`}>
          <Text style={tw`leading-6`}>
            {noteTxt.note}
          </Text>
        </View>
      </View>
    </View>
  )
}