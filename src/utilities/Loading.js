import styled, { css } from 'styled-components'

const Loading = styled.div`
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  color: transparent !important;
  min-height: ${props => props.theme.sizes.unit[4]}rem;
  pointer-events: none;
  position: relative;
  &::after {
    animation: loading 500ms infinite linear;
    border: ${props => props.theme.sizes.borderWidthLg}rem solid
      ${props => props.theme.colors.primary};
    border-radius: 50%;
    border-right-color: transparent;
    border-top-color: transparent;
    content: '';
    display: block;
    height: ${props => props.theme.sizes.unit[4]}rem;
    left: 50%;
    margin-left: -${props => props.theme.sizes.unit[2]}rem;
    margin-top: -${props => props.theme.sizes.unit[2]}rem;
    position: absolute;
    top: 50%;
    width: ${props => props.theme.sizes.unit[4]}rem;
    z-index: 100;
  }
  ${props =>
    props.lg &&
    css`
      min-height: ${props => props.theme.sizes.unit[10]}rem;
      &::after {
        height: ${props => props.theme.sizes.unit[8]}rem;
        margin-left: -${props => props.theme.sizes.unit[4]}rem;
        margin-top: -${props => props.theme.sizes.unit[4]}rem;
        width: ${props => props.theme.sizes.unit[8]}rem;
      }
    `};
`

export default Loading
