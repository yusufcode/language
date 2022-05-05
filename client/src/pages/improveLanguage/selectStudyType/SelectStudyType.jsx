import React from 'react'
import { MainContext, useContext } from '../../../context'
import { CardRow, Card, Text } from './css'
import Button from '../../../components/button/Button'

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
        <Button position='fixed' type="outline" size="md" color="#002c9d" onClick={() => continueButton()}>Continue</Button>
        : 
        <Button position='fixed' type="outline" size="md" color="#002c9d" className='disabled'>Continue</Button>
      }
    </>
  )
}
