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
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: COLORS.action.tertiary,
    color: COLORS.text.secondary,
    textAlign: 'center',
    fontSize: FONTSIZES.xxxl,
    fontWeight: FONTWEIGHTS.bold,
  },
  squareValue: {
    color: COLORS.text.primary,
    fontSize: FONTSIZES.lg,
  },
});
