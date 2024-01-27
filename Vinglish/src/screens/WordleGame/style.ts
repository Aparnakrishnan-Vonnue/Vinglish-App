import {StyleSheet} from 'react-native';
import {FONTSIZES, FONTWEIGHTS} from '../../themes/font';
import {COLORS} from '../../themes/colors';

export const styles = StyleSheet.create({
  gameContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 20,
  },
  linearGradient: {
    paddingHorizontal: 20,
  },
  submitBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#6A9619',
    borderRadius: 8,
  },
  submitText: {
    fontSize: FONTSIZES.lg,
    color: COLORS.text.primary,
    fontWeight: FONTWEIGHTS.bold,
  },
});
