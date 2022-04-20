import styled from "styled-components";
import DownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Dropdown = styled.div`
  width: 300px;
  border: 1px solid #d5d5d5;
  border-radius: 12.5px;
  margin-bottom: 5px;
  user-select: none;
`

export const Header = styled.div`
  padding: 5px 15px;
  display: flex;
  cursor: pointer;
`

export const HeaderLabel = styled.label`
  display: inline-block;
  margin: 0;
  margin-right: 5px;
  pointer-events: none;
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
  transition: 0.2s all;
  pointer-events: none;

  &.rotate{
    transform: rotate(180deg);
  }
`

export const Body = styled.div`
  padding: 5px 15px 0 15px;
  border-top: 1px solid #e5e5e5;
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
  padding: 5px 15px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`
