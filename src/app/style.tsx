// COLORS

export const Colors = {
  black: '#424242',
  xtLigthGrey: '#f0f0f0',
  lightGrey: '#dbdbdb',
  grey: '#b9b9b9',
  darkGrey: '#6c6c6c',
  beige: '#BCA276',
  darkBeige: '#8A7757',
  orange: '#DE7012',
  darkOrange: '#AB570E',
  yellow: '#C89742',
  green: '#6cbf56',
  red: '#a90f0a',
};

// DEVICES MEDIA

const sizeDevice = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const Devices = {
  mobileS: `(min-width: ${sizeDevice.mobileS})`,
  mobileM: `(min-width: ${sizeDevice.mobileM})`,
  mobileL: `(min-width: ${sizeDevice.mobileL})`,
  tablet: `(min-width: ${sizeDevice.tablet})`,
  laptop: `(min-width: ${sizeDevice.laptop})`,
  laptopL: `(min-width: ${sizeDevice.laptopL})`,
  desktop: `(min-width: ${sizeDevice.desktop})`,
  desktopL: `(min-width: ${sizeDevice.desktop})`,
};
