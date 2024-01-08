import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {PageHeader} from '../../components/PageHeader';
import Button from '../../components/Button';
import {styles} from './style';
import ScreenWrapper from '../../components/ScreenWrapper';
import Spacer from '../../components/Spacer';
import {dictionary} from '../../data';
import {COLORS} from '../../themes/colors';
import BottomSheet from '../../components/BottomSheet';
import {areWordsPresent} from '../../utils';
import {TabSwitcher} from '../../components/TabSwitcher';

const TestRoom = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [word, setWord] = useState('');
  const [answer, setAnswer] = useState('');
  const [inputAnswer, setInputAnswer] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [meaning, setMeaning] = useState('');

  const generateRandomWord = () => {
    setWord(dictionary[Math.floor(Math.random() * dictionary.length)].word);
    setMeaning(
      dictionary[Math.floor(Math.random() * dictionary.length)].meaning,
    );
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
    generateRandomWord();
  };

  const handleSubmit = () => {
    setInputAnswer(answer);
    setIsModalOpen(true);
  };

  return (
    <PageHeader title="Test Room" variant="PRIMARY">
      <ScreenWrapper>
        <View>
          {isClicked && (
            <View style={styles.container}>
              <View style={styles.testContainer}>
                <View style={styles.questionContainer}>
                  <Text style={styles.question}>
                    What is the meaning of the word "
                    <Text style={[styles.question, styles.word]}>{word}</Text>"
                    ?
                  </Text>
                  <Spacer />
                </View>
                <Spacer space={20} />
                <TextInput
                  style={styles.answerInput}
                  placeholder="Type your answer here..."
                  placeholderTextColor={COLORS.border.primary}
                  onChangeText={setAnswer}
                />
                <Spacer />
              </View>
            </View>
          )}
          <Spacer space={30} />
          {!isClicked ? (
            <Button
              label="Generate Question"
              variant="PRIMARY"
              onClick={handleClick}
            />
          ) : (
            <Button
              variant={answer !== '' ? 'PRIMARY' : 'DISABLED'}
              label="SUBMIT"
              onClick={handleSubmit}
            />
          )}
        </View>
      </ScreenWrapper>
      <BottomSheet isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <View>
          <Text>Is your answer similar to the provided answer?</Text>
          <Spacer />
          <Text>{`Provided answer: ${meaning}`}</Text>
          <Spacer space={20} />
          <TabSwitcher />
        </View>
      </BottomSheet>
    </PageHeader>
  );
};

export default TestRoom;
