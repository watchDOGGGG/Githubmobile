import { View, Text } from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/Octicons'
import tw from 'twrnc'
import { TouchableOpacity } from 'react-native'
import { color } from '../styles/app'

export default function Followbutton() {
    return (
        <TouchableOpacity style={tw`flex flex-row justify-center border-2 p-3 border-gray-200 bg-white rounded`}>
            <Icon name="plus" size={20} color={color.IconColor} />
            <Text style={tw`ml-2 text-lg`}>Follow</Text>
        </TouchableOpacity>
    )
 }