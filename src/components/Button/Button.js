import React from 'react'
import './Button.scss'

const Button = ({sorteo, setSorteo}) => {
  const sortear = () => {
    setSorteo("text");
    setTimeout(()=>{
      setSorteo("winners")
    }, 6000)
  }

  return (
    <button onClick={sortear} className='btn-sortear'>¡Sortear!</button>
  )
}

export default Button