import React from 'react'
import './Button.scss'

const Button = () => {
  const sortear = () => {
    console.log("sorteado");
  }

  return (
    <button onClick={sortear} className='btn-sortear'>¡Sortear!</button>
  )
}

export default Button