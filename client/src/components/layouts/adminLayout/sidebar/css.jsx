import styled from 'styled-components'
import {Link} from 'react-router-dom'
import DownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Sidebar = styled.div`
  min-width: 275px;
  height: 90vh;
  border-right: 1px solid #d5d5d5;
`

export const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  user-select: none;

  &.drop .dropdownHeader svg{
    transform: rotate(180deg);
  }

  &.drop .dropdownBody{
    display: block;
  }
  
`

export const DropdownHeader = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`

export const DropdownHeaderTitle = styled.h4`
  font-size: 15px;
  font-weight: 400;
  color: #a5a5a5;
  margin: 0;
  padding-left: 15px;
`

export const DownIconStyled = styled(DownIcon)`
  width: 20px!important;
  height: 20px!important;
  color: #a5a5a5;
  transition: 0.2s all;
`

export const DropdownBody = styled.div`
  display: none;
`

export const LinkStyled = styled(Link)`
  display: flex;
  text-decoration: none;
  color: #333;
  padding: 10px 15px;
  align-items: center;
  font-size: 18px;
  transition: 0.2s all;
  cursor: pointer;

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