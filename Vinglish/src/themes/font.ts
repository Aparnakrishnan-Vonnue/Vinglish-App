export const DefaultFontFamily = 'Outfit-Regular';
export const DefaultSecondaryFontFamily = 'Outfit';

export const FONTSIZES = {
  xxs: 10,
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 22,
  xxxl: 24,
  subtitle: 28,
  subheading: 32,
  heading: 40,
  header: 48,
  title: 56,
};

export const LINEHEIGHTS = {
  xxs: 16,
  xs: 18,
  sm: 20,
  md: 22,
  lg: 24,
  xl: 28,
  xxl: 30,
  xxxl: 32,
};

export type TFontWeight = Record<
  string,
  '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
>;

export const FONTWEIGHTS: TFontWeight = {
  thin: '100',
  extraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extraBold: '800',
  black: '900',
};
