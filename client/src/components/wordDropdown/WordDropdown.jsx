import React, {useEffect, useState} from 'react'
import { MainContext, useContext } from '../../context'
import {Dropdown, Header, HeaderWord, DownIconStyled, Body, LanguageDiv, LanguageLabel, LanguageInput, Footer} from './css'

export default function WordFunc(props) {  

  const [dropdown, setDropdown] = useState(0)

  function drop(e){

    if(dropdown){
      setDropdown(0)
      e.target.closest(Dropdown).classList.remove('drop')
    } else{
      setDropdown(1)
      e.target.closest(Dropdown).classList.add('drop') 
    }
    
  }

  const {listCategoryies, setListCategories, listWords, setListWords} = useContext(MainContext)

  function changeInput(key, e){
    if(props.list === 'words'){
      const values = [...listWords]
      values[key][e.target.name] = e.target.value
      setListWords(values)
    } else if(props.list === 'words'){
      const values = [...listCategoryies]
      values[key][e.target.name] = e.target.value
      setListCategories(values)
    }
  }
  
  return (
    <Dropdown>

      <Header onClick={(e) => drop(e)}>
        <HeaderWord>{props.item.gb}</HeaderWord>
        <DownIconStyled className='icon'/>
      </Header>

      <Body className='body'>
        <LanguageDiv>
          <LanguageLabel>Russian:</LanguageLabel>
          <LanguageInput className='ruInput' value={props.item.ru} name="ru" onChange={(e) => changeInput(props.key2, e)} />
        </LanguageDiv>

        <LanguageDiv>
          <LanguageLabel>English:</LanguageLabel>
          <LanguageInput className='gbInput' value={props.item.gb} name="gb" onChange={(e) => changeInput(props.key2, e)} />
        </LanguageDiv>

        <LanguageDiv>
          <LanguageLabel>Turkish:</LanguageLabel>
          <LanguageInput className='trInput' value={props.item.tr} name="tr" onChange={(e) => changeInput(props.key2, e)} />
        </LanguageDiv>

        <LanguageDiv>
          <LanguageLabel>Chinese:</LanguageLabel>
          <LanguageInput className='chInput' value={props.item.ch} name="ch" onChange={(e) => changeInput(props.key2, e)} />
        </LanguageDiv>

        <LanguageDiv>
          <LanguageLabel>Spanish:</LanguageLabel>
          <LanguageInput className='esInput' value={props.item.es} name="es" onChange={(e) => changeInput(props.key2, e)} />
        </LanguageDiv>

        {
          props.list === 'words' ?
          <LanguageDiv>
            <LanguageLabel>Categories:</LanguageLabel>
            <LanguageInput className='categoriesInput' value={props.item.categories} name="categories" onChange={(e) => changeInput(props.key2, e)} />
          </LanguageDiv>
          : false
        }

        <Footer>
          {props.children}
        </Footer>

      </Body>
    
    </Dropdown>
  )
}
