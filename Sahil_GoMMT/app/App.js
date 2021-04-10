import React from 'react';
import { StatusBar, Alert, BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useAndroidBackHandler } from "react-navigation-backhandler";

import { ColorTheme } from './utils/constants';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Splash from './Screens/Splash';
import Login from './Screens/Login';
import Profile from './Screens/Profile';

import FindHomes from './Screens/GuestMode/FindHomes';
import HomeDetails from './Screens/GuestMode/HomeDetails';
import BookHome from './Screens/GuestMode/BookHome';
import MyBookings from './Screens/GuestMode/MyBookings';

import MyRequests from './Screens/HostMode/MyRequests';
import RequestDetails from './Screens/HostMode/RequestDetails';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      initialRouteName="FindHomes"
      activeColor={ColorTheme.primary}
      barStyle={{ backgroundColor: ColorTheme.secondary }}
    >
      <Tab.Screen
        name="FindHomes"
        component={FindHomes}
        options={{
          tabBarLabel: 'Find Homes',
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={25} color={ColorTheme.primary} />
          ),
        }}
      />
      <Tab.Screen
        name="MyBookings"
        component={MyBookings}
        options={{
          tabBarLabel: 'My Bookings',
          tabBarIcon: ({ color }) => (
            <Icon name="person" size={25} color={ColorTheme.primary} />
          ),
        }}
      />
      <Tab.Screen
        name="MyRequests"
        component={MyRequests}
        options={{
          tabBarLabel: 'My Requests',
          tabBarIcon: ({ color }) => (
            <Icon name="person" size={25} color={ColorTheme.primary} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="person" size={25} color={ColorTheme.primary} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  useAndroidBackHandler(() => {
    Alert.alert(
      'Exit App',
      'Are you sure you want to leave the app?', [{
        text: 'Cancel',
        onPress: () => { },
      }, {
        text: 'Cancel',
        onPress: () => { BackHandler.exitApp(); return true },
      }],
      { cancelable: false }
    )
    return true;
  });

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#16242f'} barStyle="light-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="HomeDetails" component={HomeDetails} />
        <Stack.Screen name="BookHome" component={BookHome} />

        <Stack.Screen name="RequestDetails" component={RequestDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;