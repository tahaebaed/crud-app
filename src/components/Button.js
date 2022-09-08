import React from 'react'
import { ButtonStyle } from '../styles/FormStyle'

const Button = ({ type, handleClick, children, background, hover }) => (
  <ButtonStyle
    type={type}
    onClick={handleClick}
    background={background}
    hover={hover}
  >
    {children}
  </ButtonStyle>
)

export default Button
