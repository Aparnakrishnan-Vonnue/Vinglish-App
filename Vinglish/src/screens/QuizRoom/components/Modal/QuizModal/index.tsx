import React, {SetStateAction} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ModalPopup} from '..';
import {styles} from './style';
import Spacer from '../../../../../components/Spacer';

interface QuizModalProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<SetStateAction<boolean>>;
  score: number;
  text: string;
  onPress: () => void;
}

export const QuizModal = ({
  isVisible,
  setIsVisible,
  score,
  text,
  onPress,
}: QuizModalProps) => {
  return (
    <ModalPopup isVisible={isVisible} setIsVisible={setIsVisible}>
      {score === 10 ? (
        <View>
          <Text style={styles.score}>Congratulations 🎉</Text>
          <Text style={styles.scoreText}>Your score is 10 / 10</Text>
        </View>
      ) : (
        <Text style={styles.scoreText}>
          Your score is{' '}
          <Text style={[styles.scoreText, styles.score]}>{score} / 10</Text>
        </Text>
      )}
      <Spacer space={20} />
      <TouchableOpacity style={styles.tryAgainButton} onPress={onPress}>
        <Text style={styles.tryAgainText}>{text}</Text>
      </TouchableOpacity>
    </ModalPopup>
  );
};
