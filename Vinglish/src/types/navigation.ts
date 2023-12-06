import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  HOME: undefined;
  NAVBAR: undefined;
};

export type RootStackNavigationProps =
  NativeStackNavigationProp<RootStackParamList>;

export type RootStackRouterProps<T extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, T>;

export type HomeTabParamList = {
  HOME: undefined;
  DICTIONARY: undefined;
  TESTROOM: undefined;
};
