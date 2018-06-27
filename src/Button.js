import styled from 'styled-components'
import theme from './theme'

const Button = styled.button`
  appearance: none;
  background: ${props => props.theme.colors.gray.bgLight};
  border: ${props => props.theme.sizes.borderWidth} solid ${props => props.theme.colors.core.primary};
  border-radius: ${props => props.theme.sizes.borderRadius};
  color: ${props => props.theme.colors.core.primary};
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
    background: ${props => props.theme.colors.core.secondary};
    border-color: ${props => props.theme.colors.core.primaryDark};
  }

  ${props => props.primary && css`

    ${props => props.loading && css` 
      &::after {

      }
    `};

  `};

  ${props => props.success && css`
  
  `};

  ${props => props.error && css`
  
  `};

  ${props => props.link && css`
    background: transparent;
    border-color: transparent;
    &:focus,
    &:hover,
    &:active,
    &.active {

    }
  `};

  ${props => props.sm && css`
  
  `};

  ${props => props.lg && css`
  
  `};

  ${props => props.action && css`

    padding-left: 0;
    padding-right: 0;

    ${props => props.sm && css`
  
    `};

    ${props => props.lg && css`
    
    `};
  
  `};

  ${props => props.clear && css`
    background: transparent;
    border: 0;
    color: currentColor;
    margin-right: -2px;
    opacity: 1;
    padding: 0;
    text-decoration: none;


    &:hover {
      opacity: .95;
    }

    &::before {
      content: "\2715";
    }
  `};

`

export default Button