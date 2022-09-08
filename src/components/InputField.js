import React from 'react'
import { InputStyle } from '../styles/FormStyle'

const InputField = ({ type, placeHolder, handleChange, query, status }) => (
  <InputStyle
    type={type}
    value={query}
    placeholder={placeHolder}
    onChange={handleChange}
    status={status}
  />
)

export default InputField
