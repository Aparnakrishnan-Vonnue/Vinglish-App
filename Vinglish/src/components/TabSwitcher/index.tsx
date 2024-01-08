import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';

export const TabSwitcher = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tab}>
        <Text style={styles.tabText}>Yes</Text>
      </View>
      <View style={styles.tab}>
        <Text style={styles.tabText}>No</Text>
      </View>
    </View>
  );
};
