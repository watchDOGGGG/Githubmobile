import { View, Text } from 'react-native'
import React from 'react'
import Repositorycontainer from '../container/Repository/repository_container'
import { FlatList } from 'react-native'
import { repositoryList } from '../utils'
import { useSelector } from 'react-redux'

export default function Repository() {
  const repos = useSelector(state => state.app.repos)
 
  return (
    <View>
        <FlatList 
        data={repos}
        renderItem={({item}) => (<Repositorycontainer item={item}/>)}
        keyExtractor={item => item.id}
        />
      
    </View>
  )
}