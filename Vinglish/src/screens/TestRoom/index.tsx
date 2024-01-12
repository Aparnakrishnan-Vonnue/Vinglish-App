import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {PageHeader} from '../../components/PageHeader';
import Button from '../../components/Button';
import {styles} from './style';
import ScreenWrapper from '../../components/ScreenWrapper';
import Spacer from '../../components/Spacer';
import {dictionary} from '../../data';

const TestRoom = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [testObj, setTestObj] = useState<any>({
    meaning: '',
    word: '',
    options: [],
    isCorrect: false,
    isWrong: false,
    score: 0,
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
        score: testObj.score + 1,
      });
    } else {
      return 'error';
    }
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
    generateRandomWord();
  };

  const getOptions = () => {
    const allMeanings = dictionary.map(word => word.meaning);
    const shuffledMeanings = shuffleArray(allMeanings);
    const randomOptions = shuffledMeanings.slice(0, 3);
    const newOptions = [...randomOptions, testObj.meaning];
    const shuffledOptions = shuffleArray(newOptions);
    setTestObj({...testObj, options: shuffledOptions});
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

  const handleAnswer = (selectedAnswer: string) => {
    if (testObj.meaning === selectedAnswer) {
      setTestObj({
        ...testObj,
        isCorrect: true,
        answer: selectedAnswer,
      });
    } else {
      setTestObj({
        ...testObj,
        isWrong: true,
        answer: selectedAnswer,
      });
    }
  };

  return (
    <PageHeader title="Test Room" variant="PRIMARY">
      <ScrollView>
        <ScreenWrapper>
          <View>
            {isClicked ? (
              <View style={styles.container}>
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
                          key={index}
                          onPress={() => handleAnswer(item)}
                          style={[
                            styles.optionConainer,
                            testObj.isCorrect &&
                              item === testObj.meaning &&
                              styles.rightOptionContainer,
                            testObj.isWrong &&
                              item === testObj.answer &&
                              styles.wrongOptionContainer,
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
            onClick={() => console.log('')}
          />
        )}
      </View>
      <Spacer space={20} />
    </PageHeader>
  );
};

export default TestRoom;
