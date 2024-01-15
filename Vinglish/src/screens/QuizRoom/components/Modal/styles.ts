import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../themes/colors';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.text.secondary,
    padding: 20,
    borderWidth: 1,
    marginHorizontal: 50,
    marginVertical: 300,
    borderColor: COLORS.tertiary,
    borderRadius: 10,
    elevation: 10,
  },
});
