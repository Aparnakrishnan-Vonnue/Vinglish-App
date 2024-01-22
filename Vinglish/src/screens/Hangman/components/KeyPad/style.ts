import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../themes/colors';
import {FONTSIZES} from '../../../../themes/font';

export const styles = StyleSheet.create({
  keypadContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  keys: {
    padding: 15,
    margin: 2,
    backgroundColor: COLORS.text.secondary,
    borderRadius: 10,
    elevation: 50,
  },
  disabledKeys: {
    opacity: 0.2,
  },
  alphabets: {
    color: COLORS.text.primary,
    fontSize: FONTSIZES.lg,
  },
});
