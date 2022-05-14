import React, { useEffect, useState } from 'react'
import { MainContext, useContext } from '../../../context'
import { Title, Ul, Li } from './css'
import Button from '../../../components/button/Button'
import Loader from "react-loader-spinner";
import axios from 'axios';

export default function SelectCategory() {

  useEffect(()=>{
    axios.get('https://yusufcode-language-server.herokuapp.com/api/category').then((res) => {
      setCategories(res.data)
    })
  },[])

  function getWords(cat){
    if(cat){
      axios.get(`https://yusufcode-language-server.herokuapp.com/api/word?category=${cat}`).then((res) => {
        setAllWords(res.data)
        setNeverAskedWords(res.data)
      })
    }
  }

  const [categories, setCategories] = useState()

  const {setScreenSelectCategory, setScreenTest, firstLanguage, studyType, category, setCategory, setAllWords, 
    setNeverAskedWords} = useContext(MainContext)

  function select(e, selected){
    setCategory(selected)
    const selectedLi = e.target.closest(Li)
    const allLi = e.target.closest(Ul).querySelectorAll(Li)
    for (let i = 0; i < allLi.length; i++) {
      allLi[i].classList.remove('selected')
    }
    selectedLi.classList.add('selected')
  }

  function continueButton(){
    setScreenSelectCategory(0)
    if(studyType === 'test'){
      setScreenTest(1)
    }
  }
  
  return (
    <>
      <Title>Categories:</Title>
      {
        categories ?
        <Ul>
          {categories.map((categoriesItem, key) =>
            <Li key={key} onClick={(e) => {
              select(e, categoriesItem.gb)
              getWords(categoriesItem.gb)
            }}>{categoriesItem[firstLanguage]}</Li>
          )}
        </Ul>
        : <Loader type="TailSpin" color="#d5d5d5" height={25} width={25}/>
      }

      {
        category ?
        <Button position='fixed' type="outline" size="md" color="#002c9d" onClick={() => continueButton()}>Continue</Button>
        : 
        <Button position='fixed' type="outline" size="md" color="#002c9d" className='disabled'>Continue</Button>
      }
    </>
  )
}
