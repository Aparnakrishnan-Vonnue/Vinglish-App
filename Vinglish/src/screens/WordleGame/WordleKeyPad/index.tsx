import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {keys} from '../../../constants';

interface WordleKeyPadProps {
  // getLetter: (item: string) => void;
  letters?: string[];
  onKeyPress: (letter: string) => void;
}

const KeyboardRow = ({letters, onKeyPress}: WordleKeyPadProps) => {
  return (
    <View style={styles.keyboardRow}>
      {letters?.map(letter => (
        <TouchableOpacity onPress={() => onKeyPress(letter)}>
          <View style={styles.keys}>
            <Text style={styles.alphabets}>{letter}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export const WordleKeyPad = ({onKeyPress}: WordleKeyPadProps) => {
  // const handleKeyPress = (item: string) => {
  //   getLetter(item);
  // };

  const rowOne = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const rowTwo = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const rowThree = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫'];

  return (
    <View style={styles.keypadContainer}>
      <KeyboardRow letters={rowOne} onKeyPress={onKeyPress} />
      <KeyboardRow letters={rowTwo} onKeyPress={onKeyPress} />
      <KeyboardRow letters={rowThree} onKeyPress={onKeyPress} />
      <TouchableOpacity style={styles.keys} onPress={() => onKeyPress('ENTER')}>
        <Text style={styles.alphabets}>ENTER</Text>
      </TouchableOpacity>
    </View>
  );
};
