import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from '../screens/home';
// import Users from '../screens/Users';
// import Adduser from '../screens/Adduser';
// import Icons from '../component/Icons';
import Profile from '../screens/profile/Profile';
const Tab = createBottomTabNavigator();

export default function BottomNavigator({route}) {
  const data = route?.params?.data || {};

  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarHideOnKeyboard: true}}
      initialRouteName="Home">
         <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      >
        {props => <Home {...props} data={data} />}
      </Tab.Screen>
      {/* <Tab.Screen
        component={Profile}
        name="Profile"
        options={{
          tabBarLabel: 'Users',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="user" color={color} size={size} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Profile"
        options={{
          tabBarLabel: 'Users',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="user" color={color} size={size} />
          ),
        }}>
        {props => <Profile {...props} data={data} />}
      </Tab.Screen>
      {/* <Tab.Screen
          component={Adduser}
          name="Adduser"
          options={{
            tabBarLabel: 'Adduser',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        /> */}
    </Tab.Navigator>
  );
}
