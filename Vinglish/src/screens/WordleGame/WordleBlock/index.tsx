import {Text, View} from 'react-native';
import {styles} from './style';

interface BlockProps {
  index: number;
  guess: string;
  word: string;
  guessed: boolean;
}

const Block = ({index, guess, word, guessed}: BlockProps) => {
  const letter = guessed ? guess[index] : '';
  return (
    <View style={styles.square}>
      <Text style={styles.squareValue}>{letter}</Text>
    </View>
  );
};

export default Block;
