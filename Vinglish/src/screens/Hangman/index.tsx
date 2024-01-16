import React, {useEffect, useState} from 'react';
import {StatusBar, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {dictionary} from '../../data';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import Spacer from '../../components/Spacer';
import Icon from 'react-native-vector-icons/FontAwesome';

export const HangmanScreen = () => {
  const [mysteryWord, setMysteryWord] = useState('');
  const [startGame, setStartGame] = useState(false);
  const [randomIndices, setRandomIndices] = useState<number[]>([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [hang, setHang] = useState(false);

  const maxIncorrectGuesses = 6;

  const generateRandomWord = () => {
    let newWord =
      dictionary[Math.floor(Math.random() * dictionary.length)].word;
    setMysteryWord(newWord);
  };

  const getRandomLocation = (string: string, numIndices: number) => {
    let selectedIndices: number[] = [];
    for (let i = 0; i < numIndices; i++) {
      let randomIndex = Math.floor(Math.random() * string.length);
      if (!selectedIndices.includes(randomIndex)) {
        selectedIndices.push(randomIndex);
      }
      if (selectedIndices.length >= numIndices) {
        break;
      }
    }
    setRandomIndices(selectedIndices);
  };

  const handleTextChange = (letter: string) => {
    let isIncorrect = true;
    for (let i = 0; i < mysteryWord.length; i++) {
      if (letter.toLowerCase() === mysteryWord[i].toLowerCase()) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        isIncorrect = false;
        break;
      } else {
        setHang(!hang);
      }
    }
    if (isIncorrect) {
      setIncorrectGuesses(incorrectGuesses + 1);
    }
  };

  const showTypePad = () => {
    const typePadViews = [];
    for (let i = 0; i < mysteryWord?.length; i++) {
      typePadViews.push(
        <TextInput
          style={styles.typePad}
          maxLength={1}
          onChangeText={text => handleTextChange(text)}
          key={i}
          defaultValue={randomIndices?.includes(i) ? mysteryWord[i] : ''}
          editable={!randomIndices.includes(i)}
        />,
      );
    }
    return typePadViews;
  };

  const handlePlayButtonClick = () => {
    setStartGame(true);
    generateRandomWord();
  };

  useEffect(() => {
    if (mysteryWord.length !== 0) {
      getRandomLocation(mysteryWord, mysteryWord.length > 5 ? 3 : 2);
    }
  }, [mysteryWord]);

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.linearGradient}>
      <StatusBar backgroundColor="#4c669f" barStyle="light-content" />
      <View>
        <View style={{borderRightWidth: 1}}></View>
      </View>
      {startGame && mysteryWord && (
        <View style={styles.typePadContainer}>{showTypePad()}</View>
      )}
      <Spacer space={30} />
      <TouchableOpacity
        style={styles.playButton}
        onPress={handlePlayButtonClick}>
        <Text style={styles.playText}>{!startGame ? 'PLAY' : 'SUBMIT'}</Text>
      </TouchableOpacity>
      <Spacer space={20} />
      {!startGame && (
        <TouchableOpacity
          style={styles.playButton}
          onPress={handlePlayButtonClick}>
          <Text style={styles.playText}>Back</Text>
        </TouchableOpacity>
      )}
    </LinearGradient>
  );
};
