import React from 'react'
import './Button.scss'

const Button = () => {
  const sortear = () => {
    alert("sorteado");
  }

  return (
    <button onClick={sortear} className='btn-sortear'>¡Sortear!</button>
  )
}

export default Button