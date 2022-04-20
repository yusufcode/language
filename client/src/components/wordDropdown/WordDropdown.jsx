import React, {useEffect, useState} from 'react'
import {Dropdown, Header, HeaderLabel, HeaderWord, DownIconStyled, Body, LanguageDiv, LanguageLabel, LanguageInput, Footer} from './css'

export default function WordFunc(props) {  

  const [dropShow, setDropShow] = useState(0)

  function drop(e){

    if(dropShow){
      e.target.querySelector(DownIconStyled).classList.remove('rotate')
      setDropShow(0)
    } else{
      e.target.querySelector(DownIconStyled).classList.add('rotate')
      setDropShow(1)
    }
    
  }
  
  return (
    <Dropdown>
      <Header onClick={(e) => drop(e)}>
        <HeaderWord>{props.item.en}</HeaderWord>
        <DownIconStyled/>
      </Header>

      <Body>
        <LanguageDiv>
          <LanguageLabel>Russian:</LanguageLabel>
          <LanguageInput className='ruWordInput' defaultValue={props.item.ru} />
        </LanguageDiv>

        <LanguageDiv>
          <LanguageLabel>English:</LanguageLabel>
          <LanguageInput className='enWordInput' defaultValue={props.item.en} />
        </LanguageDiv>

        <LanguageDiv>
          <LanguageLabel>Turkish:</LanguageLabel>
          <LanguageInput className='trWordInput' defaultValue={props.item.tr} />
        </LanguageDiv>

        <LanguageDiv>
          <LanguageLabel>Chinese:</LanguageLabel>
          <LanguageInput className='chWordInput' defaultValue={props.item.ch} />
        </LanguageDiv>

        <LanguageDiv>
          <LanguageLabel>Spanish:</LanguageLabel>
          <LanguageInput className='esWordInput' defaultValue={props.item.es} />
        </LanguageDiv>

        {
          dropShow && props.list === 'words' ?
          <LanguageDiv>
            <LanguageLabel>Categories:</LanguageLabel>
            <LanguageInput className='categoriesWordInput' defaultValue={props.item.categories} />
          </LanguageDiv>
          : false
        }

      </Body>

      <Footer>
        {props.children}
      </Footer>
    </Dropdown>
  )
}
