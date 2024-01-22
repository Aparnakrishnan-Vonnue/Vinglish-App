import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {keys} from '../../../../constants';
import {styles} from './style';

interface KeypadProps {
  getLetter: (item: string) => void;
  disabled: boolean;
}
export const KeyPad = ({getLetter, disabled}: KeypadProps) => {
  return (
    <View style={styles.keypadContainer}>
      {keys.map(item => (
        <TouchableOpacity
          key={item}
          style={disabled ? [styles.keys, styles.disabledKeys] : styles.keys}
          onPress={() => getLetter(item)}
          disabled={disabled}>
          <Text style={styles.alphabets}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
