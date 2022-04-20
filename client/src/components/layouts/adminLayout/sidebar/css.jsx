import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Sidebar = styled.div`
  width: 1;
  min-width: 250px;
  height: 90vh;
  border-right: 1px solid #d5d5d5;
`

export const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const Li = styled.li`
  
`

export const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: #333;
  padding: 10px 15px;
  align-items: center;
  font-size: 18px;
  transition: 0.2s all;

  &:hover{
    padding-left: 25px;
  }

  & svg{
    width: 22px;
    height: 22px;
    margin-right: 5px;
    color: #555;
  }
`