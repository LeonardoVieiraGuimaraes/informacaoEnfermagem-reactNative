import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import AboutScreen from '../screens/AboutScreen';
import StackRoutes from './Stack.Routes';


interface Screen {
  name: string;
  component: React.ComponentType;
  icon: any;
}

const screens: Screen[] = [
  { name: "Home", component: StackRoutes, icon: "home" },
  { name: "About", component: AboutScreen, icon: "infocirlceo" },
];
const Tab = createMaterialBottomTabNavigator();

export default function BottomTabsRoutes() {
  return (
    <Tab.Navigator  
    barStyle = {{ height: 80}}
    >
      {screens.map((screen, index) => (
        <Tab.Screen
          key={index}
          name={screen.name}
          component={screen.component}
          
          options={{
            tabBarIcon: () => <AntDesign name={screen.icon} size={30} color="green" />
          }}
        />
      ))}
    </Tab.Navigator>
  );
}