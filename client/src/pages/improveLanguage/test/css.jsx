import styled from 'styled-components/macro'
import Button from '../../../components/button/Button'

export const GeneralDiv = styled.div`
  max-width: 600px;
  width: 100%;
  height: 360px;
  margin: auto;
  display: flex;
  flex-direction: column;
`

export const QuestionDiv = styled.div`
  border: 2px solid #dfdfdf;
  border-radius: 25px;
  text-align: center;
  margin-bottom: 10px;
  user-select: none;
`

export const QuestionP = styled.p`
  display: block;
  margin: 25px 0;
  text-transform: capitalize;
`

export const AnswerGeneralDiv = styled.div`
  text-align: center;
`

export const AnswerDiv = styled.div`
  border: 1px solid #dfdfdf;
  border-radius: 25px;
  margin-bottom: 5px;
  padding: 10px 0;
  user-select: none;
  cursor: pointer;
  transition: 0.2s all;

  &.thinkingAnswer{
    background-color: #d38c12;
    color: white;
    border: 1px solid #d38c12;
    cursor: default;
  }
  
  &.correctAnswer{
    background-color: #288f88;
    color: white;
    border: 1px solid #288f88;
    cursor: default;
  }

  &.wrongAnswer{
    background-color: #852020;
    color: white;
    border: 1px solid #852020;
    cursor: default;
  }

  &.truthAnswer{
    background-color: #349a17;
    color: white;
    border: 1px solid #349a17;
    cursor: default;
  }

  &.unChoosable{
    background-color: #f5f5f5;
    color: black;
    cursor: default;
  }
`

export const AnswerP = styled.p`
  display: block;
  margin: 0;
  text-transform: capitalize;
  pointer-events: none;
`

export const ButtonFull = styled(Button)`
  width: 100%;
  position: relative;
  bottom: inherit;
  left: inherit;
  transform: inherit;
`