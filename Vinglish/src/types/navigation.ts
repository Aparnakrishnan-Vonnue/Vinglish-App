import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ImageSourcePropType} from 'react-native';

export type RootStackParamList = {
  HOME: undefined;
  NAVBAR: undefined;
  QUIZROOM: undefined;
  DICTIONARY: undefined;
  HANGMAN: undefined;
  TIC_TAC_TOE: undefined;
  WORDLE_GAME: undefined;
  START_SCREEN: undefined;
};

export type RootStackNavigationProps =
  NativeStackNavigationProp<RootStackParamList>;

export type RootStackRouterProps<T extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, T>;

export type HomeTabParamList = {
  HOME: undefined;
  DICTIONARY: undefined;
  QUIZROOM: undefined;
  GAMEROOM: undefined;
};

export type GameCard = {
  imageUrl: ImageSourcePropType;
  title: string;
  description: string;
  navigateTo: any;
}[];
