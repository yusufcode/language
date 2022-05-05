import React, {useState} from 'react'
import { MainContext, useContext } from '../../../context'
import Flag from 'react-country-flag'
import {FlagRow, FlagCard, LanguageList, LanguageListItem, SelectLanguageGeneral} from './css'
import Button from '../../../components/button/Button'

export default function SelectLanguage() {

  const allLanguages = ['GB', 'RU', 'TR', 'CN', 'ES']

  const {setScreenSelectLanguage, setScreenSelectStudyType} = useContext(MainContext)

  const {firstLanguage, setFirstLanguage} = useContext(MainContext)
  const {secondLanguage, setSecondLanguage} = useContext(MainContext)

  const [showLanguageList, setShowLanguageList] = useState(0)
  const [changingLanguage, setChangingLanguage] = useState(0)

  function dropLanguage(e, selected){
    setChangingLanguage(selected)
    
    const selectedCard = e.target.closest(FlagCard)
    const allCards = e.target.closest(FlagRow).querySelectorAll(FlagCard)

    if(!selectedCard.classList.contains('selected')){
      for (let i = 0; i < allCards.length; i++) {
        allCards[i].classList.remove('selected')
      }
      selectedCard.classList.add('selected')
      setShowLanguageList(1)
    } else{
      selectedCard.classList.remove('selected')
      setShowLanguageList(0)
    }
    
    
    
  }

  function selectLanguage(e, selected){
    if(changingLanguage === 'firstLanguage'){
      setFirstLanguage(selected)
      setShowLanguageList(0)
    } else if(changingLanguage === 'secondLanguage'){
      setSecondLanguage(selected)
      setShowLanguageList(0)
    }

    const allCards = e.target.closest(SelectLanguageGeneral).querySelectorAll(FlagCard)
    for (let i = 0; i < allCards.length; i++) {
      allCards[i].classList.remove('selected')
    }
  }

  function continueButton(){
    setScreenSelectLanguage(0)
    setScreenSelectStudyType(1)
  }
  
  return (
    <>
      <SelectLanguageGeneral>
        <FlagRow>
          <FlagCard onClick={(e) => {
            dropLanguage(e, 'firstLanguage')
          }}>
            {
              firstLanguage ?
              <Flag countryCode={firstLanguage} svg className='flagImg'/>
              : <p className='selectLanguage'>Choose Language</p>
            }
          </FlagCard>

          <FlagCard onClick={(e) => {
            dropLanguage(e, 'secondLanguage')
          }}>
            {
              secondLanguage ?
              <Flag countryCode={secondLanguage} svg className='flagImg'/>
              : <p className='selectLanguage'>Choose Language</p>
            }
          </FlagCard>
        </FlagRow>

        {
          showLanguageList ?
          <LanguageList>

            {
              allLanguages.map((allLanguagesItem, key) => 
              <LanguageListItem key={key}>
                <Flag countryCode={allLanguagesItem} svg className='flagImg' onClick={(e) => selectLanguage(e, allLanguagesItem.toLowerCase())}/>
              </LanguageListItem>
              )
            }
            
          </LanguageList>
          : false
        }
      </SelectLanguageGeneral>

      {
        (firstLanguage && secondLanguage) ?
        <Button position='fixed' type="outline" size="md" color="#002c9d" onClick={() => continueButton()}>Continue</Button>
        : 
        <Button position='fixed' type="outline" size="md" color="#002c9d" className='disabled'>Continue</Button>
      }


    </>
  )
}
