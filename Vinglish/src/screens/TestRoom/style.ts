import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes/colors';
import {FONTSIZES, FONTWEIGHTS} from '../../themes/font';

export const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: COLORS.action.secondary,
    marginVertical: 50,
  },
  testContainer: {
    padding: 20,
  },
  questionContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 30,
  },
  question: {
    fontSize: FONTSIZES.md,
    fontWeight: FONTWEIGHTS.medium,
    color: COLORS.action.tertiary,
  },
  word: {
    color: COLORS.text.primary,
    fontWeight: FONTWEIGHTS.semibold,
  },
  answerInput: {
    borderColor: COLORS.border.secondary,
    borderWidth: 2,
    padding: 80,
    borderRadius: 10,
  },
  boldText: {
    fontWeight: FONTWEIGHTS.bold,
  },
});
