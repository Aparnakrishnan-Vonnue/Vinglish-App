import {StyleSheet} from 'react-native';
import {FONTSIZES} from '../../themes/font';
import {COLORS} from '../../themes/colors';

export const styles = StyleSheet.create({
  linearGradient: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  gameContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  gameTitle: {
    fontSize: FONTSIZES.subheading,
    color: COLORS.text.primary,
  },
});
