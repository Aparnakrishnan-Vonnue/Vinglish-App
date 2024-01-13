import React, {SetStateAction} from 'react';
import {Modal, View} from 'react-native';
import {styles} from './styles';

interface ModalPopupProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}

export const ModalPopup = ({
  isVisible,
  setIsVisible,
  children,
}: ModalPopupProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => setIsVisible}>
      <View style={styles.modalContainer}>{children}</View>
    </Modal>
  );
};
