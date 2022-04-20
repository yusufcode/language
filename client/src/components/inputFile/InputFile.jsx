import React from 'react'
import {Label, Input} from './css'

export default function InputFile(props) {
  return (
    <Label {...props}>
      {props.children}
      <Input type="file" accept={props.accept} />
    </Label>
  )
}
