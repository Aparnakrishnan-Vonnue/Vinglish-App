import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes/colors';
import {FONTSIZES} from '../../themes/font';

export const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  gameContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#F99417',
  },
  playText: {
    color: COLORS.text.primary,
    fontSize: FONTSIZES.lg,
  },
  typePadContainer: {
    flexDirection: 'row',
    gap: 5,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  typePad: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.text.primary,
    padding: 10,
    fontSize: FONTSIZES.xxl,
    color: COLORS.text.secondary,
    textAlign: 'center',
  },
});
