import React, {useEffect, useState} from 'react';
import ConfettiCannon from 'react-native-confetti-cannon';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {PageHeader} from '../../components/PageHeader';
import Button from '../../components/Button';
import {styles} from './style';
import ScreenWrapper from '../../components/ScreenWrapper';
import Spacer from '../../components/Spacer';
import {dictionary} from '../../data';
import {ModalPopup} from './components/Modal';

const TestRoom = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isOptionDisabled, setIsOptionDisabled] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [testObj, setTestObj] = useState<any>({
    meaning: '',
    word: '',
    options: [],
    score: 0,
    selectedOption: '',
    showScore: false,
  });

  const generateRandomWord = () => {
    let newWord =
      dictionary[Math.floor(Math.random() * dictionary.length)].word;
    const resultedData = dictionary.find(data => newWord === data.word);
    if (resultedData) {
      setTestObj({
        ...testObj,
        meaning: resultedData.meaning,
        word: newWord,
      });
    } else {
      return 'error';
    }
  };

  const handleClick = () => {
    setTestObj({...testObj, selectedOption: ''});
    setIsCorrect(false);
    setIsOptionDisabled(false);
    setIsClicked(true);
    generateRandomWord();
  };

  const getOptions = () => {
    const allMeanings = dictionary.map(word => word.meaning);
    const shuffledMeanings = shuffleArray(allMeanings);
    const filteredMeanings = shuffledMeanings.filter(
      meaning => meaning !== testObj.meaning,
    );
    const randomOptions = filteredMeanings.slice(0, 3);
    const newOptions = [...randomOptions, testObj.meaning];
    const shuffledOptions = shuffleArray(newOptions);
    setTestObj({...testObj, options: shuffledOptions});
  };

  const isGoBack = () => {
    setIsClicked(false);
  };

  useEffect(() => {
    getOptions();
  }, [testObj.meaning]);

  const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    if (testObj.score === 10) {
      setIsModalVisible(true);
    }
  }, [testObj.score]);

  const handleAnswer = (selectedAnswer: string) => {
    setIsOptionDisabled(true);
    setTestObj({...testObj, selectedOption: selectedAnswer});
    if (selectedAnswer === testObj.meaning) {
      setIsCorrect(true);
      setTestObj({...testObj, score: testObj.score + 1});
    } else {
      setIsModalVisible(!isModalVisible);
    }
  };
  console.log(testObj.score);
  return (
    <PageHeader title="Test Room" variant="PRIMARY" goBack={isGoBack}>
      <ScrollView>
        <ScreenWrapper>
          <View>
            {isClicked ? (
              <View
                style={[
                  styles.container,
                  isModalVisible && styles.modalOpenContainer,
                ]}>
                <View style={styles.testContainer}>
                  <View style={styles.questionContainer}>
                    <Text style={styles.question}>
                      What is the meaning of the word "
                      <Text style={[styles.question, styles.word]}>
                        {testObj.word}
                      </Text>
                      " ?
                    </Text>
                    <Spacer />
                  </View>
                  <Spacer space={20} />
                  <View>
                    {testObj.options?.map((item: string, index: number) => {
                      return (
                        <TouchableOpacity
                          disabled={isOptionDisabled}
                          key={index}
                          onPress={() => handleAnswer(item)}
                          style={[
                            styles.optionConainer,
                            isCorrect &&
                              item === testObj.meaning &&
                              styles.rightOptionContainer,
                            !isCorrect &&
                              isOptionDisabled &&
                              testObj.selectedOption === item &&
                              styles.wrongOptionContainer,
                            !isCorrect &&
                              isOptionDisabled &&
                              item === testObj.meaning &&
                              styles.rightOptionContainer,
                          ]}>
                          <Text style={styles.optionText}>{item}</Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                  <Spacer />
                </View>
              </View>
            ) : (
              <Image
                source={require('../../assets/images/quiz.jpg')}
                style={styles.vectorImage}
              />
            )}
            <Spacer space={30} />
          </View>
        </ScreenWrapper>
      </ScrollView>
      <View style={styles.paddingHorizontal}>
        {!isClicked ? (
          <Button
            label="Generate Question"
            variant="PRIMARY"
            onClick={handleClick}
          />
        ) : (
          <Button
            variant={testObj.meaning !== '' ? 'PRIMARY' : 'DISABLED'}
            label="NEXT"
            onClick={handleClick}
          />
        )}
      </View>
      <Spacer space={20} />
      <ModalPopup isVisible={isModalVisible} setIsVisible={setIsModalVisible}>
        {testObj.score === 10 ? (
          <View>
            <Text style={styles.score}>Congratulations 🎉</Text>
            <Text style={styles.scoreText}>You have nailed it!</Text>
          </View>
        ) : (
          <Text style={styles.scoreText}>
            Your score is{' '}
            <Text style={[styles.scoreText, styles.score]}>
              {testObj.score}
            </Text>
          </Text>
        )}
        <Spacer space={20} />
        {testObj.score < 5 ? (
          <TouchableOpacity
            style={styles.tryAgainButton}
            onPress={() => {
              setIsClicked(false);
              setIsModalVisible(false);
              setTestObj({...testObj, score: 0});
            }}>
            <Text style={styles.tryAgainText}>Try Again!</Text>
          </TouchableOpacity>
        ) : testObj.score < 10 && testObj.score > 5 ? (
          <TouchableOpacity
            style={styles.tryAgainButton}
            onPress={() => {
              setIsClicked(false);
              setIsModalVisible(false);
              setTestObj({...testObj, score: 0});
            }}>
            <Text style={styles.tryAgainText}>Cool! Try Again!</Text>
          </TouchableOpacity>
        ) : (
          testObj.score === 10 && (
            <TouchableOpacity
              style={styles.tryAgainButton}
              onPress={() => {
                setIsClicked(false);
                setIsModalVisible(false);
                setTestObj({...testObj, score: 0});
              }}>
              <Text style={styles.tryAgainText}>Restart!</Text>
            </TouchableOpacity>
          )
        )}
      </ModalPopup>
      {testObj.score === 10 && (
        <ConfettiCannon count={200} origin={{x: -10, y: 0}} />
      )}
    </PageHeader>
  );
};

export default TestRoom;
