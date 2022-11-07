import React from 'react'
import './ListWinners.scss'
import Winners from '../Winners/Winners';
import soundButton from "../assets/button.mp3";

const ListWinners = ({data, sorteo, setSorteo, premiosSorteados, setPremiosSorteados}) => {


    const premios = [
      {
        premio: "Reloj watch Smart Band Deportivo",
        cantidad: 5,
        ganadores: []
      },
      {
        premio: "CargaBank Gadnic 18000 Mah Usb",
        cantidad: 5,
        ganadores: []
      },
      {
        premio: "BIG BOX- Experiencia Gourmet",
        cantidad: 10,
        ganadores: []
      },
      {
        premio: "Auriculares in-ear inalambricos Sony",
        cantidad: 5,
        ganadores: []
      },
      {
        premio: "BIG BOX- Harmonie (Relax)",
        cantidad: 5,
        ganadores: []
      },
      {
        premio: "BIG BOX- En las nubes (Aventura)",
        cantidad: 10,
        ganadores: []
      },
      {
        premio: "Cafetera Nespresso Essenza Mini",
        cantidad: 5,
        ganadores: []
      },
      {
        premio: "Tablet lenovo tax k10 10,3 full hd",
        cantidad: 5,
        ganadores: []
      },
      {
        premio: "Smart TV LED Samsung Dk43 x 5100",
        cantidad: 2,
        ganadores: []
      },
      {
        premio: "Voucher por USD 7000 para canjear en Full Congress",
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
        <button className="btn-reset" onClick={reset}>RESET</button>
    </div>
  )
}

export default ListWinners