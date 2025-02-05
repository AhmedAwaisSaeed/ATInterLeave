import React from 'react';
import {
  NavigationContainer,
} from '@react-navigation/native';
import {HomeNavigationStack} from './stacks/HomeNavigationStack';
import StackNames from './StackNames';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
export function RootStackNavigator() {
  const RootStack = createNativeStackNavigator();

  return (
    <RootStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={StackNames.HomeNavigationStack}>
      <RootStack.Screen
        name={StackNames.HomeNavigationStack}
        component={HomeNavigationStack}
      />
    </RootStack.Navigator>
  );
}

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}
