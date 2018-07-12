import styled, { css } from 'styled-components'

const AvatartIcon = styled.img`
  background: ${props => props.theme.colors.bgLight};
  bottom: 14.64%;
  height: 50%;
  padding: ${props => props.theme.sizes.borderWidthLg}rem;
  position: absolute;
  right: 14.64%;
  transform: translate(50%, 50%);
  width: 50%;
  z-index: 105;
`

export default AvatartIcon
