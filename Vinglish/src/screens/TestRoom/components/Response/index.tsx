import React from 'react';
import {Text, View} from 'react-native';

interface ResponseProps {
  title: string;
  icon?: React.ReactSVGElement;
}

export const Response = ({title}: ResponseProps) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};
