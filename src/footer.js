import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Icon from 'react-native-vector-icons/Octicons'
import { FlatList } from 'react-native'
import { color } from './styles/app'

export default function Footer() {
  return (
      <View style={tw`h-20 flex-col pt-3 border-t border-gray-300`}>
          <View style={tw`flex-row justify-around`}>
              <View style={tw`flex-col items-center justify-start`}>
                  <Icon name={'home'} size={25} color={"#1E3A8A"} />
                  <Text style={tw`text-center text-blue-900`}>Home</Text>
              </View>
              <View style={tw`flex-col items-center justify-start`}>
                  <Icon name={'bell'} size={25} color={color.IconColor} />
                  <Text style={tw`text-gray-500`}>Notifications</Text>
              </View>
              <View style={tw`flex-col items-center justify-start`}>
                  <Icon name={'telescope'} size={25} color={color.IconColor} />
                  <Text style={tw`text-gray-500`}>Explore</Text>
              </View>
              <View style={tw`flex-col items-center justify-start`}>
                  <Icon name={'person'} size={25} color={color.IconColor} />
                  <Text style={tw`text-gray-500 mr-3`}>Profile</Text>
              </View>
          </View>
        </View>
    )
}

const FooterRoute = [
    {
        name:'Home',
        icon:'home'
    },
    {
        name:'Notification',
        icon:'bell'
    },
    {
        name:'Explore',
        icon:'telescope'
    },
    {
        name:'Profile',
        icon:'person'
    },

]