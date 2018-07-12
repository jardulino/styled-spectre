import { css } from 'styled-components'

// avatar base style
export function avatarBase(size) {
  return css`
    font-size: ${size / 2}rem;
    height: ${size}rem;
    width: ${size}rem;
  `
}
