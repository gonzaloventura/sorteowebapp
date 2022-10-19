import React from 'react';
import './Button.scss';
import soundButton from "../assets/button.mp3";
import sorteandoSound from "../assets/sorteando.mp3";
import successSound from "../assets/success.mp3";

const Button = ({sorteo, setSorteo}) => {
  const audio = new Audio(soundButton);
  const audioSorteando = new Audio(sorteandoSound);
  const audioSuccess = new Audio(successSound);

  const sortear = () => {
    audio.play();
    setSorteo("text");
    audioSorteando.play()
    setTimeout(()=>{
      setSorteo("winners");
      audioSuccess.play();
    }, 4000)
  }

  return (
    <>
    <button onClick={sortear} className='btn-sortear'>¡Sortear!</button>
    </>
  )
}

export default Button