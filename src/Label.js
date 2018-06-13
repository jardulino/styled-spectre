import styled from 'styled-components'

const Label = styled.div`

  line-height: 1.2;
  padding: .1rem .15rem;
  display: inline-block;

  ${props => props.rounded && css`
      border-radius: 5 rem;
      padding-left: .4 rem;
      padding-right: .4 rem; 
  `};

`

export default Label