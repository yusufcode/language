import React, {useState} from 'react'
import Helmet from 'react-helmet'
import axios from 'axios'
import { MainContext, useContext } from '../../../context'
import ContinueButton from '../../../components/continueButton'
import AddIcon from '@mui/icons-material/Add';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {TableCover, Table, Thead, Tbody, Tr, Td, Input, ButtonsDiv, DeleteLabel} from './css'
import * as XLSX from 'xlsx'
import InputFile from '../../../components/inputFile'

export default function AddWordMulti() {

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
    setRowsTable([...rowsTable, {ru:"",en:"",tr:"",ch:"",es:""}])
    // const allTr = document.querySelector(Tbody).querySelectorAll(Tr)
    // for (let i = 0; i < allTr.length; i++) {
    //   console.log(allTr[i])
    // }
  }

  function addToDatabase(){
    
    for (let i = 0; i < rowsTable.length; i++) {
      console.log(rowsTable[i])
      axios.post('/api/category', rowsTable[i]).then((res)=>{
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
        <title>Add Word (Multiple) - Improve Language - Admin</title>
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
                    <Td><Input value={rowTable.en} name="en" onChange={(e) => changeInput(key, e)}/></Td>
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
          <ContinueButton 
            padding="5px 10px"
            color="#a1a1a1" 
            borderColor="#a1a1a1" 
            hoverColor="white"
            hoverBorderColor="#a1a1a1"
            hoverBackgroundColor="#a1a1a1"
            margin="0 2.5px 0 0"
            onClick={()=>addRowTable()}
          >Add New Row <AddCircleOutlineIcon/></ContinueButton>

          <InputFile 
            padding="5px 10px"
            color="#288f88" 
            borderColor="#288f88" 
            hoverColor="white" 
            hoverBorderColor="#288f88" 
            hoverBackgroundColor="#288f88" 
            accept=".xlsx"
            onChange={(e)=>importExcelFile(e)}
          >Import Excel File <UploadFileIcon/></InputFile>

          <ContinueButton 
            padding="5px 10px"
            color="#288f88" 
            borderColor="#288f88" 
            hoverColor="white" 
            hoverBorderColor="#288f88" 
            hoverBackgroundColor="#288f88" 
            margin="0 0 0 auto"
            onClick={(e)=>addToDatabase(e)}
          >Add to Database<AddIcon/></ContinueButton>

        </ButtonsDiv>
      </TableCover>
    </>
  )
}
