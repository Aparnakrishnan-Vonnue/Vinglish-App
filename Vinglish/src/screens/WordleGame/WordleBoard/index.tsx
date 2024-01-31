import {TextInput, View} from 'react-native';
import {styles} from './style';
import {useState} from 'react';

interface WordleBoardProps {
  word: string;
  valueItem: string[];
  guessNumber: number;
  keyPressed: string;
  count?: number;
}

export const WordleBoard = ({
  word,
  guessNumber,
  keyPressed,
  count,
  valueItem,
}: WordleBoardProps) => {
  return (
    <View style={styles.boardContainer}>
      <View style={styles.row}>
        {word.split('').map((char, index) => (
          <TextInput
            maxLength={1}
            style={styles.square}
            key={index}
            value={valueItem[index] || ''}
            editable={false}
          />
        ))}
      </View>
      {[2, 3, 4, 5, 6].map((number, rowIndex) => (
        <View style={styles.row} key={rowIndex}>
          {word.split('').map((char, index) => (
            <TextInput
              maxLength={1}
              style={styles.square}
              key={index}
              value={
                guessNumber === number && count === index ? keyPressed : ''
              }
              editable={false}
            />
          ))}
        </View>
      ))}
    </View>
  );
};
