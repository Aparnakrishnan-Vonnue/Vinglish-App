import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {GestureResponderEvent} from 'react-native-modal';

interface TabSwitcherProps {
  tabTextOne: string;
  tabTextTwo: string;
  isActive: boolean;
  onTabOnePress: (e: GestureResponderEvent) => void;
  onTabTwoPress: (e: GestureResponderEvent) => void;
}

export const TabSwitcher = ({
  tabTextOne,
  tabTextTwo,
  isActive,
  onTabOnePress,
  onTabTwoPress,
}: TabSwitcherProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={isActive ? [styles.tab, styles.activeTab] : styles.tab}
        onPress={onTabOnePress}>
        <Text style={styles.tabText}>{tabTextOne}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={!isActive ? [styles.tab, styles.activeTab] : styles.tab}
        onPress={onTabTwoPress}>
        <Text style={styles.tabText}>{tabTextTwo}</Text>
      </TouchableOpacity>
    </View>
  );
};
