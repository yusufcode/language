import React from 'react'
import {Button} from './css'

export default function ButtonFunc(props) {
  
  return (
    <Button {...props}>{props.children}</Button>
  )
}
