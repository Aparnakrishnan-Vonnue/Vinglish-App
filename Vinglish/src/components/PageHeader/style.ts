import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes/colors';
import {FONTSIZES} from '../../themes/font';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerPrimary: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingRight: 26,
  },
  headerSecondary: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.text.primary,
    paddingVertical: 12,
    paddingRight: 26,
  },
  leadingButton: {
    width: 24,
    height: 24,
    marginLeft: 14,
  },
  title: {
    color: COLORS.secondary,
    fontSize: FONTSIZES.lg,
    paddingRight: 26,
    width: '100%',
    fontFamily: 'Outfit-Bold',
    textAlign: 'center',
  },
});
