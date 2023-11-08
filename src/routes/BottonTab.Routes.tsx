import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import AboutScreen from '../screens/AboutScreen';
import StackRoutes from './Stack.Routes';
import HomeScreen from '../screens/HomeScreen';

interface Screen {
  name: string;
  component: any;
  icon: any;
}

const screens: Screen[] = [
  { name: 'Home', component: StackRoutes, icon: 'home' },
  { name: 'Sobre', component: AboutScreen, icon: 'infocirlceo' },
];
const Tab = createMaterialBottomTabNavigator();

export default function BottomTabsRoutes() {
  return (
    <Tab.Navigator barStyle={{ height: 90 }}>
      {screens.map((screen, index) => (
        <Tab.Screen
          key={index}
          name={screen.name}
          component={screen.component}
          options={{
            tabBarIcon: () => (
              <AntDesign name={screen.icon} size={28} color="green" />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
