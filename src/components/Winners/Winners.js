import React from 'react'
import './Winners.scss'

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ietbagfmzkwfeofgpgvt.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlldGJhZ2Ztemt3ZmVvZmdwZ3Z0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE5MDg0OTYsImV4cCI6MjAxNzQ4NDQ5Nn0.Z_3K5mzv-98F71nc0KZFI4iIX27p6AboNflAIBzZz9M"
const supabase = createClient(supabaseUrl, supabaseKey)

async function guardarGanador(ganador, premio) {
  const { data, error } = await supabase
    .from('ganadores')
    .insert([
      { nombre_completo: ganador,
        premio: premio }
    ])
}

const Winners = ({ data, premio, premiosSorteados, setPremiosSorteados }) => {
  let listado = data;

  if (premiosSorteados > 1) {
    listado = JSON.parse(localStorage.getItem("data"))
  }

  if (premiosSorteados === 1) {
    while (premio[0].ganadores.length < 5) {
      let r = obtenerValor(0, listado.length)
      let ganador = listado[r];
      if (ganador === undefined) {
        ganador = listado[obtenerValor(0, listado.length)]
      }
      premio[0].ganadores.push(ganador)
      guardarGanador(ganador, "$70.000")
      listado.splice(r, 1)
    }
    localStorage.setItem("data", JSON.stringify(listado));
    localStorage.setItem("etapa", 1);
  }
  if (premiosSorteados === 2) {
    while (premio[1].ganadores.length < 5) {
      let r = obtenerValor(0, listado.length)
      let ganador = listado[r];
      if (ganador === undefined) {
        ganador = listado[obtenerValor(0, listado.length)]
      }
      premio[1].ganadores.push(ganador)
      guardarGanador(ganador, "$70.000")
      listado.splice(r, 1)
    }

    localStorage.setItem("data", JSON.stringify(listado));
    localStorage.setItem("etapa", 2);
  }
  if (premiosSorteados === 3) {
    while (premio[2].ganadores.length < 5) {
      let r = obtenerValor(0, listado.length)
      let ganador = listado[r];
      if (ganador === undefined) {
        ganador = listado[obtenerValor(0, listado.length)]
      }
      listado.splice(r, 1)
      premio[2].ganadores.push(ganador)
      guardarGanador(ganador, "$70.000")
    }
    localStorage.setItem("data", JSON.stringify(listado));
    localStorage.setItem("etapa", 3);
  }

  if (premiosSorteados === 4) {
    while (premio[3].ganadores.length < 5) {
      let r = obtenerValor(0, listado.length)
      let ganador = listado[r];
      listado.splice(r, 1)
      if (ganador === undefined) {
        ganador = listado[obtenerValor(0, listado.length)]
      }
      premio[3].ganadores.push(ganador)
      guardarGanador(ganador, "$70.000")
    }
    localStorage.setItem("data", JSON.stringify(listado));
    localStorage.setItem("etapa", 4);
  }

  if (premiosSorteados === 5) {
    while (premio[4].ganadores.length < 4) {
      let r = obtenerValor(0, listado.length)
      let ganador = listado[r];
      listado.splice(r, 1)
      if (ganador === undefined) {
        ganador = listado[obtenerValor(0, listado.length)]
      }
      premio[4].ganadores.push(ganador)
      guardarGanador(ganador, "$70.000")
    }
    localStorage.setItem("data", JSON.stringify(listado));
    localStorage.setItem("etapa", 5);
  }

  if (premiosSorteados === 6) {
    while (premio[5].ganadores.length < 5) {
      let r = obtenerValor(0, listado.length)
      let ganador = listado[r];
      listado.splice(r, 1)
      if (ganador === undefined) {
        ganador = listado[obtenerValor(0, listado.length)]
      }
      premio[5].ganadores.push(ganador)
      guardarGanador(ganador, "$100.000")
    }
    localStorage.setItem("data", JSON.stringify(listado));
    localStorage.setItem("etapa", 6);
  }

  if (premiosSorteados === 7) {
    while (premio[6].ganadores.length < 5) {
      let r = obtenerValor(0, listado.length)
      let ganador = listado[r];
      listado.splice(r, 1)
      if (ganador === undefined) {
        ganador = listado[obtenerValor(0, listado.length)]
      }
      premio[6].ganadores.push(ganador)
      guardarGanador(ganador, "$100.000")
    }
    localStorage.setItem("data", JSON.stringify(listado));
    localStorage.setItem("etapa", 7);
  }

  if (premiosSorteados === 8) {
    while (premio[7].ganadores.length < 5) {
      let r = obtenerValor(0, listado.length)
      let ganador = listado[r];
      listado.splice(r, 1)
      if (ganador === undefined) {
        ganador = listado[obtenerValor(0, listado.length)]
      }
      premio[7].ganadores.push(ganador)
      guardarGanador(ganador, "$100.000")
    }
    localStorage.setItem("data", JSON.stringify(listado));
    localStorage.setItem("etapa", 8);
  }

  if (premiosSorteados === 9) {
    while (premio[8].ganadores.length < 5) {
      let r = obtenerValor(0, listado.length)
      let ganador = listado[r];
      listado.splice(r, 1)
      if (ganador === undefined) {
        ganador = listado[obtenerValor(0, listado.length)]
      }
      premio[8].ganadores.push(ganador)
      guardarGanador(ganador, "$150.000")
    }
    localStorage.setItem("data", JSON.stringify(listado));
    localStorage.setItem("etapa", 9);
  }

  if (premiosSorteados === 10) {
    while (premio[9].ganadores.length < 5) {
      let r = obtenerValor(0, listado.length)
      let ganador = listado[r];
      listado.splice(r, 1)
      if (ganador === undefined) {
        ganador = listado[obtenerValor(0, listado.length)]
      }
      premio[9].ganadores.push(ganador)
      guardarGanador(ganador, "$150.000")
    }
    localStorage.setItem("data", JSON.stringify(listado));
    localStorage.setItem("etapa", 10);
  }

  if (premiosSorteados === 11) {
    while (premio[10].ganadores.length < 1) {
      let r = obtenerValor(0, listado.length)
      let ganador = listado[r];
      listado.splice(r, 1)
      if (ganador === undefined) {
        ganador = listado[obtenerValor(0, listado.length)]
      }
      premio[10].ganadores.push(ganador)
      guardarGanador(ganador, "$300.000")
    }
    localStorage.setItem("data", JSON.stringify(listado));
    localStorage.setItem("etapa", 11);
  }

  `/* if (premiosSorteados === 12) {
    while (premio[11].ganadores.length < 1) {
      let r = obtenerValor(0, listado.length)
      let ganador = listado[r];
      listado.splice(r, 1)
      if (ganador === undefined) {
        ganador = listado[obtenerValor(0, listado.length)]
      }
      premio[11].ganadores.push(ganador)
      guardarGanador(ganador, "$300.000")
    }
    localStorage.setItem("data", JSON.stringify(listado));
    localStorage.setItem("etapa", 12);
  } */`

  function obtenerValor(min, max) {
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
          premio[1].ganadores.map((ganador) => (
            <div key={ganador} className='winner'>
              {ganador}
              <span key={ganador} className='premio'>{premio[1].premio}</span>
            </div>
          ))
          :
          premiosSorteados === 3 ?
            premio[2].ganadores.map((ganador) => (
              <div key={ganador} className='winner'>
                {ganador}
                <span key={ganador} className='premio'>{premio[2].premio}</span>
              </div>
            ))
            :
            premiosSorteados === 4 ?
              premio[3].ganadores.map((ganador) => (
                <div key={ganador} className='winner'>
                  {ganador}
                  <span key={ganador} className='premio'>{premio[3].premio}</span>
                </div>
              ))
              :
              premiosSorteados === 5 ?
                premio[4].ganadores.map((ganador) => (
                  <div key={ganador} className='winner'>
                    {ganador}
                    <span key={ganador} className='premio'>{premio[4].premio}</span>
                  </div>
                ))
                :
                premiosSorteados === 6 ?
                  premio[5].ganadores.map((ganador) => (
                    <div key={ganador} className='winner'>
                      {ganador}
                      <span key={ganador} className='premio'>{premio[5].premio}</span>
                    </div>
                  ))
                  :
                  premiosSorteados === 7 ?
                    premio[6].ganadores.map((ganador) => (
                      <div key={ganador} className='winner'>
                        {ganador}
                        <span key={ganador} className='premio'>{premio[6].premio}</span>
                      </div>
                    ))
                    :
                    premiosSorteados === 8 ?
                      premio[7].ganadores.map((ganador) => (
                        <div key={ganador} className='winner'>
                          {ganador}
                          <span key={ganador} className='premio'>{premio[7].premio}</span>
                        </div>
                      ))
                      :
                      premiosSorteados === 9 ?
                        premio[8].ganadores.map((ganador) => (
                          <div key={ganador} className='winner'>
                            {ganador}
                            <span key={ganador} className='premio'>{premio[8].premio}</span>
                          </div>
                        ))
                        :
                        premiosSorteados === 10 ?
                          premio[9].ganadores.map((ganador) => (
                            <div key={ganador} className='winner'>
                              {ganador}
                              <span key={ganador} className='premio'>{premio[9].premio}</span>
                            </div>
                          ))
                          :
                          premiosSorteados === 11 ?
                            premio[10].ganadores.map((ganador) => (
                              <div key={ganador} className='winner'>
                                {ganador}
                                <span key={ganador} className='premio'>{premio[10].premio}</span>
                              </div>
                            ))
                            :
                            premio[11].ganadores.map((ganador) => (
                              <div key={ganador} className='winner'>
                                {ganador}
                                <span key={ganador} className='premio'>{premio[11].premio}</span>
                              </div>
                            ))

      }

      {/* {premiosSorteados === 1 ? 
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
          } */}

    </>
  )
}

export default Winners