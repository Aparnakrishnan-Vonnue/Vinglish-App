import {TextInput, View} from 'react-native';
import {styles} from './style';

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
  console.log(valueItem);
  return (
    <View style={styles.boardContainer}>
      <View style={styles.row}>
        {word.split('').map((char, index) => {
          console.log(count);
          return (
            <TextInput
              maxLength={1}
              style={styles.square}
              key={index}
              value={
                guessNumber === 1 && count === index ? valueItem[index] : ''
              }
              editable={false}
            />
          );
        })}
      </View>
      <View style={styles.row}>
        {word.split('').map((char, index) => {
          return (
            <TextInput
              maxLength={1}
              style={styles.square}
              key={index}
              value={guessNumber === 2 && count === index ? keyPressed : ''}
              editable={false}
            />
          );
        })}
      </View>
      <View style={styles.row}>
        {word.split('').map((char, index) => {
          return (
            <TextInput
              maxLength={1}
              style={styles.square}
              key={index}
              value={guessNumber === 3 && count === index ? keyPressed : ''}
              editable={false}
            />
          );
        })}
      </View>
      <View style={styles.row}>
        {word.split('').map((char, index) => {
          return (
            <TextInput
              maxLength={1}
              style={styles.square}
              key={index}
              value={guessNumber === 4 && count === index ? keyPressed : ''}
              editable={false}
            />
          );
        })}
      </View>
      <View style={styles.row}>
        {word.split('').map((char, index) => {
          return (
            <TextInput
              maxLength={1}
              style={styles.square}
              key={index}
              value={guessNumber === 5 && count === index ? keyPressed : ''}
              editable={false}
            />
          );
        })}
      </View>
      <View style={styles.row}>
        {word.split('').map((char, index) => {
          return (
            <TextInput
              maxLength={1}
              style={styles.square}
              key={index}
              value={guessNumber === 6 && count === index ? keyPressed : ''}
              editable={false}
            />
          );
        })}
      </View>
    </View>
  );
};
