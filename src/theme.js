import { css } from 'styled-system'

const coreColors = css`
  $primary-color: #5755d9 !default;
  $primary-color-dark: darken($primary-color, 3%) !default;
  $primary-color-light: lighten($primary-color, 3%) !default;
  $secondary-color: lighten($primary-color, 37.5%) !default;
  $secondary-color-dark: darken($secondary-color, 3%) !default;
  $secondary-color-light: lighten($secondary-color, 3%) !default;
`

const red = '#e42d42'
const blue = '#2d9ce4'
export const palette = palx(blue)

export const grays = {
  black: palette.black,
  slate: palette.gray[8],
  silver: palette.gray[7],
  smoke: palette.gray[2],
  snow: palette.gray[0],
  white: '#ffffff'
}

export const brand = {
  primary: red,
  accent: palette.indigo[4],
  success: palette.teal[5],
  info: palette.blue[5],
  warning: palette.orange[5],
  error: palette.red[7],
  muted: grays.silver
}

export const colors = {
  ...brand,
  ...grays,
  ...palette
}


const theme = {
  breakpoints,
  mediaQueries,
  space,
  mono,
  font,
  fontSizes,
  fontWeights,
  regular,
  bold,
  colors,
  radii,
  radius,
  pill,
  scaleFactor,
  transition,
  boxShadows,
  shadowColor,
  cx,
  hexa
}

export default theme