import React from 'react';
import {View} from 'react-native';

export interface SpacerProps {
  space?: number;
  direction?: 'horizontal' | 'vertical';
}

export default function Spacer(props: SpacerProps) {
  const {direction = 'vertical', space = 8} = props;

  return (
    <View
      style={{
        width: direction === 'horizontal' ? space : 0,
        height: direction === 'vertical' ? space : 0,
      }}
    />
  );
}
