import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FONTSIZES} from '../../themes/font';
import {COLORS} from '../../themes/colors';
import {styles} from './style';

interface SearchProps {
  onChange: (value: string) => void;
  value: string;
  placeholder?: string;
  onPress: () => void;
}

const SearchBarComponent = ({
  onChange,
  onPress,
  value,
  placeholder,
}: SearchProps) => {
  return (
    <View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={COLORS.action.tertiary}
        />
        <TouchableOpacity style={styles.searchIconContainer} onPress={onPress}>
          <Icon
            name="search"
            size={FONTSIZES.lg}
            color={COLORS.primary}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBarComponent;
