import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import Icon  from 'react-native-vector-icons/Octicons';
import FontAwesomeIcon  from 'react-native-vector-icons/FontAwesome';
import Followbutton from '../../components/follow_button';
import { useSelector } from 'react-redux';
import { color } from '../../styles/app';

export default function ProfileContainer() {
  const user = useSelector(state => state.app.profile)
  
  return (
    <View style={tw`p-4 bg-white`}>
      <View style={tw`flex flex-col `}>
        <View style={tw`flex flex-row w-100`}>
          <Image style={[styles.image, tw`rounded-20`]} source={{ uri: user.avatar_url }} />
         
          <View style={tw`p-3 ml-3`}>
            <Text style={tw`font-extrabold text-xl`}>{user.name}</Text>
            <Text style={tw`text-gray-500 text-lg`}>{user.login}</Text>
          </View>
        </View>

        <View style={tw`p-2`}>
          <Text style={tw`font-semibold text-black text-lg`}>{user.bio}</Text>
        </View>

        <View style={tw`flex flex-col`}>
          <View style={tw`flex flex-row p-2 justify-between w-60`}>
            <View style={tw`flex flex-row `}>
              <Icon name="organization" size={20} color={color.IconColor} />
              <Text style={tw` ml-3`}>{user.company}</Text>
            </View>

            <View style={tw`flex flex-row `}>
              <Icon name="location" size={20} color={color.IconColor} />
              <Text style={tw` ml-3`}>{user.location}</Text>
            </View>
          </View>

          <View style={tw`flex flex-row p-2`}>
            <Icon name="link" size={20} color={color.IconColor} />
            <Text style={tw` ml-3 font-extrabold`}>sarah.dev</Text>
          </View>

          <View style={tw`flex flex-row p-2`}>
            <Icon name="mail" size={20} color={color.IconColor} />
            <Text style={tw` ml-3 font-extrabold`}>{user.email}</Text>
          </View>

          <View style={tw`flex flex-row p-2`}>
            <FontAwesomeIcon name="twitter" size={20} color={color.IconColor} />
            <Text style={tw` ml-3 font-extrabold`}>@{user.twitter_username}</Text>
          </View>

          
          <View style={tw`flex flex-row p-2`}>
            <Icon name="person" size={20} color={color.IconColor} />
            <Text style={tw` ml-3 font-extrabold`}>{user.followers} <Text style={tw`text-gray-400 font-bold`}> followers . </Text><Text>{user.following} </Text><Text style={tw`text-gray-400 font-bold`}>following</Text></Text>
          </View>
          
          <View style={tw`mt-2`}>
            <Followbutton/>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image:{
    width: 70,
    height: 70
  }
})