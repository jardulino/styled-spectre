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
    z-index: $zindex-0;
  }

  ${props =>
    (props.icon || props.presence) &&
    css`
      background: ${props => props.theme.colors.bgLight};
      bottom: 14.64%;
      height: 50%;
      padding: $border-width-lg;
      position: absolute;
      right: 14.64%;
      transform: translate(50%, 50%);
      width: 50%;
      z-index: $zindex-0 + 1;
    `};

  ${props =>
    props.presence &&
    css`
      background: ${props => props.theme.colors.gray};
      box-shadow: 0 0 0 ${props => props.theme.sizes.borderWidthLg}; ${props => props.theme.colors.light};
      border-radius: 50%;
      height: .5em;
      width: .5em;

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
    `};
    
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
