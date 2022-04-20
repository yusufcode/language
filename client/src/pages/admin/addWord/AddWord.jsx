import React from 'react'
import Helmet from 'react-helmet'
import axios from 'axios'
import { MainContext, useContext } from '../../../context'
import ContinueButton from '../../../components/continueButton'
import WordComp from '../../../components/wordDynamic'
import {Word} from '../../../components/wordDynamic/css'
import AddIcon from '@mui/icons-material/Add';

export default function AddWord() {

  const {notification} = useContext(MainContext)

  function add(e){

    const ruWordInput = e.target.closest(Word).querySelector('.ruWordInput')
    const enWordInput = e.target.closest(Word).querySelector('.enWordInput')
    const trWordInput = e.target.closest(Word).querySelector('.trWordInput')
    const chWordInput = e.target.closest(Word).querySelector('.chWordInput')
    const esWordInput = e.target.closest(Word).querySelector('.esWordInput')
    const categoriesWordInput = e.target.closest(Word).querySelector('.categoriesWordInput')
    const categoriesArray = categoriesWordInput.value.split(',')

    for (let i = 0; i < categoriesArray.length; i++) {
      categoriesArray[i] = categoriesArray[i].trim()
      if(categoriesArray[i] === ''){
        categoriesArray.splice(i, 1)
      }
    }

    axios.post('/api/word', {
      ru: ruWordInput.value,
      en: enWordInput.value,
      tr: trWordInput.value,
      ch: chWordInput.value,
      es: esWordInput.value,
      categories: categoriesArray
    }).then((res)=>{
      notification('success', '')
      ruWordInput.value = ''
      enWordInput.value = ''
      trWordInput.value = ''
      chWordInput.value = ''
      esWordInput.value = ''
      categoriesWordInput.value = ''
    }).catch((err) => {
      notification('error', err.response.statusText)
      console.log(err.response)
    })

  }
  
  return (
    <>
      <Helmet>
        <title>Add Word - Improve Language - Admin</title>
      </Helmet> 

      <WordComp add="word">
        <ContinueButton 
          padding="5px 10px"
          borderColor="#288f88" 
          color="#288f88" 
          onClick={(e)=>add(e)}
        ><AddIcon/></ContinueButton>
      </WordComp>
    </>
  )
}
