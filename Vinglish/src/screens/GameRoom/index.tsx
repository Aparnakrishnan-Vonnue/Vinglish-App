import React from 'react';
import {ScrollView, StatusBar} from 'react-native';
import {PageHeader} from '../../components/PageHeader';
import {GameCard} from './Components/GameCard';
import {gameCardData} from '../../data';
import ScreenWrapper from '../../components/ScreenWrapper';
import {styles} from './style';
import Spacer from '../../components/Spacer';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../themes/colors';

export const GameRoom = () => {
  const navigation = useNavigation();
  return (
    <PageHeader title="Game Room" variant="PRIMARY">
      <StatusBar backgroundColor={COLORS.primary} />
      <Spacer space={22} />
      <ScreenWrapper style={styles.screenWrapper}>
        <ScrollView>
          {gameCardData.map(data => (
            <GameCard
              title={data.title}
              description={data.description}
              imageUrl={data.imageUrl}
              onpress={() => navigation.navigate('HANGMAN')}
              key={data.title}
            />
          ))}
        </ScrollView>
      </ScreenWrapper>
    </PageHeader>
  );
};
