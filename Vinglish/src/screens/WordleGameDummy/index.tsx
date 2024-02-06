import {Text, View} from 'react-native';
import {styles} from '../WordleGame/WordleBoard/style';

const Block = ({letter}) => (
  <View style={styles.square}>
    <Text>{letter}</Text>
  </View>
);

export const GuessRow = ({guess}) => {
  const letters = guess.split('');
  return (
    <View style={styles.row}>
      <Block letter={letters[0]} />
      <Block letter={letters[1]} />
      <Block letter={letters[2]} />
      <Block letter={letters[3]} />
      <Block letter={letters[4]} />
    </View>
  );
};
