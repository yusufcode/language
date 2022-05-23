import React, { useEffect } from 'react'
import Helmet from 'react-helmet'
import axios from 'axios'
import { MainContext, useContext } from '../../../context'
import Button from '../../../components/button'
import WordComp from '../../../components/wordDynamic'
import {Word} from '../../../components/wordDynamic/css'
import AddIcon from '@mui/icons-material/Add';

export default function AddCategory() {

  const {notification} = useContext(MainContext)

  function add(e){

    const ruInput = e.target.closest(Word).querySelector('.ruInput')
    const gbInput = e.target.closest(Word).querySelector('.gbInput')
    const trInput = e.target.closest(Word).querySelector('.trInput')
    const chInput = e.target.closest(Word).querySelector('.chInput')
    const esInput = e.target.closest(Word).querySelector('.esInput')

    axios.post('/api/category', {
        ru: ruInput.value,
        gb: gbInput.value,
        tr: trInput.value,
        ch: chInput.value,
        es: esInput.value,
    }).then((res)=>{
      notification('success', '')
      ruInput.value = ''
      gbInput.value = ''
      trInput.value = ''
      chInput.value = ''
      esInput.value = ''
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
      <Button type="primary" size="md" color="#002c9d" onClick={(e)=>add(e)}>Add to Database<AddIcon/></Button>
      </WordComp>
    </>
  )
}
