import {StatusBar, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import {Board} from './components/Board';
import {COLORS} from '../../themes/colors';
import {useState} from 'react';

export const TicTacToeGame = () => {
  const [history, setHistory] = useState(Array(9).fill(null));
  const [currentMove, setCurrentMove] = useState(0);
  const isNextPlayer = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  return (
    <View>
      <StatusBar
        backgroundColor={COLORS.linearGradients.ticTacToe.quarternary}
      />
      <LinearGradient
        colors={[
          COLORS.linearGradients.ticTacToe.primary,
          COLORS.linearGradients.ticTacToe.secondary,
          COLORS.linearGradients.ticTacToe.tertiary,
          COLORS.linearGradients.ticTacToe.quarternary,
        ]}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        style={styles.linearGradient}>
        <Text style={styles.gameTitle}>TIC TAC TOE</Text>
        <View style={styles.gameContainer}>
          <Board />
        </View>
      </LinearGradient>
    </View>
  );
};
