import { View, Text, StyleSheet, Platform, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView,RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import ProfileContainer from '../container/home/profile_container';
import Userarchive from '../container/home/user_archive';
import Pinnedcontainer from '../container/home/pinned_container';
import tw from 'twrnc'
import Note from '../container/home/note';
import { useQuery } from 'react-query'
import { setRepos, setStarred, setUser } from '../redux/Reducers/appReducer';
import { useDispatch, useSelector } from 'react-redux';
import { color } from '../styles/app';
import { createStackNavigator } from "@react-navigation/stack";
import Repository from './repository';
import Starred from './starred'
import Spinner from 'react-native-loading-spinner-overlay';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function Home({ navigation }) {

  const Stack = createStackNavigator();
  const stackOptions = {
    headerLeft: () => (
        <TouchableOpacity style={tw`flex-row`} onPress={() => navigation.goBack()}>
          <Icon
          style={styles.iconLeft}
          type="ionicon"
          name={Platform.OS === "ios" ? "chevron-left" : "chevron-left"}
          size={25}
        />
          <Text style={tw`text-xl font-semibold ml-3`}>Back</Text>
        </TouchableOpacity>
      ),

      headerRight: () => (
        <AntIcon
          style={styles.iconRight}
          type="ionicon"
          name={Platform.OS === "ios" ? "ellipsis1" : "ellipsis1"}
          size={25}
        />
      ),
      
      headerTitleAlign: 'center',
      
}

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={User} options={{
          headerLeft: () => (
            <TouchableOpacity style={tw`flex-row`}>
              <Icon
                style={styles.iconLeft}
                type="ionicon"
                name={Platform.OS === "ios" ? "chevron-left" : "chevron-left"}
                size={25}
              />
            </TouchableOpacity>
          ),
        }} />
        <Stack.Screen name="Repositories" component={Repository} options={stackOptions} />
        <Stack.Screen name="Starred" component={Starred} options={stackOptions} />
      </Stack.Navigator>
    </SafeAreaView>
  )
}

function User({ navigation }) {
  const dispatch = useDispatch()
  const [loading,setLoading] = React.useState(true)
  const [refreshing, setRefreshing] = React.useState(false);

   //Fetch user profile info
  const { } = useQuery(['profile'], async () => {
    const request = await fetch('https://api.github.com/users/sdras')

    const response = await request.json()
    setLoading(false)
    dispatch(setUser(response))
  })

   //Fetch All repos from endpoint and store to redux state
  const { } = useQuery(['Repos'], async () => {
    const request = await fetch('https://api.github.com/users/sdras/repos')
    const response = await request.json()
    dispatch(setRepos(response))
  })
 
   //Fetch All starred from endpoint and store to redux state
  const { } = useQuery(['Starred'], async () => {
    const request = await fetch('https://api.github.com/users/sdras/starred')
    const response = await request.json()
    dispatch(setStarred(response))
  })
 
  //Set onScreen refresh to reload data
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);


  const containers = [
    {
      render: <ProfileContainer navigate={navigation} />,
      id:1
    },
    {
      render: <Userarchive navigate={navigation} />,
      id:2
    },
    {
      render: <Pinnedcontainer navigate={navigation} />,
      id:3
    },
    {
      render: <View style={tw`p-4 flex flex-row justify-between mt-3`}>
        <View style={tw`flex flex-row`}>
          <Icon name="info" size={19} color={color.IconColor} />
          <Text style={tw`text-gray-400 text-sm ml-5`}>sdras/Read.md</Text>
        </View>
        <View>
          <Icon name="chevron-right" size={17} color={color.IconColor} />
        </View>
      </View>
    },
    {
      render: <Note/>
    }
  ]

  return (
    loading === false?
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        keyExtractor={item => item.id}
        data={containers}
        renderItem={({ item }) => (
          <View>
            {item.render}
          </View>
        )}
      />
      :
      <Spinner
        visible={loading}
        textContent={'Loading...'}
      />
  )
}

const styles = StyleSheet.create({

  iconLeft: {
    paddingLeft: 20
  },
  iconRight: {
    paddingRight: 20
  },
 
});