import styled from 'styled-components/macro'

export const Title = styled.p`
  margin: 0 auto;
`

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
`

export const Li = styled.li`
  padding: 10px;
  border-bottom: 1px solid #d5d5d5;
  cursor: pointer;
  text-transform: capitalize;
  -webkit-tap-highlight-color: transparent;

  &.selected{
    color: #0048ff;
  }
`