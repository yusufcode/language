import React, {useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import Helmet from 'react-helmet'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import { MainContext, useContext } from '../../../context'
import WordDropdown from '../../../components/wordDropdown'
import ContinueButton from '../../../components/continueButton'
import {Dropdown} from '../../../components/wordDropdown/css'
import 'react-toastify/dist/ReactToastify.css';
import DeleteIcon from '@mui/icons-material/Delete';
import AutorenewIcon from '@mui/icons-material/Autorenew';

export default function ListWord() {

  useEffect(()=>{
    let queryCategoryApi = queryCategory || ''
    let queryRuApi = queryRu || ''
    let queryEnApi = queryEn || ''
    let queryTrApi = queryTr || ''
    let queryAll = `?category=${queryCategoryApi}&ru=${queryRuApi}&en=${queryEnApi}&tr=${queryTrApi}`

    axios.get(`/api/word${queryAll}`).then((res)=>{
      setListWords(res.data)
    })
  },[axios.get('/api/word')])

  const [searchParams, setSearchParams] = useSearchParams();
  const queryCategory = searchParams.get("category")
  const queryRu = searchParams.get("ru")
  const queryEn = searchParams.get("en")
  const queryTr = searchParams.get("tr")

  const {notification} = useContext(MainContext)

  const [listWords, setListWords] = useState()

  function update(e, wordId){

    const ruWordInput = e.target.closest(Dropdown).querySelector('.ruWordInput').value
    const enWordInput = e.target.closest(Dropdown).querySelector('.enWordInput').value
    const trWordInput = e.target.closest(Dropdown).querySelector('.trWordInput').value
    const chWordInput = e.target.closest(Dropdown).querySelector('.chWordInput').value
    const esWordInput = e.target.closest(Dropdown).querySelector('.esWordInput').value
    const categoriesWordInput = e.target.closest(Dropdown).querySelector('.categoriesWordInput').value
    const categoriesArray = categoriesWordInput.split(',')

    for (let i = 0; i < categoriesArray.length; i++) {
      categoriesArray[i] = categoriesArray[i].trim()
      if(categoriesArray[i] === ''){
        categoriesArray.splice(i, 1)
      }
    }

    axios.put(`/api/word/${wordId}`, {
      ru: ruWordInput,
      en: enWordInput,
      tr: trWordInput,
      ch: chWordInput,
      es: esWordInput,
      categories: categoriesArray
    }).then((res) => {
      notification('success', '')
    }).catch((err) => {
      notification('error', err.response.statusText)
    })
    
  }

  function remove(wordId){

    axios.delete(`/api/word/${wordId}`).then((res) => {
      notification('success', '')
    }).catch((err) => {
      notification('error', err.response.statusText)
    })

  }
  
  return (
    <>
      <Helmet>
        <title>List Word - Improve Language - Admin</title>
      </Helmet> 

      {
        listWords ? 
        listWords.sort((a,b) => {
          if(a._id < b._id) {
            return 1
          } else {
            return -1
          }
        }).map((listWordsItem, key) => 
          <WordDropdown list="words" item={listWordsItem} key={key}>
            <ContinueButton 
              padding="5px 10px"
              borderColor="#852020" 
              color="#852020" 
              onClick={() => remove(listWordsItem._id)}
            ><DeleteIcon/></ContinueButton>
            <ContinueButton 
              padding="5px 10px"
              borderColor="#288f88" 
              color="#288f88" 
              onClick={(e) => update(e, listWordsItem._id)}
            ><AutorenewIcon/></ContinueButton>
          </WordDropdown> 
        )
        : <Loader type="TailSpin" color="#d5d5d5" height={25} width={25}/>
      }
    </>
  )
}
