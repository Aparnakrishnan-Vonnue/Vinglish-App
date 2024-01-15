import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../themes/colors';
import {DefaultFontFamily, FONTSIZES} from '../../../../themes/font';

export const styles = StyleSheet.create({
  imageStyle: {
    width: 100,
    height: 100,
    position: 'absolute',
    borderRadius: 10,
    bottom: 50,
  },
  gameCardContainer: {
    backgroundColor: COLORS.action.quarternary,
    position: 'relative',
    borderRadius: 10,
    marginTop: 20,
  },
  textContainer: {
    marginLeft: 100,
    padding: 20,
  },
  title: {
    color: COLORS.text.secondary,
    fontSize: FONTSIZES.subtitle,
    fontFamily: DefaultFontFamily,
  },
  description: {
    color: COLORS.text.secondary,
  },
  readMoreText: {
    color: COLORS.text.secondary,
    textAlign: 'right',
    fontSize: 13,
    textDecorationLine: 'underline',
  },
  closeIcon: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    padding: 5,
  },
});
