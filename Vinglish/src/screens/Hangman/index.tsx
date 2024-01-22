import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import {View} from 'react-native';
import {dictionary} from '../../data';
import {TypePad} from './components/typePad';
import {styles} from './style';
import {KeyPad} from './components/KeyPad';
import Spacer from '../../components/Spacer';
import LinearGradient from 'react-native-linear-gradient';
import Figure from './components/figure';
import {CertainityPopUp} from '../../components/CertainityPopUp';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FONTSIZES} from '../../themes/font';
import {useNavigation} from '@react-navigation/native';

export const HangmanGame = () => {
  const [mysteryWord, setMysteryWord] = useState('');
  const [randomIndices, setRandomIndices] = useState<number[]>([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [valueItems, setValueItems] = useState<any>({});
  const [alphabet, setAlphabet] = useState('');
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [showQuitPopUp, setShowQuitPopUp] = useState(false);

  const navigation = useNavigation();

  const maxIncorrectGuesses = 6;

  const generateRandomWord = () => {
    setIsGameStarted(true);
    setIncorrectGuesses(0);
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
        newValueItems[item] = mysteryWord[item].toUpperCase();
      });
      setValueItems(newValueItems);
    }
  }, [mysteryWord, randomIndices]);

  const resetGame = () => {
    setValueItems({});
    setIsGameStarted(false);
  };

  const evaluateWord = () => {
    let indexArray: number[] = [];

    const newValueItems = {...valueItems};
    let isCorrect = false;
    mysteryWord.split('').forEach((letter, index) => {
      if (letter.toUpperCase() === alphabet.toUpperCase()) {
        indexArray.push(index);
        newValueItems[index] = alphabet;
        isCorrect = true;
      }
    });
    if (indexArray.length) {
      indexArray.forEach(index => {
        newValueItems[index] = alphabet;
      });
    }
    if (!isCorrect) {
      setIncorrectGuesses(prevState => prevState + 1);
    }
    setValueItems(newValueItems);
  };

  console.log(incorrectGuesses);

  useEffect(() => {
    evaluateWord();
  }, [alphabet]);

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.linearGradient}>
      <StatusBar backgroundColor={'#4c669f'} />
      <ScrollView
        contentContainerStyle={styles.gameContainer}
        showsVerticalScrollIndicator={false}>
        {!isGameStarted ? (
          <View>
            <View style={styles.themeContainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="home" size={FONTSIZES.xxxl} style={{padding: 10}} />
              </TouchableOpacity>
              <Image
                source={require('../../assets/images/hangmanTheme.jpg')}
                alt="theme"
                style={styles.image}
              />
              <Spacer />
              <Text style={styles.hangmanText}>HANGMAN</Text>
              <Spacer space={50} />
              <TouchableOpacity
                onPress={generateRandomWord}
                style={styles.playButton}>
                <Text style={styles.playText}>Start Game</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View>
            <Figure errors={incorrectGuesses} />
            <View style={styles.startGameContainer}>
              <View style={styles.typePadContainer}>
                {mysteryWord &&
                Object.values(valueItems).join('').toUpperCase() ===
                  mysteryWord.toUpperCase() ? (
                  <View>
                    <Text style={[styles.hungText, styles.wonText]}>
                      You guessed it right!
                    </Text>
                  </View>
                ) : (
                  incorrectGuesses === maxIncorrectGuesses && (
                    <View>
                      <Text style={[styles.hungText, styles.wonText]}>
                        You are hung!
                      </Text>
                      <Text>The correct word is {mysteryWord}</Text>
                    </View>
                  )
                )}
                <TypePad
                  word={mysteryWord.toUpperCase()}
                  valueObj={valueItems}
                  // evaluateWord={(i: any) => getLetter(i)}
                />
              </View>
              <Spacer space={50} />
              <KeyPad
                getLetter={item => setAlphabet(item)}
                disabled={
                  Object.keys(valueItems).includes(alphabet) ? true : false
                }
              />
              <Spacer space={20} />
              {mysteryWord &&
              Object.values(valueItems).join('').toUpperCase() ===
                mysteryWord.toUpperCase() ? (
                <TouchableOpacity
                  style={styles.playButton}
                  onPress={() => resetGame()}>
                  <Text style={styles.playText}>Play Again</Text>
                </TouchableOpacity>
              ) : incorrectGuesses === maxIncorrectGuesses ? (
                <TouchableOpacity
                  style={styles.playButton}
                  onPress={() => resetGame()}>
                  <Text style={styles.playText}>Try Again</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.playButton}
                  onPress={() => setShowQuitPopUp(true)}>
                  <Text style={styles.playText}>Quit game</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
      </ScrollView>
      {showQuitPopUp && (
        <CertainityPopUp
          isVisible={showQuitPopUp}
          setIsVisible={setShowQuitPopUp}
          purpose="Quit"
          onYesClick={() => {
            setShowQuitPopUp(false);
            setIsGameStarted(false);
          }}
          onNoClick={() => setShowQuitPopUp(false)}
        />
      )}
    </LinearGradient>
  );
};
