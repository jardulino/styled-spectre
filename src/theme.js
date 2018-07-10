import { lighten, darken } from 'polished'

const core = {
  primary: '#5755d9',
  primaryDark: '#4b48d6',
  primaryLight: '#6362dc',
  secondary: '#f1f1fc',
  secondaryDark: '#e5e5f9',
  secondaryLight: '#fefeff'
}

const gray = {
  dark: '#454d5d',
  light: '#fff',
  gray: '#acb3c2',
  grayDark: '#667189',
  grayLight: '#e7e9ed',
  border: '#e7e9ed',
  borderDark: '#caced7',
  bg: '#f8f9fa',
  bgDark: '#f0f1f4',
  bgLight: '#fff'
}

const control = {
  success: '#32b643',
  warning: '#ffb700',
  error: '#e85600'
}

const other = {
  code: '#d73e48',
  highlight: '#ffe9b3',
  bodyBg: `${gray.bgLight}`,
  bodyFont: '#50596c',
  link: `${core.primary}`,
  linkDark: '#302ecd',
  linkLight: '#807fe2'
}

export const colors = {
  ...core,
  ...gray,
  ...control,
  ...other,
  transition: 'transition: all .2s ease',
  shadow: '0 0 0 .1rem rgba($color, .2)'
}

export const unit = [
  0.05,
  0.1,
  0.2,
  0.4,
  0.6,
  0.8,
  1,
  1.2,
  1.4,
  1.6,
  1.8,
  2,
  2.4,
  3.2
]

const addAliases = (arr, aliases) =>
  aliases.forEach((key, i) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get() {
        return this[i]
      }
    })
  )

const zindexAliases = ['0', '1', '2', '3', '4']
export const zindex = [1, 100, 200, 300, 400]

const breakpointsAliases = ['xs', 'sm', 'md', 'lg', 'xl', '2x']
export const breakpoints = [480, 600, 840, 960, 1280, 1440]

const constrolWidthAliases = ['xs', 'sm', 'md', 'lg', 'xl']
export const constrolWidth = [180, 320, 640, 960, 1280]

const font = {
  fontHtml: '20px',
  lineHeightHtml: '1.5',
  font: '.8rem',
  fontSm: '.7rem',
  fontLg: '.9rem',
  lineHeight: '1rem'
}

export const sizes = {
  unit,
  font,

  borderRadius: unit[1],
  borderWidth: unit[0],
  borderWidthLg: unit[1],

  controlSize: unit[9],
  controlSizeSm: unit[7],
  controlSizeLg: unit[10],

  controlPaddingX: unit[9],

  controlPaddingY: (unit[9] - 1) / 2 - unit[0]
}

export const fontBase =
  '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto'
export const fontMono =
  '"SF Mono", "Segoe UI Mono", "Roboto Mono", Menlo, Courier, monospace'
export const fontFallback = '"Helvetica Neue", sans-serif'
export const fontBody = `${fontBase}, ${fontFallback}`

const theme = {
  fontBase,
  fontMono,
  fontFallback,
  fontBody,
  colors,
  sizes
}

export default theme
