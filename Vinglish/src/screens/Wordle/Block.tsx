import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../themes/colors';
import {FONTSIZES, FONTWEIGHTS} from '../../themes/font';

interface BlockProps {
  index: number;
  guess: string;
  word: string;
  guessed: boolean;
}

// const Block = ({index, guess, word, guessed}: BlockProps) => {
//   const letter = guess[index];
//   const wordLetter = word[index];

//   const blockStyles: any[] = styles.guessSquare;
//   const textStyles: any[] = styles.squareValue;

//   if (letter === wordLetter && guessed) {
//     blockStyles.push(styles.guessCorrect);
//     textStyles.push(styles.guessedLetter);
//   } else if (word.includes(letter) && guessed) {
//     blockStyles.push(styles.guessInWord);
//     textStyles.push(styles.guessedLetter);
//   } else if (guessed) {
//     blockStyles.push(styles.guessNotInWord);
//     textStyles.push(styles.guessedLetter);
//   }
//   return (
//     <View style={styles.guessSquare}>
//       <Text style={styles.squareValue}>{letter}</Text>
//     </View>
//   );
// };

// export default Block;

const Block = ({
  index,
  guess,
  word,
  guessed,
}: {
  index: number;
  guess: string;
  word: string;
  guessed: boolean;
}) => {
  const letter = guess[index];
  const wordLetter = word[index];

  const blockStyles: any[] = [styles.guessSquare];
  const textStyles: any[] = [styles.squareValue];

  if (letter === wordLetter && guessed) {
    blockStyles.push(styles.guessCorrect);
    textStyles.push(styles.guessedLetter);
  } else if (word.includes(letter) && guessed) {
    blockStyles.push(styles.guessInWord);
    textStyles.push(styles.guessedLetter);
  } else if (guessed) {
    blockStyles.push(styles.guessNotInWord);
    textStyles.push(styles.guessedLetter);
  }

  return (
    <View style={blockStyles}>
      <Text style={textStyles}>{letter}</Text>
    </View>
  );
};
export default Block;

const styles = StyleSheet.create({
  guessSquare: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: COLORS.action.tertiary,
    color: COLORS.text.secondary,
    textAlign: 'center',
    fontSize: FONTSIZES.xxxl,
    fontWeight: FONTWEIGHTS.bold,
    borderRadius: 10,
    elevation: 10,
    borderTopWidth: 3,
    borderRightWidth: 3,
    width: 60,
  },
  squareValue: {
    color: COLORS.text.secondary,
    fontSize: FONTSIZES.xxl,
    fontWeight: FONTWEIGHTS.bold,
  },
  guessedLetter: {
    color: '#fff',
  },
  guessCorrect: {
    backgroundColor: '#6aaa64',
    borderColor: '#6aaa64',
  },
  guessInWord: {
    backgroundColor: COLORS.action.yellowPrimary,
  },
  guessNotInWord: {},
});
