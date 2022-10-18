import './App.css';
import Button from './components/Button/Button';
import ListWinners from './components/ListWinners/ListWinners';

function App() {
  return (
    <div className="App"> 
      <h1>Sorteo</h1>
      <ListWinners />
      <Button />
    </div>
  );
}

export default App;
