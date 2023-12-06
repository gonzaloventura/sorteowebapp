import React from 'react'
import './ListWinners.scss'
import Winners from '../Winners/Winners';
import soundButton from "../assets/button.mp3";

const ListWinners = ({data, sorteo, setSorteo, premiosSorteados, setPremiosSorteados}) => {


    const premios = [
      {
        premio: "$70.000",
        cantidad: 5,
        ganadores: []
      },
      {
        premio: "$70.000",
        cantidad: 5,
        ganadores: []
      },
      {
        premio: "$70.000",
        cantidad: 5,
        ganadores: []
      },
      {
        premio: "$70.000",
        cantidad: 3,
        ganadores: []
      },
      {
        premio: "$70.000",
        cantidad: 3,
        ganadores: []
      },
      {
        premio: "$70.000",
        cantidad: 3,
        ganadores: []
      },
      {
        premio: "$100.000",
        cantidad: 5,
        ganadores: []
      },
      {
        premio: "$100.000",
        cantidad: 5,
        ganadores: []
      },
      {
        premio: "$100.000",
        cantidad: 5,
        ganadores: []
      },
      {
        premio: "$150.000",
        cantidad: 5,
        ganadores: []
      },
      {
        premio: "$150.000",
        cantidad: 5,
        ganadores: []
      },
      {
        premio: "$300.000",
        cantidad: 1,
        ganadores: []
      }
    ];
    
    const audio = new Audio(soundButton);
    
    const reset = () => {
      audio.play();
      setSorteo("btn")
      setPremiosSorteados(premiosSorteados + 1)
    }
    
    return (
    <div className='list'>
        <div className='winners'>
            <Winners data={data} premio={premios} premiosSorteados={premiosSorteados} setPremiosSorteados={setPremiosSorteados} />
        </div>
        <button className="btn-sortear" onClick={reset}>Volver</button>
    </div>
  )
}

export default ListWinners