import React, {useState} from 'react'
import Helmet from 'react-helmet'
import axios from 'axios'
import { MainContext, useContext } from '../../../context'
import Button from '../../../components/button'
import AddIcon from '@mui/icons-material/Add';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {TableCover, Table, Thead, Tbody, Tr, Td, Input, ButtonsDiv, DeleteLabel} from './css'
import * as XLSX from 'xlsx'
import InputFileButton from '../../../components/inputFileButton'

export default function AddCategoryMultiple() {

  const {notification} = useContext(MainContext)

  const [rowsTable, setRowsTable] = useState([])

  function importExcelFile(e){

    const file = e.target.files[0]
    
    const promise = new Promise((resolve, reject) => {

      const fileReader = new FileReader()
      fileReader.readAsArrayBuffer(file)

      fileReader.onload=(e)=>{
        const bufferArray = e.target.result
        const wb = XLSX.read(bufferArray,{type:'buffer'})
        const wsName = wb.SheetNames[0]
        const ws = wb.Sheets[wsName]
        const data = XLSX.utils.sheet_to_json(ws)
        resolve(data)
      }

      fileReader.onerror = (e) => {
        reject(e)
      }

    })

    promise.then((data)=>{
      setRowsTable([...rowsTable, ...data])
    })
    
  }

  function changeInput(key, e){
    const values = [...rowsTable]
    values[key][e.target.name] = e.target.value
    setRowsTable(values)
  }

  function removeRowTable(key){
    const allItems = [...rowsTable]
    allItems.splice(key, 1)
    setRowsTable(allItems)
  }

  function addRowTable(){
    setRowsTable([...rowsTable, {ru:"",gb:"",tr:"",ch:"",es:""}])
    // const allTr = document.querySelector(Tbody).querySelectorAll(Tr)
    // for (let i = 0; i < allTr.length; i++) {
    //   console.log(allTr[i])
    // }
  }

  function addToDatabase(){
    
    for (let i = 0; i < rowsTable.length; i++) {
      axios.post('https://yusufcode-language-server.herokuapp.com/api/category', rowsTable[i]).then((res)=>{
        notification('success', '')
      }).catch((err) => {
        notification('error', err.response.statusText)
        console.log(err.response)
      })
    }

  }
  
  return (
    <>
      <Helmet>
        <title>Add Category (Multiple) - Improve Language - Admin</title>
      </Helmet> 

      <TableCover>
        <Table>
            <Thead>
              <Tr>
                <Td>Russian</Td>
                <Td>English</Td>
                <Td>Turkish</Td>
                <Td>Chinese</Td>
                <Td>Spanish</Td>
                <Td>Actions</Td>
              </Tr>
            </Thead>
            <Tbody>
              {
                rowsTable.map((rowTable,key)=>(
                  <Tr key={key}>
                    <Td><Input value={rowTable.ru} name="ru" onChange={(e) => changeInput(key, e)}/></Td>
                    <Td><Input value={rowTable.gb} name="gb" onChange={(e) => changeInput(key, e)}/></Td>
                    <Td><Input value={rowTable.tr} name="tr" onChange={(e) => changeInput(key, e)}/></Td>
                    <Td><Input value={rowTable.ch} name="ch" onChange={(e) => changeInput(key, e)}/></Td>
                    <Td><Input value={rowTable.es} name="es" onChange={(e) => changeInput(key, e)}/></Td>
                    <Td><DeleteLabel onClick={(e)=>removeRowTable(key)} >Remove</DeleteLabel></Td>
                  </Tr>
                ))
              }
          </Tbody>
        </Table>
        <ButtonsDiv>
          <Button type="outline" size="md" color="#a1a1a1" margin="0 2.5px 0 0" onClick={()=>addRowTable()}>Add New Row <AddCircleOutlineIcon/></Button>
          <InputFileButton type="outline" size="md" color="#002c9d" accept=".xlsx" onChange={(e)=>importExcelFile(e)}>Import Excel File <UploadFileIcon/></InputFileButton>
          <Button type="primary" size="md" color="#002c9d" margin="0 0 0 auto" onClick={(e)=>addToDatabase(e)}>Add to Database<AddIcon/></Button>
        </ButtonsDiv>
      </TableCover>
    </>
  )
}
