import React from 'react'
import './ListWinners.scss'
import Winners from '../Winners/Winners';
import soundButton from "../assets/button.mp3";

const ListWinners = ({data, sorteo, setSorteo, premiosSorteados, setPremiosSorteados}) => {


    const premios = [
      {
        premio: "$130.000",
        cantidad: 10,
        ganadores: []
      },
      {
        premio: "$130.000",
        cantidad: 10,
        ganadores: []
      },
      {
        premio: "$130.000",
        cantidad: 5,
        ganadores: []
      },
      {
        premio: "$180.000",
        cantidad: 5,
        ganadores: []
      },
      {
        premio: "$180.000",
        cantidad: 10,
        ganadores: []
      },
      {
        premio: "$180.000",
        cantidad: 5,
        ganadores: []
      },
      {
        premio: "$220.000",
        cantidad: 10,
        ganadores: []
      },
      {
        premio: "$300.000",
        cantidad: 7,
        ganadores: []
      },
      {
        premio: "$400.000",
        cantidad: 2,
        ganadores: []
      },
      {
        premio: "$550.000",
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
        <div className={premiosSorteados < 8 ? 'winners' : premiosSorteados < 9 ? 'winnersSiete' : premiosSorteados < 10 ? 'winnersDos' : 'winnersUno'}>
            <Winners data={data} premio={premios} premiosSorteados={premiosSorteados} setPremiosSorteados={setPremiosSorteados} />
        </div>
        <button className="btn-sortear" onClick={reset}>Siguiente</button>
    </div>
  )
}

export default ListWinners