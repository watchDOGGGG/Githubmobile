import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from './screens/home'
import Icon from 'react-native-vector-icons/AntDesign';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Footer, { MyTabBar } from "./footer";
import tw from 'twrnc'


export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  const stackOptions = {
    headerLeft: () => (
        <TouchableOpacity style={tw`flex-row`}>
          <Icon
          style={styles.iconLeft}
          type="ionicon"
          name={Platform.OS === "ios" ? "left" : "left"}
          size={25}
        />
        </TouchableOpacity>
      ),

      headerRight: () => (
        <Icon
          style={styles.iconRight}
          type="ionicon"
          name={Platform.OS === "ios" ? "ellipsis1" : "ellipsis1"}
          size={25}
        />
      ),
}
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="User" component={Home} options={stackOptions} />
      </Stack.Navigator>
      <Footer/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
   
    iconLeft: {
      paddingLeft: 20
    },
    iconRight: {
        paddingRight: 20
      },
   
  });