import React from 'react';
import { StatusBar, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

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

import MessageScreen from './components/MessageScreen';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
LogBox.ignoreAllLogs();

function Home() {
  return (
    <Tab.Navigator
      shifting={false}
      backBehavior='none'
      initialRouteName="FindHomes"
      inactiveColor={ColorTheme.whiteFaded}
      activeColor={ColorTheme.secondaryFaded}
      barStyle={{ backgroundColor: ColorTheme.primaryFaded, borderTopColor: ColorTheme.whiteFaded, borderTopWidth: 1, elevation: 10 }}
    >
      <Tab.Screen
        name="FindHomes"
        component={FindHomes}
        options={{
          tabBarLabel: 'Find Homes',
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MyBookings"
        component={MyBookings}
        options={{
          tabBarLabel: 'My Bookings',
          tabBarIcon: ({ color }) => (
            <Icon name="person" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MyRequests"
        component={MyRequests}
        options={{
          tabBarLabel: 'My Requests',
          tabBarIcon: ({ color }) => (
            <Icon name="person" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="person" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'black'} barStyle="light-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="HomeDetails" component={HomeDetails} />
        <Stack.Screen name="BookHome" component={BookHome} />

        <Stack.Screen name="RequestDetails" component={RequestDetails} />

        <Stack.Screen name="MessageScreen" component={MessageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;