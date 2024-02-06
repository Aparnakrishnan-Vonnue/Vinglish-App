import {StyleSheet} from 'react-native';
import {COLORS} from '../../../themes/colors';
import {FONTSIZES} from '../../../themes/font';

export const styles = StyleSheet.create({
  keypadContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyboardRow: {
    flexDirection: 'row',
  },
  keys: {
    padding: 12,
    margin: 2,
    backgroundColor: '#B2BEB5',
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
