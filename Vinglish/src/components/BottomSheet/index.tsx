import React from 'react';
import {PropsWithChildren} from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import {styles} from './style';

interface BottomSheetProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading?: boolean;
}

const BottomSheet: React.FC<PropsWithChildren<BottomSheetProps>> = ({
  children,
  isOpen,
  setIsOpen,
}) => {
  return (
    <Modal
      onBackdropPress={() => setIsOpen(false)}
      onBackButtonPress={() => setIsOpen(false)}
      isVisible={isOpen}
      swipeDirection="down"
      onSwipeComplete={() => setIsOpen(false)}
      animationIn="bounceInUp"
      animationOut="bounceOutDown"
      animationInTiming={1400}
      animationOutTiming={900}
      backdropTransitionInTiming={1000}
      hideModalContentWhileAnimating={true}
      useNativeDriver={true}
      style={styles.modal}>
      <View style={styles.contentContainer}>{children}</View>
    </Modal>
  );
};

export default BottomSheet;
