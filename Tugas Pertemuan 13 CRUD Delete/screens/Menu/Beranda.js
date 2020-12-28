import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import screens from './icon';
import Template from '../../tempcol/Template';

const { color } = Template();

const Tab = createBottomTabNavigator();

const BerandaScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      labelStyle: {
        marginBottom: 6,
      },
      activeTintColor: color.primary.main,
      inactiveTintColor: '#888',
    }}
  >
    {screens.map((screen) => (
      <Tab.Screen
        key={screen.name}
        name={screen.name}
        component={screen.component}
        options={{
        tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons
        name={screen.icon}
        size={size}
        color={color}/>
          ),
        }}
      />
    ))}
  </Tab.Navigator>
);

export default BerandaScreen;
