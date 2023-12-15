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
  // inputQuery: {
  //   textAlign: 'center',
  //   fontFamily: DefaultFontFamily,
  //   fontSize: FONTSIZES.subheading,
  // },
  phonetic: {
    fontStyle: 'italic',
  },
  definitionContainer: {
    // backgroundColor: COLORS.tertiary,
    padding: 5,
    color: COLORS.text.primary,
    borderRadius: 8,
  },
  definition: {
    fontSize: FONTSIZES.lg,
    fontWeight: FONTWEIGHTS.regular,
  },
  example: {
    fontSize: FONTSIZES.lg,
    fontWeight: FONTWEIGHTS.regular,
  },
  synonym: {
    marginLeft: 7,
  },
});
