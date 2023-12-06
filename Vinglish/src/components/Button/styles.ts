import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes/colors';
import {FONTSIZES, FONTWEIGHTS} from '../../themes/font';

export const styles = StyleSheet.create({
  basicStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 36,
    paddingVertical: 18,
  },
  buttonPrimary: {
    backgroundColor: COLORS.action.primary,
  },
  buttonSecondary: {
    backgroundColor: COLORS.action.quarternary,
  },
  ghostButton: {
    borderColor: COLORS.border.secondary,
    borderWidth: 2,
  },
  disabledButton: {
    backgroundColor: COLORS.action.tertiary,
    color: COLORS.text.primary,
    opacity: 0.5,
  },

  //Button text styles
  basicButtonTextStyle: {
    fontSize: FONTSIZES.lg,
    fontWeight: FONTWEIGHTS.regular,
  },
  buttonTextPrimary: {
    color: COLORS.text.secondary,
  },
  buttonTextSecondary: {
    color: COLORS.text.primary,
  },
  ghostButtonText: {
    color: COLORS.text.primary,
  },
  disabledButtonText: {
    color: COLORS.text.primary,
    opacity: 0.5,
  },
});
