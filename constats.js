import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
  primary: '#37A372',
  secondary: '#2C2C2C',

  lightPurple: '#7B789F',
  purple: '#595683',
  yellow: '#F1CD7C',
  lightYellow: '#FFD88A',
  white: '#fff',
  white1: '#F1E6D8',
  lightGreen: '#7EBDA2',
  lightGreen2: '#BED2BB',
  red: '#D84035',
  red2: '#FF7363',
  black: '#000000',
  gray: '#6E6E6E',
  gray1: '#363636',
  gray2: '#4B4B4B',
  gray3: '#4D4D4D',
  lightGray: '#3B3B3B',
  lightGray2: '#707070',
  lightGray3: '#f0f0f0',

  pink: '#D993B4',
  lightPink: '#F3DEE8',

  transparentWhite: 'rgba(255, 255, 255, 0.2)',
  transparentBlack: 'rgba(0, 0, 0, 0.4)',
  transparent: 'transparent',
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,
};

const appTheme = { COLORS, SIZES };

export default appTheme;
