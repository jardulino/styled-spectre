import styled, { css } from 'styled-components'

const Presence = styled.i`
  background: ${props => props.theme.colors.bgLight};
  bottom: 14.64%;
  height: 50%;
  padding: ${props => props.theme.sizes.borderWidthLg}rem;
  position: absolute;
  right: 14.64%;
  transform: translate(50%, 50%);
  width: 50%;
  z-index: 105;

  background: ${props => props.theme.colors.gray};
  box-shadow: 0 0 0 ${props => props.theme.sizes.borderWidthLg}rem
    ${props => props.theme.colors.light};
  border-radius: 50%;
  height: 0.5em;
  width: 0.5em;

  ${props =>
    props.online &&
    css`
      background: ${props => props.theme.colors.success};
    `};

  ${props =>
    props.busy &&
    css`
      background: ${props => props.theme.colors.error};
    `};

  ${props =>
    props.away &&
    css`
      background: ${props => props.theme.colors.warning};
    `};
`

export default Presence
