import './App.scss';
import Button from './components/Button/Button';
import ListWinners from './components/ListWinners/ListWinners';
import React, {useState} from 'react';


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
      <ListWinners sorteo={sorteo} setSorteo={setSorteo}/>
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
