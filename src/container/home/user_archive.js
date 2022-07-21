import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { userArchive } from '../../utils'
import UserarchiveComponent from '../../components/user_archive'
import tw from 'twrnc'

export default function Userarchive({navigate}) {
 
  return (
      <View style={tw`bg-white border-t border-gray-200 p-4`}>
          <FlatList
              data={userArchive}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                  <UserarchiveComponent item={item} navigate={navigate}/>
              )}
          />
        </View>
    )
}