import React from 'react'
import './ListWinners.scss'
import Winners from '../Winners/Winners'

const ListWinners = () => {
    const data = ["Guillermo Montilla", "Maria Victoria Pagliaricci", "Malcom Azcurra Moriena", "Pablo Auliso", "Santiago Fiandino", "Maria Victoria Anomale", "Leandro Agusti", "Gonzalo Filipuzzi", "Mauricio Di Niro", "Nicolas Marin Moreno y Ana Laura Della Mea", "Gustavo A. Ardanaz", "Cristian Cazorla", "Guillermo José Ruival", "Pablo FERNANDEZ BARRON", "José Ariel Montilla", "Santiago Ardanaz", "Oscar Satorre y Cristian Cazorla", "Marcos Cesar Magnano", "Roberto Hume y Sabrina Pinedo", "Lucia Bolañes"]
  return (
    <div className='list'>
        <div className='winners'>
            <Winners data={data} />
        </div>
    </div>
  )
}

export default ListWinners