import styled from 'styled-components'

export const Navbar = styled.div`
  display: flex;
  position: relative;
`

export const Button = styled.button`
  margin-left: auto;
  background-color: transparent;
  cursor: pointer;
  padding: 5px;
  display: flex;
  border: 0;
  color: #333;
`

export const Menu = styled.div`
  position: absolute;
  top: 40px;
  right: 0px;
  border: 1px solid #d5d5d5;
  border-radius: 10px;
  overflow: hidden;
  background-color: white;
`

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const Li = styled.li`
  border-bottom: 1px solid #e5e5e5;
  padding: 5px 7.5px;
  margin: 0;
  cursor: pointer;
  user-select: none;

  &:hover{
    background-color: #f8f8f8;
  }

  &:last-child{
    border-bottom: 0;
  }
`