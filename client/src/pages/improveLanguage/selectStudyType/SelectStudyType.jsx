import React from 'react'
import { MainContext, useContext } from '../../../context'
import { CardRow, Card, Text } from './css'
import ContinueButton from '../../../components/continueButton/ContinueButton'

export default function SelectStudyType() {

  const {studyType, setStudyType, setScreenSelectStudyType, setScreenSelectCategory} = useContext(MainContext)

  function select(e, selected){
    setStudyType(selected)
    const selectedCard = e.target.closest(Card)
    const allCards = e.target.closest(CardRow).querySelectorAll(Card)
    for (let i = 0; i < allCards.length; i++) {
      allCards[i].classList.remove('selected')
    }
    selectedCard.classList.add('selected')
  }
  
  function continueButton(){
    setScreenSelectStudyType(0)
    setScreenSelectCategory(1)
  }
  
  return (
    <>
      <CardRow>
        <Card onClick={(e) => select(e, 'learn')}>
          <Text>
            Learn
          </Text>
        </Card>
        <Card onClick={(e) => select(e, 'test')}>
          <Text>
            Test
          </Text>
        </Card>
      </CardRow>

      {
        studyType ?
        <ContinueButton position='fixed' onClick={() => continueButton()}>Continue</ContinueButton>
        : 
        <ContinueButton position='fixed' className='disabled'>Continue</ContinueButton>
      }
    </>
  )
}
