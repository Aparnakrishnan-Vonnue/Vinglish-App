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
import {TabSwitcher} from '../../components/TabSwitcher';
import {Response} from './components/Response';

const TestRoom = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [word, setWord] = useState('');
  const [answer, setAnswer] = useState('');
  // const [inputAnswer, setInputAnswer] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [meaning, setMeaning] = useState('');
  const [isTabOneActive, setIsTabOneActive] = useState(false);

  const generateRandomWord = () => {
    setWord(dictionary[Math.floor(Math.random() * dictionary.length)].word);
  };
  const resultedData = dictionary.filter(data => word === data.word);

  const handleClick = () => {
    setIsClicked(!isClicked);
    generateRandomWord();
  };

  const handleSubmit = () => {
    // setInputAnswer(answer);
    setIsModalOpen(true);
    setMeaning(resultedData[0]?.meaning);
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
          <Text style={[styles.question, styles.boldText]}>
            Is your answer similar to the provided answer?
          </Text>
          <Spacer />
          <Text style={styles.question}>
            <Text style={[styles.question, styles.boldText]}>
              Provided Answer:{' '}
            </Text>
            {meaning}
          </Text>
          <Spacer space={20} />
          <TabSwitcher
            tabTextOne="YES"
            tabTextTwo="NO"
            isActive={isTabOneActive}
            onTabOnePress={() => setIsTabOneActive(true)}
            onTabTwoPress={() => setIsTabOneActive(false)}
          />
          <Spacer />
          {isTabOneActive ? (
            <View>
              <Response title="Congratulations" />
            </View>
          ) : (
            <View>
              <Response title="Try Again!" />
            </View>
          )}
        </View>
      </BottomSheet>
    </PageHeader>
  );
};

export default TestRoom;
