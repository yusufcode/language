import React from 'react'
import {Word, LanguageDiv, LanguageLabel, LanguageInput} from './css'

export default function WordFunc(props) {  
  return (
    <Word>
      <LanguageDiv>
        <LanguageLabel>Russian: </LanguageLabel>
        <LanguageInput className='ruInput'/>
      </LanguageDiv>

      <LanguageDiv>
        <LanguageLabel>English: </LanguageLabel>
        <LanguageInput className='gbInput'/>
      </LanguageDiv>

      <LanguageDiv>
        <LanguageLabel>Turkish: </LanguageLabel>
        <LanguageInput className='trInput'/>
      </LanguageDiv>

      <LanguageDiv>
        <LanguageLabel>Chinese: </LanguageLabel>
        <LanguageInput className='chInput'/>
      </LanguageDiv>

      <LanguageDiv>
        <LanguageLabel>Spanish: </LanguageLabel>
        <LanguageInput className='esInput'/>
      </LanguageDiv>

      {
        props.add === 'word' ?
        <LanguageDiv>
          <LanguageLabel>Categories: </LanguageLabel>
          <LanguageInput className='categoriesInput'/>
        </LanguageDiv>
        : false
      }

      {props.children}
    </Word>
  )
}
