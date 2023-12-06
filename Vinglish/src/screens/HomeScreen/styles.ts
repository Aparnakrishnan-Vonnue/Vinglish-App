import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes/colors';
import {DefaultFontFamily, FONTSIZES, FONTWEIGHTS} from '../../themes/font';

export const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  imageContainer: {
    marginTop: 200,
  },
  image: {
    width: '100%',
    height: 300,
    opacity: 0.5,
  },
  screenWrapper: {
    backgroundColor: COLORS.tertiary,
  },
  wordText: {
    fontSize: FONTSIZES.subheading,
    fontFamily: DefaultFontFamily,
    fontWeight: FONTWEIGHTS.bold,
    color: COLORS.text.primary,
  },
  partsOfSpeech: {
    fontStyle: 'italic',
    fontSize: FONTSIZES.md,
    color: COLORS.action.tertiary,
  },
  titleText: {
    color: COLORS.text.primary,
    fontSize: FONTSIZES.md,
    fontWeight: FONTWEIGHTS.bold,
    fontFamily: DefaultFontFamily,
  },
  descriptionText: {
    fontWeight: FONTWEIGHTS.regular,
  },
  textContainer: {
    marginVertical: 5,
  },
});
