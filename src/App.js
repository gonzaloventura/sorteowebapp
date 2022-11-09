import './App.scss';
import Button from './components/Button/Button';
import ListWinners from './components/ListWinners/ListWinners';
import React, {useEffect, useState} from 'react';
import Confetti from 'react-confetti'
import RandomNames from './components/RandomNames/RandomNames';


function App() {
  const [sorteo, setSorteo] = useState("btn");
  const [premiosSorteados, setPremiosSorteados] = useState(1);
  const { width, height } = '100%'

  const data = ["Guillermo Montilla", 
  "Maria Victoria Pagliaricci", 
  "Malcom Azcurra Moriena", 
  "Pablo Auliso", 
  "Santiago Fiandino", 
  "Maria Victoria Anomale", 
  "Leandro Agusti", 
  "Gonzalo Filipuzzi", 
  "Mauricio Di Niro", 
  "Nicolas Marin Moreno y Ana Laura Della Mea", 
  "Gustavo A. Ardanaz", 
  "Cristian Cazorla", 
  "Guillermo José Ruival", 
  "Pablo FERNANDEZ BARRON", 
  "José Ariel Montilla", 
  "Santiago Ardanaz", 
  "Oscar Satorre y Cristian Cazorla", 
  "Marcos Cesar Magnano", 
  "Roberto Hume y Sabrina Pinedo", 
  "Lucia Bolañes", 
  "Nicolas Nobile", 
  "Cristian Ariel Casco", 
  "Nicolas PATRIZI", 
  "Enrique Marcon y Leonardo Fogar", 
  "Sergio Peralta", 
  "Roberto Ramón Schulz Schulz", 
  "Alejandro Aranda", 
  "Fernando Schiro", 
  "Maria Lourdes Cornavaca", 
  "Benjamin Bartolini", 
  "Javier TOBAL", 
  "Pablo Fernando Sanchez", 
  "Gabriel Alejandro Paez", 
  "Pablo Davila", 
  "Tomás Budeguer", 
  "Osvaldo Luna", 
  "Consuelo Avalos Gordillo", 
  "German Gustavo Poi", 
  "Gustavo Jose Zamora", 
  "Pedro Meriggiola", 
  "Maria Laura Carles", 
  "Carlos Gonzalez Crende", 
  "Wenceslao Ugarte y Pedro Sosa", 
  "Hilario Salas", 
  "Osvaldo Spina y Katia Prager", 
  "Antonio Marengo", 
  "Alberto Galdeano", 
  "Ignacio Carnevale", 
  "Nora Mailland", 
  "Carlos Dimundo", 
  "Luis Arias Usandivaras", 
  "Alejandro Socas", 
  "Gerardo Cerutti", 
  "Jorge Isaac Esquivel", 
  "Gustavo Vidal", 
  "Laura Reggi", 
  "Martin Arriaga", 
  "ALEJANDRO MACIEL", 
  "Rodrigo Aranguren", 
  "Francisco Asueta", 
  "Rolf Erwin Muller y Jesica Schvartz", 
  "Federico Sidders", 
  "Maria Andrea Paolini", 
  "Gabriel Guarino", 
  "Milagros Sobredo", 
  "José María Aranguren", 
  "Gerardo Solda", 
  "Agustin Musuruana", 
  "Henri Vicentin", 
  "Eugenio Perez Panera", 
  "Juan Serre", 
  "Fermin Torroba ", 
  "Miguel Redolatti", 
  "Jose Miguel Lizzi", 
  "Agustin Bilbao y Mariano Vence", 
  "Mariano Vence", 
  "Nicolás Tagle", 
  "IGNACIO LAULHE",
  "Diego Aguilera", 
  "Matias Bodini", 
  "Augusto Juan Morales Vassolo", 
  "Marcelo Rey", 
  "Alvaro Vazquez Rovere y Esteban Caamaño", 
  "Gabriela Paola Zapico", 
  "Braian Ezequiel Larsen", 
  "Andres Candelo y Nicolas Bronzovich", 
  "Alan Fjellerup", 
  "Laura Carabaca", 
  "Carlos Moyano", 
  "Carina Cabrera", 
  "Maria Cecilia Bocanera", 
  "Ramiro Montiel", 
  "Matias Rodriguez Pasquini", 
  "Esteban Osuna", 
  "Manuel Ponce", 
  "Fernando del Pino", 
  "Pedro Meriggiola y Pablo Maggiolini", 
  "Dante Blasich", 
  "Diego Daniel Fernandez y Alejandro Aranda", 
  "Gustavo Leurino", 
  "Luis Imsandt", 
  "Matias Morin", 
  "Gerardo Chiara", 
  "Juan Radrizzani", 
  "Ezequiel Martinez Bruera", 
  "Julio Lieutier", 
  "Sebastián Villena", 
  "Jeronimo Sellanes", 
  "Mauricio Davidovich", 
  "Santiago Levantini", 
  "Diego Oliva", 
  "Jose Luis Sala", 
  "Agustìn Barattini", 
  "Rene Martineau", 
  "Esteban Garat", 
  "Juan Arduini", 
  "Jose Moneta y Julian Cegarra", 
  "Matias White", 
  "Juan Segundo Julianelli", 
  "Nicolas Nouveliere", 
  "Santiago Diaz Valdez", 
  "Joaquin Bader", 
  "Lucas Sierra", 
  "Mario Romano y Ignacio Xanthopoulos", 
  "Felipe Macaya", 
  "Nicolas Villani", 
  "Santiago Games", 
  "Santiago Algorta", 
  "Agustin Llorente", 
  "Hernán Satorre", 
  "Federico Druille", 
  "Maria Agustina Cordoba", 
  "Martin Federico GINART", 
  "Nicolas Eleno", 
  "Daniel Trasmonte", 
  "Julian Sarachaga", 
  "Sebastian Simmermacher", 
  "Maria Alejandra Ubeda", 
  "Ezequiel Galeazzi", 
  "Erika Ilse Schild", 
  "Ignacio Jauregui", 
  "Maria Lopez Herrera", 
  "Maria Macarena Correa", 
  "Daniel Lovino", 
  "Esteban Bruno", 
  "Jonatan Fernando Franck", 
  "Diego Hugo Perez", 
  "Gustavo Schneider", 
  "Gustavo Lopez", 
  "Mauricio Brega",
  "Guillermo Martin", 
  "Julian Saavedra", 
  "Santiago BAIOCCHI", 
  "Victor Garcia Viniegra", 
  "Mariano Vinardell", 
  "Carla ROVEGLIA", 
  "Ignacio Balantzian", 
  "Miguel Ramón Pertino", 
  "Matias Bodini y Maximiliano Morello", 
  "Gustavo Ruiz Suros", 
  "Pilar Clavijo y Tomas Bustillo", 
  "Hipólito Harkes", 
  "Javier Tomacell", 
  "Agustin Galleano", 
  "Francisco Páez", 
  "Santiago Tiscornia y Jose Maria Cano", 
  "Federico Cesar Albina", 
  "Lucia Franchino", 
  "JAVIER PUCCIARELLI", 
  "Andres Candelo", 
  "Pablo Fabian Bressa", 
  "Gonzalo Ropero", 
  "Tomas Furmento", 
  "Esteban Artica", 
  "Cesar Chiappara", 
  "Matias Saint Andre", 
  "Pascual Ciccioli", 
  "Estanislao Ezequiel Quiroga", 
  "Agustin Giorno", 
  "FRANCISCO RAIMONDI", 
  "Marcos Alberdi", 
  "Facundo Mendes", 
  "Dario Barth", 
  "Gabriel Ignacio Magnabosco", 
  "Andres Elizalde", 
  "Luciano Ascheri", 
  "Ricardo Luis Pozzi", 
  "Martin Miguez", 
  "Agustin Fernandez Roger", 
  "Matias Curti", 
  "Adrian Cesar Rovea", 
  "Santiago Morin", 
  "Cristian Natali", 
  "Alejandro Sanseovic y Federico Sampaol", 
  "Franco Permingeat", 
  "Matias Romito", 
  "Alejandro Toso y César Vignon", 
  "Veronica Andrea Rodriguez", 
  "Maria Victoria Molinelli", 
  "Ana Eugenia Agres", 
  "Juan Pablo De la Barrera", 
  "Mauricio Castro", 
  "Valeria Portillo", 
  "Pamela Federici", 
  "Héctor Fernández y Alejandro Toso"];

  useEffect(()=>{
    localStorage.getItem("etapa") && setPremiosSorteados(Number(localStorage.getItem("etapa")))
  },[])

  function fullReset(){
    localStorage.clear();
  }

  return (
    <>
    <div className="App"> 
      <img alt='Logo' className='brand' src={require("./components/assets/images/logo.png")} />
      {sorteo === "btn" ? 
      <>
      <RandomNames sorteo={sorteo} setSorteo={setSorteo} />
      <Button data={data} sorteo={sorteo} setSorteo={setSorteo} />
      {premiosSorteados > 4 && <button onClick={fullReset}>Empezar de nuevo</button>}
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
    <div className='Background'>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
    </div>
    </>
  );
}

export default App;
