import React, { useEffect, useState } from 'react'
import { MainContext, useContext } from '../../../context'
import styled from 'styled-components'
import { GeneralDiv, QuestionDiv, QuestionP, AnswerGeneralDiv, AnswerDiv, AnswerP, ButtonFull } from './css'
import Loader from "react-loader-spinner";

export default function Test() {

  useEffect(()=>{
    getQA()
  },[])


  const {setScreenTest, setScreenTestFinished, firstLanguage, secondLanguage, allWords, neverAskedWords, setNeverAskedWords} = useContext(MainContext)

  const [currentQuestion, setCurrentQuestion] = useState()
  const [currentAnswers, setCurrentAnswers] = useState()
  const [choosable, setChoosable] = useState(false)
  const [continueButtonVisibility, setContinueButtonVisibility] = useState(false)

  function clearClasses(){

    const answersDiv = document.querySelector(AnswerGeneralDiv)

    const answers = answersDiv.querySelectorAll(AnswerDiv)

    for (let i = 0; i < answers.length; i++) {
      answers[i].classList.remove('wrongAnswer')
      answers[i].classList.remove('correctAnswer')
      answers[i].classList.remove('truthAnswer')
      answers[i].classList.remove('unChoosable')
    }
    
  }

  async function getQA(){

    if(neverAskedWords.length !== 0){

      clearClasses()
      setChoosable(true)
      setContinueButtonVisibility(false)

      //define new variables to use in function, because otherwise i can't remove asked question from only never asked list
      let inNeverAskedWords = [...neverAskedWords]
      let inAllWords = [...allWords]

      //get a random index number and select a word for question, that index number will be deleted 
      const questionIndex = randomNumber(inNeverAskedWords.length)
      const question = await inNeverAskedWords[questionIndex]
      
      //create new array for answers and random select words
      let answers = []
      for (let i = 0; i < 4; i++) {
        let answerIndex = randomNumber(inAllWords.length)
        if(inAllWords[answerIndex]._id !== question._id){
          answers.push(inAllWords[answerIndex])
          inAllWords.splice(answerIndex, 1)
        } else{
          i--
        }
      }
      
      //add question to next of answers and randomize it
      answers.push(question)
      answers.sort(()=>Math.random() - 0.5)
      
      //set quesiton and answers
      setCurrentQuestion(question)
      setCurrentAnswers(answers)

      //remove asked question from never asked words list, so, there will be always new questions
      inNeverAskedWords.splice(questionIndex, 1)
      setNeverAskedWords(inNeverAskedWords)

    } else {
      setScreenTest(0)
      setScreenTestFinished(1)
    }

  }

  function chooseAnswer(e, choosedAnswerID){

    if(choosable === true){

      const choosedAnswerId = choosedAnswerID
      const choosedAnswerHtml = e.target
      
      const trueAnswerId = currentQuestion._id
      // const trueAnswerHtml = e.target.closest(AnswerGeneralDiv).querySelector(AnswerDiv).attr('wordId', trueAnswerId)
      const answerDivs = e.target.closest(AnswerGeneralDiv).querySelectorAll(AnswerDiv)
      let truthAnswerHtml
      for (let i = 0; i < answerDivs.length; i++) {
        // console.log(answerDivs[i].querySelector(AnswerP).textContent)
        if(answerDivs[i].querySelector(AnswerP).textContent === currentQuestion[firstLanguage]){
          truthAnswerHtml = answerDivs[i]
        }
      }
      
      choosedAnswerHtml.classList.add('thinkingAnswer')

      const answersDiv = document.querySelector(AnswerGeneralDiv)
      const answers = answersDiv.querySelectorAll(AnswerDiv)

      for (let i = 0; i < answers.length; i++) {
        if(!answers[i].classList.contains('thinkingAnswer')){
          answers[i].classList.add('unChoosable')
          setChoosable(false)
        }
      }

      setTimeout(() => {
        if(choosedAnswerId === trueAnswerId){
          choosedAnswerHtml.classList.remove('thinkingAnswer')
          choosedAnswerHtml.classList.add('correctAnswer')
          setContinueButtonVisibility(true)
        } else if(choosedAnswerId !== trueAnswerId){
          choosedAnswerHtml.classList.remove('thinkingAnswer')
          choosedAnswerHtml.classList.add('wrongAnswer')
          //id control and add "the truth one" color
          truthAnswerHtml.classList.remove('unChoosable')
          truthAnswerHtml.classList.add('truthAnswer')
          setContinueButtonVisibility(true)
        }
      }, 400);
      
    }
    
  }

  function randomNumber(max) {
    return Math.floor(Math.random() * max);
  }
  
  return (
    <>
      <GeneralDiv>
        <QuestionDiv>
          {currentQuestion ? 
          <QuestionP>{currentQuestion[secondLanguage]}</QuestionP>  
          : <Loader type="TailSpin" color="#d5d5d5" height={25} width={25}/>
          }
        </QuestionDiv>

        <AnswerGeneralDiv>
          {currentAnswers ? currentAnswers.map((currentAnswersItem, key) => 
          <AnswerDiv key={key} onClick={(e) => chooseAnswer(e, currentAnswersItem._id)} wordId={currentAnswersItem._id}>
            <AnswerP>{currentAnswersItem[firstLanguage]}</AnswerP>
          </AnswerDiv>
          ) 
          : <Loader type="TailSpin" color="#d5d5d5" height={25} width={25}/>
          }
        </AnswerGeneralDiv>

        {continueButtonVisibility ? 
        <ButtonFull type="outline" size="md" color="#002c9d" onClick={() => getQA()}>Next</ButtonFull>
        : false
        }
      </GeneralDiv>
</>
  )
}
