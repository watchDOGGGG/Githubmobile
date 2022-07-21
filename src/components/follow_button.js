import { View, Text } from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/Octicons'
import tw from 'twrnc'
import { TouchableOpacity } from 'react-native'

export default function Followbutton() {
    return (
        <TouchableOpacity style={tw`flex flex-row justify-center border-2 p-3 border-gray-200 bg-white rounded`}>
            <Icon name="plus" size={20} color={''} />
            <Text style={tw`ml-2 text-lg`}>Follow</Text>
        </TouchableOpacity>
    )
 }