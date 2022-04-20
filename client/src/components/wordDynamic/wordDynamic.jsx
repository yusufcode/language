import React from 'react'
import {Word, LanguageDiv, LanguageLabel, LanguageInput} from './css'

export default function WordFunc(props) {  
  return (
    <Word>
      {
        props.add === 'word' ?
        <>
          <LanguageDiv>
            <LanguageLabel>Russian: </LanguageLabel>
            <LanguageInput className='ruWordInput'/>
          </LanguageDiv>

          <LanguageDiv>
            <LanguageLabel>English: </LanguageLabel>
            <LanguageInput className='enWordInput'/>
          </LanguageDiv>

          <LanguageDiv>
            <LanguageLabel>Turkish: </LanguageLabel>
            <LanguageInput className='trWordInput'/>
          </LanguageDiv>

          <LanguageDiv>
            <LanguageLabel>Chinese: </LanguageLabel>
            <LanguageInput className='chWordInput'/>
          </LanguageDiv>

          <LanguageDiv>
            <LanguageLabel>Spanish: </LanguageLabel>
            <LanguageInput className='esWordInput'/>
          </LanguageDiv>

          <LanguageDiv>
            <LanguageLabel>Categories: </LanguageLabel>
            <LanguageInput className='categoriesWordInput'/>
          </LanguageDiv>
        </>
        : props.add === 'category' ?
        <>
          <LanguageDiv>
            <LanguageLabel>Category: </LanguageLabel>
            <LanguageInput className='categoryInput'/>
          </LanguageDiv>
        </>
        : false
      }

      {props.children}
    </Word>
  )
}
