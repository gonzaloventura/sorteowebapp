import React from 'react'
import './RandomNames.scss'

const RandomNames = ({sorteo, setSorteo}) => {
  const bomboOne = ['Rosario Abellan', 'Camila Acrogliano', 'Graciela Agostino', 'Sandra Aguirre', 'Sabrina Alarcon', 'Matias Albe', 'Renata Almeida', 'Damian Almonacid', 'Anabella Alvarez', 'Martín Alvarez', 'Jonathan Alves', 'Damian Aniceto', 'Agostina Astengo', 'Ayelen Astudillo', 'Fabricio Ayosa', 'Keyla Ayosa', 'Lidia Ayosa', 'Romina Ayosa', 'Silvia Bacharach', 'Maria Laura Baez', 'Bautista Bailo', 'Paola Balmori', 'Florencia Balsarini', 'Eduardo Barbagelata', 'Julia Barbieri', 'Leticia Barboza', 'Martina Bargiela', 'Vanesa Barron', 'Juan Pablo Barros', 'Liliana Barros', 'Milagros Barros', 'Alejandra Basilico', 'Nadia Bayle', 'Nicolas Becerra', 'Facundo Belmonte', 'Adrian Benitez', 'Diego Bertrand', 'Diego Biggeri', 'Federico Bongiovanni', 'Leandro Bouzas', 'Natalia Bozzarelli', 'Nicolas Cabrera', 'Cristina Caceres', 'Gustavo Caceres', 'Nicolas Caje', 'Hernan Calbe', 'Gustavo Cali', 'Luis Calvi', 'Miriam Calvin', 'Florencia Cañete', 'Edgardo Castagna', 'Cynthia Castillo', 'Gabriel Cattolica', 'Veronica Cavaliere', 'Daniel Celadilla', 'Nicolas Cesio', 'Marcelo Chacur', 'Luciana Chaparro', 'Alan Chiani', 'Micaela Chiavant', 'Griselda Ciancio', 'Florencia Cócaro', 'Narciso Codron', 'Giuliana Coletta', 'Carlos Conca', 'Emiliano Conde', 'Julio Contrera', 'Damian Copa', 'Mariana Coppo', 'Oscar Costoya', 'Damian Couso', 'Guillermo Cowes', 'Nicolas Creado', 'Laura Crevatin', 'Irina Cuk', 'Juan Pablo Damico', 'Gabriela Danna', 'Hector De Donato', 'Juan Carlos De Marco', 'Florencia Del Sel', 'Soledad Del Tedesco'];

  const bomboTwo = ['Camila Del Vecchio', 'Lucia Devesa', 'Lorena Di Blasio', 'Norberto Di Bruno', 'Ignacio Di Lernia', 'German Di Pietro', 'Elda Di Vincenzo', 'Natalia Diaz Lannes', 'Federico Dindart', 'Cecilia Dorado', 'Valeria Dorado', 'Eduardo Dos Santos', 'Valeria Echegaray', 'Marina Enriotti', 'Javier Escobar', 'Ayelen Espindola', 'Graciela Esquivel', 'Lorena Estrada', 'Romina Falchettoni', 'Santiago Farias', 'Camila Fernandez', 'Fredi Fernandez', 'Leonardo Fernandez Guida', 'Mauro Fernandez', 'Noemi Fernandez', 'Sergio Fernandez', 'Jorgelina Ferrini', 'Camila Ferro', 'Facundo Figueredo', 'Gaston Figueroa', 'Santiago Figueroa', 'Micaela Fontana', 'Pablo Forconesi', 'Andrea Fraga', 'Julieta Franco', 'Esteban Frank', 'Marco Gabriel Frattura', 'Joel Frias', 'Fernando Gago', 'Fernando Galardo', 'Daniela Garcia', 'Gabriel Garcia Fainelli', 'Javier Gauna', 'Hernan Gayoso', 'Jose Gherbesi', 'Martin Gil Casalas', 'Gustavo Giolito', 'Hernan Gomez', 'Ezequiel Gomez', 'Juan Carlos Gonzalez', 'Luis Gonzalez', 'Marcelo Gonzalez', 'Maria Del Lujan Gonzalez', 'Aldo Grilli', 'Gustavo Grobe', 'Sabrina Guerra', 'Lucas Guerrero', 'Damian Guerrini', 'Carolina Hafkemeyer', 'Ailen Hamada', 'Eduardo Hand', 'Sandra Herrera', 'Walter Ibalo', 'Sebastian Isnardi', 'Vanesa Klempert', 'Matias Kreick', 'Jesica Lafay', 'Fernando Lamela', 'Roberto Leguizamon', 'Solange Leone', 'Romina Lezcano', 'Denisse Limardo', 'Guido Llorens', 'Mauricio Lopardo', 'Silvio Lopes', 'Barbara Lopez Gaglione', 'Daniela Lopez', 'Romina Lopez', 'Luciana Lozano', 'Juan Lucero', 'Ayelen Magan', 'Claudia Mamani'];

  const bomboThree = ['Javier Mansilla', 'Irma Mansilla', 'Norma Mansilla', 'Sergio Mansilla', 'Alicia Manuel', 'Mariano Marcolongo', 'Paula Marion', 'Vanesa Marone', 'Aldo Martin', 'Edgar Martinelli', 'Patricia Martinez', 'Sebastian Martinez', 'Leo Marzocchini', 'Salome Megaloeconomos', 'Adrian Mendoza', 'Monica Meneghetti', 'Sebastian Merino', 'Luciana Miguez', 'Maximiliano Minuzzi', 'Ernesto Miranda', 'Camila Miranda', 'Marcela Mojica', 'Matias Molgado', 'Gabriel Monserrat', 'Adrian Montecinos', 'Eva Montenegro', 'Carlos Morales', 'Karen Morel', 'Martin Moreno', 'Viviana Mottillo', 'Quimey Mozetic', 'Gaston Muñoz', 'Marcelo Neri', 'Laura Noya', 'Marcos Nuñez', 'Sebastian Nuñez', 'Pablo Obrequi', 'Esteban Olmedo', 'Jose Olmedo', 'Julio Ordoñez', 'Nelson Ordoñez', 'Jorge Ortiz', 'Ruben Ortiz', 'Jimena Ovejero', 'Mariana Pagani', 'Sebastian Paiva', 'Silvina Paredes', 'Ernesto Parodi', 'Lidia Pasqua', 'Ariel Passarelli', 'Sebastian Pastor', 'Romina Pennisi', 'Nicolas Pereyra', 'Alejandro Perez', 'Gladys Perez', 'Rocio Perez', 'Maria Fernanda Perrini', 'Antonella Petrone', 'Jorge Pietrobon', 'Paula Piñeiro', 'Carla Popica', 'Sebastian Porta', 'Fernando Prochazka', 'Lorena Quadrelli', 'Leandro Quezada', 'Alexis Quiñone', 'Marina Rappazzo', 'Carina Reyes', 'Alejandra Rieg', 'Yamila Rio Giorgis', 'Lorena Rios', 'Laura Robert', 'Alejandro Robledo', 'Christian Rodriguez', 'Iara Rodriguez Zalazar', 'Silvia Rodriguez', 'Clara Roffe', 'Matias Rogani', 'Claudio Rojas', 'Maximiliano Romagnoli', 'Alejandra Romeo'];

  const bomboFour = ['Freddy Rosales', 'Rosana Rosales', 'Braian Ruda', 'German Ruiz', 'Jose Cesar Ruiz', 'Soledad Sala', 'Gonzalo Salega', 'Juan San Martin', 'Adriana Santagata', 'Lucas Santarenz', 'Gustavo Santucho', 'Walter Schlender', 'Sofia Scuglia', 'Antonella Serafini', 'Diego Sesto', 'Esther Sevinsky', 'Juan Silvero', 'Leonardo Simon', 'Rodrigo Solorza', 'Jorge Sorrequieta', 'Jorge Soto', 'Guillermina Striebeck', 'Agustin Susevich', 'Monica Szczepanski', 'Adriana Taussig', 'Cinthia Tavarovsky', 'Natalia Tejeda', 'Guillermo Tejerina', 'Gustavo Testoni', 'Florencia Torres', 'Omar Torres', 'Ignacio Torres', 'Liz Tovar', 'Leandro Trascierra', 'Ailen Traverso', 'Abel Troncoso', 'Rosalia Trotta', 'Daniel Turza', 'Lorena Tusso', 'Blanca Urueña', 'Agustin Vaccaro', 'Mariana Vallota', 'Ezequiel Vazquez', 'Fernando Vazquez', 'Diego Velando', 'Sofia Velasquez', 'Mariela Velazquez', 'Alejandro Vergottini', 'Andrea Vestilleiro', 'Alejandra Videla', 'Carlos Villegas', 'Delfina Vitor', 'Gaston Volpato', 'Juan Weston', 'Ernesto Wyse', 'Analia Yabar', 'Alejandra Zapico', 'Natalia Zarza', 'Julio Zelaya', 'Gabriel Zolfo', 'Diego Zotta', 'Iñaki Zudaire', 'Daniel Burstein', 'Martin Nenninger', 'Farid Pastore Messina', 'Maximiliano De Marco', 'Paz Tokuhara', 'Ignacio Paratore', 'Noelia Rosas', 'Rosa Carasec', 'Emmanuel Andrada', 'Evelyn  Vivas', 'Jose Matos Galban', 'Daniela Jilko', 'Paula Machuca', 'Marcelo Machicote', 'Vanesa Biglia', 'Romina Marti Canavino', 'Stefano Baccanelli', 'Mariana Lorenz', 'Natalia Garcia Bianco', 'Gerardo Ester', 'Ezequiel Metrailler'];

  return (
    <>
    {sorteo === "btn" ? 
    <>
    <div className='randomnames'>
      
      <div className='box'>
        {bomboOne.map((ganador) => (
            <li key={ganador}>{ganador}</li>
          ))
        }
      </div>
      <div className='box'>
        {bomboTwo.map((ganador) => (
            <li key={ganador}>{ganador}</li>
          ))
        }
      </div>
      <div className='box'>
        {bomboThree.map((ganador) => (
            <li key={ganador}>{ganador}</li>
          ))
        }
      </div>
      <div className='box'>
        {bomboFour.map((ganador) => (
            <li key={ganador} className='winner'>{ganador}</li>
          ))
        }
      </div>
    </div>
    <div className='blackblur bottom'></div>
    </>
    :
    <>
    <div className='blackblur top'></div>
    <div className='randomnames speed'>
      <div className='box'>
        {bomboOne.map((ganador) => (
            <li key={ganador}>{ganador}</li>
          ))
        }
      </div>
      <div className='box'>
        {bomboTwo.map((ganador) => (
            <li key={ganador}>{ganador}</li>
          ))
        }
      </div>
      <div className='box'>
        {bomboThree.map((ganador) => (
            <li key={ganador}>{ganador}</li>
          ))
        }
      </div>
      <div className='box'>
        {bomboFour.map((ganador) => (
            <li key={ganador} className='winner'>{ganador}</li>
          ))
        }
      </div>
    </div>
    </>
    }
    </>
    
  )
}

export default RandomNames