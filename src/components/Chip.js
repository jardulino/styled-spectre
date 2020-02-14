import styled, { css } from 'styled-components'

const Chip = styled.span`
  align-items: center;
  background: ${props => props.theme.colors.bgDark};
  border-radius: 5rem;
  color: ${props => props.theme.colors.grayDark};
  display: inline-flex;
  font-size: 90%;
  height: ${props => props.theme.sizes.unit[6]}rem;
  line-height: ${props => props.theme.sizes.unit[4]}rem;
  margin: $unit-h;
  max-width: 100%;
  padding: ${props => props.theme.sizes.unit[1]}rem
    ${props => props.theme.sizes.unit[2]}rem;
  text-decoration: none;
  vertical-align: middle;

  ${props =>
    props.active &&
    css`
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.light};
    `};

  img {
    margin-left: -${props => props.theme.sizes.unit[2]}rem;
    margin-right: ${props => props.theme.sizes.unit[1]}rem;
  }
`

export default Chip
