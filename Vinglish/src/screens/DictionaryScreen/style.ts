import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes/colors';
import {
  DefaultSecondaryFontFamily,
  FONTSIZES,
  FONTWEIGHTS,
} from '../../themes/font';

export const styles = StyleSheet.create({
  searchContainer: {
    paddingVertical: 12,
  },
  imageContainer: {
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    opacity: 0.1,
    marginTop: 100,
  },
  errorMessage: {
    fontSize: FONTSIZES.heading,
    color: COLORS.text.error,
    opacity: 0.2,
    fontFamily: DefaultSecondaryFontFamily,
    fontWeight: FONTWEIGHTS.semibold,
    textAlign: 'center',
  },
  dataContainer: {
    marginTop: 30,
    display: 'flex',
    borderRadius: 8,
    marginInline: 20,
  },
  phonetic: {
    fontStyle: 'italic',
  },
  definitionContainer: {
    padding: 5,
    color: COLORS.text.primary,
    borderRadius: 8,
  },
  partOfSpeech: {
    color: COLORS.action.tertiary,
  },
  definition: {
    fontSize: FONTSIZES.lg,
    fontWeight: FONTWEIGHTS.regular,
    color: COLORS.action.tertiary,
  },
  example: {
    fontSize: FONTSIZES.lg,
    fontWeight: FONTWEIGHTS.regular,
    color: COLORS.action.tertiary,
  },
  synonym: {
    marginLeft: 7,
  },
  activityIndicator: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 500,
  },
  audioIcon: {
    padding: 10,
  },
});
