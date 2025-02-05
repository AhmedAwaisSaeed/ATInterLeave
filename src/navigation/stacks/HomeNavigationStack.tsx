import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenNames from '../ScreenNames';
import {HomeScreen} from '../../features/Dashboard/screens/HomeScreen';

type HomeStackParamList = {
  [ScreenNames.HomeScreen]: undefined;
};



export function HomeNavigationStack() {
  const HomeStack = createNativeStackNavigator<HomeStackParamList>();

  return (
    <HomeStack.Navigator
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen
        name={ScreenNames.HomeScreen}
        component={HomeScreen}
      />
    </HomeStack.Navigator>
  );
}
