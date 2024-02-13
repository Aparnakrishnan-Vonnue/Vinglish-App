import {View} from 'react-native';
import {styles} from '../WordleBoard/style';
import Block from '../WordleBlock';

interface GuessProps {
  guess: string;
  word: string;
  guessed: boolean;
}

export const GuessRow = ({guess, word, guessed}: GuessProps) => {
  console.log('sg', guess);
  return (
    <View style={styles.row}>
      <Block index={0} guess={guess} word={word} guessed={guessed} />
      <Block index={1} guess={guess} word={word} guessed={guessed} />
      <Block index={2} guess={guess} word={word} guessed={guessed} />
      <Block index={3} guess={guess} word={word} guessed={guessed} />
      <Block index={4} guess={guess} word={word} guessed={guessed} />
    </View>
  );
};
