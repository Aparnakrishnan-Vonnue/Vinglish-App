import React, {useEffect} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {COLORS} from '../../../themes/colors';
import {FONTSIZES} from '../../../themes/font';
import {useState} from 'react';

interface TypePadProps {
  word: string;
  valueObj: Record<number, string>;
  // evaluateWord: any;
}

export const TypePad = ({word, valueObj}: TypePadProps) => {
  const [value, setValue] = useState<any>([]);

  // useEffect(() => {
  //   if (value[0] === word[value[1]]) {
  //     evaluateWord(value[1]);
  //   } else {
  //     setValue([]);
  //   }
  // }, [value]);

  return (
    <View style={styles.typePadContainer}>
      {word?.split('').map((char, index) => {
        return (
          <TextInput
            style={styles.typePad}
            maxLength={1}
            value={
              Object.keys(valueObj).includes(String(index)) ? word[index] : ''
            }
            onChangeText={text => setValue([text.toLowerCase(), index])}
            key={index}
            editable={false}
          />
        );
      })}
    </View>
  );
};

export const styles = StyleSheet.create({
  typePad: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.text.primary,
    padding: 10,
    fontSize: FONTSIZES.xxl,
    color: COLORS.text.secondary,
    textAlign: 'center',
  },
  typePadContainer: {
    flexDirection: 'row',
    gap: 5,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
});
