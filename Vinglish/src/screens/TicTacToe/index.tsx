import {StatusBar, Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import {COLORS} from '../../themes/colors';
import {useState} from 'react';
import Spacer from '../../components/Spacer';
import Button from '../../components/Button';
import {ModalPopup} from '../QuizRoom/components/Modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FONTSIZES} from '../../themes/font';
import {useNavigation} from '@react-navigation/native';

interface SquareProps {
  onSquareClick?: () => void;
  value: string;
}

const Square = ({value, onSquareClick}: SquareProps) => {
  return (
    <TouchableOpacity style={styles.square} onPress={onSquareClick}>
      <Text style={styles.squareValue}>{value}</Text>
    </TouchableOpacity>
  );
};

function calculateWinner(squares: string | null[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    console.log(squares[a]);
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export const TicTacToeGame = () => {
  const [xIsNext, setXisNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleClick = (i: number) => {
    if (squares[i] || calculateWinner(squares)) {
      setIsModalVisible(true);
      return;
    }
    const nextSquares = squares.slice(); //creates a shallow copy of the array
    xIsNext ? (nextSquares[i] = 'X') : (nextSquares[i] = 'O');
    setSquares(nextSquares);
    setXisNext(!xIsNext);
  };

  return (
    <View>
      <StatusBar
        backgroundColor={COLORS.linearGradients.ticTacToe.quarternary}
      />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          name="home"
          size={FONTSIZES.xxxl}
          style={{
            padding: 10,
            backgroundColor: COLORS.linearGradients.ticTacToe.secondary,
          }}
        />
      </TouchableOpacity>
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
        <Spacer space={50} />
        <Spacer />
        <View style={styles.gameContainer}>
          <Spacer space={100} />
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
          <Spacer space={130} />
          <Button
            variant="QUARTERNARY"
            label="Restart"
            onClick={() => setSquares(Array(9).fill(null))}
          />
        </View>
        <ModalPopup isVisible={isModalVisible} setIsVisible={setIsModalVisible}>
          <View style={styles.modal}>
            <Text style={styles.winnerText}>
              The Winner is {calculateWinner(squares)}
            </Text>
            <Spacer space={30} />
            <TouchableOpacity
              onPress={() => setIsModalVisible(false)}
              style={styles.closeButton}>
              <Text>
                Close{' '}
                <Icon
                  name="close"
                  size={FONTSIZES.lg}
                  onPress={() => setIsModalVisible(false)}
                  style={styles.close}
                />
              </Text>
            </TouchableOpacity>
          </View>
        </ModalPopup>
      </LinearGradient>
    </View>
  );
};
