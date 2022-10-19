import './App.scss';
import Button from './components/Button/Button';
import ListWinners from './components/ListWinners/ListWinners';
import React, {useState} from 'react';
import Confetti from 'react-confetti'


function App() {
  const [sorteo, setSorteo] = useState("btn");

  return (
    <>
    <div className="App"> 
      {/* <h1>SORTEO</h1> */}
      {sorteo === "btn" ? 
      <Button sorteo={sorteo} setSorteo={setSorteo} />
      : 
      sorteo === "text" ? 
      <h1>LOS GANADORES SON</h1>
      :
      <>
      <ListWinners sorteo={sorteo} setSorteo={setSorteo}/>
      <Confetti
      width={'1920'}
      height={'1080'}
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
