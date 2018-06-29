import styled, { css } from 'styled-components'
import theme from './theme'

// Label base style
const labelBase = () => css`
  border-radius: $border-radius;
  line-height: 1.2;
  padding: 0.1rem 0.15rem;
`

const labelVariant = (color, bgColor) => css`
  background: ${bgColor};
  color: ${color};
`

const Label = styled.div`
  line-height: 1.2;
  padding: 0.1rem 0.15rem;
  display: inline-block;

  ${labelVarian(
    `${props => props.colors.bodyFont}`,
    `${props => props.colors.dark}`
  )} ${props =>
    props.rounded &&
    css`
      border-radius: 5 rem;
      padding-left: 0.4 rem;
      padding-right: 0.4 rem;
    `};

  ${props =>
    props.primary &&
    css`
      ${labelVarian(
        `${props => props.colors.light}`,
        `${props => props.colors.primary}`
      )};
    `};

  ${props =>
    props.secondary &&
    css`
      ${labelVarian(
        `${props => props.colors.primary}`,
        `${props => props.colors.secondary}`
      )};
    `};

  ${props =>
    props.success &&
    css`
      ${labelVarian(
        `${props => props.colors.light}`,
        `${props => props.colors.success}`
      )};
    `};

  ${props =>
    props.warning &&
    css`
      ${labelVarian(
        `${props => props.colors.light}`,
        `${props => props.colors.warning}`
      )};
    `};

  ${props =>
    props.error &&
    css`
      ${labelVarian(
        `${props => props.colors.light}`,
        `${props => props.colors.error}`
      )};
    `};
`

export default Label
