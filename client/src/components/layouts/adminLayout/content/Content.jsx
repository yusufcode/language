import React from 'react'
import {Content} from './css'

export default function ContentFunc(props) {
  return (
    <Content>
      {props.children}
    </Content>
  )
}
