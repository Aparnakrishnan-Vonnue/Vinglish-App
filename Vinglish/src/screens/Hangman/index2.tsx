import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {dictionary} from '../../data';
import {TypePad} from './components/typePad';
import {styles} from './style';

export const HangmanGame = () => {
  const [mysteryWord, setMysteryWord] = useState('');
  const [randomIndices, setRandomIndices] = useState<number[]>([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [valueItems, setValueItems] = useState<any>({});

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

  if (mysteryWord && Object.values(valueItems).join('') === mysteryWord) {
    console.log('win');
  }

  useEffect(() => {
    if (randomIndices.length && mysteryWord) {
      const newValueItems = {...valueItems};
      randomIndices.forEach(item => {
        newValueItems[item] = mysteryWord[item];
      });
      setValueItems(newValueItems);
    }
  }, [mysteryWord, randomIndices]);

  const foo = (p1: any) => {
    if (!p1 && mysteryWord) {
      setIncorrectGuesses(incorrectGuesses + 1);
    }
    const newValueItems = {...valueItems};
    newValueItems[p1] = mysteryWord[p1];
    setValueItems(newValueItems);
  };

  return (
    <View>
      <Text>{mysteryWord}</Text>
      <TouchableOpacity onPress={generateRandomWord}>
        <Text>Start Game</Text>
      </TouchableOpacity>
      <View style={styles.typePadContainer}>
        <TypePad
          word={mysteryWord.toLowerCase()}
          indices={randomIndices}
          errorCount={() => setIncorrectGuesses(incorrectGuesses + 1)}
          valueObj={valueItems}
          evaluateWord={(i: any) => foo(i)}
        />
      </View>
    </View>
  );
};
