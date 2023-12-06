import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

interface ScreenWrapperProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const ScreenWrapper = ({children, style}: ScreenWrapperProps) => {
  return <View style={[styles.wrapperStyle, style]}>{children}</View>;
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  wrapperStyle: {
    paddingHorizontal: 20,
  },
});
