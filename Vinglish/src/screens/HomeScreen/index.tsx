import React, {useEffect} from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import Button from '../../components/Button';
import ScreenWrapper from '../../components/ScreenWrapper';
import {styles} from './styles';
import BottomSheet from '../../components/BottomSheet';
import {useState} from 'react';
import {dictionary} from '../../data';
import Spacer from '../../components/Spacer';
import {COLORS} from '../../themes/colors';

interface Dictionary {
  word: string;
  meaning: string;
  synonyms: string;
  usage: string;
  partsOfSpeech: string;
}

const HomeScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondaryModalOpen, setIsSecondaryModalOpen] = useState(false);
  const [currentWordObj, setCurrentWordObj] = useState<Dictionary>({
    word: '',
    meaning: '',
    synonyms: '',
    usage: '',
    partsOfSpeech: '',
  });
  const [appearedWords, setAppearedWords] = useState<string[]>([]);

  useEffect(() => setAppearedWords([]), []);

  const getRandomWord = () => {
    let unappearedWords = dictionary.filter(
      word => !appearedWords.includes(word.word),
    );

    if (unappearedWords.length === 0) {
      setAppearedWords([]);
      unappearedWords = dictionary;
    }
    const randomIndex = Math.floor(Math.random() * unappearedWords.length);
    const randomWord = unappearedWords[randomIndex];
    setAppearedWords([...appearedWords, randomWord.word]);
    return randomWord;
  };

  const handleClick = () => {
    setIsModalOpen(true);
    setCurrentWordObj(getRandomWord());
  };

  const handleMeaningBtnClick = () => {
    setIsSecondaryModalOpen(true);
  };

  return (
    <ScreenWrapper style={styles.screenWrapper}>
      <StatusBar backgroundColor={COLORS.text.secondary} />
      <Text style={styles.headerTitle}>VINGLISH</Text>
      <Spacer />
      <View>
        <Image
          source={require('../../assets/images/books.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button label="Generate Word" variant="PRIMARY" onClick={handleClick} />
        {/* <Button
          label="Generate Meaning"
          variant="SECONDARY"
          onClick={handleMeaningBtnClick}
        /> */}
      </View>
      <BottomSheet isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        {currentWordObj && (
          <View>
            <Text style={styles.wordText}>{currentWordObj?.word}</Text>
            <Spacer space={18} />
            <Text style={styles.partsOfSpeech}>
              {currentWordObj?.partsOfSpeech}
            </Text>
            <Text style={styles.textContainer}>
              <Text style={styles.titleText}>meaning: </Text>
              <Text style={[styles.titleText, styles.descriptionText]}>
                {currentWordObj?.meaning}
              </Text>
            </Text>
            <Text style={styles.textContainer}>
              <Text style={styles.titleText}>synonyms: </Text>
              <Text style={[styles.titleText, styles.descriptionText]}>
                {currentWordObj?.synonyms}
              </Text>
            </Text>
            <Text style={styles.textContainer}>
              <Text style={styles.titleText}>usage: </Text>
              <Text style={[styles.titleText, styles.descriptionText]}>
                {currentWordObj?.usage}
              </Text>
            </Text>
          </View>
        )}
        <Spacer space={22} />
        <Button
          variant="SECONDARY"
          label="Got it !"
          onClick={() => setIsModalOpen(false)}
        />
      </BottomSheet>
    </ScreenWrapper>
  );
};

export default HomeScreen;
