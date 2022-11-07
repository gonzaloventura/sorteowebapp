import React from 'react'
import './Winners.scss'

const Winners = ({data, premio, premiosSorteados, setPremiosSorteados}) => {
  let listado = data;
  if (premiosSorteados > 1){
    listado = JSON.parse(localStorage.getItem("data"))
  }

  if (premiosSorteados === 1 ){
    while (premio[0].ganadores.length < 5) {
      let r = obtenerValor(0,listado.length)
      let ganador = listado[r];
      if (ganador === undefined){
        ganador = listado[obtenerValor(0,listado.length)]
      }
      premio[0].ganadores.push(ganador)
      listado.splice(r-1, 1)
    }
    while (premio[1].ganadores.length < 5) {
      let r = obtenerValor(0,listado.length)
      let ganador = listado[r];
      if (ganador === undefined){
        ganador = listado[obtenerValor(0,listado.length)]
      }
      premio[1].ganadores.push(ganador)
      listado.splice(r-1, 1)
    }
    while (premio[2].ganadores.length < 10) {
      let r = obtenerValor(0,listado.length)
      let ganador = listado[r];
      if (ganador === undefined){
        ganador = listado[obtenerValor(0,listado.length)]
      }
      premio[2].ganadores.push(ganador)
      listado.splice(r-1, 1)
    }
    localStorage.setItem("data", JSON.stringify(listado));
    console.log(listado)
  }
  if (premiosSorteados === 2){
    while (premio[3].ganadores.length < 5) {
      let r = obtenerValor(0,listado.length)
      let ganador = listado[r];
      if (ganador === undefined){
        ganador = listado[obtenerValor(0,listado.length)]
      }
      premio[3].ganadores.push(ganador)
      listado.splice(r-1, 1)
    }
    while (premio[4].ganadores.length < 5) {
      let r = obtenerValor(0,listado.length)
      let ganador = listado[r];
      if (ganador === undefined){
        ganador = listado[obtenerValor(0,listado.length)]
      }
      premio[4].ganadores.push(ganador)
      listado.splice(r-1, 1)
    }
    while (premio[5].ganadores.length < 10) {
      let r = obtenerValor(0,listado.length)
      let ganador = listado[r];
      if (ganador === undefined){
        ganador = listado[obtenerValor(0,listado.length)]
      }
      premio[5].ganadores.push(ganador)
      listado.splice(r-1, 1)
    }
    console.log(listado)
    localStorage.removeItem("data");
    localStorage.setItem("data", JSON.stringify(listado));
  }
  if (premiosSorteados === 3){
    while (premio[6].ganadores.length < 5) {
      let r = obtenerValor(0,listado.length)
      let ganador = listado[r];
      if (ganador === undefined){
        ganador = listado[obtenerValor(0,listado.length)]
      }
      premio[6].ganadores.push(ganador)
      listado.splice(r-1, 1)
    }
    while (premio[7].ganadores.length < 5) {
      let r = obtenerValor(0,listado.length)
      let ganador = listado[r];
      if (ganador === undefined){
        ganador = listado[obtenerValor(0,listado.length)]
      }
      premio[7].ganadores.push(ganador)
      listado.splice(r-1, 1)
    }
    while (premio[8].ganadores.length < 2) {
      let r = obtenerValor(0,listado.length)
      let ganador = listado[r];
      if (ganador === undefined){
        ganador = listado[obtenerValor(0,listado.length)]
      }
      premio[8].ganadores.push(ganador)
      listado.splice(r-1, 1)
    }
    console.log(listado)
    localStorage.removeItem("data");
    localStorage.setItem("data", JSON.stringify(listado));
  }

  if (premiosSorteados === 4){
    while (premio[9].ganadores.length < 1) {
      let r = obtenerValor(0,listado.length)
      let ganador = listado[r];
      if (ganador === undefined){
        ganador = listado[obtenerValor(0,listado.length)]
      }
      premio[9].ganadores.push(ganador)
      listado.splice(r, 1)
    }
    console.log(listado)
    localStorage.removeItem("data");
    localStorage.setItem("data", JSON.stringify(listado));
  }

  if (premiosSorteados === 5){
    function fullReset(){
      localStorage.clear();
    }
    return (<button onClick={fullReset}>Empezar de nuevo</button>)
  }

    

  function obtenerValor(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
        <>
          {premiosSorteados === 1 ? 
          premio[0].ganadores.map((ganador) => (
            <div key={ganador} className='winner'>
              {ganador}
              <span key={ganador} className='premio'>{premio[0].premio}</span>
            </div>
          ))
          :
          premiosSorteados === 2 ?
          premio[3].ganadores.map((ganador) => (
            <div key={ganador} className='winner'>
              {ganador}
              <span key={ganador} className='premio'>{premio[3].premio}</span>
            </div>
          ))
          :
          premiosSorteados === 3 ?
          premio[6].ganadores.map((ganador) => (
            <div key={ganador} className='winner'>
              {ganador}
              <span key={ganador} className='premio'>{premio[6].premio}</span>
            </div>
          ))
          :
          premio[9].ganadores.map((ganador) => (
            <div key={ganador} className='winner'>
              {ganador}
              <span key={ganador} className='premio'>{premio[9].premio}</span>
            </div>
          ))
          }

{premiosSorteados === 1 ? 
          premio[1].ganadores.map((ganador) => (
            <div key={ganador} className='winner'>
              {ganador}
              <span key={ganador} className='premio'>{premio[1].premio}</span>
            </div>
          ))
          :
          premiosSorteados === 2 ?
          premio[4].ganadores.map((ganador) => (
            <div key={ganador} className='winner'>
              {ganador}
              <span key={ganador} className='premio'>{premio[4].premio}</span>
            </div>
          ))
          :
          premiosSorteados === 3 ?
          premio[7].ganadores.map((ganador) => (
            <div key={ganador} className='winner'>
              {ganador}
              <span key={ganador} className='premio'>{premio[7].premio}</span>
            </div>
          ))
          :
          console.log("nada")
          }

        {premiosSorteados === 1 ? 
          premio[2].ganadores.map((ganador) => (
            <div key={ganador} className='winner'>
              {ganador}
              <span key={ganador} className='premio'>{premio[2].premio}</span>
            </div>
          ))
          :
          premiosSorteados === 2 ?
          premio[5].ganadores.map((ganador) => (
            <div key={ganador} className='winner'>
              {ganador}
              <span key={ganador} className='premio'>{premio[5].premio}</span>
            </div>
          ))
          :
          premiosSorteados === 3 ?
          premio[8].ganadores.map((ganador) => (
            <div key={ganador} className='winner'>
              {ganador}
              <span key={ganador} className='premio'>{premio[8].premio}</span>
            </div>
          ))
          :
          console.log("nada")
          }
         
    </>
  )
}

export default Winners