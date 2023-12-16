import './App.scss';
import Button from './components/Button/Button';
import ListWinners from './components/ListWinners/ListWinners';
import React, {useEffect, useState} from 'react';
import Confetti from 'react-confetti'
import RandomNames from './components/RandomNames/RandomNames';
import loop from './components/assets/images/fondo.mp4';
import logoloop from './components/assets/images/logo.mov';


function App() {
  const [sorteo, setSorteo] = useState("btn");
  const [premiosSorteados, setPremiosSorteados] = useState(1);
  const { width, height } = '100%'

  const data = ["1aa", "2a", "3a", "43s33", "128s", "318d", "238d", "1326f7", "125t", "4122t", "43t", "124t64", "asd7tasd", "417t", "1272t", "31t", "asdtwq", "wq63t2", "eq453t", "w53t", "eq53t", "weq53t", "wr3t", "t3t", "fght4fghfghf", "hh5t", "ffhht96", "ghf9gtgh", "sf8t", "hgf8thfg", "da8sst", "d8t", "astttyutyutyuy7788tuty", "fghtytyuuty7", "fghfgfh323213566", "fghfghfhf"]

  useEffect(()=>{
    localStorage.getItem("etapa") && setPremiosSorteados(Number(localStorage.getItem("etapa"))+1)
    console.log("etapa al cargar: ", premiosSorteados)
  },[])

  function fullReset(){
    localStorage.clear();
    window.location.reload();
  }

  return (
    <>
    <div className="App place-content-center"> 
      {/* <img alt='Logo' className='brand' src={require("./components/assets/images/logo2.png")} /> */}
      {/* <video className='' autoPlay loop muted>
          <source src={logoloop} type='video/quicktime' />
      </video> */}
      {sorteo === "btn" ? 
      <>
      <RandomNames sorteo={sorteo} setSorteo={setSorteo} />
      <div className='flex flex-col m-4'>
      {premiosSorteados < 12 && <p className='text-5xl font-semibold'>Sorteo {premiosSorteados}: { premiosSorteados < 6 ? "$70.000" : (premiosSorteados < 9 ? "$100.000" : premiosSorteados < 11 ? "$150.000" : "$300.000" ) }</p>}
      
      
      {premiosSorteados > 11 ? <button onClick={fullReset}>Empezar de nuevo</button> : <Button data={data} sorteo={sorteo} setSorteo={setSorteo} />}
      </div>
      </>
      : 
      sorteo === "text" ? 
      <>
      <RandomNames sorteo={sorteo} setSorteo={setSorteo} />
      <div className='blankspace'></div>
      </>
      :
      <>
      <ListWinners data={data} sorteo={sorteo} setSorteo={setSorteo} premiosSorteados={premiosSorteados} setPremiosSorteados={setPremiosSorteados} />
      <Confetti
      width={width}
      height={height}
      numberOfPieces={150}
      wind={0.01}
      gravity={0.05}
    />
      </>
      }
       {/* <ListWinners /> */}
       
    </div>
    <div className=''>
      <video className='' autoPlay loop muted>
          <source src={loop} type='video/mp4' />
      </video>
      {/* <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div> */}
    </div>
    </>
  );
}

export default App;
