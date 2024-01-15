import React, {useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
import {ModalPopup} from '../../../QuizRoom/components/Modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FONTSIZES} from '../../../../themes/font';

interface GameCardProps {
  title?: string;
  description?: string;
  imageUrl: ImageSourcePropType;
  onpress: () => void;
}

export const GameCard = ({
  title,
  description,
  imageUrl,
  onpress,
}: GameCardProps) => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  return (
    <TouchableOpacity style={styles.gameCardContainer} onPress={onpress}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text numberOfLines={3} style={styles.description}>
          {description}
        </Text>
        <Text
          onPress={() => setIsModalVisible(!isModalVisible)}
          style={styles.readMoreText}>
          Read More
        </Text>
      </View>
      <Image source={imageUrl} style={styles.imageStyle} />
      <ModalPopup isVisible={!isModalVisible} setIsVisible={setIsModalVisible}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Icon
            name="close"
            size={FONTSIZES.md}
            style={styles.closeIcon}
            onPress={() => setIsModalVisible(!isModalVisible)}
          />
          <Text>{description}</Text>
        </ScrollView>
      </ModalPopup>
    </TouchableOpacity>
  );
};
