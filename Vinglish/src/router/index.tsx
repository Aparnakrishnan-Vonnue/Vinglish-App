import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {DefaultScreenOptions} from '../constants';
import HomeScreen from '../screens/HomeScreen';
import {BottomTab} from '../components/BottomNavBar';
import TestRoom from '../screens/TestRoom';
import Dictionary from '../screens/DictionaryScreen';

export const Router = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const renderRoutes = () => {
    return (
      <>
        <Stack.Screen name="NAVBAR" component={BottomTab} />
        <Stack.Screen name="HOME" component={HomeScreen} />
        <Stack.Screen name="TESTROOM" component={TestRoom} />
        <Stack.Screen name="DICTIONARY" component={Dictionary} />
      </>
    );
  };

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={DefaultScreenOptions}>
          {renderRoutes()}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
