import styled from "styled-components";
import DownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Dropdown = styled.div`
  width: 300px;
  border: 1px solid #d5d5d5;
  border-radius: 12.5px;
  margin-bottom: 5px;
  user-select: none;

  &.drop .body{
    height: max-content;
    padding: 5px 15px;
    border-top: 1px solid #e5e5e5;
  }

  &.drop .icon{
    transform: rotate(180deg);
  }
`

export const Header = styled.div`
  padding: 5px 15px;
  display: flex;
  cursor: pointer;
`

export const HeaderWord = styled.p`
  display: inline;
  margin: 0;
  pointer-events: none;
`

export const DownIconStyled = styled(DownIcon)`
  width: 20px!important;
  height: 20px!important;
  margin-left: auto;
  color: #333;
  pointer-events: none;
`

export const Body = styled.div`
  height: 0;
  overflow: hidden;
  transition: 0.5s all;
`

export const LanguageDiv = styled.div`
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:last-child{
    margin-bottom: 0;
  }
`

export const LanguageLabel = styled.label`
  flex: 3;
  font-size: 14px;
  margin-right: 5px;
`

export const LanguageInput = styled.input`
  flex: 7;
  border: 1px solid #d5d5d5;
  border-radius: 15px;
  outline: none;
  padding: 2.5px 10px;
`

export const Footer = styled.div`
  text-align: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`
