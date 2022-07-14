import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Search from './search';
import Messages from './messages';

const Tab = createBottomTabNavigator();

export default function RotasTab() {
  return (
    <Tab.Navigator
      initialRouteName="search"
      screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="magnify"
              color={'black'}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="messages"
        component={Messages}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="android-messages"
              color={'black'}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
