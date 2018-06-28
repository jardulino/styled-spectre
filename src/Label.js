import styled from 'styled-components'

const Label = styled.div`
  line-height: 1.2;
  padding: 0.1rem 0.15rem;
  display: inline-block;

  ${props =>
    props.rounded &&
    css`
      border-radius: 5 rem;
      padding-left: 0.4 rem;
      padding-right: 0.4 rem;
    `};

  ${props => props.primary && css``};

  ${props => props.secondary && css``};

  ${props => props.success && css``};

  ${props => props.warning && css``};

  ${props => props.error && css``};
`

export default Label
