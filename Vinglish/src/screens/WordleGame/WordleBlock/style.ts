import {StyleSheet} from 'react-native';
import {COLORS} from '../../../themes/colors';
import {FONTSIZES, FONTWEIGHTS} from '../../../themes/font';

export const styles = StyleSheet.create({
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
    width: 60,
  },
  squareIfCorrect: {
    backgroundColor: COLORS.action.success,
    transform: [{rotate: '45 deg'}],
  },
  squareIfIncluded: {
    backgroundColor: COLORS.action.quarternary,
  },
  squareValue: {
    color: COLORS.text.secondary,
    fontSize: FONTSIZES.xxl,
    fontWeight: FONTWEIGHTS.bold,
  },
});
