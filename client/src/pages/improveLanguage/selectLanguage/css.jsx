import styled from 'styled-components/macro'

export const SelectLanguageGeneral = styled.div`
  margin: auto;
  height: 180px;
`

export const FlagRow = styled.div`
  display: flex;
  flex-direction: row;
  width: max-content;
  margin: auto;
`

export const FlagCard = styled.div`
  display: block;
  margin: 10px;
  cursor: pointer;
  user-select: none;
  width: 65px;
  height: 50px;
  border: 1px solid #d5d5d5;
  border-radius: 10px;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;

  &.selected{
    border-color: #002c9d;
  }

  & .flagImg{
    width: 100%!important;
    height: 100%!important;
  }

  & .selectLanguage{
    text-align: center;
    color: #222;
    margin: 5px 0;
    font-size: 12px;
  }
`

export const LanguageList = styled.div`
  border: 1px solid #d5d5d5;
  padding: 5px;
  border-radius: 10px;
  text-align: center;
`

export const LanguageListItem = styled.div`
  display: inline-block;
  border-radius: 5px;
  margin: 5px 0;
  cursor: pointer;
  margin: 5px;
  -webkit-tap-highlight-color: transparent;

  & .flagImg{
    width: 50px!important;
    height: auto!important;
    border-radius: 5px;
    border: 1px solid #f5f5f5;
  }
`