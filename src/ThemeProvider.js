import React, { Fragment } from 'react'
import { ThemeProvider as Root, injectGlobal, css } from 'styled-components'
import PropTypes from 'prop-types'
import theme from './theme'

const fontsCss = css``

injectGlobal`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: ${theme.sizes.font.fontHtml};
    line-height: ${theme.sizes.font.lineHeightHtml};
    -webkit-tap-highlight-color: transparent;
  }

  body {
    background: ${theme.colors.bodyBg};
    color: ${theme.colors.bodyFont};
    font-family: ${theme.bodyFont};
    font-size: ${theme.sizes.font.font}
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
  }

  a {
    color: ${theme.colors.link};
    outline: none;
    text-decoration: none;

    &:focus {
      
    }

    &:focus,
    &:hover,
    &:active,
    &.active {
      color: ${theme.colors.linkDark};
      text-decoration: underline;
    }

    &:visited {
      color: ${theme.colors.linkLight};
    }
  }
`

const ThemeProvider = ({ theme, ...props }) => {
  if (true) injectGlobal([], fontsCss)
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
