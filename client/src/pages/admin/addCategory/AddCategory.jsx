import React, { useEffect } from 'react'
import Helmet from 'react-helmet'
import axios from 'axios'
import { MainContext, useContext } from '../../../context'
import ContinueButton from '../../../components/continueButton'
import WordComp from '../../../components/wordDynamic'
import {Word} from '../../../components/wordDynamic/css'
import AddIcon from '@mui/icons-material/Add';

export default function AddCategory() {

  const {notification} = useContext(MainContext)

  function add(e){

    const categoryInput = e.target.closest(Word).querySelector('.categoryInput')

    axios.post('/api/category', {
        name: categoryInput.value
    }).then((res)=>{
      notification('success', '')
      categoryInput.value = ''
    }).catch((err) => {
      notification('error', err.response.statusText)
    })

  }
  
  return (
    <>
      <Helmet>
        <title>Add Category - Improve Language - Admin</title>
      </Helmet> 

      <WordComp add="category">
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
