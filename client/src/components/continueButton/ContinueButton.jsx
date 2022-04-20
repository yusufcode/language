import React from 'react'
import {ContinueButton} from './css'

export default function ContinueButtonFunc(props) {
  return (
    <ContinueButton {...props}>{props.children}</ContinueButton>
  )
}
