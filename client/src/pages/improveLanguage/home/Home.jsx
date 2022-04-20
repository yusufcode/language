import React from 'react'
import { MainContext, useContext } from '../../../context'
import {Helmet} from 'react-helmet'
import { BodyCover } from './css'
import SelectLanguage from '../selectLanguage/'
import SelectStudyType from '../selectStudyType/'
import SelectCategory from '../selectCategory/'
import Test from '../test/'
import TestFinished from '../testFinished/'

export default function Home() {

  const {
    screenSelectLanguage, 
    screenSelectStudyType,
    screenSelectCategory,
    screenTest,
    screenTestFinished,
    firstLanguage, 
    secondLanguage, 
    studyType,
    category,
    neverAskedWords
  } = useContext(MainContext)

  return (
    <>
      <Helmet>
        <title>Improve Language</title>
        <meta name="description" content="Improve your languages."/>
        <meta name="keywords" content="improve language, learn language"></meta>
      </Helmet>  

      <BodyCover>
        {/* <p>First Language: {firstLanguage}</p>
        <p>Second Language: {secondLanguage}</p>
        <p>Study Type: {studyType}</p>
        <p>Category: {category}</p>
        <p>Never Asked Questions: {neverAskedWords ? neverAskedWords.length : false}</p> */}

        {
          screenSelectLanguage ? 
          <SelectLanguage/>
          : false
        }

        {
          screenSelectStudyType ? 
          <SelectStudyType/>
          : false
        }

        {
          screenSelectCategory ? 
          <SelectCategory/>
          : false
        }

        {
          screenTest ? 
          <Test/>
          : false
        }

        {
          screenTestFinished ? 
          <TestFinished/>
          : false
        }
      </BodyCover>

    </>
  )
}
