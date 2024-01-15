import React, {useEffect, useState} from 'react';
import {StatusBar, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {dictionary} from '../../data';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import Spacer from '../../components/Spacer';

export const HangmanScreen = () => {
  const [mysteryWord, setMysteryWord] = useState('');
  const [startGame, setStartGame] = useState(false);
  const [randomIndices, setRandomIndices] = useState([]);

  const generateRandomWord = () => {
    let newWord =
      dictionary[Math.floor(Math.random() * dictionary.length)].word;
    setMysteryWord(newWord);
  };

  const getRandomLocation = (string: string, numIndices: number) => {
    let selectedIndices: any = [];
    for (let i = 0; i < numIndices; i++) {
      let randomIndex = Math.floor(Math.random() * string.length);
      if (!selectedIndices.includes(randomIndex)) {
        selectedIndices.push(randomIndex);
      }
      if (selectedIndices.length >= numIndices) {
        break;
      }
    }
    console.log(randomIndices);

    setRandomIndices(selectedIndices);
  };

  const handleTextChange = (letter: string) => {
    for (let i = 0; i < mysteryWord.length; i++) {}
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
          value={randomIndices?.includes(i) ? mysteryWord[i] : ''}
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
      {startGame && mysteryWord && (
        <View style={styles.typePadContainer}>{showTypePad()}</View>
      )}
      <Spacer space={30} />
      <TouchableOpacity
        style={styles.playButton}
        onPress={handlePlayButtonClick}>
        <Text style={styles.playText}>{!startGame ? 'PLAY' : 'SUBMIT'}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};
