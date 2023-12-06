import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../../themes/colors';
import HomeScreen from '../../screens/HomeScreen';
import {Platform, View} from 'react-native';
import {HomeTabParamList} from '../../types/navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FONTSIZES} from '../../themes/font';
import {styles} from './style';
import Dictionary from '../../screens/DictionaryScreen';
import TestRoom from '../../screens/TestRoom';

const Tab = createBottomTabNavigator<HomeTabParamList>();

export const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => {
          let iconName;

          if (route.name === 'HOME') {
            iconName = (
              <View style={focused && styles.iconActive}>
                <Icon
                  name="home"
                  size={FONTSIZES.lg}
                  color={COLORS.action.tertiary}
                />
              </View>
            );
          } else if (route.name === 'DICTIONARY') {
            iconName = (
              <View style={focused && styles.iconActive}>
                <Icon
                  name="book"
                  size={FONTSIZES.lg}
                  color={COLORS.action.tertiary}
                />
              </View>
            );
          } else if (route.name === 'TESTROOM') {
            iconName = (
              <View style={focused && styles.iconActive}>
                <Icon
                  name="rocket"
                  size={FONTSIZES.lg}
                  color={COLORS.action.tertiary}
                />
              </View>
            );
          }
          return iconName;
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.action.tertiary,
        tabBarStyle: [
          Platform.OS === 'ios' ? styles.iostabBarStyles : styles.tabBar,
        ],
      })}>
      <Tab.Screen name="HOME" component={HomeScreen} />
      <Tab.Screen name="DICTIONARY" component={Dictionary} />
      <Tab.Screen name="TESTROOM" component={TestRoom} />
    </Tab.Navigator>
  );
};
