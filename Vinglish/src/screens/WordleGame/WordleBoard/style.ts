import {StyleSheet} from 'react-native';
import {COLORS} from '../../../themes/colors';
import {FONTSIZES, FONTWEIGHTS} from '../../../themes/font';

export const styles = StyleSheet.create({
  boardContainer: {
    flexDirection: 'column',
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: COLORS.action.tertiary,
    color: COLORS.text.secondary,
    textAlign: 'center',
    fontSize: FONTSIZES.xxxl,
    fontWeight: FONTWEIGHTS.bold,
    borderRadius: 10,
    elevation: 10,
    borderTopWidth: 3,
    borderRightWidth: 3,
  },
  squareIfCorrect: {
    backgroundColor: COLORS.action.success,
    transform: [{rotate: '45 deg'}],
  },
  squareIfIncluded: {
    backgroundColor: COLORS.action.quarternary,
  },
  squareValue: {
    color: COLORS.text.primary,
    fontSize: FONTSIZES.lg,
  },
});
