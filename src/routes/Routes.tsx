import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './Stack.Routes';
import BottonTabsRoutes from './BottonTab.Routes';


export default function Routes() {
  return (
    <NavigationContainer>
      <BottonTabsRoutes />
    </NavigationContainer>
    
  );
}