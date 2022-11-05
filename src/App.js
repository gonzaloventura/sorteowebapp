import './App.scss';
import Button from './components/Button/Button';
import ListWinners from './components/ListWinners/ListWinners';
import React, {useState} from 'react';
import Confetti from 'react-confetti'
import RandomNames from './components/RandomNames/RandomNames';


function App() {
  const [sorteo, setSorteo] = useState("btn");
  const [premiosSorteados, setPremiosSorteados] = useState(1);
  const { width, height } = '100%'

  return (
    <>
    <div className="App"> 
      <img className='brand' src={require("./components/assets/images/logo.png")} />
      {sorteo === "btn" ? 
      <>
      <RandomNames sorteo={sorteo} setSorteo={setSorteo} />
      <Button sorteo={sorteo} setSorteo={setSorteo} />
      </>
      : 
      sorteo === "text" ? 
      <RandomNames sorteo={sorteo} setSorteo={setSorteo} />
      :
      <>
      <ListWinners sorteo={sorteo} setSorteo={setSorteo} premiosSorteados={premiosSorteados} setPremiosSorteados={setPremiosSorteados} />
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
    <div className='Background'>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
    </div>
    </>
  );
}

export default App;
