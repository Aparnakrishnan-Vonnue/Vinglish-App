import {Alert, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import {WordleBoard} from './WordleBoard';
import Spacer from '../../components/Spacer';
import {WordleKeyPad} from './WordleKeyPad';
import {dictionary} from '../../data';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FONTSIZES} from '../../themes/font';
import {COLORS} from '../../themes/colors';
import axios from 'axios';
import {GuessRow} from './WordleRow';
import {useRoute} from '@react-navigation/native';
import {RootStackNavigationProps} from '../../types/navigation';
import {wordsArray} from '../../constants';

export const WordleGame = () => {
  interface GuessObjProps {
    [key: number]: string;
  }
  const guessObj: GuessObjProps = {
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
  };
  const [guessIndex, setGuessIndex] = useState(0);
  const [guesses, setGuesses] = useState<GuessObjProps>(guessObj);
  const [inputQuery, setInputQuery] = useState('');

  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${inputQuery}`;

  const getDictionaryData = () => {
    axios
      .get(apiUrl)
      .then(response => {
        if (response?.data[0].word) {
          console.log('wordExists');
        }
      })
      .catch(error => {
        console.log(error);
        if (!wordsArray.includes(activeWord)) {
          Alert.alert('Not a valid word');
        }
      });
  };

  const route = useRoute<RootStackNavigationProps<'WORDLE_GAME'>>();
  const activeWord = route?.params?.word;

  console.log(activeWord);

  const handleKeyPress = (letter: string) => {
    const guess: string = guesses[guessIndex];

    if (letter === 'ENTER') {
      if (guess.length !== 5) {
        console.log('word too short!');
        getDictionaryData();
        return;
      }
    }

    if (guess === activeWord) {
      Alert.alert('You win');
      return;
    }

    if (letter === '⌫') {
      setGuesses({...guesses, [guessIndex]: guess.slice(0, -1)});
      return;
    }

    if (guessIndex < 5) {
      setGuessIndex(guessIndex + 1);
    } else {
      console.log('You lose');
    }

    if (guess.length >= 5) {
      return;
    }

    setGuesses({...guesses, [guessIndex]: guess + letter});
    setInputQuery(guess + letter);
  };

  console.log(guessIndex);

  return (
    <LinearGradient
      colors={['#0F0F0F', '#232D3F', '#005B41', '#008170']}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}
      style={styles.linearGradient}>
      <StatusBar backgroundColor={'#005B41'} />
      <View style={styles.gameContainer}>
        <GuessRow
          guess={guesses?.[0]}
          word={activeWord}
          guessed={guessIndex > 0}
        />
        <GuessRow
          guess={guesses?.[1]}
          word={activeWord}
          guessed={guessIndex > 1}
        />
        <GuessRow
          guess={guesses?.[2]}
          word={activeWord}
          guessed={guessIndex > 2}
        />
        <GuessRow
          guess={guesses?.[3]}
          word={activeWord}
          guessed={guessIndex > 3}
        />
        <GuessRow
          guess={guesses?.[4]}
          word={activeWord}
          guessed={guessIndex > 4}
        />
        <GuessRow
          guess={guesses?.[5]}
          word={activeWord}
          guessed={guessIndex > 5}
        />
        <Spacer space={30} />
        <WordleKeyPad onKeyPress={handleKeyPress} />
        <Spacer space={30} />
      </View>
    </LinearGradient>
  );
};
