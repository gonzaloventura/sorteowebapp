import React, {useState} from 'react'
import './ListWinners.scss'
import Winners from '../Winners/Winners';
import soundButton from "../assets/button.mp3";

const ListWinners = ({sorteo, setSorteo, premiosSorteados, setPremiosSorteados}) => {
    const data = ["Guillermo Montilla", "Maria Victoria Pagliaricci", "Malcom Azcurra Moriena", "Pablo Auliso", "Santiago Fiandino", "Maria Victoria Anomale", "Leandro Agusti", "Gonzalo Filipuzzi", "Mauricio Di Niro", "Nicolas Marin Moreno y Ana Laura Della Mea", "Gustavo A. Ardanaz", "Cristian Cazorla", "Guillermo José Ruival", "Pablo FERNANDEZ BARRON", "José Ariel Montilla", "Santiago Ardanaz", "Oscar Satorre y Cristian Cazorla", "Marcos Cesar Magnano", "Roberto Hume y Sabrina Pinedo", "Lucia Bolañes"]


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
        premio: "SEGUNDO PREMIO",
        cantidad: 5,
        ganadores: []
      },
      {
        premio: "SEGUNDO PREMIO",
        cantidad: 5,
        ganadores: []
      },
      {
        premio: "SEGUNDO PREMIO",
        cantidad: 10,
        ganadores: []
      },
      {
        premio: "TERCER PREMIO",
        cantidad: 5,
        ganadores: []
      },
      {
        premio: "TERCER PREMIO",
        cantidad: 5,
        ganadores: []
      },
      {
        premio: "TERCER PREMIO",
        cantidad: 2,
        ganadores: []
      },
      {
        premio: "PREMIO MAYOR",
        cantidad: 1,
        ganadores: []
      }
    ];

    const premiosSegundaTanda = [
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
      }
    ];

    const premiosTerceraTanda = [
      {
        premio: "Cafetera Nespresso Essenza Mini ",
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
      }
    ]

    const premiosCuartaTanda = [
      {
        premio: "Voucher por USD 7000 para canjear en Full Congress",
        cantidad: 5,
        ganadores: []
      }
    ]
    
    const audio = new Audio(soundButton);
    
    const reset = () => {
      audio.play();
      setSorteo("btn")
      setPremiosSorteados(premiosSorteados + 1)
      console.log("sorteados: ", premiosSorteados)
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