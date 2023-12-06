import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes/colors';

export const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  searchIcon: {
    position: 'absolute',
    right: 20,
  },
  searchIconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {},
  textInput: {
    borderWidth: 2,
    borderColor: COLORS.primary,
    width: '100%',
    position: 'relative',
    borderRadius: 50,
    paddingLeft: 20,
  },
  inputText: {},
});
