import React, {useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import Helmet from 'react-helmet'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import { MainContext, useContext } from '../../../context'
import WordDropdown from '../../../components/wordDropdown'
import Button from '../../../components/button'
import {Dropdown} from '../../../components/wordDropdown/css'
import 'react-toastify/dist/ReactToastify.css';
import DeleteIcon from '@mui/icons-material/Delete';
import AutorenewIcon from '@mui/icons-material/Autorenew';

export default function ListWord() {

  useEffect(()=>{
    let queryCategory = searchParams.get("category") || ''
    let queryRu = searchParams.get("ru") || ''
    let queryGb = searchParams.get("gb") || ''
    let queryTr = searchParams.get("tr") || ''
    let queryCh = searchParams.get("ch") || ''
    let queryEs = searchParams.get("es") || ''
    let queryAll = `?category=${queryCategory}&ru=${queryRu}&gb=${queryGb}&tr=${queryTr}&ch=${queryCh}&es=${queryEs}`

    axios.get(`/api/word${queryAll}`).then((res)=>{
      setListWords(res.data)
    })
  },[])

  const [searchParams] = useSearchParams()

  const {notification} = useContext(MainContext)

  const [listWords, setListWords] = useState()

  function update(e, wordId){

    const ruWordInput = e.target.closest(Dropdown).querySelector('.ruInput').value
    const gbWordInput = e.target.closest(Dropdown).querySelector('.gbInput').value
    const trWordInput = e.target.closest(Dropdown).querySelector('.trInput').value
    const chWordInput = e.target.closest(Dropdown).querySelector('.chInput').value
    const esWordInput = e.target.closest(Dropdown).querySelector('.esInput').value
    const categoriesWordInput = e.target.closest(Dropdown).querySelector('.categoriesInput').value
    const categoriesArray = categoriesWordInput.split(',')

    for (let i = 0; i < categoriesArray.length; i++) {
      categoriesArray[i] = categoriesArray[i].trim()
      if(categoriesArray[i] === ''){
        categoriesArray.splice(i, 1)
      }
    }

    axios.put(`/api/word/${wordId}`, {
      ru: ruWordInput,
      gb: gbWordInput,
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

  const miniContext = {
    listWords, setListWords
  }
  
  return (
    <MainContext.Provider value={miniContext}>
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
          <WordDropdown list="words" item={listWordsItem} key={key} key2={key}>
            <Button type="outline" size="sm" color="#852020" onClick={() => remove(listWordsItem._id)}>Remove<DeleteIcon/></Button>
            <Button type="outline" size="sm" color="#002c9d" onClick={(e) => update(e, listWordsItem._id)}>Update<AutorenewIcon/></Button>
          </WordDropdown> 
        )
        : <Loader type="TailSpin" color="#d5d5d5" height={25} width={25}/>
      }
    </MainContext.Provider>
  )
}
