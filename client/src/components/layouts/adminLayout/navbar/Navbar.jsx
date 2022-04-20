import React from 'react'
import {Navbar, H1, Ahref} from './css'

export default function NavbarFunc() {
  return (
    <Navbar>
      <H1>Dashboard</H1>
      <Ahref href="/" target="_blank">Go to website</Ahref>
    </Navbar>
  )
}
