import { css } from 'styled-components'

// Label base style
export function labelVariant(color, bgColor) {
  return css`
    background: ${bgColor};
    color: ${color};
  `
}

// Label base style
export function labelBase(borderRadius) {
  return css`
    border-radius: ${borderRadius}rem;
    line-height: 1.2;
    padding: 0.1rem 0.15rem;
  `
}
