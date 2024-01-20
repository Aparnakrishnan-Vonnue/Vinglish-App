import {Text, TouchableOpacity, View} from 'react-native';
import {ModalPopup} from '../../screens/QuizRoom/components/Modal';
import React, {SetStateAction} from 'react';
import {styles} from './style';

interface CertainityPopUpProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<SetStateAction<boolean>>;
  purpose: string;
  onYesClick: () => void;
  onNoClick: () => void;
}

export const CertainityPopUp = ({
  isVisible,
  setIsVisible,
  purpose,
  onYesClick,
  onNoClick,
}: CertainityPopUpProps) => {
  return (
    <ModalPopup isVisible={isVisible} setIsVisible={setIsVisible}>
      <View style={styles.popUpContainer}>
        <Text style={styles.certainityText}>
          Are you sure, you want to {purpose} ?
        </Text>
        <View style={styles.pressablesContainer}>
          <TouchableOpacity style={styles.button} onPress={onYesClick}>
            <Text style={styles.yesOrNoText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onNoClick}>
            <Text style={styles.yesOrNoText}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ModalPopup>
  );
};
