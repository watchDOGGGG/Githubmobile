import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Icon from 'react-native-vector-icons/Octicons'
import { StackActions } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { color } from '../styles/app';

export default function UserarchiveComponent({item, navigate}) {
    const user = useSelector(state => state.app.profile)
    const starred = useSelector(state => state.app.starred)


    const pushRoute = (Route) =>{
        navigate.dispatch(StackActions.push(Route, {}))
    }

  return (
      <TouchableOpacity style={tw`flex flex-row justify-between mb-4`} onPress={e => pushRoute(item.title)}>
          <View style={tw`${item.color} h-10 w-10 rounded-3 pt-1.7 flex-row justify-center `}>
             <Icon name={item.icon} size={25} color={"#fff"}/>
          </View>
          <View style={tw`flex-row w-10/11.3 justify-between border-b border-gray-200 pt-3 pb-3`}>
              <Text style={tw``}>{item.title}</Text>
              <View style={tw`flex flex-row mr-2`}>
                  <Text style={tw`mr-5`}>{
                  item.title === 'Repositories' ?
                   user.public_repos
                   :
                   item.title === 'Starred' ?
                   starred.length
                   :
                   item.title === 'Organizations' ?
                   3
                   :
                   item.title === 'Sponsoring' ?
                   11
                   :
                   null}</Text>
                  <Icon name="chevron-right" size={25} color={color.IconColor} />
              </View>
          </View>
        </TouchableOpacity>
    )
}