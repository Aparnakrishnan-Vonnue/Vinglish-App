import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FONTSIZES} from '../../../themes/font';
import {useState} from 'react';
import {COLORS} from '../../../themes/colors';

interface SquareProps {
  onSquareClick?: () => void;
  value: string;
}

interface BoardProps {
  isNextPlayer?: boolean;
  onPlay?: any;
}

const Square = ({value, onSquareClick}: SquareProps) => {
  return (
    <TouchableOpacity style={styles.square} onPress={onSquareClick}>
      <Text style={styles.squareValue}>{value}</Text>
    </TouchableOpacity>
  );
};

export const Board = ({isNextPlayer, onPlay}: BoardProps) => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i: number) => {
    const nextSquares = squares.slice();
    nextSquares[i] = 'X';
    setSquares(nextSquares);
  };

  return (
    <View style={styles.ticTacToeBoard}>
      <View style={styles.singleRow}>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </View>
      <View style={styles.singleRow}>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </View>
      <View style={styles.singleRow}>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
