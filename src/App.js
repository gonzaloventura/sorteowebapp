import './App.scss';
import Button from './components/Button/Button';
import ListWinners from './components/ListWinners/ListWinners';


function App() {
  return (
    <>
    <div className="App"> 
      {/* <h1>SORTEO</h1> */}
       {/* <ListWinners /> */}
       <Button />
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
