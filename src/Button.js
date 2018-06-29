import styled, { css } from 'styled-components'
import { darken } from 'polished'

const Button = styled.button`
  appearance: none;
  background: ${props => props.theme.colors.bgLight};
  border: ${props => props.theme.sizes.borderWidth} solid
    ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.sizes.borderRadius};
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  display: inline-block;
  outline: none;

  text-align: center;
  text-decoration: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  &:focus {
  }

  &:focus,
  &:hover {
    text-decoration: none;
    background: ${props => props.theme.colors.secondary};
    border-color: ${props => props.theme.colors.primaryDark};
  }
  &:active,
  &.active {
    background: ${props => props.theme.colors.primaryDark};
    border-color: ${props => darken(0.5, props.theme.colors.primaryDark)};
    color: ${props => props.theme.colors.light};
    text-decoration: none;
    &.loading {
      &::after {
        border-bottom-color: ${props => props.theme.colors.light};
        border-left-color: ${props => props.theme.colors.light};
      }
    }

  ${props =>
    props.primary &&
    css`
      background: ${props => props.theme.colors.primary};
      border-color: ${props => props.theme.colors.primaryDark};
      color: ${props => props.theme.colors.light};

      &:focus,
      &:hover {
        background: ${props => darken(0.2, props.theme.colors.primaryDark)};
        border-color: ${props => darken(0.5, props.theme.colors.primaryDark)};
        color: ${props => props.theme.colors.light};
      }
      &:active,
      &.active {
        background: ${props => darken(0.4, props.theme.colors.primaryDark)};
        border-color: ${props => darken(0.7, props.theme.colors.primaryDark)};
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

  ${props => props.success && css``};

  ${props => props.error && css``};

  ${props =>
    props.link &&
    css`
      background: transparent;
      border-color: transparent;
      &:focus,
      &:hover,
      &:active,
      &.active {
        color: ${props => props.theme.colors.linkDark};
      }
    `};

  ${props => props.sm && css``};

  ${props => props.lg && css``};

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
      margin-right: -2px;
      opacity: 1;
      padding: 0;
      text-decoration: none;

      &:hover {
        opacity: 0.95;
      }

      &::before {
      }
    `};
`

export default Button
