import React from 'react';
import {View} from 'react-native';
import {styles} from '../WordleBoard/style';
import Block from '../WordleBlock';

interface GuessProps {
  guess: string;
  word: string;
  guessed: boolean;
}

const GuessRow = ({guess, word, guessed}: GuessProps) => {
  return (
    <View style={styles.row}>
      <Block index={0} guess={guess} word={word} guessed={guessed} />
      <Block
        // key={index}
        index={1}
        guess={guess}
        word={word}
        guessed={guessed}
      />
      <Block
        // key={index}
        index={2}
        guess={guess}
        word={word}
        guessed={guessed}
      />
      <Block
        // key={index}
        index={3}
        guess={guess}
        word={word}
        guessed={guessed}
      />
      <Block
        // key={index}
        index={4}
        guess={guess}
        word={word}
        guessed={guessed}
      />
    </View>
  );
};

export default GuessRow;
