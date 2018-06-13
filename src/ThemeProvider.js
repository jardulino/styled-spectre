import React, { Fragment } from 'react'
import { ThemeProvider as Root, injectGlobal, css } from 'styled-components'
import PropTypes from 'prop-types'


const coreColors = css`
  $primary-color: #5755d9 !default;
  $primary-color-dark: darken($primary-color, 3%) !default;
  $primary-color-light: lighten($primary-color, 3%) !default;
  $secondary-color: lighten($primary-color, 37.5%) !default;
  $secondary-color-dark: darken($secondary-color, 3%) !default;
  $secondary-color-light: lighten($secondary-color, 3%) !default;
`

const grayColors = css`
  $dark-color: #454d5d !default;
  $light-color: #fff !default;
  $gray-color: lighten($dark-color, 40%) !default;
  $gray-color-dark: darken($gray-color, 25%) !default;
  $gray-color-light: lighten($gray-color, 20%) !default;

  $border-color: lighten($dark-color, 60%) !default;
  $border-color-dark: darken($border-color, 10%) !default;
  $bg-color: lighten($dark-color, 66%) !default;
  $bg-color-dark: darken($bg-color, 3%) !default;
  $bg-color-light: $light-color !default;
`

const controlColors = css`
  $success-color: #32b643 !default;
  $warning-color: #ffb700 !default;
  $error-color: #e85600 !default;
`

const otherColors = css`
  $code-color: #d73e48 !default;
  $highlight-color: #ffe9b3 !default;
  $body-bg: $bg-color-light !default;
  $body-font-color: lighten($dark-color, 5%) !default;
  $link-color: $primary-color !default;
  $link-color-dark: darken($link-color, 10%) !default;
  $link-color-light: lighten($link-color, 10%) !default;
`

injectGlobal`
* {
  box-sizing: border-box;
  font-weight: inherit;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -webkit-appearance: none;
  -moz-appearance: none;
}

html,
body {
  min-height: 100%;
  min-width: 100%;
}

body {
  padding: 0;
  margin: 0;
  font-size: ${theme.fontSizes[2]}px;
  font-family: ${theme.font};
  line-height: 1.5;
  position: relative;
  height: 100%;
  max-height: 100%;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}

a {
  color: currentColor;
  text-decoration: none;
}

textarea {
  resize: none;
}
`

const ThemeProvider = ({ coreColors, webfonts, ...props }) => {
  if (webfonts) injectGlobal([], fontsCss)
  return (
    <Root
      theme={theme}
      {...props}
      children={<Fragment>{props.children}</Fragment>}
    />
  )
}

ThemeProvider.propTypes = {
  theme: PropTypes.object,
  webfonts: PropTypes.bool
}

ThemeProvider.defaultProps = {
  theme,
  webfonts: false
}

export default ThemeProvider