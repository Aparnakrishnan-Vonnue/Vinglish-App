import {useNavigation} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FONTSIZES} from '../../themes/font';
import {COLORS} from '../../themes/colors';

export enum PageHeaderVariant {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

interface PageHeaderProps {
  title?: string;
  leadingIcon?: 'back' | 'close';
  onLeadingIconClick?: () => void;
  variant?: keyof typeof PageHeaderVariant;
  goBack?: () => void;
}

export const PageHeader: React.FC<PropsWithChildren<PageHeaderProps>> = ({
  variant = PageHeaderVariant.PRIMARY,
  title,
  leadingIcon = 'back',
  onLeadingIconClick,
  children,
  goBack,
}) => {
  const navigate = useNavigation();
  const insets = useSafeAreaInsets();

  const getPageHeaderStyle = () => {
    switch (variant) {
      case PageHeaderVariant.PRIMARY:
        return styles.headerPrimary;
      case PageHeaderVariant.SECONDARY:
        return styles.headerSecondary;
    }
  };

  const getLeadingIcon = () => {
    if (leadingIcon === 'back') {
      return (
        <Icon name="angle-left" size={FONTSIZES.xl} color={COLORS.tertiary} />
      );
    }
    return <Icon name="close" size={FONTSIZES.xl} color={COLORS.tertiary} />;
  };
  const onLeadingButtonClick = () => {
    goBack?.();
    return onLeadingIconClick ? onLeadingIconClick : navigate.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[getPageHeaderStyle(), {paddingTop: insets.top + 40}]}
        onPress={onLeadingButtonClick}>
        <Pressable style={styles.leadingButton} onPress={onLeadingButtonClick}>
          {getLeadingIcon()}
        </Pressable>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      {children}
    </View>
  );
};
