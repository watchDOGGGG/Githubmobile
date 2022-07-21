import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import Starredcontainer from '../container/stared/stared_container'
import { useSelector } from 'react-redux'

export default function Starred() {
  const starred = useSelector(state => state.app.starred)

  return (
    <View>
        <FlatList 
        data={starred}
        renderItem={({item}) => (<Starredcontainer item={item}/>)}
        keyExtractor={item => item.id}
        />
      
    </View>
  )
}