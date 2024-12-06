import './App.scss';
import Button from './components/Button/Button';
import ListWinners from './components/ListWinners/ListWinners';
import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti'
import RandomNames from './components/RandomNames/RandomNames';
import fondo from './components/assets/images/fondo.webp';
import logoloop from './components/assets/images/logo.mov';


function App() {
  const [sorteo, setSorteo] = useState("btn");
  const [premiosSorteados, setPremiosSorteados] = useState(1);
  const { width, height } = '100%'

  const data = ["Emir Naim Dagfal Martinez", "Ernesto Daniel Gutierrez", "Emiliano Daniel Morales Perosa", "Sergio Abelardo Camisay", "Mauro Andres Gonzalez", "Eduardo Granero", "Sebastían Platero Palacios", "Roberto Jose Gomez", "Ailín Andrea Fátima Ibazeta", "Maria Lorena Temoli", "Maria Jose Zapata", "Juliana De La Vega Amin", "Natalia Vanesa Gonzalez", "Dora Beatriz Larrosa", "Marcelo Gustavo Dohmen", "Karina Gisela Fernandez Hidalgo", "Maria Alicia Leiva Orellano", "Franklin Emilio Riveros", "Alberto Daniel Sanchez", "Daniel Enrique Sirerol Solera", "Gustavo Adolfo Suarez Gil", "Gerardo Roberto Octavio Basso", "Maria Candelaria Borbore Mattar", "Roxana Beatriz Laplagne", "Maria Ximena Ligoule", "Walter Fabian Morales", "Nahir Milena Norte Garcia", "Maria Ines Ocampo Sese", "Maria Agustina Pacheco Tozzi", "Angel Agustin Paez", "Luciana Ines Tejada", "Andres Miguel Yutzis", "Luis Ramon Alberto", "Cinthya Elizabeth Brizuela", "Maximiliano Nicolas Chaparro Ontiveros", "Franco Federico Diaz", "Victor Manuel Donoso Rios", "Luis Alejandro Fernández Mass", "Gerardo Martin Fernandez Simonazzi", "Andrea Gabriela Fonseca", "Diego Alejandro Gallardo", "Gonzalo Gabriel Innella Romero", "Hector Omar Lencinas", "Franco Nicolas Olivares", "Carlos Andres Salinas", "Veronica Lorena Villega", "Maria Ines Ariza Tomba", "Viviana Sonia Garrido", "Maria Carolina Leguizamon", "Valeria Natali Paez", "Susana Edith Paez", "Carla Marcela Rojas Rios", "Armando Gerardo Saputo", "Hernan Andres Barcelo", "Felix Dario Bueno Echevarria", "Jorge David Carrizo Brizuela", "Juan Ignacio Escobar", "Sergio Fabian Fuentes", "Mauricio Miguel Garcia", "Jorge Federico Goria", "Nicolas Ezequiel Guevara", "Jorge Alberto Hidalgo", "Sergio Gaston Luna", "Fernando Alberto Morales", "Carlos Alberto Oliver", "Jose Javier Pedrozo", "Jorge Gustavo Peña", "Matias Hernan Peña Segado", "Oscar Francisco Pereyra", "Martin Damian Quiroga", "Kevin Maximiliano Reynoso", "Eric Abel Roldan", "Rolando Ivan Suarez", "Pablo Javier Tello Perez", "Fernando Ariel Toledo", "Eduardo Sebastian Vildoso Vera", "Ariel Adolfo Yacante Pereyra", "Maria Laura Yañez Brombal", "Leopoldo A. Albarracin Elasche", "Jorge Barboza Rodriguez", "Analia Mercedes Bilbao", "Daniela Beatriz Bosoni", "Juan Antonio Carrizo Quiroga", "Maria Sol Caruso", "Renato Javier Chirino Gomez", "Jose Facundo Crubellier", "Pedro Fabian Diaz Bustos", "Gerardo Daniel Figueroa", "Maria Ayelen Fonzalida", "Ariel Alejandro Garcia Moral", "Claudio Fernando Gatica Campus", "Natalia V. Gonzalez Abarca", "Marcelo Adrian Gualpa", "Jose David Jofre", "Angel Javier Mariño Peña", "Sebastian Emanuel Montaño", "Elena Antonia Olivares", "Cecilia Mariel Oro Roldan", "Christian Ariel Pacheco", "Mauricio German Paez", "Stella Rita Palma", "Andres Anibal Pelayes Marata", "Victor Balbino Pineda Gonzalez", "Marcelo Adrian Quinteros", "Jose Eduardo Ramirez", "Alberto Sebastian Rivero", "Sergio Jonatan Rodriguez Agüero", "Gerardo Ernesto Ruiz", "Eduardo Nicolas Salinas", "Leysa Sanchez Herrera", "Sergio Daniel Segura", "Salvador Antonio Vargas Quiroga", "Nicolas Alberto Vedia", "Carla Estefania Ventrice", "Emanuel Rafael Vieyra", "Dario Anibal Villegas", "Maria Jorgelina Ahumada", "Cintia Susana Aubone Demartini", "Santiago Jose Avendaño", "Irene Eleonora Azcurra", "Andrea Vanesa Cangialosi Modica", "María Florencia Cañadas Oliver", "Daniel Ernesto Castañeda", "Adirene Castro", "Maria Milagro Goldstein Torres", "Vania Jimena Gonzalez", "Rolando Alfredo Guardia Balaguer", "Mariano Raul Lopez", "Enrique Omar Lopez", "Matias Andres Melian", "Pablo Carlos Ocampo", "Maria Eugenia Olivares Moreno", "Javier Eduardo Puime", "Franco Elias Rad Simon", "Rocio Belen Sanchez", "Rocio Soledad Sosa Oviedo", "Maria Alejandra Tramontin", "Carlos Antonio Zelko De Los Santos", "Mariana Agustina Almonacid Gouiric", "Facundo Luis Amarfil", "Diego Burgos Peña", "Cinthya Ailén Caceres Paez", "Sonia Silvana Calbo", "Josefina Calvo Carracedo", "Jose Alejandro Castilla Rubio", "Diego Claudio Lopez", "Mayra Gabriela Morales Quiroga", "Oscar Fabian Muñoz", "Maria Cristina Nehin Herrera", "Andrea Viviana Otarola Vea", "Oscar Marcelo Oviedo", "Fernando Omar Peña", "Cintia Fatima Quiroga", "Franco Martin Silva Chamorro", "Eliana Mariela Sosa", "Lorena Beatriz Tomsig", "Raul Ezequiel Yafar", "Julia Atencio", "Ivan Simon Abecasis Lauria", "Melani Jacqueline Acosta Carvajal", "Emmanuel Agustin Adaro Echegaray", "Rolando Ceferino Aguero", "Mario Andres Arancibia", "Sergio Alberto Araoz", "Silvana Eufemia Avila Hidalgo", "Fabricio Becerra Rodriguez", "Mariana Noemi Bogni", "Mario Enrique Bravo", "Raul Alberto Castillo", "Maria Florencia Chavez Martinez", "Paola Alejandra Correa Paez", "Sergio Fabian Cuñarro", "Fabricio Manuel Delgado", "Ricardo Antonio Dell Oro Lopez", "Alfredo Emmanuel Delpodio", "Ruben Dario Ejarque", "Ana Paula Falcon Dominguez", "Rosana Sonia Fernandez", "Fernanda Andrea Ferrer", "Maria Laura Galifi", "Rolando Francisco Javier Garcia", "Eliana Soledad Gomez Ansberck", "Pablo Andres Heredia", "Eduardo Daniel Ignes", "Hector Matias Mallea Videla", "Mauricio Alberto Manrique", "Luis Reinerio Manrique", "Marcelo Daniel Marconi", "Lucia Más Garrido", "Anabela Nahir Moreno", "Andres Javier Ordines Molina", "Franco Adrian Oropel Becerra", "Raul Marcelo Perez", "Natalia Gabriela Perez Fernandez", "Guillermo Alejandro Puentedura", "Victoria Riveros", "Sergio Javier Riveros Nieto", "Pablo Sebastian Romero", "Martin Gabriel Romero", "Lena Mariel Romero Flores", "Eric Sebastian Sanchez", "Luis Maria Sanchez Camargo", "Eleodoro Eduardo Sanchez Schall", "Jorge Ariel Solera", "Diego Alejandro Vargas Albeiro", "German Matias Zarate Heredia", "Ariel Alberto Alarribera Diaz", "Alejandro Victor Cassanelli Martinez", "Hector Enrique Donoso", "Nestor Javier Felix", "Roman Hugo Daniel Fernandez", "Claudio Alberto Gallardo", "Mathias Joaquin Paez", "Nelson Dario Recabarren Rivas", "Jorge Daniel Romero", "Rogelio Mauricio Ruarte", "Sergio Hernán Sanchez López", "Daniel Jorge Sosa", "Milagros Agustina Abaca Tovares", "Marcos Oscar Acosta Cunto", "Daniel Gustavo Avalo Iranzo", "Facundo Gabriel Bazan", "Maria Sol Bessi", "Julieta Paula Bravo Leonardelli", "Mathias Marcelo Brizuela", "Agostina Buffagni Ribes", "Paula Nahir Calvo Videla", "Jesica Daiana Carrizo Montaño", "Mauricio Martin Castro", "Ana Paula Castro Fernandez", "Roberto Nicolas Cataldo Paez", "Claudia Maria Del Valle Coppola", "Lucia Micaela Davila Gomez", "Leonardo Gabriel Diaz", "Ricardo Matias Figueroa", "Cristian Emmanuel Flores Linares", "Diego Enrique Funes", "Lourdes Belen Gallart Perez", "Maria Del Milagro Garcia", "Luz Maria Gomez Torioni", "Agustin Emmanuel Gonzalez Vacca", "Maria Lourdes Gutierrez Vallecillo", "Camila Belen Guzman Icazati", "Emiliano Antonio Herrera", "Martha Beatriz Iturrieta", "Ivana Lorena Ledo", "Jesus Silvano Maciel Lopez", "Juan Manuel Lopez", "Oscar Daniel Martinez", "Pablo David Maturano", "Lucrecia Melina Maureira Ejea", "Melisa Del Carmen Molina", "Maria De Lourdes Muñoz Carratu", "Enzo Daniel Neira", "Horacio Federico Olmos", "Evangelina Beatriz Pereyra", "Braian Nahuel Pereyra Cano", "Agostina Belén Pugliese", "Juan Ignacio Re", "Leandro Daniel Rodano Deluigi", "Alejandro Ramon Rodriguez", "Maria Florencia Romero Perez", "Franco Adrian Salvioli Oro", "Ximena Sabrina Sanz", "Maria Laura Soler Lopez", "Gonzalo Gabriel Soria Coria", "Jorge Daniel Vera", "Cintia Yanina Vergara Alvarez", "Luis Fabian Vidal Illanes", "Andrés Leonel Barletta", "Cristian Sergio Bonilla", "Miguel Alfredo Celador", "Damian German Coria", "Vanina Veronica Garrido", "Silvana Gabriela Gil", "Adriana Magali Hernandez Prieto", "Renzo Oscar Munizaga", "Jorge Luis Rodriguez Treo", "Ivana Carina Albarado", "Leonardo Javier Aracena Arbo", "Carla Gabriela Arroyo Pereyra", "Leandro Agustín Calderon Villafañe", "Julieta Godoy", "Facundo Emiliano Gonzalez Fernandez", "Denise Belen Leiva", "Noelia Beatriz Martin Jas", "Giuliano Medici Fernandez", "Oscar Alfredo Nievas Robles", "Ariel Marcelo Quiroga", "Lucas Joel Saleme Doña", "Franco Matias Savall Grillo", "Luis Marcelo Taillant", "Florencia Keren Tello Abregu", "Lucas Adrian Torregrosa", "Emilia Trentacoste", "Matias Jesus Carrizo", "Dario Sebastian Garcia Lucero", "Gonzalo Cristian Gonzalez", "Maria Fernanda Gonzalez", "Fernando Andres Montiel", "David Alejandro Ruiz Acosta", "Federico Gaston Diaz", "Maria Angelica Manzano Lopez", "Renzo Miguel Masiero Fernandez", "Sebastian Federico Zabala Barifusa", "Claudio Agustin Araoz", "Jorgelina Liliana Garcia Gonzalez", "Eva Gisela Hart", "Facundo Leandro Lloveras Kummel", "Gustavo Alfonso Mira Cabrera", "Juan Martin Ordienco", "Silvana Veronica Ortega Ruiz", "Augusto Pastore Garcia", "Osvaldo Mauricio Paton Olivares", "Micaela Florencia Perez Flores", "Marisa Nella Pietrucci", "Orlando Andres Ramirez Arriagada", "Gerardo Matias Rios", "Gabriela Ivana Rodriguez Daroni", "Marisol Gisel Rojas", "Santiago Rojas Dall Occhio", "Ana Laura Romeu Rios", "German Ariel Sevastei", "Maria Guillermina Soria Quiroga", "Carla Vizcaino Catanzaro", "Sebastian Guillermo Martinez", "Gustavo Miriani", "Daniela Soledad Kenny Bustos", "Matias Sebastián Lopez Turchetti", "Damian Antonio Medina", "Florencia Victoria Mora Quiroga", "Hernan Olivieri Gonzalez", "Fernando Raul Ruiz", "Roger Muriel Ale", "Natalia Noemi Caballero Aguirre", "Ana Paula Corral Jorquera", "Maria De Los Angeles Funes Fajardo", "Malena Andrea García Rodriguez", "Carolina Eliana Gomez Sanchez", "Marcelo Alejandro Gonzalez Carrillo", "Sabrina Maribel Lain Navas", "Arnaldo Juan Leiva", "Ignacio Gabriel Lopez Gomez", "Victoria Ibel Mazueco", "Maria Jose Meza", "Victoria Adriana Analia Moyano", "Josefina Maria Navarro Amaya", "Mauricio Exequiel Ortiz", "Magalí Rodriguez", "Fernando Ivan Sanchez Lima", "Facundo Agustín Sanchez Pérez", "Matias Ariel Schvartzman", "Agustin Francisco Sillero Lopez", "Dania Micaela Solar Abran", "Cristian Daniel Soria", "Maria Florencia Sotomayor", "Lisandro Tinto Espin", "Victor Hugo Tobares", "Carla Florencia Torres Castillo", "Guillermo Angel Nicolás Vargas Fernandez", "Maria Candelaria Velasco Rodriguez", "Maria Fernanda Vila", "Juan Andres Jiron Stefan", "Maria Fernanda Luna", "Tomas Lund Malaisi", "Manuel Manrique", "Maria Ines Mentesana", "Marcelo Eduardo Moran", "Andres Gustavo Tribolo", "Nahuel Eduardo Alameda", "Facundo Nicolas Archilla", "Nahuel Fernando Danilo Bonada", "María Belen Castillo", "Ezequiel Hernán Fernandez Corzo", "Franco Martin Gallardo", "Santino Alejo Guzman Mazzitelli", "Leonardo Nahuel Lobos Leiva", "Federico Roberto Maldonado Almiron", "Federico Adrián Pascual Marin", "Ignacio Emanuel Perez Valdez", "Franco Ulises Rodriguez", "Tamara Jaqueline Romero", "Emiliano Sese Acosta", "Joaquin Joel Villegas Funes", "Cristian German Aguilera", "Gerardo Luis Alsina Caputo", "Hernan Andino", "Sergio Luis Brito", "Eduardo Washington Carrizo", "Letizia Mara Castro", "Franco Yoel Clavero Basolu", "Eduardo Gabriel Alberto Correa", "Roberto Cristian Escudero", "Pablo Leonardo Farias", "Nicolás Eduardo Fernandez", "Maria Paula Fernandez Verdugo", "Javier Herman Gelvez", "Juan Jesus Gil Castro", "Gabriel Exequiel Gimenez Llabres", "Daniel Matias Gimenez Romero", "Hector Ulises Giuliano", "Victor Federico De J. Gonzalez", "Sergio Antonio Gonzalez", "German Andres Gonzalez", "Marcelo Javier Guerrero", "Pedro Enrique Guzman", "Andres Dardo Ibañez", "Camila Violeta Lopez", "Juan Miguel Martin Ossa", "Juan Leonardo Martinez Palacio", "Juan Dario Montigel", "Alexander Sergio Paez Gonzalez", "Marcelo Daniel Quevedo", "Gabriel Fernando Quintero", "Daniel Antonio Rios Rodriguez", "Victor Omar Riveros", "Leandro Emilio Rodriguez", "Marcos German Romero", "Emilio Jesus Rosas", "Leandro Ezequiel Saldaño Pujado", "Pablo Ceferino Sarmiento Rodriguez", "Pablo Ariel Tumbarello Archerito", "Carlos Jonatan Varela", "Esteban Francisco Yuvero", "Santiago Francisco Acosta", "Violeta Ines Agüero", "Nancy Elena Aguilera", "Sergio Ulises Alarribera", "Roberto Javier Algañaraz", "Rodrigo Nicolás Alvarez", "Exequiel Emiliano Alvarez Aranda", "Gabriela Alejandra Aparicio", "Ramona Veronica Atampiz", "Carlos Adrian Atencio Gomez", "Ramiro Joel Auce Elizondo", "Jesica Romina Avella", "Nelida Pamela Avila", "Elba Susana Avila", "Rocio Malen Aylan", "Gerardo Balverde Vazquez", "Silvana Lorena Barboza", "Analia Veronica Benitez", "Jose Javier Bogni", "Mario Alberto Bravo", "Lorena Silvana Carabajal Miranda", "Cristian Ruben Carmona Cortez", "Miguel Alejandro Castañon", "Jorge Emanuel Castro", "Juan Antonio Castro", "Leonardo Ariel Castro Sanchez", "Hector Rene Catacata", "Cecilia Ivana Centeno", "Valeria De Los Angeles Cerezo", "Maximiliano Ariel Correa", "Cristina Del Valle Cortinez", "Leonardo Ivan Davila Landra", "Gabriela Natalí Etchepare", "Graciela Monica Fernandez Flores", "Jose Luis Flores", "Mauricio Jesus Flores Archilla", "Arnaldo Ismael Fochi Morales", "Veronica Fullana", "Mariela Alejandra Funes", "Pablo Ezequiel Galvan Bosque", "Adrian Antonio Garcia", "German Gabriel Garramuño", "Carolina Belen Gil Verderrama", "Luis Renzo Gimenez Maturano", "Marcelo Leonardo Gonzalez", "Marisa Alejandra Gonzalez", "Analia Bibiana Guajardo", "Ana Mabel Guardia", "Leandro Ezequiel Guardia Garcia", "Leandro Ruben Guardia Godoy", "Elizabeth Cristina Huerta Daroni", "Viviana Alicia Ibazeta Ruiz", "Monica Gabriela Jofre Lara", "Leonardo Esteban Landeros Carta", "Maria Agustina Laprovitola", "Nolberto David Lara", "Carolina Johana Lopez Riveros", "Martin Fabricio Lozano", "Debora Lorena Luna Pizarro", "Carlos German Mallea Pacheco", "Cesar Sebastian Marquez", "Mariela Rosana Mena", "Alberto Sebastian Molina", "Jorge Rodolfo Montesino Aragon", "Karina Del Valle Morales", "Federico German Morales", "Liliana Andrea Morandi", "Facundo Elian Naranjo Albarez", "Cecilia Alejandra Navarro", "Cristian Olmedo", "Stella Maris Olmo", "Samuel Ontiveros", "Alfredo Miguel Ontiveros Grosso", "Sergio Alfredo Oro", "Estela Alejandra Ortiz Gonzalez", "Diego Sebastian Paez Moyano", "Brian Jose Palacios", "Maria Fernanda Pedernera Cortez", "Silvia Marcela Quiroga", "Monica Valeria Quiroz Vargas", "Alejandro Sebastián Ramos Andreolli", "Juan Jose Richarte Romera", "Vanina Del Carmen Riofrio", "Juan Jose Rivas Rodriguez", "Natalia Vanesa Riveros", "Matias Esequiel Riveros Espinoza", "Mario Andres Rodriguez", "Federico Nahuel Rodriguez", "Matias Ariel Rodriguez Robles", "Mariela Ines Rosales", "Miguel Angel Sabina Bolado", "German Ezequiel Sanchez", "Leonardo Sebastian Sanchez", "Maria Agostina Sanchez Oruste", "Maria Cristina Sarmiento Diaz", "Cristian Javier Silva", "Mariana Daniela Tejada", "Andrea Rosalia Tejada", "Maximiliano David Tello", "Fabian Ariel Troncoso Armada", "Gabriela Cristina Varas", "Nilda Estela Vedia", "Osvaldo Agustin Villa Rivero", "Juan Marco Yañez Bastida", "Juana Del Carmen Yubel", "Victoria Noemi Zabaleta", "Eugenia Natalia Aballay", "Jesus Miguel Acosta", "Andres Marcelo Aguilera", "Jorge Daniel Aguirre Fernandez", "Analia Fabiana Aravena Castro", "Jaquelina Veronica Araya", "Mario Ruben Arredondo", "Clara Lila Arredondo", "Heber Jeremías Arrieta", "Mariano Enrique Avendaño Fuentes", "Agostina Lilia Balderramo Palma", "Jorge Mario Bianco", "Jonathan Ariel Brizuela Mendez", "Raul Eduardo Cabanay", "Jorge Enrique Caceres Lujan", "Nelson Javier Carrion", "Natalia Yanina Carrizo", "Franco Javier Carrizo Garro", "German Leonardo Carrizo Torres", "German Alexander Casibar", "Santiago Daniel Castro Flores", "Orlando Victor Luis Chavarria", "Valeria Del Carmen Chumbita Carmona", "Santiago Nicolas Cocco Tapia", "Rita Alejandra De Vita", "Cristian Roger Delgado", "Cristian Daniel Diaz", "Carlos Alberto Dominguez", "Jonatan Matias Espinoza", "Marisa Isabel Fernandez", "Leonardo Alberto Ferreyra Cachi", "Walter Adrian Flores", "Daniel Alejandro Flores", "Maria Eugenia Flores", "Alejandro Hugo Frias", "Cintia Paola Garcia", "Amelia Veronica Garcia Cañada", "Matias Omar Garin", "Gustavo Fabian Gomez", "Mariela Rosa Gomez", "Ricardo Ruben Gonzalez", "Oscar Gonzalo Hollger", "Gaston Ibañez Chavez", "Ricardo Ariel Ibazeta", "Jorge Emanuel Jofre", "Sergio Diego Jofre Funes", "Matias Alejandro Leales", "Italo Ariel Lopez", "Maria Rosa Lucero", "Melisa Cintia Merino", "Juan Esteban Miranda Heredia", "Juan Jose Montosa", "Gabriel Maximiliano Mulet", "Javier Maximiliano Nacif", "Gladys Vanesa Ortiz", "Eduardo Sebastian Paez", "Voigue Yamil Pellizzari Billinger", "Ivan Gabriel Peña", "Maximiliano Perez Riveros", "Lucas Eduardo Prado", "Maximiliano Primucci", "Juan Pablo Quiroga Poblete", "Hector Rolando Quiroz Rodriguez", "Alvaro Federico Rios Gallego", "Wilson Marcelo Rivas Brizuela", "Carlos Alberto Rodriguez", "Walter Daniel Rosales", "Pablo Ignacio Ruarte", "Nicolas Rodolfo Salinas Archerito", "Arturo Jesus Sanchez", "Carmen Carina Tejada", "Marcio Hernán Tejada", "Mario Alberto Toledo", "Leonardo Daniel Valdez", "Claudio Ariel Vargas", "Maria Silvia Vera", "Claudio Gustavo Videla", "Laura Beatriz Yacante", "Alejandra Angelica Abadia", "Ramiro Adrian Agüero", "Braian Nahuel Arancibia Pringles", "Marcos Jonatan Araoz", "Mauro Jeremias Araujo Olivares", "Agustin Sebastian Araya Rivera", "Federico Ariel Arredondo", "Nibaldo Andrés Azocar Coto", "Fernando Marcelo Balmaceda Oyola", "Mathias Gabriel Bernal Jorquera", "Martin Eduardo Bernal Muñoz", "Sebastian Andres Bonomo Ponce", "Jose Enrique Bustamante", "Dardo Ramiro Castillo", "Alexis Gaston Castro", "Benjamin Nicolas Castro Maradona", "Federico Jesus Codorniu Balmaceda", "Mauro Alberto Coitinho", "Ruben Ariel Cortez", "Dario Ruben Costa", "Facundo Gabriel Covella Lucena", "Victor Mauricio De La Torre", "Jorge Emmanuel Delgado", "Juan Daniel Domijan Deymie", "Willian Alfredo Duran", "Orlando Daniel Espejo", "Jeremias Luis Gabriel Esquivel Solar", "Eduardo Mario Fernandez", "Juan Adolfo Fernandez Rosales", "Renzo Francisco Ferrandiz Montiel", "Jorge Alexander Flores", "Fabrizio Jesus Garramuño", "Enzo Rodrigo Garramuño", "Gonzalo Ariel Gimenez", "Jose Ricardo Giudice", "Javier German Gonzalez", "Mario Alberto Gonzalez Ibazeta", "Enzo Emanuel Guzman Tejada", "Ruben Rogelio Herce Punazzo", "Dario Sebastian Herrera", "David Esequiel Herrera Toledo", "Marco Jose Ibarbe", "Alejandro Omar Infante", "Luciano Emanuel Jofre", "Ezequiel Hernan Juarez Tela", "Damian Ismael Laciar Gonzalez", "Franco Daniel Lepez", "Joel Antonio Macias Garcia", "Emanuel Adolfo Manrique", "Santiago Emanuel Mansilla Perez", "Javier Emmanuel Mardones", "Hector Facundo Martin", "Tadeo Daniel Martinez", "Guido Giuseppe Marzano Solis", "Federico Oscar Mas Pinto", "Matias Rodrigo Mereles Juarez", "Gustavo Ariel Molina", "Rocio Iris Molina Hidalgo", "Martin Nelson Moreno", "Ricardo Demetrio Mostazo", "Victor Nicolas Muños Gomez", "Leonardo Mario Muñoz Guaymain", "Jorge Andres Narvaez", "Leandro Maximiliano Navarro", "Andres Gustavo Noguera", "Fernando Walter Ontivero", "Cristian Nahuel Oropel", "Santiago Ariel Oropel Quinteros", "Jose Luis Ortega", "Edgardo Gustavo Ortega Rodriguez", "Carlos Alberto Paez", "Fabricio Roman Paoloni", "Maria Daniela Peña", "Gabriel Matias Peñaloza", "Maria Luisa Pereyra", "Ricardo Ezequiel Pereyra", "Jorge Rafael Perez", "Marcos Federico Perez Lopez", "Mauricio Ricardo Pizarro", "Juan Gaspar Prlender Diaz", "Walter Ruben Marcelo Quiroz", "Gaston Alberto Reina", "Mauro Rodrigo Ricotti", "Luciano Ezequiel Rios Palacio", "Cristian Ezequiel Rodrigo Yanadel", "Carlos Franco Roduen", "Gabriel Emanuel Roldan Elizondo", "Dario Martin Ruz", "Matias Alejandro Santander", "Waldo Emiliano Segovia D´Asaro", "Gerardo Sierra", "Maximiliano Pablo Silva", "Leandro Emanuel Sosa", "Rubens Dario Sosa Garcia", "Mario Alberto Suesa", "Francisco German Tapia Baldis", "Martin Ariel Terrera", "Pablo Enrique Torres", "Miguel Adrian Torres Oyola", "Lautaro Jose Vacca Gomez", "Valentino Gabriel Vallejos Peralta", "Roberto Ariel Varela Bustos", "Daniel Jorge Vargas", "Juan Pablo Vargas", "Jonathan Emanuel Vargas Carretero", "Federico Ariel Vidable", "Martin Eduardo Videla Vargas", "Cristian Adrian Vila Coria", "Adrian Emmanuel Villegas Martinez", "Alexander Esequiel Vivarez Garro", "Federico Zaehnsdorf", "Franco Matias Zalazar", "Axel Daniel Zanetti", "Alejandro Federico Zarate"]

  useEffect(() => {
    localStorage.getItem("etapa") && setPremiosSorteados(Number(localStorage.getItem("etapa")) + 1)
    console.log("etapa al cargar: ", premiosSorteados)
  }, [])

  function fullReset() {
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
              {premiosSorteados < 5 && <p className='text-5xl font-semibold'>Sorteo {premiosSorteados} : {premiosSorteados < 3 ? "$180.000" : (premiosSorteados < 4 ? "$220.000" : premiosSorteados < 5 ? "$300.000" : premiosSorteados < 6 ? "$400.000" : "$550.000")}</p>}

              {premiosSorteados > 6 ? <button onClick={fullReset}>Empezar de nuevo</button> : <Button data={data} sorteo={sorteo} setSorteo={setSorteo} />}
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
                numberOfPieces={200}
                wind={0}
                gravity={0.05}
                tweenDuration={1000}
                maxSpeed={0.5}
                initialVelocity={0.5}
                drift={0}
                shapes={['square', 'circle']}
                colors={['#2ab5ec', '#CCCCCC', '#066da3']}
                disableForReducedMotion={true}
              />
            </>
        }
        {/* <ListWinners /> */}

      </div>
      <div className=''>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <img src={fondo} alt='fondo' />
      </div>
    </>
  );
}

export default App;
