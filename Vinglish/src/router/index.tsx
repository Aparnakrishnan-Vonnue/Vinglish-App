import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {DefaultScreenOptions} from '../constants';
import HomeScreen from '../screens/HomeScreen';
import {BottomTab} from '../components/BottomNavBar';
import QuizRoom from '../screens/QuizRoom';
import Dictionary from '../screens/DictionaryScreen';
import {HangmanGame} from '../screens/Hangman';
import {TicTacToeGame} from '../screens/TicTacToe';
import {WordleGame} from '../screens/WordleGame';
import {StartScreen} from '../screens/WordleGame/StartScreen';
import {WordleScreen} from '../screens/Wordle';

export const Router = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const renderRoutes = () => {
    return (
      <>
        <Stack.Screen name="NAVBAR" component={BottomTab} />
        <Stack.Screen name="HOME" component={HomeScreen} />
        <Stack.Screen name="QUIZROOM" component={QuizRoom} />
        <Stack.Screen name="DICTIONARY" component={Dictionary} />
        <Stack.Screen name="HANGMAN" component={HangmanGame} />
        <Stack.Screen name="TIC_TAC_TOE" component={TicTacToeGame} />
        <Stack.Screen name="WORDLE_GAME" component={WordleScreen} />
        <Stack.Screen name="START_SCREEN" component={StartScreen} />
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
