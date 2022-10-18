import React from 'react'
import './Winners.scss'

const Winners = ({data}) => {
  return (
    <>
          {data.map((ganador) => (
            <li key={ganador} className='winner'>{ganador}</li>
          ))
         }
         </>
  )
}

export default Winners