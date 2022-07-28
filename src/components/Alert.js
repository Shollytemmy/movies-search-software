import React from 'react'
import {GoAlert} from 'react-icons/go'

export const Alert = ({message, type}) => {
  return (
    <div className={`alert alert-${type}`}>
        <GoAlert /> {message}
        
        </div>
  )
}
