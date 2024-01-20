import React from 'react';
import {Svg, Line, Circle} from 'react-native-svg';

interface FigureProps {
  errors: number;
}
const Figure = ({errors}: FigureProps) => {
  return (
    <Svg style={{height: 300}}>
      <Line x1="60" y1="20" x2="140" y2="20" stroke="black" />
      <Line x1="140" y1="20" x2="140" y2="50" stroke="black" />
      <Line x1="60" y1="20" x2="60" y2="230" stroke="black" />
      <Line x1="20" y1="230" x2="100" y2="230" stroke="black" />

      {errors > 0 && <Circle cx="140" cy="70" r="20" fill="black" />}
      {errors > 1 && <Line x1="140" y1="90" x2="140" y2="150" stroke="black" />}
      {errors > 2 && (
        <Line x1="140" y1="120" x2="120" y2="100" stroke="black" />
      )}
      {errors > 3 && (
        <Line x1="140" y1="120" x2="160" y2="100" stroke="black" />
      )}
      {errors > 4 && (
        <Line x1="140" y1="150" x2="120" y2="180" stroke="black" />
      )}
      {errors > 5 && (
        <Line x1="140" y1="150" x2="160" y2="180" stroke="black" />
      )}
    </Svg>
  );
};

export default Figure;
