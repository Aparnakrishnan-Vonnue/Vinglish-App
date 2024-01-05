import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {PageHeader} from '../../components/PageHeader';
import Button from '../../components/Button';
import {styles} from './style';
import ScreenWrapper from '../../components/ScreenWrapper';
import Spacer from '../../components/Spacer';
import {dictionary} from '../../data';

const TestRoom = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [word, setWord] = useState('');

  const generateRandomWord = () => {
    setWord(dictionary[Math.floor(Math.random() * dictionary.length)].word);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
    generateRandomWord();
  };
  return (
    <PageHeader title="Test Room" variant="PRIMARY">
      <ScreenWrapper>
        <View>
          {isClicked && (
            <View style={styles.container}>
              <View style={styles.testContainer}>
                <View style={styles.questionContainer}>
                  <Text style={styles.question}>{`1) `}</Text>
                  <Text style={styles.question}>
                    What is the meaning of the word "
                    <Text style={[styles.question, styles.word]}>{word}</Text>"
                    ?
                  </Text>
                  <Spacer />
                </View>
                <Spacer space={20} />
                <TextInput style={styles.answerInput} />
              </View>
            </View>
          )}
          <Spacer space={30} />
          <Button
            label="Generate Question"
            variant="PRIMARY"
            onClick={handleClick}
          />
        </View>
      </ScreenWrapper>
    </PageHeader>
  );
};

export default TestRoom;
