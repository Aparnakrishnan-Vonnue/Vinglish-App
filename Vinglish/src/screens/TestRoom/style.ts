import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes/colors';
import {FONTSIZES, FONTWEIGHTS} from '../../themes/font';

export const styles = StyleSheet.create({
  container: {
    height: 600,
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
  boldText: {
    fontWeight: FONTWEIGHTS.bold,
  },
  optionConainer: {
    marginTop: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS.action.primary,
  },
  rightOptionContainer: {
    backgroundColor: COLORS.action.success,
  },
  wrongOptionContainer: {
    backgroundColor: COLORS.action.error,
  },
  optionText: {
    color: COLORS.text.secondary,
    fontSize: FONTSIZES.md,
  },
  paddingHorizontal: {
    paddingHorizontal: 20,
  },
  vectorImage: {
    width: '100%',
    height: 400,
    opacity: 0.2,
    marginTop: 100,
  },
});
