import React, {useState, useEffect} from 'react'
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

export default function ListCategory() {

  useEffect(()=>{
    axios.get('/api/category').then((res)=>{
      setListCategories(res.data)
    })
  },[axios.get('/api/category')])

  const {notification} = useContext(MainContext)

  const [listCategoryies, setListCategories] = useState()

  function update(e, categoryId){

    const categoryInput = e.target.closest(Dropdown).querySelector('.categoryInput').value

    axios.put(`/api/category/${categoryId}`, {
      name: categoryInput
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
  
  return (
    <>
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
          <WordDropdown list="categories" item={listCategoryiesItem} key={key}>
            <ContinueButton 
              padding="5px 10px"
              borderColor="#852020" 
              color="#852020" 
              onClick={() => remove(listCategoryiesItem._id)}
            ><DeleteIcon/></ContinueButton>
            <ContinueButton 
              padding="5px 10px"
              borderColor="#288f88" 
              color="#288f88" 
              onClick={(e) => update(e, listCategoryiesItem._id)}
            ><AutorenewIcon/></ContinueButton>
          </WordDropdown> 
        )
        : <Loader type="TailSpin" color="#d5d5d5" height={25} width={25}/>
      }
    </>
  )
}