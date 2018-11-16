import { css } from "styled-components";

export const scaleSpacing = (remVal, scale) => {
  if (/([0-9]+)\.?([0-9]*)\s*rem/.test(remVal)) {
    return parseFloat(remVal) * scale + "rem";
  }
  return remVal;
};

export const doubleSpacing = remVal => scaleSpacing(remVal, 2);

export const addSpacing = (...args) => {
  var sum = 0;
  for (var i = 0; i < args.length; i++) {
    sum += parseFloat(args[i]);
  }
  return sum + "rem";
};

export const addSpacingPx = (...args) => {
  var sum = 0;
  for (var i = 0; i < args.length; i++) {
    sum += parseFloat(args[i]);
  }
  return sum + "px";
};

export const negativeSpacing = val => `-${val}`;

const baseSpace = "1rem";

const spaces = {
  none: 0,
  xxs: scaleSpacing(baseSpace, 0.15),
  xs: scaleSpacing(baseSpace, 0.25),
  s: scaleSpacing(baseSpace, 0.5),
  base: scaleSpacing(baseSpace, 1),
  m: scaleSpacing(baseSpace, 1.5),
  l: scaleSpacing(baseSpace, 2),
  xl: scaleSpacing(baseSpace, 3),
  xxl: scaleSpacing(baseSpace, 4),
  xxxl: scaleSpacing(baseSpace, 8)
};

const defaultSpace = spaces.m;

const palette = {
  grey: {
    five: "#F2F2F2",
    twenty: "#CCC",
    thirtyfour: "#A8A8A8",
    fourtyone: "#979797",
    sixtyseven: "#535353",
    eighty: "#333",
    transparent: "rgba(0, 0, 0, 0.2)"
  },
  red: "#EF4645",
  green: "#41B07A",
  lime: "#BBD148",
  nessie: "#2B8C92",
  yellow: "#EBDA4C",
  orange: "#DB8765",
  logopink: "#DC93BA",
  icondark: "#314E55",
  lightGreen: "#dbf9ef"
};

const colors = {
  main: palette.grey.five,
  accent: palette.red,
  grey: palette.grey,
  text: palette.grey.eighty
};

const breakpoints = {
  untilS: "(max-width: 26.9375em)", // 431px
  s: "(min-width: 27em)", // 432px
  untilM: "(max-width: 38.9375em)", // 623px
  m: "(min-width: 39em)", // 624px
  untilL: "(max-width: 51.9375em)", // 831px
  l: "(min-width: 52em)", // 832px
  untilW: "(max-width: 63.9375em)", // 1023px
  w: "(min-width: 64em)" // 1024px
};

const zIndex = {
  above: 2,
  card: 1,
  below: -1,
  header: {
    base: 100,
    overlay: 101,
    trigger: 102,
    logo: 102
  },
  modal: 9999
};

const fontSizes = {
  base: baseSpace,
  small: scaleSpacing(baseSpace, 0.875), // 14
  card: scaleSpacing(baseSpace, 1.15), // 18.4
  h1: scaleSpacing(baseSpace, 1.75), // 28
  h2: scaleSpacing(baseSpace, 1.5), // 24
  h3: scaleSpacing(baseSpace, 1.25), // 20
  h4: scaleSpacing(baseSpace, 1.125), // 18
  h5: scaleSpacing(baseSpace, 1), // 16
  h6: scaleSpacing(baseSpace, 0.875) // 14
};

const iconSizes = {
  tiny: fontSizes.small,
  small: fontSizes.h4,
  medium: fontSizes.h3,
  large: fontSizes.h2,
  xlarge: fontSizes.h1,
  xxlarge: scaleSpacing(baseSpace, 2),
  huge: scaleSpacing(baseSpace, 2.5)
};

const inputSizes = {
  iconSize: "medium",
  spacing: spaces.s,
  height: scaleSpacing(baseSpace, 2.375)
};

/* buttons us the same vertical padding, line-height and border as inputs, 
thus they have the same height*/
const buttonSizes = {
  large: {
    v: spaces.base,
    h: inputSizes.spacing
  },
  medium: {
    v: spaces.s,
    h: spaces.xs
  },
  small: {
    v: spaces.xs,
    h: spaces.xxs
  }
};

const fontFamily = {
  base: "'Brandon', sans-serif"
};
const lineHeights = {
  base: 1.5,
  headings: 1.3,
  inputs: 1.25
};

const theme = {
  colors,
  spaces,
  breakpoints,
  zIndex,
  fontSizes,
  fontFamily,
  lineHeights,
  defaultSpace,
  iconSizes,
  buttonSizes,

  // grid
  gutter: defaultSpace,

  // borders
  border: "1px solid " + colors.border,
  borderRadius: {
    base: spaces.s, // 8px
    small: spaces.xs
  }, // 4px
  // header
  headerHeight: {
    s: "4rem",
    m: "5rem"
  },

  inputs: inputSizes,
  cardWidth: "176px",
  cardHeight: "190px",
  focusOutline: "3px auto " + colors.focus,
  cardMaxWidth: "24rem",
  mainMaxWidth: "64rem" /* 1024px */
};

// TODO: Fix this spacing shit
// You want to set the look of inputs, and other elements, from theme,
// Instead of hunting explicit values

export const mediaQuery = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media ${theme.breakpoints[label]} {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export const paddingTopWithHeaderMixin = (paddingTop, paddingTopM) => css`
  padding-top: ${props => addSpacing(paddingTop, theme.headerHeight.s)};

  ${mediaQuery.m`
      padding-top: ${props => addSpacing(paddingTopM, theme.headerHeight.m)};
    `};
`;

export default theme;
