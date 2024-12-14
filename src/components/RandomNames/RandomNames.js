import React from 'react'
import './RandomNames.scss'

const RandomNames = ({sorteo, setSorteo}) => {
  const bomboOne = ["MAIDANA ANGEL EMILIO", "FRUNCILLO JUAN ALBERTO", "ACCAME ERNESTO HORACIO", "CORPUS PATRICIA VIRGINIA", "PALACIOS HECTOR ANIBAL", "LERA AMBROSIO CONCEPCION", "VENUTA JOSE LUIS", "KRAMER GONZALO FABIAN", "KING DEBORA RUTH", "PRAT PABLO GERARDO", "ALBERINO ANGEL ALFREDO", "FREIRE CLAUDIO ALEJANDRO", "DELLA SAVIA ISABEL NORMA", "SILVA JORGE OSCAR", "ZWARYCZ ALEJANDRO SERGIO", "PERLO FERNANDO MARCELO", "MONTEIRO FRANQUEIRA EDUARDO ALBERTO", "VALLARO CLAUDIO DANIEL", "DIBARBORA CLAUDIO RODOLFO", "MOMBLANC RAUL ENRIQUE", "CHERASCO MONICA LUISA", "MARCOTE HORACIO JOSE", "DAVERIO ALBERTO LUIS", "BELLOC PABLO ROBERTO", "TUSMAN GERMAN EDUARDO", "MAZZARESI DANIEL HECTOR", "CUBASSO CARLOS ALBERTO", "CELA HECTOR OSVALDO", "TIANO VIRGINIA DIANA", "FULGENZI PATRICIA MONICA", "GARCIA HUGO JAVIER", "SZTRASBERGER WALTER FABIAN", "OLDANI GUSTAVO ALBERTO", "CASIMIRO CLAUDIO ADRIAN", "MENDEZ WALTER RAMON", "SAGANIAS ANGELA DEL VALLE", "MOSCHETTI NESTOR DARIO", "ABDO NESTOR ADRIAN", "D ANGELO SERGIO HERNAN", "SANGUINETTI ANDREA LUCIA", "DI DOMENICO GABRIEL", "URRIBARRI HERNAN", "BORZONE JORGE EUGENIO", "PALACIOS SERGIO HUGO", "BALDASSARRE JAVIER ANDRES", "BONAMICO PATRICIA SUSANA", "MONTEAGUDO PABLO MARCELO", "FALOTICO CARLOS ALFONSO", "GARCIA JORGE LUIS", "GONZALEZ ARVELAIZ JESUS ALBERTO", "ALUMA MARÍA VERÓNICA", "VERA MARCELO HECTOR", "MENTA HECTOR EDUARDO", "ROMANAZZI CARLOS ALBERTO", "OSORIO GABRIEL OMAR", "CHIRINO BARBANO HECTOR GABRIEL", "DIEZ BOITO MARIA TERESA", "BIANCHI ANTONIO FABRICIO", "IANNUZZI ANA ELISABET", "DELGADO OSCAR FABIAN", "FASANO SILVIA NORA", "CARTOLANO PABLO ANTONIO", "VERDICCHIO SILVINA", "GERMAN PABLO LEONEL", "BOIERO MONICA SANDRA", "FURLAN ADRIAN LUIS", "IGLESIAS JAVIER HORACIO", "PEREZ LILIANA BEATRIZ", "STOISA JUAN PABLO", "ORQUERA JORGE DANIEL", "D ALESSANDRO FERNANDO ARIEL", "PERSICHINI SOFIA MYRIAM", "MALDONADO FLORENCIA", "BETTERA DANIEL ALFREDO", "CARNAVAL SILVIA VERONICA", "RIVERA NORBERTO RUBEN", "CELLARIO PATRICIA DEBORAH", "FRAGA CLAUDIA MABEL", "BRAGONE GASTON DANIEL", "CUENCA MANUEL SANTIAGO", "PONCE CLAUDIA ALEJANDRA", "POSSE DIEGO", "GAVINO CASERTA MARIA FABIANA", "PENELA CARMEN KARINA", "PETRUZZI PAOLA SUSANA", "LUCHENTE DANIEL ERNESTO", "AFFAICH VICTORIA LAURA", "MAIDANA PABLO DANIEL", "SCIPIONE HORACIO MIGUEL", "LAPETINA CESAR ALEJANDRO", "PUCCI CECILIA INES", "CHAVARRIA DIEGO ENRIQUE", "VILLA HUGO GERMAN", "GUIROTANE RICARDO GERMAN", "BAZAN FERNANDO LIONEL", "REPOSSI FEDERICO ANTONIO", "VIDAL WALTER EDUARDO", "MEDINA ALBERTO DANIEL", "MORGANTI FEDERICO ESTEBAN", "CENTORBI RICARDO HERNAN", "TAIANO NORBERTO", "TRILLO ARIEL FEDERICO", "GONZALEZ ROXANA ELIZABETH", "MARTIN JORGE ALBERTO", "MORETTI ARIEL EDGARDO", "CATTANEO CARLA ROMINA", "LAZARY ELIZABETH BLANCA", "PONCE AMORINA LORENA", "KUSZEK GERMAN ROBERTO", "BERTACCINI PABLO ALEJANDRO", "CARAMÁNICO CHRISTIAN LUIS", "SEGOVIA LEONARDO ADRIAN", "MARTINEZ MARIA YSABEL", "GONZALEZ LILA GABRIELA", "GIRLANDO FERNANDO JAVIER", "PARMA PABLO DAVID", "GARAY GABRIELA RITA", "GONZALEZ PABLO ANIBAL", "BARRIOS RAUL GASTON", "SUAREZ TORRES FERNANDO CARLOS", "BERTELLO GUSTAVO HORACIO", "ORFANO LEONARDO GABRIEL", "CASTILLO MIRTA VALERIA", "MARTINEZ MARTIN ESTEBAN", "MARADONA PABLO ARIEL", "BOTTIGLIERI ANALIA KARINA", "PONFERRADA MARIANA INES", "DI LOLLO CARINA ANDREA", "DAVILA MARTHA ALEJANDRA", "AYALA MARCELO RUBEN", "LUENGO CRISTIAN FABIO", "VIDAL JUAN ESTEBAN", "SARTORE MARTIN DIEGO", "BUTTI MABEL ALEJANDRA", "RICCIONI GASTON HERNAN", "GARCILAZO MARA ELIZABETH", "BEDOYA PATRICIA KARIN", "ALVAREZ ROSANA PATRICIA", "AYUB HERNAN JORGE", "CORTI DIEGO JAVIER", "FERREYRA SHYLA", "ALVAREZ CESAR ALEJANDRO", "TORRILLA CLAUDIA LORENA", "BENITEZ HUGO MANUEL", "DE MATTIA LUIS ARIEL", "GAMBINO PABLO OMAR", "JAIME HIERREZUELO MARCOS", "ROIS VERONICA MARIA", "MAURIZIO MARIA LAURA", "DI PANGRAZIO DIEGO ALCIDES", "LOPEZ JUAN MANUEL", "GNUS MIGUEL DARIO", "DIAZ GASTON ARIEL", "FERNANDEZ MARIA ROXANA", "TILLAR CARLOS ALBERTO", "DIAZ FERNANDO DANIEL", "FERRARESE SILVINA LAURA", "MATTIAS LIONEL", "GARRO CARLOS ALEJANDRO", "SCHMALE GUILLERMO EMILIO", "PATZKE MELINA ANABELLA", "SALVO FEDERICO BARTOLO", "GALARZA HERMINDA YOLANDA", "NIETO ARIEL", "FONTAN BLANCH NICOLAS ALEJANDRO", "MEDINA DANIELA ANDREA", "ANTONELLI HERNAN ARIEL", "ZAMUDIO FABIAN ALBERTO", "ARRIETA GUSTAVO ARIEL", "GOTTAS MICAELA", "RUZO ANALIA GABRIELA", "PASEIRO CARLA", "MAGARIÑOS CRISTIAN OMAR", "AHUMADA PABLO SILVESTRE", "PADRON DIEGO", "VULCANO JULIETA ALEJANDRA", "GALEANO MARIANO ANDRES", "GENTILE JORGE REYNALDO", "GONZALEZ EDUARDO MAURICIO", "BULLONES MARCOS MEDARDO", "GONZALEZ ANDREA VERONICA", "MANSON ASTOUL GEORGINA MARIA", "LONGO ALEJANDRO FABIAN", "PARDO SEBASTIAN", "BRIZUELA MARTIN ENRIQUE", "PINI GASTON", "TEJADA MARTIN ALEJANDRO", "LOPEZ MARIA LEONOR", "PUNTILLO ALEJANDRO DANIEL", "FERNANDEZ BUCCHI IGNACIO", "OLMEDO RODRIGUEZ MARIELA ANAHÍ", "POGGI MÓNICA CLAUDIA", "CORNEJO MARIO ESTEBAN", "LOPEZ MARIELA NOEMI", "CORIA GABRIELA ALEJANDRA", "RAMIREZ DIEGO FRANCISCO", "RUIZ LETICIA PAULA", "PITA LUZ MARIA", "YAÑEZ CINTIA LORENA", "FOSSAS MARIANO JAVIER", "BERTONI JUAN FERMIN", "SANCHEZ MARCELO ARIEL", "PELAYTAY CORICH JULIO MAXIMILIANO", "HERNANDEZ SANDRA MARICEL", "ALVAREZ JUAN MANUEL", "ROJAS CRISTINA ALEJANDRA", "GARCIA JUAN IGNACIO", "BOGGINI JULIA ANTONIA", "ALVARENGA CARLOS PAUL", "SAVELLI IVAN ARIEL", "GERIGE ARIEL FABIAN", "NICOLAU SEBASTIAN", "LOTO SEBASTIAN DOMINGO", "QUATROMANO NOELI CECILIA", "GILLIGAN DIEGO MANUEL", "VAIO CRISTIAN GABRIEL", "LENZI ELEONORA", "HERRERO ALDERETE FEDERICO RAUL", "TOSTO MARIANO CARLOS", "SCALA MARIELA", "BRIZUELA EDGARDO ARIEL", "NUÑEZ CHRISTIAN LIONEL", "GIOVAGNORIO JUAN JOSE", "SERRAVALLE FEDERICO GUILLERMO", "LOPEZ CROSS ANDRÉS GERARDO", "PUGLIESE ANALIA SILVINA", "QUIROGA DANTE OMAR", "OSTINELLI MARINA NATALIA", "MERLO VERONICA ANSELMA", "PANDOLFO LEONARDO", "GONZALEZ HERNAN JAVIER", "VALDEZ GERMAN DANIEL", "REGUEIRO PABLO ALFONSO", "NICOLUSSI ERRECABORDE PABLO ALEJANDRO", "DELLUCCHI ROBERTO GUSTAVO", "CORTEZ PATRICIA KARINA", "BERIG LEANDRO DAMIAN", "FERREYRA CARINA ALEJANDRA", "RENGIFO RICARDO GASTON", "ANDREOCCI MAXIMILIANO JAVIER", "MONEZUELAS DIEGO HERNAN", "BALTORE JUAN PABLO CRISTIAN", "HEVIA MARIA HELENA", "VAQUEL CELIA ESTELA", "RIQUELME MARIANO JAVIER", "ESPINOZA SERGIO IVAN", "MENDOZA MARIA EUGENIA", "MUCILLI NICOLAS MARCOS", "REANO MAURICIO"]

  const bomboTwo = ["MOYANO OCHOA VERONICA", "BERTOSSI OITANA DIEGO MARTIN", "CONTIGIANI CARLOS ALBERTO", "PEREA JUAN DOMINGO", "GABAL MARIA GUADALUPE", "PAWLUCH LUCAS GABRIEL", "SALAS ALEJANDRO JAVIER", "DEMARIA JUAN PABLO", "BLANCO SUSANA NATALIA", "ROMERO VICTOR HUGO", "FABRO NORBERTO RAMON", "GINER MARCOS ALEJANDRO", "BO NICOLAS ENRIQUE", "MARINI CRISTHIAN FABIAN JONAS", "BERTINI VICTOR EMILIANO", "ZUCOTTI JAZMIN LEIZA", "GARRO MAXIMILIANO EMANUEL", "RIO NICOLAS", "MOTTA AGUSTIN", "GROPPO SEBASTIAN", "GODOY VANESA VERONICA", "LEMA DANIELA VANESA", "WUNDERLICH AMORINA PAOLA", "RAMPONE DIEGO JAVIER", "ADON MAXIMILIANO DAVID", "LOSI GASTON EDUARDO", "BON LEONARDO MATIAS", "FRANCESE BLANCO LUCAS DEL CORAZON JESUS", "GALANTE CARLOS LEONARDO", "PRIETO FERRARI NATALIA GABRIELA", "GAMEZ CAROLINA ELIZABETH", "AGUIRRE ANGEL FEDERICO", "BOSCH FEDERICO DAMIAN", "BALDIVIEZO ABEL DAMIAN", "ROTHACHER MARIA SILVINA", "IANNE DIEGO", "BERRA MARIA EUGENIA", "CAYRE NICOLAS", "CAPOLUNGO ROBERTO MATÍAS", "VALLEJOS SERGIO DAMIAN", "CACCIARELLI LUCAS DANIEL", "FERNANDEZ PABLO ANIBAL", "DIAZ NERINA SONIA", "POGGIO ESTEBAN MARTIN", "PETTI VIERA SEBASTIAN EMMANUEL", "GUTIERREZ JUAN PABLO", "ANRRIQUE JUAN MARCELO", "GRABUSKA MARIANA LAURA", "LATANSE CECILIA RITA", "CACERES MARTIN ALFREDO", "PIANELLI EDUARDO CARLOS", "CERETTI GANCHEGUI SEBASTIAN MARTIN", "ARIAS SEBASTIAN ALFREDO", "SEMENIUK ARIEL LEONARDO", "DI TULLIO MARIANO", "CONTINO PABLO MAXIMILIANO", "FERNANDEZ RODOLFO JAVIER", "MORAN LUCAS MATIAS", "BATTAGLIA MATIAS ALEJANDRO", "ANDREAU LORENA ELIZABET", "RACCANELLO VERONICA BEATRIZ", "MANUALE DAMIÁN HORACIO", "SAPORITO WALTER DAMIAN", "MARTINEZ WALTER OSCAR", "BIANCO LAUREANO JOSE", "ORTIZ MONICA INES", "RUIZ MARIA DANIELA", "PORTELA PABLO EMILIANO", "CAMPORA DANIEL FERNANDO", "ALVAREZ GUSTAVO ARIEL", "ESCALANTE GERONIMO EMANUEL", "BUTMAN MAGALI", "LORENZINI MAXIMILIANO", "DIAZ JAVIER EDGARDO", "MOYANO NICOLAS GUILLERMO", "COLINA MARIA DEL ROSARIO", "CONDE MARIA FLORENCIA", "BLANCO ARIEL MATIAS OSVALDO", "BERTILLER EMMANUEL PABLO EDUARDO", "OVANDO DONATI DIEGO EMANUEL", "SALZOTTI DARIO ALEJANDRO", "URBINI JOSE MARIA", "DELPIANO ANGEL HECTOR JAVIER", "QUINTANA VASQUEZ GERARDO EMILIO", "CARBONE ROBERTO", "COUCHE DANIEL JUAN RAMON", "JACINTO IGNACIO MANUEL", "PEDRAZA CARLOS DAMIAN", "MORA SEBASTIAN JAVIER", "BANCHERO MARIA CECILIA", "ROLANDO MARTIN CARLOS", "GARCIA LUCIANA", "MUZIO FEDERICO IGNACIO", "SANCHOTENA JULIA", "ORLANDO JUAN ELIAS", "GARRIDO MARIO RICARDO", "PEREZ DAMIAN EZEQUIEL", "MARIANI MATIAS GASTON", "MADEO MARIA LAURA", "ARMOA AXEL MARTIN", "PINTOS PAOLA DANIELA", "BARRERA LUCERO EDUARDO DANIEL", "FIELE LEANDRO IVAN", "VAZQUEZ FEDERICO MAURICIO", "ZAMUDIO HERMES SEBASTIAN", "FORTUNATI ADRIAN", "NEUMANN GABRIELA LAURA", "CASTILLO VANINA NOELIA", "DE LUCA LUCIANO MATIAS", "MANAI SEBASTIAN ERNESTO", "ALCARAZ MAURICIO SEBASTIAN", "ALVAREZ FRANCISCO MANUEL", "ALVAREZ MARIA LAURA", "TABARES GUILLERMO JAVIER", "LANCELLOTTI RICARDO ROBERTO", "NAVARRO LEONARDO BENITO", "SANCHEZ LEONARDO JOAQUIN", "MURAY LUIS ALBERTO", "SAFATLI GABRIEL", "BRITTOS LUCAS MAXIMILIANO", "LAURINO ROMINA ELIZABETH", "SEGUEL RICARDO DARIO", "BIANCHI LUCAS HERNAN", "GARZON VIRGINIA GABRIELA", "ABDALA ADRIAN EDUARDO", "SUAREZ EDUARDO NICOLAS", "CUARONI WALTER IVAN", "PRAT EDUARDO ANDRÉS", "GUTIERREZ RENATA", "FERRARI DEBORAH LUCIANA", "PLATERO SANTIAGO ARIEL", "POZZOLI GONZALO", "VILLALBA HUGO ALEJANDRO", "BESSEGA DIEGO IGNACIO", "ROVELLI JUAN HORACIO", "GOMEZ CASCALES RENE SEBASTIAN", "MARINO EZEQUIEL NICOLAS", "HANSEN JULIAN", "JUAREZ ANDREA SOLEDAD", "PAEZ JONATHAN ESTEBAN", "HUMAÑO LUIS ALBERTO", "ULLOA FABIAN LEONARDO", "CARRIZO NOELIA", "MUDRYJ LUCIANO IGNACIO", "MUSSO LUIS MAXIMILIANO", "INNOCENTI CARLOS ALBERTO", "PORTILLO LUCAS YAIR IVAN", "OBREGON INES", "LOPEZ VERA LUCIA", "GADBAN MATIAS", "NECEFOR MARINA ANABEL", "CAMILETTI NOELIA DANIELA", "CASTILLO NORMA JACQUELINE", "LAVECCHIA PATRICIO JUAN IGNACIO", "PEDRA LUCIANO ALEJANDRO", "CORDOBA MAURICIO EXEQUIEL", "DELGADO FRANCIA MARIANO MARTIN", "CULLA FLORENCIA DANIELA", "CANTERO MATIAS LIONEL", "VARGAS MARÍA JULIETA", "MARTIN MAURO SEBASTIAN", "AYALA DIEGO EZEQUIEL", "BATALLER GONZALO", "PODESTA LEANDRO ANIBAL", "DOMINGUEZ YOHANA", "THOMAS RAMSEYER EDUARDO RUBEN", "ELIAS JONATAN ALEJANDRO", "CENTENO MATIAS EZEQUIEL", "MARANZANA MAXIMILIANO", "TORRES IRENE RITA", "FLORES PEREYRA NAHUEL", "ANTOGNINI JORGE OSCAR", "LANGLOIS JOSE IGNACIO", "MAMCHUR FACUNDO JEREMIAS", "LESCANO EMILIANO JAVIER", "FERNANDEZ PAMELA GISELE", "NUÑEZ LUIS DARIO", "SUAREZ MARCOS RAMON ANTONIO", "SUIGO EMANUEL", "VIDELA ELIANA BEATRIZ", "VICENTE GASTON", "SOLVEYRA DANIEL ALEJANDRO", "MORALES ANGEL PABLO", "BUSSO FEDERICO", "CALVETE FERNANDO RODRIGO", "MARCONI SERGIO DANIEL", "BENITEZ NADIA SOLEDAD", "VAZQUEZ MARIA LAURA", "SCASSO MARCELO PABLO", "FURQUET MATIAS CATRIEL", "RECABARREN MATIAS", "PAROLI YAMILA PAULA", "BROWN MARIANA JIMENA", "VILLARREAL FERNANDO ARIEL", "COPPO FLORENCIA", "YEMI YAMIL RICARDO", "COSCIA MATÍAS AUGUSTO", "BENEDUCE MAURO EZEQUIEL", "NUÑEZ JOSE EMILIANO", "MAZZOCCHI FLORENCIA", "COSTABILE PABLO EMILIANO", "CURCIO MARIA CLARA", "CARRERA EMANUEL", "MONGELOS FACUNDO SEBASTIAN", "ALOMAR EMMANUEL VICTOR RAFAEL", "GRELA DENISE AGATA", "TOTO AYELEN LUCIA", "NIADA DELFINA"]

  const bomboThree = ["DEPAOLI EMILIO CESAR", "TELECHEA NESTOR EZEQUIEL", "GONZALEZ DEL MONACO MARIA EUGENIA", "STRAVALACI PABLO DANIEL", "FERNANDEZ MARIA VICTORIA", "TORTOSA MARQUEZ MARIA GUADALUPE", "RIOS EMMANUEL GUILLERMO", "RODRIGUEZ LOPEZ MIGUEL ANGEL", "VAZQUEZ MARIA VICTORIA", "HUBER ANA DANIELA", "ZAVATTARO GABRIELA", "MARTINEZ EZEQUIEL MAXIMILIANO", "VIOLA FRANCO", "GRISPO PABLO DANIEL", "LOCAMPO AGUSTINA BELEN", "MOLTENI MARIA YAMILA", "JORGE JESICA NATALIA", "TOLVA JUAN MAXIMILIANO", "MARTINA ALVARO ESTEBAN", "GARCIA NICOLAS ALEXIS", "KRAUSE JUAN MARTIN", "GADALETA ANDRES FEDERICO", "TEJEDA MATIAS", "HERNANDEZ MARIA SOLEDAD", "CAÑETE ALBERDI FERMIN", "GIGENA NATALIA GISELLE", "GHIANO BRUNETTA LUCAS EZEQUIEL", "BELLUZZO NATALIA DENISE", "DUARTE CRISTIAN IVAN", "PALILLO MATIAS", "FRANKS CAROLINA", "WERTEÑO NICOLAS EMANUEL", "LUZKO BELEN ALEJANDRA", "D ALOISIO ANDRES", "VARGAS NELSON ARIEL", "BALLA SEBASTIAN HORACIO", "CASENTINI VALERIA ALICIA", "QUIÑONEZ CARLOS GABRIEL", "CHAVEZ ANA BELEN", "MARQUEZ LARA JUAN PABLO", "GALINDEZ LORENA VANESA", "ASIS BETSABE", "ROBLEDO RIVEROS JOHANA GISELA", "ALEMANNO FEDERICO NICOLAS", "LOPEZ WALTER MATIAS", "PATERNOSTE JESICA MARIBEL", "GOMEZ ROCIO SOLEDAD", "FISCHER GASTON ELIAS", "D´ALOI JONATHAN", "RODRIGUEZ PREISINGER LUCAS EZEQUIEL", "HAZAN DARIO OMAR", "RAMOS GONZALO GASTÓN", "ALA MARIA EMILIA", "PEREZ MARCOS DANIEL", "BEVACQUA PABLO MARTIN", "PAGANI PALMBAUM SOFIA", "COLLAZO AGUSTIN RAMIRO", "LOTO GUIRULA MATIAS OMAR", "CHOLFO MARTIN ENRIQUE", "CARRARA MARIA LUZ", "JACOBI MAURICIO", "GONZALEZ JUAN MANUEL", "LONTOYA FIAMA NATALIA", "ARMAGNAC MARIEL MICAELA", "LOPEZ MARIA FLORENCIA", "MUFFAROTTO BRUNO MARCELO", "CICCHINI NICOLAS EZEQUIEL", "CONTE MELISA", "FERNANDEZ RODRIGO SEBASTIAN", "TOLEDO JONATHAN GABRIEL", "PONS RIVELLI GUILLERMO DANIEL", "SANZ BRENDA", "ALTAMIRANO MAXIMILIANO MATIAS", "RODRIGUEZ DAIANA", "DURAN MATIAS", "CAMPBELL PATRICIO ERNESTO", "PARERA GAVIÑA GUADALUPE", "LESCANO HOLZMAN DALILA", "JAURENA MARIELA ANABEL", "PARISI AGUSTIN NICOLAS", "RUSSO MAURO FABIAN", "SALUD SHEILA", "SOSA VANINA ELIZABETH", "PERISUTTI DIAMELA", "LOBO RUBEN DARIO", "BORTHEIRY CAMILA MERCEDES", "RICCHINI NAHUEL ALEJANDRO", "MARTIN MARIANA", "MIGLIORISI FRANCO", "PALOMEQUE CAMILA ROCIO", "DE BASTOS PABLO ROBERTO", "MEEUS TOMAS AUGUSTO", "CLIFFORD MARIA FLORENCIA", "SPEROTTO AGUSTINA DANIELA", "LOTERO CAMILA GISELLE", "DUARTE ERIKA BELEN", "MIHOVILCEVIC IGNACIO LEANDRO", "CASTRO COLASUONNO JUAN MANUEL", "SIGNORIO JOAQUIN", "PEQUEÑO JESSICA BELEN", "ACOSTA MONOFF ESTANISLAO", "GRUNBERG GUIDO", "SERRANO ANGEL DAVID", "CARBAJAL CAMILA", "OVIEDO VIVIANA ELISA", "FLORES JOEL NICOLAS", "BARRIOS PABLO ISAIAS", "MARONE MARCOS EDUARDO", "OBANDO ENZO MATIAS", "ENCINA CARABAJAL ABIGAIL DE LOS ANGELES", "CASTELLARO MARIA MATILDE", "SANTADINO LUCIA", "ALLEGRETTI MARCELA ROSALIA", "MARAFUSCHI MARIANA", "LACQUANITI LUCIANA", "VIZCARRA MELINA PATRICIA JORGELINA", "JEREZ JOSE MARTIN", "TORRES CAROLINA", "MARTINEZ LUCAS NICOLAS", "ORGAMBIDE AGOSTINA BELEN", "TELLO MATIAS AGUSTIN", "MALTA TIAGO NICOLAS", "CARREIRA BLANCATO MILAGROS", "BARTOLOMEO MATIAS EZEQUIEL", "MERLINO JULIAN MATIAS", "FRANCISCO DURASNIK", "MARTIÑA FRANCO", "MARTINEZ ROMINA BELEN", "AVALOS LUCAS FEDERICO", "HALBRANDT JOSE LUIS", "RAMOS ENZO DAMIAN", "RAYMUNDO MAGALI", "GALLARDO ESTEBAN OSCAR", "ALARCON NICOLAS", "GONZALEZ PATRICIO RAFAEL", "DEL MORAL NICOLAS GABRIEL", "GUARNERA ALAN MATIAS", "ROJAS ASCANIO PATRICIO JULIAN", "ALMADA FERNANDEZ IRMA", "MASTANDREA MARIA DEL CARMEN", "KARGAZIN ANDRES", "BAUTISTA REYES JANSELT DAYAN", "HERNANDEZ RODRIGUEZ NELLY", "FIGUEROA ROJAS MAXIMINO JOSE", "SAMUDIO DELGADO YORLY ANDREINA", "SEQUERA GARCIA NEUMAN OSCAR", "ARAQUE PARRA EDUARDO ENRIQUE", "CONTRERAS BRICEÑO JOSGRY ELIZABETH", "VILLEGAS ZAMBRANO ANGEL GABRIEL", "GONZALEZ LUNA LEONARDO RAUL", "CONTRERAS DURAN ROSANGELA", "ARMAS GARCIA CESAR ENRIQUE", "FUENTES ROJAS CRUZ AGUSTIN", "ESPINOZA TEZARA LUIS ALEJANDRO", "LANDAETA OVIEDO MILAGROS COROMOTO", "TOLOZA DAYANIRA", "AMADO CUESTA GISSELLE CATALINA", "SEJAS GAMBOA ROLAND GUSTAVO", "AVILA MARIANGELA", "VALLEJO LUIS ALEJANDRO", "DIAZ MELGAR SEBASTIAN", "URREGO GALINDO JESSY TATIANA"]

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
      {/* <div className='box'>
        {bomboFour.map((ganador) => (
            <li key={ganador} className='winner'>{ganador}</li>
          ))
        }
      </div> */}
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
      {/* <div className='box'>
        {bomboFour.map((ganador) => (
            <li key={ganador} className='winner'>{ganador}</li>
          ))
        }
      </div> */}
    </div>
    </>
    }
    </>
    
  )
}

export default RandomNames