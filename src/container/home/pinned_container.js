import { View, Text, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Icon from 'react-native-vector-icons/Octicons'
import Cards from '../../components/cards'
import { pinned } from '../../utils'
import { useSelector } from 'react-redux'
import { color } from '../../styles/app'

export default function Pinnedcontainer() {
  
  const repos = useSelector(state => state.app.repos)

  return (
    <View style={tw``}>
      <View style={tw`flex flex-row p-5`}>
        <Icon name="pin" size={15} color={color.IconColor}/>
        <Text style={tw`ml-6`}>Pinned</Text>
      </View>

      <View style={tw``}>
        <FlatList 
        horizontal
        keyExtractor={item => item.id}
        data={repos}
        renderItem={({item}) =>(
          <Cards item={item}/>
        )}
        />
      </View>
    </View>
  )
}