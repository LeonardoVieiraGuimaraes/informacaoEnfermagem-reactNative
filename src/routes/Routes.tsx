import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottonTabsRoutes from './BottonTab.Routes';

export default function Routes() {
  return (
    <NavigationContainer>
      <BottonTabsRoutes />
    </NavigationContainer>
  );
}
