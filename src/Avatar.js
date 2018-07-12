import styled, { css } from 'styled-components'
import { transparentize } from 'polished'
import { avatarBase } from './mixins/avatar'

const Avatar = styled.div`
  ${props => avatarBase(props.theme.sizes.unit[8])} 
  
  background: ${props => props.theme.colors.primary};
  border-radius: 50%;
  color: ${props => transparentize(0.15, props.theme.colors.light)};
  display: inline-block;
  font-weight: 300;
  line-height: 1.25;
  margin: 0;
  position: relative;
  vertical-align: middle;
  
  ${props =>
    props.xs &&
    css`
      ${props => avatarBase(props.theme.sizes.unit[4])} 
    `};
  ${props =>
    props.sm &&
    css`
      ${props => avatarBase(props.theme.sizes.unit[6])} 
    `};
   ${props =>
    props.lg &&
    css`
      ${props => avatarBase(props.theme.sizes.unit[12])} 
    `};
  ${props =>
    props.xl &&
    css`
      ${props => avatarBase(props.theme.sizes.unit[13])} 
    `};

  img {
    border-radius: 50%;
    height: 100%;
    position: relative;
    width: 100%;
    z-index: 100;
  }
  
  ${props =>
    props.dataInitial &&
    css`
      &:before {
        color: currentColor;
        content: ${props => {
          return "'" + props.dataInitial + "'";
        }};
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 100;
      } 
    `};
  }
`

export default Avatar
