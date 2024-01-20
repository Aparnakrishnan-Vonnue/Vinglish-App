import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes/colors';
import {FONTSIZES} from '../../themes/font';

export const styles = StyleSheet.create({
  popUpContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 30,
  },
  pressablesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 50,
    backgroundColor: COLORS.action.tertiary,
  },
  certainityText: {
    color: COLORS.text.primary,
    fontSize: FONTSIZES.md,
  },
  yesOrNoText: {
    textAlign: 'center',
    color: COLORS.text.secondary,
  },
});
