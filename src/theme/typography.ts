import { Platform, TextStyle } from 'react-native';

const fontFamily = Platform.select({
  ios: 'System',
  android: 'Roboto',
  web: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  default: 'System',
});

export const typography = {
  largeTitle: {
    fontFamily,
    fontSize: 42,
    fontWeight: '800',
    letterSpacing: -0.5,
    lineHeight: 48,
  } as TextStyle,

  title1: {
    fontFamily,
    fontSize: 34,
    fontWeight: '700',
    letterSpacing: -0.4,
    lineHeight: 40,
  } as TextStyle,

  title2: {
    fontFamily,
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: -0.3,
    lineHeight: 34,
  } as TextStyle,

  title3: {
    fontFamily,
    fontSize: 22,
    fontWeight: '600',
    letterSpacing: -0.2,
    lineHeight: 28,
  } as TextStyle,

  headline: {
    fontFamily,
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: -0.1,
    lineHeight: 22,
  } as TextStyle,

  body: {
    fontFamily,
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 24,
  } as TextStyle,

  bodyBold: {
    fontFamily,
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 24,
  } as TextStyle,

  callout: {
    fontFamily,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
  } as TextStyle,

  subhead: {
    fontFamily,
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
  } as TextStyle,

  footnote: {
    fontFamily,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
  } as TextStyle,

  caption: {
    fontFamily,
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0.2,
    lineHeight: 16,
  } as TextStyle,

  buttonLarge: {
    fontFamily,
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.8,
    lineHeight: 22,
  } as TextStyle,

  buttonSmall: {
    fontFamily,
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.5,
    lineHeight: 20,
  } as TextStyle,

  cardType: {
    fontFamily,
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 3,
    lineHeight: 18,
  } as TextStyle,

  cardBody: {
    fontFamily,
    fontSize: 22,
    fontWeight: '500',
    lineHeight: 30,
  } as TextStyle,
} as const;
