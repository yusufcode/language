import React from 'react'
import { MainContext, useContext } from '../../../context'
import {Helmet} from 'react-helmet'
import { BodyCover, TestText, TestTextTitle, TestTextResult } from './css'
import Navbar from '../../../components/navbar'
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

        <TestText>
          <TestTextTitle>First Language:</TestTextTitle>
          <TestTextResult>{firstLanguage || 'undefined'}</TestTextResult>
        </TestText>

        <TestText>
          <TestTextTitle>Second Language:</TestTextTitle>
          <TestTextResult>{secondLanguage || 'undefined'}</TestTextResult>
        </TestText>

        <TestText>
          <TestTextTitle>Study Type:</TestTextTitle>
          <TestTextResult>{studyType || 'undefined'}</TestTextResult>
        </TestText>
        
        <TestText>
          <TestTextTitle>Category:</TestTextTitle>
          <TestTextResult>{category || 'undefined'}</TestTextResult>
        </TestText>
        
        <TestText>
          <TestTextTitle>Never Asked Questions:</TestTextTitle>
          <TestTextResult>{neverAskedWords ? neverAskedWords.length : 'undefined'}</TestTextResult>
        </TestText>

        <Navbar/>

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
