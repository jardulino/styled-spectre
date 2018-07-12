import styled, { css } from 'styled-components'
import { lighten } from 'polished'
import {labelBase, labelVariant} from './mixins/label'

const Label = styled.div`
  ${props => labelBase(
    props.theme.sizes.borderRadius
  )} 
  
  display: inline-block;

  ${props => labelVariant(
    lighten(0.05, props.theme.colors.bodyFont),
    props.theme.colors.bgDark,
  )} 
  
  ${props =>
    props.rounded &&
    css`
      border-radius: 5rem;
      padding-left: 0.4rem;
      padding-right: 0.4rem;
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
