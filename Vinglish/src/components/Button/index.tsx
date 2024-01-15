import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../themes/colors';

export type ButtonVariant =
  | 'PRIMARY'
  | 'SECONDARY'
  | 'TERTIARY'
  | 'GHOST'
  | 'DISABLED';

interface ButtonProps {
  label: string;
  variant: ButtonVariant;
  onClick: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
}
const Button = ({
  variant,
  label,
  onClick,
  isLoading,
  isDisabled,
}: ButtonProps) => {
  const getButtonStyles = () => {
    switch (variant) {
      case 'PRIMARY':
        return styles.buttonPrimary;
      case 'SECONDARY':
        return styles.buttonSecondary;
      case 'TERTIARY':
        return styles.buttonTertiary;
      case 'GHOST':
        return styles.ghostButton;
      case 'DISABLED':
        return styles.disabledButton;
      default:
        return styles.buttonPrimary;
    }
  };

  const getButtonTextStyles = () => {
    switch (variant) {
      case 'PRIMARY':
        return styles.buttonTextPrimary;
      case 'SECONDARY':
        return styles.buttonTextSecondary;
      case 'TERTIARY':
        return styles.buttonTextTertiary;
      case 'GHOST':
        return styles.ghostButtonText;
      case 'DISABLED':
        return styles.disabledButtonText;
    }
  };
  const buttonStyle = [styles.basicStyle, getButtonStyles()];
  const buttonTextStyle = [styles.basicButtonTextStyle, getButtonTextStyles()];

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onClick}
      disabled={isDisabled}>
      <View>
        {isLoading ? (
          <ActivityIndicator color={COLORS.primary} size={'small'} />
        ) : (
          <Text style={buttonTextStyle}>{label}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
