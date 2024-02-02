import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
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

export const WordleGame = () => {
  // const numberOfChances = 6;

  const [wordOfTheDay, setWordOfTheDay] = useState('');
  const [keyPressed, setKeyPressed] = useState('');
  const [guessNumber, setGuessNumber] = useState(0);
  const [startGame, setStartGame] = useState(false);
  const [valueItems, setValueItems] = useState<string[]>([]);
  const [inputQuery, setInputQuery] = useState('');
  const [keyPressCount, setKeyPressCount] = useState(-1);
  const [inputWord, setInputWord] = useState('');
  const [result, setResult] = useState({
    isIncluded: false,
    isCorrectPosition: false,
    isNotIncluded: false,
    isNotFound: false,
    isCorrectWord: false,
  });

  const generateRandomWord = () => {
    let selectedWords = dictionary.filter(wordObj => wordObj.word.length === 5);
    let randomWord =
      selectedWords[Math.floor(Math.random() * selectedWords.length)].word;
    setWordOfTheDay(randomWord);
  };

  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${inputQuery}`;

  const getDictionaryData = () => {
    axios
      .get(apiUrl)
      .then(response => {
        if (response?.data[0].word) {
          console.log('wordExists');
        }
      })
      .catch(() => {
        setResult({...result, isNotFound: true});
        setGuessNumber(prev => prev + 1);
      });
  };

  const handleSubmit = () => {
    getDictionaryData();
    setGuessNumber(prev => prev + 1);
    setStartGame(true);
    setKeyPressCount(-1);
    if (inputWord.toUpperCase() === wordOfTheDay.toUpperCase()) {
      setResult({...result, isCorrectWord: true});
    } else {
      inputWord.split('').map((inputChar, index) => {
        if (wordOfTheDay.split('').includes(inputChar)) {
          if (index === wordOfTheDay.indexOf(inputChar)) {
            setResult({...result, isCorrectPosition: true});
          }
          setResult({...result, isIncluded: true});
        } else {
          setResult({...result, isNotIncluded: true});
        }
      });
    }
  };

  const getValueItems = (item: string) => {
    let inputWord = '';
    const newValueItems = [...valueItems];
    newValueItems.push(item);
    if (newValueItems.length > 5) {
      return;
    }
    inputWord = newValueItems.join('');
    setInputWord(inputWord);
    setValueItems(newValueItems);
    setInputQuery(inputWord);
  };

  console.log(wordOfTheDay);

  return (
    <LinearGradient
      colors={['#0F0F0F', '#232D3F', '#005B41', '#008170']}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}
      style={styles.linearGradient}>
      <StatusBar backgroundColor={'#005B41'} />
      <View style={styles.gameContainer}>
        {result.isNotFound && <Text>Word not exist!</Text>}
        {startGame && (
          <View>
            <WordleBoard
              word={wordOfTheDay}
              guessNumber={guessNumber}
              keyPressed={keyPressed}
              count={keyPressCount}
              valueItem={valueItems}
              result={result}
            />
            <Spacer space={20} />
            <View style={{paddingHorizontal: 20}}>
              <WordleKeyPad
                getLetter={item => {
                  setKeyPressed(item);
                  setKeyPressCount(prev => prev + 1);
                  getValueItems(item);
                }}
              />
            </View>
            <Spacer space={20} />
          </View>
        )}
        {startGame ? (
          <View style={{display: 'flex', flexDirection: 'row', gap: 8}}>
            <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.clearButton}
              onPress={() => valueItems.pop()}>
              <Text style={styles.submitText}>Clear</Text>
              <Icon
                name="backspace"
                size={FONTSIZES.lg}
                color={COLORS.text.primary}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.submitBtn}
            onPress={() => {
              setStartGame(true);
              generateRandomWord();
            }}>
            <Text style={styles.submitText}>Start Game</Text>
          </TouchableOpacity>
        )}
      </View>
    </LinearGradient>
  );
};
