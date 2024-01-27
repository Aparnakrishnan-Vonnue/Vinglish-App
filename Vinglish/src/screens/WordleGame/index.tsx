import {Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import {WordleBoard} from './WordleBoard';
import Spacer from '../../components/Spacer';
import {WordleKeyPad} from './WordleKeyPad';
import {dictionary} from '../../data';
import {useEffect, useState} from 'react';
import axios from 'axios';

export const WordleGame = () => {
  const numberOfChances = 6;

  const [wordOfTheDay, setWordOfTheDay] = useState('');
  const [keyPressed, setKeyPressed] = useState('');
  const [guessNumber, setGuessNumber] = useState(0);
  const [valueItems, setValueItems] = useState({});
  const [startGame, setStartGame] = useState(false);
  const [inputQuery, setInputQuery] = useState('apple');
  const [keyPressCount, setKeyPressCount] = useState(-1);

  const generateRandomWord = () => {
    let selectedWords = dictionary.filter(wordObj => wordObj.word.length === 5);
    let randomWord =
      selectedWords[Math.floor(Math.random() * selectedWords.length)].word;
    setWordOfTheDay(randomWord);
  };

  const apiUrl = `https://api.datamuse.com/words?sp=${inputQuery}`;

  const getDictionaryData = () => {
    axios
      .get(apiUrl)
      .then(response => {
        // console.log(response);
      })
      .catch(error => {
        // console.log(error);
      });
  };

  useEffect(() => {
    getDictionaryData();
  }, [wordOfTheDay]);

  return (
    <LinearGradient
      colors={['#0F0F0F', '#232D3F', '#005B41', '#008170']}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}
      style={styles.linearGradient}>
      <View style={styles.gameContainer}>
        {startGame && (
          <View>
            <WordleBoard
              word={wordOfTheDay}
              guessNumber={guessNumber}
              valueObj={valueItems}
              keyPressed={keyPressed}
              count={keyPressCount}
            />
            <Spacer space={20} />
            <View style={{paddingHorizontal: 20}}>
              <WordleKeyPad
                getLetter={item => {
                  setKeyPressed(item);
                  setKeyPressCount(prev => prev + 1);
                }}
              />
            </View>
            <Spacer space={20} />
          </View>
        )}
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => {
            setGuessNumber(prev => prev + 1);
            setStartGame(true);
            generateRandomWord();
            setKeyPressCount(-1);
          }}>
          <Text style={styles.submitText}>
            {startGame ? 'SUBMIT' : 'START GAME'}
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
