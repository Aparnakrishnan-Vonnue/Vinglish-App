import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {keys} from '../../../constants';

interface WordleKeyPadProps {
  getLetter: (item: string) => void;
}

export const WordleKeyPad = ({getLetter}: WordleKeyPadProps) => {
  const handleKeyPress = (item: string) => {
    getLetter(item);
  };

  return (
    <View style={styles.keypadContainer}>
      {keys.map(item => (
        <TouchableOpacity
          key={item}
          style={styles.keys}
          onPress={() => handleKeyPress(item)}>
          <Text style={styles.alphabets}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
