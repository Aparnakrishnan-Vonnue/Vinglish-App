import {useNavigation} from '@react-navigation/native';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import {dictionary} from '../../../data';
import {useEffect, useState} from 'react';

export const StartScreen = () => {
  const navigation = useNavigation();
  const [wordOfTheDay, setWordOfTheDay] = useState<string>('');

  const generateRandomWord = () => {
    let selectedWords = dictionary.filter(wordObj => wordObj.word.length === 5);
    let randomWord =
      selectedWords[Math.floor(Math.random() * selectedWords.length)].word;
    setWordOfTheDay(randomWord);
  };

  useEffect(() => {
    generateRandomWord();
  }, []);

  return (
    <LinearGradient
      colors={['#0F0F0F', '#232D3F', '#005B41', '#008170']}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}>
      <StatusBar backgroundColor={'#005B41'} />
      <View style={styles.linearGradient}>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() =>
            navigation.navigate('WORDLE_GAME', {
              word: wordOfTheDay,
            })
          }>
          <Text>Start Game</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
