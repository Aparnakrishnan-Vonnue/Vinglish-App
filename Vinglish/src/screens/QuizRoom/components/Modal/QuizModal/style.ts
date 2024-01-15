import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../../themes/colors';
import {FONTSIZES, FONTWEIGHTS} from '../../../../../themes/font';

export const styles = StyleSheet.create({
  tryAgainButton: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    backgroundColor: COLORS.action.quarternary,
    borderColor: COLORS.action.quarternary,
  },
  tryAgainText: {color: COLORS.text.primary, fontSize: FONTSIZES.md},
  scoreText: {
    fontSize: FONTSIZES.lg,
    color: COLORS.text.primary,
  },
  score: {
    fontWeight: FONTWEIGHTS.bold,
  },
});
