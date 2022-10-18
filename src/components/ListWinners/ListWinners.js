import React from 'react'
import './ListWinners.scss'
import Winners from '../Winners/Winners'

const ListWinners = () => {
    const data = ["Gonzalo Ventura", "Gonzalo Ventura", "Gonzalo Ventura", "Gonzalo Ventura", "Gonzalo Ventura", "Gonzalo Ventura", "Gonzalo Ventura"]
  return (
    <div className='list'>
        <ul className='winners'>
            <Winners data={data} />
        </ul>
    </div>
  )
}

export default ListWinners