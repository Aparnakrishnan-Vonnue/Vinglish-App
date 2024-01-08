import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.action.quarternary,
    marginHorizontal: 50,
  },
  tab: {
    paddingVertical: 10,
  },
  tabText: {},
});
