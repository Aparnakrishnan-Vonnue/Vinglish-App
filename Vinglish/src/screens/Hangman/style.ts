import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes/colors';
import {FONTSIZES, FONTWEIGHTS} from '../../themes/font';

export const styles = StyleSheet.create({
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
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: COLORS.action.yellowPrimary,
  },
  playAgainButton: {
    width: 150,
  },
  playAgainButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quitButtonContainer: {
    height: 600,
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
    height: 700,
  },
});
