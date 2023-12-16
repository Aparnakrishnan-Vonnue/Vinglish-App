import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes/colors';
import {FONTSIZES, FONTWEIGHTS} from '../../themes/font';

export const styles = StyleSheet.create({
  searchContainer: {
    paddingVertical: 12,
  },
  image: {
    width: '100%',
    height: 300,
    opacity: 0.3,
    marginTop: 180,
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
});
