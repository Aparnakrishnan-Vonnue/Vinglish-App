import React, {useEffect, useState} from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import {dictionary} from '../../data';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import Spacer from '../../components/Spacer';
import Figure from './components/figure';
import {CertainityPopUp} from '../../components/CertainityPopUp';
import {TypePad} from './components/typePad';

export const HangmanScreen = () => {
  const [mysteryWord, setMysteryWord] = useState('');
  const [randomIndices, setRandomIndices] = useState<number[]>([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [showQuitPopUp, setShowQuitPopUp] = useState(false);
  const [valueItems, setValueItems] = useState<Record<number, string>>({});
  const [isGameStarted, setIsGameStarted] = useState(false);

  const maxIncorrectGuesses = 6;

  const generateRandomWord = () => {
    let newWord =
      dictionary[Math.floor(Math.random() * dictionary.length)].word;
    setMysteryWord(newWord);
    getRandomLocation(newWord, newWord.length > 5 ? 3 : 2);
  };

  const getRandomLocation = (string: string, numIndices: number) => {
    let selectedIndices: number[] = [0];
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

  useEffect(() => {
    if (randomIndices.length && mysteryWord) {
      const newValueItems = {...valueItems};
      randomIndices.forEach(item => {
        newValueItems[item] = mysteryWord[item];
      });
      setValueItems(newValueItems);
    }
  }, [mysteryWord, randomIndices]);

  const evaluateWord = (rightIndex: number) => {
    if (!rightIndex && mysteryWord) {
      setIncorrectGuesses(incorrectGuesses + 1);
    }
    const newValueItems = {...valueItems};
    newValueItems[rightIndex] = mysteryWord[rightIndex];
    setValueItems(newValueItems);
  };

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.linearGradient}>
      <StatusBar backgroundColor="#4c669f" barStyle="light-content" />
      {isGameStarted && <Figure errors={incorrectGuesses} />}
      {incorrectGuesses === maxIncorrectGuesses && isGameStarted && (
        <Text style={styles.hungText}>YOU ARE HUNG!</Text>
      )}
      {Object.values(valueItems).length !== 0 &&
        Object.values(valueItems).join('') === mysteryWord &&
        isGameStarted && (
          <>
            <Text style={[styles.hungText, styles.wonText]}>
              Congratulations! You Won!
            </Text>
            <ConfettiCannon count={200} origin={{x: -10, y: 0}} />
          </>
        )}
      <View
        style={
          showQuitPopUp
            ? [styles.gameContainer, styles.opacity]
            : styles.gameContainer
        }>
        {isGameStarted && (
          <View>
            <View>
              <View style={styles.typePadContainer}>
                <TypePad
                  word={mysteryWord.toLowerCase()}
                  valueObj={valueItems}
                  evaluateWord={(i: any) => evaluateWord(i)}
                />
              </View>
            </View>
            <Spacer space={30} />
            <View
              style={
                incorrectGuesses === maxIncorrectGuesses
                  ? styles.playAgainButtonContainer
                  : [
                      styles.playAgainButtonContainer,
                      styles.quitButtonContainer,
                    ]
              }>
              {incorrectGuesses === maxIncorrectGuesses ? (
                <TouchableOpacity
                  style={[styles.playButton, styles.playAgainButton]}
                  onPress={() => setIsGameStarted(false)}>
                  <Text style={styles.playText}>Play Again</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={[styles.playButton, styles.playAgainButton]}
                  onPress={() => setShowQuitPopUp(true)}>
                  <Text style={styles.playText}>Quit</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
        <Spacer space={30} />
      </View>
      <View style={styles.buttonContainer}>
        {!isGameStarted && (
          <View>
            <TouchableOpacity
              style={styles.playButton}
              onPress={() => {
                setIsGameStarted(true);
                generateRandomWord();
              }}>
              <Text style={styles.playText}>PLAY</Text>
            </TouchableOpacity>
            <Spacer space={20} />
            <TouchableOpacity style={styles.playButton}>
              <Text style={styles.playText}>Back</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      {showQuitPopUp && (
        <CertainityPopUp
          isVisible={showQuitPopUp}
          setIsVisible={setShowQuitPopUp}
          purpose="Quit"
          onYesClick={() => {
            setIsGameStarted(false);
            setShowQuitPopUp(false);
          }}
          onNoClick={() => setShowQuitPopUp(false)}
        />
      )}
    </LinearGradient>
  );
};
