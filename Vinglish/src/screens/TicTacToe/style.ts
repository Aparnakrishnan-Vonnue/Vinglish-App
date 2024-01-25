import {StyleSheet} from 'react-native';
import {FONTSIZES, FONTWEIGHTS} from '../../themes/font';
import {COLORS} from '../../themes/colors';

export const styles = StyleSheet.create({
  linearGradient: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  gameContainer: {
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
  },
  gameTitle: {
    fontSize: FONTSIZES.subheading,
    color: COLORS.text.primary,
  },
  ticTacToeBoard: {
    flexDirection: 'column',
  },
  singleRow: {
    flexDirection: 'row',
  },
  square: {
    borderWidth: 1,
    paddingVertical: 30,
    paddingHorizontal: 35,
    width: 100,
    borderColor: COLORS.text.primary,
  },
  squareValue: {
    fontSize: FONTSIZES.xxxl,
  },
  winnerText: {
    fontSize: FONTSIZES.lg,
    color: COLORS.text.primary,
    fontWeight: FONTWEIGHTS.bold,
  },
  close: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    padding: 5,
  },
  modal: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: COLORS.linearGradients.ticTacToe.secondary,
    padding: 10,
    borderRadius: 8,
  },
});
