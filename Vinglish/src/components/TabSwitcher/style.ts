import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes/colors';
import {FONTSIZES, FONTWEIGHTS} from '../../themes/font';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.action.quarternary,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  tab: {
    paddingVertical: 12,
    marginVertical: 5,
    paddingHorizontal: 40,
    width: '50%',
  },
  tabText: {
    color: COLORS.text.primary,
    fontWeight: FONTWEIGHTS.regular,
    fontSize: FONTSIZES.md,
    textAlign: 'center',
  },
  activeTab: {
    backgroundColor: COLORS.text.secondary,
    marginVertical: 2,
    width: '50%',
    borderRadius: 10,
  },
  activeTabText: {
    textAlign: 'center',
  },
});
