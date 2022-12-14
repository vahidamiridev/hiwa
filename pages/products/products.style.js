import styled from 'styled-components'
export const Title = styled.div`
  min-height: 15rem;
  font-size: 5rem;
  padding-top: 4rem;
  text-align: center;
  color: ${(props) => (props.isName ? 'red' : 'unset')};
`
