import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes/colors';
import {FONTSIZES, FONTWEIGHTS} from '../../themes/font';

export const styles = StyleSheet.create({
  themeContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    opacity: 0.2,
    height: 500,
    width: 500,
  },
  hangmanText: {
    color: COLORS.text.primary,
    fontSize: FONTSIZES.header,
    fontWeight: FONTWEIGHTS.bold,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  opacity: {
    opacity: 0.2,
  },
  gameContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: COLORS.action.yellowPrimary,
    borderRadius: 8,
    elevation: 5,
  },
  playText: {
    color: COLORS.text.primary,
    fontSize: FONTSIZES.lg,
    textAlign: 'center',
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
  hungText: {
    textAlign: 'center',
    padding: 20,
    marginBottom: 15,
    fontSize: FONTSIZES.header,
    color: COLORS.action.yellowPrimary,
    fontWeight: FONTWEIGHTS.bold,
  },
  wonText: {
    fontSize: FONTSIZES.subtitle,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  startGameContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
