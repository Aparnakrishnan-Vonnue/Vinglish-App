import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {DefaultScreenOptions} from '../constants';
import HomeScreen from '../screens/HomeScreen';
import {BottomTab} from '../components/BottomNavBar';
import QuizRoom from '../screens/QuizRoom';
import Dictionary from '../screens/DictionaryScreen';
import {HangmanScreen} from '../screens/Hangman';
import {HangmanGame} from '../screens/Hangman/index2';

export const Router = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const renderRoutes = () => {
    return (
      <>
        <Stack.Screen name="NAVBAR" component={BottomTab} />
        <Stack.Screen name="HOME" component={HomeScreen} />
        <Stack.Screen name="QUIZROOM" component={QuizRoom} />
        <Stack.Screen name="DICTIONARY" component={Dictionary} />
        <Stack.Screen name="HANGMAN" component={HangmanScreen} />
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
