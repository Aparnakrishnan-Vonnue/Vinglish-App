import {Alert, SafeAreaView, StatusBar, View} from 'react-native';
import GuessRow from './GuessRow';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import {WordleKeyPad} from './Keyboard';
import Spacer from '../../components/Spacer';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {wordsArray} from '../../constants';
import {useRoute} from '@react-navigation/native';
import {RootStackNavigationProps} from '../../types/navigation';

interface IGuess {
  [key: number]: string;
}

const defaultGuess: IGuess = {
  0: '',
  1: '',
  2: '',
  3: '',
  4: '',
};

export const WordleScreen = () => {
  const route = useRoute<RootStackNavigationProps<'WORDLE_GAME'>>();
  const [inputQuery, setInputQuery] = useState('');
  const [guessIndex, setGuessIndex] = useState(0);
  const [guesses, setGuesses] = useState<IGuess>(defaultGuess);
  const [gameComplete, setGameComplete] = useState(false);

  const activeWord = (route?.params?.word).toUpperCase();

  const handleKeyPress = (letter: string) => {
    const guess: string = guesses[guessIndex];

    if (letter === 'ENTER') {
      console.log(guess === activeWord);
      if (guess.length !== 5) {
        Alert.alert('Word too short!');
        return;
      }

      if (guess === activeWord) {
        Alert.alert('You win');
      }

      // if (getDictionaryData() === false) {
      //   Alert.alert('Word does not exist');
      // }

      if (guessIndex < 5) {
        setGuessIndex(guessIndex + 1);
      } else {
        Alert.alert('You lose');
      }
    }

    if (guess.length >= 5) {
      return;
    }

    if (letter === '⌫') {
      setGuesses({...guesses, [guessIndex]: guess.slice(0, -1)});
      return;
    }

    if (!getDictionaryData()) {
      Alert.alert('Word not found');
    }

    setInputQuery(guess + letter);
    setGuesses({...guesses, [guessIndex]: guess + letter});
  };

  console.log(activeWord);

  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${inputQuery}`;

  useEffect(() => {
    if (!gameComplete) {
      setGuesses(defaultGuess);
      setGuessIndex(0);
    }
  }, [gameComplete]);

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
        }
      });
  };

  return (
    <SafeAreaView>
      <LinearGradient
        colors={['#0F0F0F', '#232D3F', '#005B41', '#008170']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        style={styles.linearGradient}>
        <StatusBar backgroundColor={'#005B41'} />
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
        <Spacer space={30} />
        <WordleKeyPad onKeyPress={handleKeyPress} />
      </LinearGradient>
    </SafeAreaView>
  );
};
