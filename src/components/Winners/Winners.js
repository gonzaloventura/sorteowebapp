import React from 'react'
import './Winners.scss'

const Winners = ({data}) => {
  return (
    <>
          {data.map((ganador) => (
            <div key={ganador} className='winner'>{ganador}</div>
          ))
         }
    </>
  )
}

export default Winners