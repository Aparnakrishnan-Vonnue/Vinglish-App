import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes/colors';
import {FONTSIZES} from '../../themes/font';

export const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  contentContainer: {
    backgroundColor: COLORS.secondary,
    paddingTop: FONTSIZES.title,
    paddingHorizontal: FONTSIZES.sm,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 20,
    minHeight: 300,
    paddingBottom: 20,
  },
});
