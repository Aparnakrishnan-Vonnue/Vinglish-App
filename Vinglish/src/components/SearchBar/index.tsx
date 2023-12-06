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
}

const SearchBarComponent = ({onChange, value, placeholder}: SearchProps) => {
  return (
    <View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
        />
        <TouchableOpacity style={styles.searchIconContainer}>
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
