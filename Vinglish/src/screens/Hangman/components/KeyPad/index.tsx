import {Text, TouchableOpacity, View} from 'react-native';
import {keys} from '../../../../constants';
import {styles} from './style';
import {useEffect, useState} from 'react';

interface KeypadProps {
  getLetter: (item: string) => void;
  resetKeys?: boolean;
}

export const KeyPad = ({getLetter, resetKeys}: KeypadProps) => {
  const [disabledKeys, setDisabledKeys] = useState<string[]>([]);

  const handleKeyPress = (item: string) => {
    getLetter(item);
    setDisabledKeys(prevKeys => [...prevKeys, item]);
  };

  useEffect(() => {
    resetKeys && setDisabledKeys([]);
  }, [resetKeys]);

  return (
    <View style={styles.keypadContainer}>
      {keys.map(item => (
        <TouchableOpacity
          key={item}
          style={
            disabledKeys.includes(item)
              ? [styles.keys, styles.disabledKeys]
              : styles.keys
          }
          onPress={() => handleKeyPress(item)}
          disabled={disabledKeys.includes(item)}>
          <Text style={styles.alphabets}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
