import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import {WordleBoard} from './WordleBoard';
import Spacer from '../../components/Spacer';
import {WordleKeyPad} from './WordleKeyPad';
import {dictionary} from '../../data';
import {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FONTSIZES} from '../../themes/font';
import {COLORS} from '../../themes/colors';
// import axios from 'axios';

export const WordleGame = () => {
  const numberOfChances = 6;

  const [wordOfTheDay, setWordOfTheDay] = useState('');
  const [keyPressed, setKeyPressed] = useState('');
  const [guessNumber, setGuessNumber] = useState(0);
  const [startGame, setStartGame] = useState(false);
  const [valueItems, setValueItems] = useState<string[]>([]);
  //   const [inputQuery, setInputQuery] = useState('apple');
  const [keyPressCount, setKeyPressCount] = useState(-1);
  //   const [guessedWord, setGuessedWord] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const generateRandomWord = () => {
    let selectedWords = dictionary.filter(wordObj => wordObj.word.length === 5);
    let randomWord =
      selectedWords[Math.floor(Math.random() * selectedWords.length)].word;
    setWordOfTheDay(randomWord);
  };

  // const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${inputQuery}`;

  // const getDictionaryData = () => {
  //   axios
  //     .get(apiUrl)
  //     .then(response => {
  //       setGuessedWord(response.data[0].word);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

  //   useEffect(() => {
  //     getDictionaryData();
  //   }, [wordOfTheDay]);

  const handleSubmit = () => {
    setGuessNumber(prev => prev + 1);
    setStartGame(true);
    setKeyPressCount(-1);
    setIsSubmitted(true);
  };

  console.log(isSubmitted);

  const getValueItems = (item: string) => {
    let inputWord = '';
    const newValueItems = [...valueItems];
    newValueItems.push(item);
    if (newValueItems.length > 5) {
      return;
    }
    inputWord = newValueItems.join('');
    if (inputWord.toUpperCase() === wordOfTheDay.toUpperCase()) {
      if (isSubmitted) {
        console.log('hello');
      }
    }
    setValueItems(newValueItems);
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
        {startGame && (
          <View>
            <WordleBoard
              word={wordOfTheDay}
              guessNumber={guessNumber}
              keyPressed={keyPressed}
              count={keyPressCount}
              valueItem={valueItems}
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
            <TouchableOpacity style={styles.clearButton}>
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
