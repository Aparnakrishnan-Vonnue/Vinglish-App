import React, {useEffect, useState} from 'react';
import ConfettiCannon from 'react-native-confetti-cannon';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {PageHeader} from '../../components/PageHeader';
import Button from '../../components/Button';
import {styles} from './style';
import ScreenWrapper from '../../components/ScreenWrapper';
import Spacer from '../../components/Spacer';
import {dictionary} from '../../data';
import {QuizModal} from './components/Modal/QuizModal';
import {shuffleArray} from '../../utils';

type QuizObj = {
  actualMeaning: string;
  word: string;
  options: string[];
  score: number;
  selectedOption: string;
};

const QuizRoom = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isOptionDisabled, setIsOptionDisabled] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);
  const [quizObj, setQuizObj] = useState<QuizObj>({
    actualMeaning: '',
    word: '',
    options: [],
    score: 0,
    selectedOption: '',
  });
  const [wrongGuessCount, setWrongGuessCount] = useState(0);
  const [rightGuessCount, setRightGuessCount] = useState(0);

  let wrongAnswers: string[] = [];

  const generateRandomWord = () => {
    let newWord =
      dictionary[Math.floor(Math.random() * dictionary.length)].word;
    const resultedData = dictionary.find(data => newWord === data.word);
    if (resultedData) {
      setQuizObj({
        ...quizObj,
        actualMeaning: resultedData.meaning,
        word: newWord,
      });
    } else {
      return 'error';
    }
  };

  const handleClick = () => {
    if (isNextButtonDisabled) {
      setIsModalVisible(true);
    }
    setQuizObj({...quizObj, selectedOption: ''});
    setIsCorrect(false);
    setIsOptionDisabled(false);
    setIsClicked(true);
    generateRandomWord();
  };

  const getOptions = () => {
    const allMeanings = dictionary.map(word => word.meaning);
    const shuffledMeanings = shuffleArray(allMeanings);
    const filteredMeanings = shuffledMeanings.filter(
      meaning => meaning !== quizObj.actualMeaning,
    );
    const randomOptions = filteredMeanings.slice(0, 3);
    const newOptions = [...randomOptions, quizObj.actualMeaning];
    const shuffledOptions = shuffleArray(newOptions);
    setQuizObj({...quizObj, options: shuffledOptions});
  };

  const isGoBack = () => {
    setIsClicked(false);
  };

  useEffect(() => {
    getOptions();
  }, [quizObj.actualMeaning]);

  useEffect(() => {
    if (quizObj.score === 10) {
      setIsModalVisible(true);
    }
  }, [quizObj.score]);

  const handleAnswer = (selectedAnswer: string) => {
    setIsOptionDisabled(true);
    setQuizObj({...quizObj, selectedOption: selectedAnswer});
    if (selectedAnswer === quizObj.actualMeaning) {
      setIsCorrect(true);
      setQuizObj({...quizObj, score: quizObj.score + 1});
      // setRightGuessCount(prev => prev + 1);
    } else {
      setIsNextButtonDisabled(true);
      // setWrongGuessCount(prev => prev + 1);
      // wrongAnswers.push(quizObj.word);
    }
  };

  // console.log(wrongAnswers);

  const handleResult = () => {
    setIsClicked(false);
    setIsModalVisible(false);
    setQuizObj({...quizObj, score: 0});
    setIsNextButtonDisabled(false);
  };

  const generateModalText = () => {
    if (quizObj.score < 10) {
      return 'Try Again!';
    } else {
      return 'Restart';
    }
  };

  return (
    <PageHeader title="Quiz Room" variant="PRIMARY" goBack={isGoBack}>
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
                        {quizObj.word}
                      </Text>
                      " ?
                    </Text>
                    <Spacer />
                  </View>
                  <Spacer space={20} />
                  <View>
                    {quizObj.options?.map((item: string, index: number) => {
                      return (
                        <TouchableOpacity
                          disabled={isOptionDisabled}
                          key={index}
                          onPress={() => handleAnswer(item)}
                          style={[
                            styles.optionConainer,
                            isCorrect &&
                              item === quizObj.actualMeaning &&
                              styles.rightOptionContainer,
                            !isCorrect &&
                              isOptionDisabled &&
                              quizObj.selectedOption === item &&
                              styles.wrongOptionContainer,
                            !isCorrect &&
                              isOptionDisabled &&
                              item === quizObj.actualMeaning &&
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
            variant={!isNextButtonDisabled ? 'PRIMARY' : 'TERTIARY'}
            label={!isNextButtonDisabled ? 'NEXT' : 'Show score'}
            onClick={handleClick}
          />
        )}
      </View>
      <Spacer space={20} />
      <QuizModal
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
        score={quizObj.score}
        text={generateModalText()}
        onPress={handleResult}
      />
      {quizObj.score === 10 && (
        <ConfettiCannon count={200} origin={{x: -10, y: 0}} />
      )}
    </PageHeader>
  );
};

export default QuizRoom;
