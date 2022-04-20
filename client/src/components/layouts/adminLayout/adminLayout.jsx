import React, { Children } from 'react'
import { AdminTemplate, CenterTemplate } from './css'
import Navbar from './navbar'
import Sidebar from './sidebar'
import Content from './content'
import { ToastContainer } from 'react-toastify';

export default function adminLayout(props) {
  return (
    <AdminTemplate>

      <ToastContainer/>

      <Navbar/>

      <CenterTemplate>
        <Sidebar/>
        <Content>
          {props.children}
        </Content>
      </CenterTemplate>

    </AdminTemplate>
  )
}
