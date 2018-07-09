import styled, { css } from 'styled-components'
import { lighten } from 'polished'
import {labelBase, labelVariant} from './utilities/label'

const Label = styled.div`
  ${props => labelBase(
    props.theme.sizes.borderRadius
  )} 
  
  display: inline-block;

  ${props => labelVariant(
    props.theme.colors.dark,
    lighten(0.05, props.theme.colors.bodyFont)
  )} 
  
  ${props =>
    props.rounded &&
    css`
      border-radius: 5 rem;
      padding-left: 0.4 rem;
      padding-right: 0.4 rem;
    `};

  ${props =>
    props.primary &&
    css`
      ${props => labelVariant(
        props.theme.colors.light, 
        props.theme.colors.primary
      )};
    `};

  ${props =>
    props.secondary &&
    css`
      ${props => labelVariant(
        props.theme.colors.primary,
        props.theme.colors.secondary
      )};
    `};

  ${props =>
    props.success &&
    css`
      ${props => labelVariant(
        props.theme.colors.light,
        props.theme.colors.success
      )};
    `};

  ${props =>
    props.warning &&
    css`
      ${props => labelVariant(
        props.theme.colors.light,
        props.theme.colors.warning
      )};
    `};

  ${props =>
    props.error &&
    css`
      ${props => labelVariant(
        props.theme.colors.light,
        props.theme.colors.error
      )};
    `};
`

export default Label
