import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Button,
  Alert,
  StatusBar,
} from 'react-native';
import {wordsArray} from '../../../constants';
import {WordleKeyPad} from './Keyboard';
import LinearGradient from 'react-native-linear-gradient';
import {stylesMain} from './style';
import {COLORS} from '../../../themes/colors';
import {FONTSIZES, FONTWEIGHTS} from '../../../themes/font';
import {useRoute} from '@react-navigation/native';
import {RootStackNavigationProps} from '../../../types/navigation';
import axios from 'axios';

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

const GuessRow = ({
  guess,
  word,
  guessed,
}: {
  guess: string;
  word: string;
  guessed: boolean;
}) => {
  return (
    <View style={styles.guessRow}>
      <Block index={0} guess={guess} word={word} guessed={guessed} />
      <Block index={1} guess={guess} word={word} guessed={guessed} />
      <Block index={2} guess={guess} word={word} guessed={guessed} />
      <Block index={3} guess={guess} word={word} guessed={guessed} />
      <Block index={4} guess={guess} word={word} guessed={guessed} />
    </View>
  );
};

const Keyboard = ({onKeyPress}: {onKeyPress: (letter: string) => void}) => {
  return (
    <View>
      <WordleKeyPad onKeyPress={onKeyPress} />
    </View>
  );
};

interface IGuess {
  [key: number]: string;
}

const defaultGuess: IGuess = {
  0: '',
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
};

export default function WordleScreen() {
  const [guessIndex, setGuessIndex] = useState(0);
  const [guesses, setGuesses] = useState<IGuess>(defaultGuess);
  const [gameComplete, setGameComplete] = useState(false);
  const [inputQuery, setInputQuery] = useState('');
  const route = useRoute<RootStackNavigationProps<'WORDLE_GAME'>>();
  const activeWord = (route?.params?.word).toUpperCase();

  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${inputQuery}`;

  const getDictionaryData = () => {
    axios
      .get(apiUrl)
      .then(response => {
        if (response?.data[0].word) {
          console.log('wordExists');
          return true;
        }
      })
      .catch(error => {
        console.log(error);
        if (!wordsArray.includes(activeWord)) {
          Alert.alert('Not a valid word');
          return;
        }
      });
  };

  const handleKeyPress = (letter: string) => {
    const guess: string = guesses[guessIndex];

    if (letter === 'ENTER') {
      if (guess.length !== 5) {
        Alert.alert('Word too short.');
        return;
      }

      console.log(activeWord);

      if (guess === activeWord) {
        setGuessIndex(guessIndex + 1);
        setGameComplete(true);
        Alert.alert('You win!');
        return;
      }

      if (guessIndex < 5) {
        setGuessIndex(guessIndex + 1);
      } else {
        setGameComplete(true);
        Alert.alert('You lose!');
        return;
      }

      getDictionaryData();
    }

    if (letter === '⌫') {
      setGuesses({...guesses, [guessIndex]: guess.slice(0, -1)});
      return;
    }

    // don't add if guess is full
    if (guess.length >= 5) {
      return;
    }

    setInputQuery(guess + letter);
    setGuesses({...guesses, [guessIndex]: guess + letter});
  };

  React.useEffect(() => {
    if (!gameComplete) {
      setGuesses(defaultGuess);
      setGuessIndex(0);
    }
  }, [gameComplete]);

  return (
    <LinearGradient
      colors={['#0F0F0F', '#232D3F', '#005B41', '#008170']}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}
      style={stylesMain.linearGradient}>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <View>
          <GuessRow
            guess={guesses[0]}
            word={activeWord}
            guessed={guessIndex > 0}
          />
          <GuessRow
            guess={guesses[1]}
            word={activeWord}
            guessed={guessIndex > 1}
          />
          <GuessRow
            guess={guesses[2]}
            word={activeWord}
            guessed={guessIndex > 2}
          />
          <GuessRow
            guess={guesses[3]}
            word={activeWord}
            guessed={guessIndex > 3}
          />
          <GuessRow
            guess={guesses[4]}
            word={activeWord}
            guessed={guessIndex > 4}
          />
          <GuessRow
            guess={guesses[5]}
            word={activeWord}
            guessed={guessIndex > 5}
          />
        </View>
        <View>
          {gameComplete ? (
            <View style={styles.gameCompleteWrapper}>
              <Text>
                <Text style={styles.bold}>Correct Word:</Text> {activeWord}
              </Text>
            </View>
          ) : null}
          <Keyboard onKeyPress={handleKeyPress} />
          {gameComplete ? (
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Button
                title="Reset"
                onPress={() => {
                  setGameComplete(false);
                }}
              />
            </View>
          ) : null}
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  guessRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  guessedLetter: {
    color: '#fff',
  },
  guessCorrect: {
    backgroundColor: '#6aaa64',
    borderColor: '#6aaa64',
  },
  guessInWord: {
    backgroundColor: '#c9b458',
    borderColor: '#c9b458',
  },
  guessNotInWord: {
    backgroundColor: '#787c7e',
    borderColor: '#787c7e',
  },
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

  container: {
    justifyContent: 'space-between',
    gap: 60,
  },

  // Game complete
  gameCompleteWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  bold: {
    fontWeight: 'bold',
    color: COLORS.text.secondary,
  },
});
