import styled from 'styled-components'

export const Navbar = styled.div`
  flex: 1;
  height: 10vh;
  border-bottom: 1px solid #d5d5d5;
  display: flex;
  align-items: center;
  padding: 0 20px;
`

export const H1 = styled.h1`
  margin: 0;
  line-height: 1;
  font-size: 26px;
`

export const Ahref = styled.a`
  color: black;
  text-decoration: none;
  display: inline-block;
  margin-left: 10px;

  &:hover{
    text-decoration: underline;
  }
`