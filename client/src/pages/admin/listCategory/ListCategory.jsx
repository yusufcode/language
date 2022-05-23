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

export default function ListCategory() {

  useEffect(()=>{
    let queryRu = searchParams.get("ru") || ''
    let queryGb = searchParams.get("gb") || ''
    let queryTr = searchParams.get("tr") || ''
    let queryCh = searchParams.get("ch") || ''
    let queryEs = searchParams.get("es") || ''
    let queryAll = `?ru=${queryRu}&gb=${queryGb}&tr=${queryTr}&ch=${queryCh}&es=${queryEs}`
    
    axios.get(`/api/category${queryAll}`).then((res)=>{
      setListCategories(res.data)
    })
  },[])

  const [searchParams] = useSearchParams();

  const {notification} = useContext(MainContext)

  const [listCategoryies, setListCategories] = useState([])

  function update(e, categoryId){

    const ruInput = e.target.closest(Dropdown).querySelector('.ruInput').value
    const gbInput = e.target.closest(Dropdown).querySelector('.gbInput').value
    const trInput = e.target.closest(Dropdown).querySelector('.trInput').value
    const chInput = e.target.closest(Dropdown).querySelector('.chInput').value
    const esInput = e.target.closest(Dropdown).querySelector('.esInput').value

    axios.put(`/api/category/${categoryId}`, {
      ru: ruInput,
      gb: gbInput,
      tr: trInput,
      ch: chInput,
      es: esInput
    }).then((res) => {
      notification('success', '')
    }).catch((err) => {
      notification('error', err.response.statusText)
    })
    
  }

  function remove(categoryId){

    axios.delete(`/api/category/${categoryId}`).then((res) => {
      notification('success', '')
    }).catch((err) => {
      notification('error', err.response.statusText)
    })

  }

  const miniContext = {
    listCategoryies, setListCategories
  }
  
  return (
    <MainContext.Provider value={miniContext}>
      <Helmet>
        <title>List Category - Improve Language - Admin</title>
      </Helmet> 

      {
        listCategoryies ? 
        listCategoryies.sort((a,b) => {
          if(a._id < b._id) {
            return 1
          } else {
            return -1
          }
        }).map((listCategoryiesItem, key) => 
          <WordDropdown list="categories" item={listCategoryiesItem} key={key} key2={key}>
            <Button type="outline" size="sm" color="#852020" onClick={() => remove(listCategoryiesItem._id)}>Remove<DeleteIcon/></Button>
            <Button type="outline" size="sm" color="#002c9d" onClick={(e) => update(e, listCategoryiesItem._id)}>Update<AutorenewIcon/></Button>
          </WordDropdown> 
        )
        : <Loader type="TailSpin" color="#d5d5d5" height={25} width={25}/>
      }
    </MainContext.Provider>
  )
}
