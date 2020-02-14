import styled, { css } from 'styled-components'
import { darken } from 'polished'

const Button = styled.button`
  transition: ${props => props.theme.colors.transition};
  appearance: none;
  background: ${props => props.theme.colors.bgLight};
  border: ${props => props.theme.sizes.borderWidth}rem solid
    ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.sizes.borderRadius}rem;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;

  font-size: ${props => props.theme.sizes.font.font};
  height: ${props => props.theme.sizes.controlSize}rem;
  line-height: ${props => props.theme.sizes.font.lineHeight};

  display: inline-block;
  outline: none;

  padding: ${props => props.theme.sizes.controlPaddingY}rem
    ${props => props.theme.sizes.controlPaddingX}rem;

  text-align: center;
  text-decoration: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  &:focus {
    box-shadow: ${props => props.theme.colors.shadow};
  }

  &:focus,
  &:hover {
    text-decoration: none;
    background: ${props => props.theme.colors.secondary};
    border-color: ${props => props.theme.colors.primaryDark};
  }
  &:active {
    background: ${props => props.theme.colors.primaryDark};
    border-color: ${props => darken(0.05, props.theme.colors.primaryDark)};
    color: ${props => props.theme.colors.light};
    text-decoration: none;
  }

  &[disabled],&: disabled,
    ${props =>
    props.disabled &&
    css`
        cursor: default;
        opacity: 0.5;
        pointer-events: none;
      `};

  ${props =>
    props.primary &&
    css`
      background: ${props => props.theme.colors.primary};
      border-color: ${props => props.theme.colors.primaryDark};
      color: ${props => props.theme.colors.light};

      &:focus,
      &:hover {
        background: ${props => darken(0.02, props.theme.colors.primaryDark)};
        border-color: ${props => darken(0.05, props.theme.colors.primaryDark)};
        color: ${props => props.theme.colors.light};
      }
      &:active {
        background: ${props => darken(0.04, props.theme.colors.primaryDark)};
        border-color: ${props => darken(0.07, props.theme.colors.primaryDark)};
        color: ${props => props.theme.colors.light};
      }

      ${props =>
        props.loading &&
        css`
          &::after {
            border-bottom-color: ${props => props.theme.colors.light};
            border-left-color: ${props => props.theme.colors.light};
          }
        `};
    `};

  ${props =>
    props.success &&
    css`
      background: ${props => props.theme.colors.success};
      border-color: ${props => darken(0.03, props.theme.colors.success)};
      color: ${props => props.theme.colors.light};
      &:focus {
      }
      &:focus,
      &:hover {
        background: ${props => darken(0.02, props.theme.colors.success)};
        border-color: ${props => darken(0.05, props.theme.colors.success)};
        color: ${props => props.theme.colors.light};
      }
      &:active {
        background: ${props => darken(0.07, props.theme.colors.success)};
        border-color: ${props => darken(0.1, props.theme.colors.success)};
        color: ${props => props.theme.colors.light};
      }
    `};

  ${props =>
    props.error &&
    css`
      background: ${props => props.theme.colors.error};
      border-color: ${props => darken(0.03, props.theme.colors.error)};
      color: ${props => props.theme.colors.light};
      &:focus {
      }
      &:focus,
      &:hover {
        background: ${props => darken(0.02, props.theme.colors.error)};
        border-color: ${props => darken(0.05, props.theme.colors.error)};
        color: ${props => props.theme.colors.light};
      }
      &:active {
        background: ${props => darken(0.07, props.theme.colors.error)};
        border-color: ${props => darken(0.1, props.theme.colors.error)};
        color: ${props => props.theme.colors.light};
      }
    `};

  ${props =>
    props.link &&
    css`
      background: transparent;
      border-color: transparent;
      color: ${props => props.theme.colors.link};
      &:focus,
      &:hover,
      &:active {
        background: transparent;
        border-color: transparent;
        color: ${props => props.theme.colors.linkDark};
      }
    `};

  ${props => props.sm && css`
    font-size: ${props => props.theme.sizes.font.fontSm};
    height: ${props => props.theme.sizes.controlSizeSm}rem;
    padding: ${props => props.theme.sizes.controlPaddingYSm}rem
    ${props => props.theme.sizes.controlPaddingXSm}rem;
  `};

  ${props => props.lg && css`
    font-size: ${props => props.theme.sizes.font.fontLg};
    height: ${props => props.theme.sizes.controlSizeLg}rem;
    padding: ${props => props.theme.sizes.controlPaddingYLg}rem
    ${props => props.theme.sizes.controlPaddingXLg}rem;
  `};

  ${props =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `};

  ${props =>
    props.action &&
    css`
      padding-left: 0;
      padding-right: 0;

      ${props => props.sm && css``};

      ${props => props.lg && css``};
    `};

  ${props =>
    props.clear &&
    css`
      background: transparent;
      border: 0;
      color: currentColor;
      height: ${props => props.theme.sizes.unit[4]}rem;
      line-height: ${props => props.theme.sizes.unit[4]}rem;
      margin-left: ${props => props.theme.sizes.unit[1]}rem;
      margin-right: -2px;
      opacity: 1;
      padding: 0;
      text-decoration: none;
      width: ${props => props.theme.sizes.unit[4]}rem;

      &:hover {
        opacity: 0.95;
      }
      &:focus,
      &:active {
        background: transparent;
        border: 0;
        color: currentColor;
      }

      &::before {
      }
    `};
`

export default Button
