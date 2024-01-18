import React, {useEffect, useState} from 'react';
import {StatusBar, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {dictionary} from '../../data';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import Spacer from '../../components/Spacer';
import Figure from './components/figure';

export const HangmanScreen = () => {
  const [mysteryWord, setMysteryWord] = useState('');
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [randomIndices, setRandomIndices] = useState<number[]>([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [showHangMan, setShowHangMan] = useState(false);
  const [isIncorrectGuess, setIsIncorrectGuess] = useState(false);

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
    if (
      !isGameStarted ||
      showHangMan ||
      incorrectGuesses >= maxIncorrectGuesses
    ) {
      return;
    }

    let isIncorrect = true;
    for (let i = 0; i < mysteryWord.length; i++) {
      if (letter.toLowerCase() === mysteryWord[i].toLowerCase()) {
        isIncorrect = false;
        break;
      }
    }
    if (isIncorrect) {
      setIsIncorrectGuess(true);
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

  console.log(mysteryWord);

  const handlePlayButtonClick = () => {
    setIsGameStarted(true);
    setShowHangMan(false);
    setIncorrectGuesses(0);
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
      {isGameStarted && <Figure errors={incorrectGuesses} />}
      <View style={styles.gameContainer}>
        {isGameStarted && mysteryWord && (
          <View>
            <View style={styles.typePadContainer}>{showTypePad()}</View>
          </View>
        )}
        <Spacer space={30} />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: 700,
        }}>
        {!isGameStarted && (
          <View>
            <TouchableOpacity
              style={styles.playButton}
              onPress={handlePlayButtonClick}>
              <Text style={styles.playText}>PLAY</Text>
            </TouchableOpacity>
            <Spacer space={20} />
            <TouchableOpacity
              style={styles.playButton}
              onPress={handlePlayButtonClick}>
              <Text style={styles.playText}>Back</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </LinearGradient>
  );
};
