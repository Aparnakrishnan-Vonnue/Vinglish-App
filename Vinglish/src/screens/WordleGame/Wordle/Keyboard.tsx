import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../../themes/colors';
import {FONTSIZES} from '../../../themes/font';

interface WordleKeyPadProps {
  letters?: string[];
  onKeyPress: (letter: string) => void;
}

const KeyboardRow = ({letters, onKeyPress}: WordleKeyPadProps) => {
  return (
    <View style={styles.keyboardRow}>
      {letters?.map(letter => (
        <TouchableOpacity onPress={() => onKeyPress(letter)} key={letter}>
          <View style={styles.keys}>
            <Text style={styles.alphabets}>{letter}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export const WordleKeyPad = ({onKeyPress}: WordleKeyPadProps) => {
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

const styles = StyleSheet.create({
  keypadContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyboardRow: {
    flexDirection: 'row',
  },
  keys: {
    padding: 12,
    margin: 2,
    backgroundColor: '#B2BEB5',
    borderRadius: 10,
    elevation: 50,
  },
  disabledKeys: {
    opacity: 0.2,
  },
  alphabets: {
    color: COLORS.text.primary,
    fontSize: FONTSIZES.lg,
  },
});
