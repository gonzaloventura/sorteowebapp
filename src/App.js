import './App.css';
import Button from './components/Button/Button';
import Winners from './components/Winners/Winners';

function App() {
  return (
    <div className="App"> 
      <h1>Sorteo</h1>
      <Winners />
      <Button />
    </div>
  );
}

export default App;
