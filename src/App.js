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

  const data = ["OLDANI GUSTAVO ALBERTO", "REANO MAURICIO", "GUTIERREZ GERVASIO MARTIN", "MARCOTE HORACIO JOSE", "GONZALEZ ANDREA VERONICA", "DI LOLLO CARINA ANDREA", "AFFAICH VICTORIA LAURA", "BALDASSARRE JAVIER ANDRES", "BOTTIGLIERI ANALIA KARINA", "CHIRINO BARBANO HECTOR GABRIEL", "PRESSIANI GILDA", "PERLO FERNANDO MARCELO", "CUEVAS ANIBAL WALTER", "CHAVARRIA DIEGO ENRIQUE", "VENUTA JOSE LUIS", "VIDELA JUAN IGNACIO", "BENITEZ HUGO MANUEL", "FURLAN ADRIAN LUIS", "TEJADA MARTIN ALEJANDRO", "TAIANO NORBERTO", "LUENGO CRISTIAN FABIO", "PUCCI CECILIA INES", "LUCHENTE DANIEL ERNESTO", "GIMENEZ RUBEN ARIEL", "ALBERINO ANGEL ALFREDO", "ANTON JUAN MAURICIO", "D ANGELO SERGIO HERNAN", "GILLIGAN DIEGO MANUEL", "REPOSSI FEDERICO ANTONIO", "POZZOLI GONZALO", "VALLARO CLAUDIO DANIEL", "PALACIOS SERGIO HUGO", "BRITEZ DARDO OSCAR", "MENTA HECTOR EDUARDO", "CACCIARELLI LUCAS DANIEL", "BETTERA DANIEL ALFREDO", "ACCAME ERNESTO HORACIO", "STOISA JUAN PABLO", "GALEANO MARIANO ANDRES", "GARCIA JORGE LUIS", "GNUS MIGUEL DARIO", "JAIME HIERREZUELO MARCOS", "CARAMÁNICO CHRISTIAN LUIS", "CAMPI SERGIO RUBEN", "SORIA RODRIGO DANIEL", "SUAREZ TORRES FERNANDO CARLOS", "OSORIO GABRIEL OMAR", "TEUBER SANCHEZ PABLO FABIAN", "MARTINEZ MARTIN ESTEBAN", "HERRERO ALDERETE FEDERICO RAUL", "RUIZ MARIA DANIELA", "FORTUNATI ADRIAN", "VILLA HUGO GERMAN", "SCIPIONE HORACIO MIGUEL", "KUSZEK GERMAN ROBERTO", "PELAYTAY CORICH JULIO MAXIMILIANO", "TOSTO MARIANO CARLOS", "LORENZINI MAXIMILIANO", "ARIAS GERMAN AGUSTIN", "BULLONES MARCOS MEDARDO", "DIAZ FERNANDO DANIEL", "BRIZUELA MARTIN ENRIQUE", "GAMBINO PABLO OMAR", "LUETIC STEVE ROGER", "DEDOMENICI SEBASTIAN", "OVANDO DONATI DIEGO EMANUEL", "CELA HECTOR OSVALDO", "SANCHEZ LEONARDO JOAQUIN", "ALBIERO GASTON FRANCO JESUS", "CASIMIRO CLAUDIO ADRIAN", "DELLA SAVIA ISABEL NORMA", "CUENCA MANUEL SANTIAGO", "COSTA ABRAHAM ADOLFO", "TRILLO ARIEL FEDERICO", "BIANCHI ANTONIO FABRICIO", "D AMICO CLAUDIA MARIA", "ALVAREZ ROSANA PATRICIA", "ROIS VERONICA MARIA", "SOSA ALEJO ARIEL", "FAVRE ALFREDO ALBERTO", "CATTANEO JORGE ANDRES", "MATOSO GERMAN HUGO", "GIGLIO MARIA SOLEDAD", "AYUB HERNAN JORGE", "GERMAN PABLO LEONEL", "LO RUSSO SERGIO OSCAR", "MILANI NATALIA SUSANA", "GRABUSKA MARIANA LAURA", "RENGIFO RICARDO GASTON", "SOSA GUILLERMO EZEQUIEL", "MORGANTI FEDERICO ESTEBAN", "MOSCHETTI NESTOR DARIO", "KRAMER GONZALO FABIAN", "FASANO SILVIA NORA", "GOMEZ JOSE MARIA", "LOMBARDO NICOLAS MARIANO", "CHERASCO MONICA LUISA", "GIULIANO LAURA DANIELA", "FREIRE CLAUDIO ALEJANDRO", "BRAGONE GASTON DANIEL", "VIGNAU LILIA", "CONTIGIANI CARLOS ALBERTO", "FERNANDEZ BUCCHI IGNACIO", "FALOTICO CARLOS ALFONSO", "RICCIONI GASTON HERNAN", "TIANO VIRGINIA DIANA", "BONGIORNO CAROLINA GISELA", "SCHMALE GUILLERMO EMILIO", "D ALESSANDRO FERNANDO ARIEL", "PARMA PABLO DAVID", "LORENZO VALERIA PAULA", "LA MORTE ALBERTO", "RELLAN MARIANA", "PARAMO MARTIN GUSTAVO", "AHUMADA PABLO SILVESTRE", "POSSE DIEGO", "TEVEZ GUSTAVO LEOPOLDO", "PEREYRA FERNANDEZ MARCOS JAVIER", "RAVENNA ALEJANDRO GABRIEL", "ANTONELLI HERNAN ARIEL", "DIMARCO HÉCTOR MARTÍN", "MANUALE DAMIÁN HORACIO", "DI FEDERICO LUCIANO ANDRÉS", "SERRA CYNTHIA LIS", "PARQUET ESTELA BETINA", "BO NICOLAS ENRIQUE", "BERIG LEANDRO DAMIAN", "DELGADO OSCAR FABIAN", "BELLOC PABLO ROBERTO", "FOSSAS MARIANO JAVIER", "GIORDANO ROBERTO ARIEL", "GARCIA HUGO JAVIER", "LITTLE CAROLINA", "PICCINI MARIA LIZA", "DELLA BUSCA VERONICA ANDREA", "FERNANDEZ URIEL LUIS", "ROMAN HUGO GABRIEL", "URBINI JOSE MARIA", "MARANGONI WALTER ALEJANDRO", "KING DEBORA RUTH", "GARCILAZO MARA ELIZABETH", "CELLARIO PATRICIA DEBORAH", "GARRO CARLOS ALEJANDRO", "GARCIA GIAMMATTEO MARIA MARTHA", "IGLESIAS JAVIER HORACIO", "PATZKE MELINA ANABELLA", "BISCEGLIA SILVANA BEATRIZ", "FULGENZI PATRICIA MONICA", "PITA LUZ MARIA", "LENZI ELEONORA", "PUGLIESE ANALIA SILVINA", "GABRIELLI DANIEL ANGEL", "RUZO ANALIA GABRIELA", "CASTILLO MIRTA VALERIA", "PEREZ DAMIAN EZEQUIEL", "FILIPUZZI GABRIEL OMAR", "BOSCH FEDERICO DAMIAN", "CERETTI GANCHEGUI SEBASTIAN MARTIN", "LA ROCCA SERGIO CLAUDIO", "CONDE MARIA FLORENCIA", "GRADIN MICAELA", "DIAZ GASTON ARIEL", "CILVETI DIEGO MAXIMILIANO", "LATANSE CECILIA RITA", "RUIZ LETICIA PAULA", "CUARONI WALTER IVAN", "PEDUTTI MATIAS ARIEL", "COLINA MARIA DEL ROSARIO", "GONZALEZ DEL MONACO MARIA EUGENIA", "SUAREZ VIGIL MARIA DEL PILAR", "CULLA FLORENCIA DANIELA", "MUSSO LUIS MAXIMILIANO", "FERNANDEZ EZEQUIEL MARTIN", "MANAI SEBASTIAN ERNESTO", "LARROQUE SILVANA SOLEDAD", "MOMBLANC RAUL ENRIQUE", "BUSTAMANTE ANALIA VERONICA", "FERRARI DEBORAH LUCIANA", "KIPRIZLIAN JOHANNA", "COSCIA MATÍAS AUGUSTO", "VENAROTTI MARÍA ANTONELLA", "SOLVEYRA DANIEL ALEJANDRO", "HERNANDEZ MARIA SOLEDAD", "NIADA DELFINA", "FRUNCILLO JUAN ALBERTO", "MANZANO XIMENA SOLEDAD", "ZUKERAN PAMELA DENISE", "MARCENARO MARTIN DARIO", "GUSSONI BRENDA ILEANA", "RATTI TAMARA BEATRIZ", "ALVAREZ MARIA LAURA", "AQUINO MATIAS ALBERTO", "FERNANDEZ RODRIGO SEBASTIAN", "SANCHEZ CESAR NAPOLEON", "FERRARI ROMINA SOLEDAD", "FURLAN SILVIA ROSANA", "PENELA CARMEN KARINA", "SELVAGGI LEONARDO EZEQUIEL", "FERRARI ALEJANDRO MARTIN", "MAZZOLA ALEJANDRO SALVADOR", "ORELLANA ROMINA VANESA", "ANGEL VANESA", "BRIZUELA EDGARDO ARIEL", "LOTO SEBASTIAN DOMINGO", "RIVERO JOAQUIN SEBASTIAN", "GONZALEZ ROXANA ELIZABETH", "MURAY LUIS ALBERTO", "ROMERO VICTOR HUGO", "LEIVA ADRIAN ALBERTO", "ORQUERA JORGE DANIEL", "AIROLDE MATIAS RODOLFO", "TOLEDO JONATHAN GABRIEL", "SANCHEZ GONZALO DARIO", "LAZARY ELIZABETH BLANCA", "PRAT PABLO GERARDO", "DUARTE CRISTIAN IVAN", "BALDONADO LEANDRO MARTIN", "PONCE CARINA NOEMI", "MAIDANA PABLO DANIEL", "PINTOS MARIA DE LOS ANGELES", "FERNANDEZ PABLO ANIBAL", "VAIO CRISTIAN GABRIEL", "DUARTE SABRINA ANALIA", "IVULICH DENIS JAVIER", "BIANCHI LUCAS HERNAN", "ACOSTA RAMON ALFREDO", "YEMI YAMIL RICARDO", "SAGANIAS ANGELA DEL VALLE", "ZAMUDIO FABIAN ALBERTO", "ALBERTARIO ANDRÉS FERNANDO", "VIDELA ELIANA BEATRIZ", "HERNANDEZ SANDRA MARICEL", "MADEO MARIA LAURA", "GOTTAS MICAELA", "IGLESIAS SANDRA MARCELA", "DAVERIO ALBERTO LUIS", "HAUCK DIEGO ANDRES", "ZUCOTTI JAZMIN LEIZA", "GALARZA OSVALDO MARTIN", "PETRUZZI PAOLA SUSANA", "ALVAREZ FLORES CESAR JOSE", "ROTHACHER MARIA SILVINA", "OSTINELLI MARINA NATALIA", "BUTTI MABEL ALEJANDRA", "ANTOGNINI JORGE OSCAR", "WATANABE MARCELO EDUARDO", "MERLO VERONICA ANSELMA", "OLMEDO RODRIGUEZ MARIELA ANAHÍ", "OBREGON INES", "RISSO PATRON JUAN CARLOS", "BESSEGA DIEGO IGNACIO", "BERTELLO GUSTAVO HORACIO", "FERNANDEZ MARIA VICTORIA", "INNOCENTI CARLOS ALBERTO", "ABDALA JORGE MATIAS", "BIANCO LAUREANO JOSE", "GINER MARCOS ALEJANDRO", "CACERES MARTIN ALFREDO", "NUÑEZ JOSE EMILIANO", "SUSPERREGUI SERGIO VICTOR", "LLEOPAR GUSTAVO GUILLERMO", "TABARES GUILLERMO JAVIER", "SERVIOLI NOELIA LUCIA", "IOCCA CARLOS DANIEL", "LESCANO EMILIANO JAVIER", "VERON MARIANO ALEJANDRO", "PONCE AMORINA LORENA", "GAVINO CASERTA MARIA FABIANA", "FILECCIA DARIO JAVIER", "DIBARBORA CLAUDIO RODOLFO", "MUÑOZ SERGIO AGUSTIN", "GOMEZ PORTILLO SILVIA", "GALARZA HERMINDA YOLANDA", "VALDEZ GERMAN DANIEL", "ALCARAZ MAURICIO SEBASTIAN", "SCHAMUN IGNACIO", "BERTOSSI OITANA DIEGO MARTIN", "CONTIGIANI SERGIO RODOLFO", "WERTEÑO NICOLAS EMANUEL", "NUÑEZ LUIS DARIO", "PIANELLI EDUARDO CARLOS", "SALVO FEDERICO BARTOLO", "LEMA DANIELA VANESA", "BRACCO MARIA PIA", "TILLAR CARLOS ALBERTO", "MARTINA ALVARO ESTEBAN", "RIQUELME MARIANO JAVIER", "ROMERO ALVAREZ JENNY PAOLA", "FRANKS CAROLINA", "CATTANEO CARLA ROMINA", "BARRERA LUCERO EDUARDO DANIEL", "BALLA SEBASTIAN HORACIO", "ANRRIQUE JUAN MARCELO", "MUCILLI NICOLAS MARCOS", "SUBELDIA WILLIAM ANDRES", "GARRIDO MARIO RICARDO", "LUNGRIN CLAUDIO FABIAN", "VITULLI SILVINA", "NAVARRO LEONARDO BENITO", "MANDZIUK JESICA DAIANA", "BARRIOS RAUL GASTON", "MENDOZA MARIA EUGENIA", "ARCE EMILIANO", "REVELLO CAROLINA EMILIA", "FERNANDEZ RODOLFO JAVIER", "KEIL NICOLAS", "MALDONADO DANIEL ALBERTO", "TORRES IRENE RITA", "WUNDERLICH AMORINA PAOLA", "LOPEZ JUAN MANUEL", "ALTAMIRANO MAXIMILIANO MATIAS", "VALERIO RAMOS PEDRO MARTIN", "ZAVATTARO GABRIELA", "ALVAREZ CESAR ALEJANDRO", "FIELE LEANDRO IVAN", "PARISI AGUSTIN NICOLAS", "GONZALEZ LUNA LEONARDO RAUL", "CONTRERAS BRICEÑO JOSGRY ELIZABETH", "ALVAREZ FRANCISCO MANUEL", "HANSEN JULIAN", "GONZALEZ JUAN MANUEL", "DI DOMENICO GABRIEL", "FERRARESE SILVINA LAURA", "RODRIGUEZ CARLOS MIGUEL", "ZAMUDIO HERMES SEBASTIAN", "MORAN LUCAS MATIAS", "ABDALA ADRIAN EDUARDO", "ROMANAZZI CARLOS ALBERTO", "SANTOS ARIEL ALEJANDRO", "BON LEONARDO MATIAS", "RIVERA NORBERTO RUBEN", "MARTIN MAURO SEBASTIAN", "SEMERIA RIVAS MAIELLA VICTORIA", "MEDINA DANIELA ANDREA", "CAPOLUNGO ROBERTO MATÍAS", "MORETTI ARIEL EDGARDO", "FURQUET MATIAS CATRIEL", "JAURENA MARIELA ANABEL", "BARRIOS PABLO ISAIAS", "COSTABEL MICAELA SILVIA", "PINASCO LUCIANA MARIA", "LOPEZ CROSS ANDRÉS GERARDO", "TELLO RODRÍGUEZ YUDY PATRICIA", "CONDORI ARROYO WILDER YHONY", "RISULEO NOELIA AILEN", "VERDICCHIO SILVINA", "GARCIA LUCIANA", "GARCIA LUCAS", "SAFATLI GABRIEL", "LORENZO ANDREA CHRISTINA", "ALA MARIA EMILIA", "PALOMEQUE CAMILA ROCIO", "QUIROGA DANTE OMAR", "MARTINEZ MONICA LILIANA", "BARALLOBRE HERNAN GONZALO", "ZANNI BRENDA", "SALZOTTI DARIO ALEJANDRO", "LOPEZ MARIA LEONOR", "VARONE MARCELA ALEJANDRA", "MANCUSO NATALIA LORENA", "GHIANO BRUNETTA LUCAS EZEQUIEL", "MASTANDREA MARIA DEL CARMEN", "MARIANI MATIAS GASTON", "VILLEGAS ZAMBRANO ANGEL GABRIEL", "CASTILLO MAINERO ADOLFO ENRIQUE", "NICOSIA DANILA TAMARA", "PEDRA LUCIANO ALEJANDRO", "CASTILLO VANINA NOELIA", "D ALOISIO ANDRES", "MARQUEZ LARA JUAN PABLO", "BONOMO PABLO MARIANO", "FRESCA MARCELO NICOLAS", "GUTIERREZ ALEJANDRO", "GUTIERREZ NOELIA SOLEDAD", "SANCHEZ NUÑEZ JOSSELYN DELCARMEN", "BEHAR LIOR", "RICCHINI NAHUEL ALEJANDRO", "SAEZ SAEZ SILVIA MONICA", "GIRLANDO FERNANDO JAVIER", "POGGIO ESTEBAN MARTIN", "CALATAYUD JEYSI JOHANNA", "PAGANI PALMBAUM SOFIA", "ELIAS JONATAN ALEJANDRO", "FUCHS JUAN IGNACIO", "CARBALLO LUCAS", "LOSI GASTON EDUARDO", "GRISPO PABLO DANIEL", "ARSCOTT PASI BRIAN", "PATERNOSTE JESICA MARIBEL", "BERTONCELLO LUCILA YANINA", "SARTORE MARTIN DIEGO", "VILLALBA HUGO ALEJANDRO", "MIGLIORISI FRANCO", "MARANZANA MAXIMILIANO", "BALDIVIEZO ABEL DAMIAN", "PEURIOT FERNANDO DANIEL", "PURITA FERNANDO ARIEL", "LEIVA ELIANA BEATRIZ", "ANTIN GONZALO EZEQUIEL", "GAMITO ARIANA BEATRIZ", "LOPEZ MARIELA NOEMI", "LUZKO BELEN", "ALVAREZ GUSTAVO ARIEL", "ROLANDO MARTIN CARLOS", "CUBASSO CARLOS ALBERTO", "AGUIRRE ANGEL FEDERICO", "BOLZANI MARIELA ALEJANDRA", "BORZONE JORGE EUGENIO", "FRAGA CLAUDIA", "CALVETE FERNANDO RODRIGO", "CAMILETTI NOELIA DANIELA", "COUCHE DANIEL JUAN RAMON", "CARNAVAL SILVIA VERONICA", "GUAITA MARIA SILVINA", "DELGADO FRANCIA MARIANO MARTIN", "TUSMAN GERMAN EDUARDO", "VAZQUEZ MARIA VICTORIA", "MALDONADO FLORENCIA", "CASENTINI VALERIA ALICIA", "RAMIREZ GUANIPA SERGIO JOSE", "MERINO MARIA BELEN", "FLORES SEGURA PEDRO ANDRES", "PINI GASTON", "CEBALLOS WALTER", "MARTINEZ MARIA CELESTE", "SCHONFELD ANGEL SEBASTIAN", "MONCAYO GABRIEL ALBERTO", "SAMUDIO DELGADO YORLY ANDREINA", "RANGEL UZCÁTEGUI EZEQUIEL RAMON", "RIO NICOLAS", "BERTILLER EMMANUEL PABLO EDUARDO", "ALUMA MARÍA VERÓNICA", "GIMENEZ MARIA EMILIA", "DURAN MATIAS", "GIOVAGNORIO JUAN JOSE", "TOLOZA DAYANIRA", "AVILA MARIANGELA", "BOUCHARD JOSE DANIEL", "GONZALEZ ARVELAIZ JESUS ALBERTO", "CASTILLO NORMA JACQUELINE", "FLORES PEREYRA NAHUEL", "SAVELLI IVAN ARIEL", "SAAVEDRA LEANDRO", "FUSCALDO CACERES RENZO", "TRAVERSA DANIELA MARTA", "YUDI HERNAN", "DIEZ BOITO MARIA TERESA", "BOAGLIO BORIS", "GAUDRY SOL MARIA FLORENCIA", "GONZALEZ JESICA LORENA", "TAPIA ROBERTO CARLOS", "LANDAETA OVIEDO MILAGROS COROMOTO", "LOPEZ GIACINTI LUCILA", "DIAZ MELGAR SEBASTIAN", "MOTA VALOR ZULEVY DEL VALLE", "BEVACQUA PABLO MARTIN", "ADON MAXIMILIANO DAVID", "PEDRAZA CARLOS DAMIAN", "VAZQUEZ FEDERICO MAURICIO", "ROBLEDO RIVEROS JOHANA GISELA", "DE FEO RITA LAURA", "FLORES LOPEZ JUAN PABLO", "ANDREAU LORENA ELIZABET", "MORALES ANGEL PABLO", "ACUÑA VENCE LEANDRO EZEQUIEL", "LONTOYA FIAMA NATALIA", "RUHL PEDRO HERNAN", "FONTAN BLANCH NICOLAS ALEJANDRO", "GAMEZ CAROLINA ELIZABETH", "SANGUINETTI ANDREA LUCIA", "GAZZA BELEN ANAHI", "RICCIARI MARCO DAMIAN", "CASTAGNOLA MARIA FLORENCIA", "TELLO MATIAS AGUSTIN", "PIRRAGLIA ORNELLA SANDRA", "INGLESE ANDREA", "GOMEZ DE MERCADO HERNAN FRANCISCO", "BARTOLOMEO MATIAS EZEQUIEL", "CASA IRINA", "VULCANO JULIETA ALEJANDRA", "RAMIREZ SEBASTIAN", "PONFERRADA MARIANA INES", "LANGLOIS JOSE IGNACIO", "ROBINSON IGNACIO ARIEL", "LOTERO CAMILA GISELLE", "PRADO ALEJANDRA ANABELLA", "FIORI DIEGO HERNAN", "SAMBADE LAURA BEATRIZ", "ALOISI JUAN PABLO", "BUTMAN MAGALI", "VARGAS NELSON ARIEL", "SAPORITO WALTER DAMIAN", "NUÑEZ CHRISTIAN LIONEL", "SALINAS FABIAN", "GADALETA ANDRES FEDERICO", "NEUMANN GABRIELA LAURA", "CICCHINI NICOLAS EZEQUIEL", "SENDRA CECILIA", "LUCIO CARLA", "BENITO PERUZZI MARIANA", "BRACCO MALCO", "ROULLOT ROCIO", "MARCONI SERGIO", "COLL MARIA", "STEIMBERG JOANNA MARISA", "MEDINA JUAN MANUEL", "VALLEJOS MATIAS EZEQUIEL", "PONZIO MAIA AYELEN", "NOVOTNY AGUSTINA", "WOLFL MICHELLE", "VIZCARRA MELINA PATRICIA JORGELINA", "PALAVECINO MARTIN", "MOLINA CECILIA ANTONELA", "ROVELLI JUAN HORACIO", "CALVIÑO VICTORIA", "USECHE RIOS ISAMAR", "PANESSI MARIA VALERIA", "MORALES BETANIA SINAI", "MARTINEZ ESTEBAN IVAN", "SILVA GUILLERMO FERNANDO", "COMAN HECTOR ARIEL", "LACQUANITI LUCIANA", "KRAUSE JUAN MARTIN", "BAUTISTA REYES JANSELT DAYAN", "SABINO ROMINA MARCELA", "CIAPPE CYNTHIA BEATRIZ", "AVALOS LUCAS FEDERICO", "ESCOBAR PABLO LEONEL", "ALFONSO FACUNDO NICOLAS", "POSTIGO MANUELA", "TRIDENTE GARABAN STEFANO RAYNIER", "ESPINOLA PAOLA JESICA", "IAMARINO LENDRO DARIO", "GIGENA NATALIA GISELLE", "BUSTOS SEBASTIAN GABRIEL", "RODRIGUEZ ANDREA PAOLA", "CASTELO NICOLAS SILVIO", "IANNUZZI ANA", "OBANDO ENZO", "JUAREZ ANDREA SOLEDAD", "AMAYA MORALES DANIELA CAROLINA", "SOSA VANINA ELIZABETH", "TEJEDA MATIAS", "TORTOSA MARQUEZ MARIA GUADALUPE", "ASIS BETSABE", "SEGUEL RICARDO DARIO", "RECABARREN MATIAS", "CAYRE NICOLAS", "MATTIAS LIONEL", "PINTOS PAOLA DANIELA", "ROJAS ALEJANDRO ANTONIO", "SALAS ALEJANDRO JAVIER", "JEREZ JOSE MARTIN", "ROJAS CRISTINA", "GONZALEZ MARIA", "BERRA MARIA", "TORRILLA CLAUDIA", "FABRO NORBERTO", "BUSSO FEDERICO", "CARRERA EMANUEL", "ALEMANNO FEDERICO NICOLAS", "AURELIO ARACELI", "BENITEZ NADIA SOLEDAD", "MUFFAROTTO BRUNO MARCELO", "SCHNEIDER RUSSI CLAUDIA MARIANA", "FAROPPA ROMINA", "PILATO THAIS YAEL", "MARTIN MARIANA", "QUATROMANO NOELI CECILIA", "PARDO SEBASTIAN", "GUARNERA ALAN", "MOYANO OCHOA VERONICA", "PADRON DIEGO", "FERREYRA SHYLA", "ORLANDO JUAN ELIAS", "SALINAS ROGELIO OMAR", "BROWN MARIANA JIMENA", "SAPORITI GISELLE ALEXANDRA", "MEEUS TOMAS AUGUSTO", "ANDREOCCI MAXIMILIANO JAVIER", "CHOLFO MARTIN ENRIQUE", "SIGNORIO JOAQUIN", "FERREYRA CARINA", "SERRANO RODRIGO EZEQUIEL", "CALABRESE AZUL", "IANNE DIEGO", "MORENO CASTILLO ROSANNA PASTORA", "IZZO GABRIEL", "LOPEZ MARIA FLORENCIA", "CARRIZO NOELIA", "MARADONA PABLO ARIEL", "DE LA ROSA MATIAS", "FIALA DANIEL", "PERSICHINI SOFIA", "TOTO AYELEN", "CACERES ANA", "SANTADINO LUCIA", "DE FILIPPO CECILIA", "COSTABILE PABLO", "PALILLO MATIAS", "ANGIULI LOMBARDO SOL JOSEFINA", "ARMAS GARCIA CESAR", "RAMOS GONZALO GASTÓN", "FISCHMAN MELISA LARA", "LOPEZ VERA", "CHAVEZ ANA BELEN", "DEPAOLI EMILIO CESAR", "GONZALEZ EUNICE BEATRIZ", "OVIEDO VIVIANA", "NAVARRA YESICA", "ORTEGA FACUNDO MIGUEL", "GOMEZ JULIETA", "CONTE MELISA", "GIANFRINI ANTONELLA", "MIHOVILCEVIC IGNACIO LEANDRO", "STELLA ILEANA ELENA", "PERISUTTI DIAMELA", "BATALLER GONZALO", "DOMINGUEZ YOHANA", "GARCIA NICOLAS", "CORDOBA MAURICIO", "MORA SEBASTIAN", "VICENTE GASTON", "GROPPO SEBASTIAN", "BEDOYA PATRICIA KARIN", "FERNANDEZ MARCOS SEBASTIAN", "GONZALEZ BARBARA MARIEL", "MALTA TIAGO NICOLAS", "ANGIULLI MAURO JAVIER", "LUCAS DEL CORAZON JESUS FRANCESE BLANCO", "CASTIÑEIRAS ROMINA NOELIA", "LAVECCHIA PATRICIO JUAN IGNACIO", "ALVARENGA CARLOS PAUL", "CARBONE ROBERTO", "PRAT EDUARDO ANDRÉS", "GONZALEZ DEL SOLAR CAMILA", "BELLUZZO NATALIA DENISE", "RODRIGUEZ LUCIA BELEN", "VAZQUEZ ESTEBAN JAVIER", "GENTILE JORGE REYNALDO", "HUBER ANA", "MERLINO JULIAN", "ARROSAGARAY DIEGO", "VIOLA FRANCO", "MOLTENI MARIA YAMILA", "SPEROTTO AGUSTINA", "BERTACCINI  PABLO ALEJANDRO", "CASTRO  OMAR AGUSTIN", "MUZIO  FEDERICO IGNACIO", "GONZALEZ  HERNAN JAVIER", "NAVARRO  LEONARDO ARIEL", "GALARZA  GUSTAVO EMILIO", "MANSON ASTOUL  GEORGINA MARÍA", "URRIBARRI  HERNAN", "VIDAL  WALTER EDUARDO", "PONCE  SUSANA INES", "BALTORE  JUAN PABLO CRISTIAN", "BASSO  MARIO FERNANDO", "MONTEIRO FRANQUEIRA  EDUARDO ALBERTO", "PAWLUCH  LUCAS GABRIEL", "SANCHEZ  JAVIER NICOLAS", "PONCE  CLAUDIA ALEJANDRA", "SEMENIUK  ARIEL LEONARDO", "ZELWIANSKI  ANDREA JUDITH", "MACIEL  GABRIEL EVARISTO", "BARRIONUEVO  CESAR LUIS", "MONTIVERO  FLAVIO JAVIER", "DE MATTIA  LUIS ARIEL", "DIARTE  RICARDO FABIAN", "DE LUCA  LUCIANO MATIAS", "SHIMABUKURO  ROMINA VALERIA", "GODOY  VANESA VERONICA", "ORTIZ  MONICA INES", "FRANCO  MARIA INES", "DIAZ  NERINA SONIA", "ZABALA  PABLO DANIEL", "ENRRST  LILIANA CECILIA", "SANTA CRUZ AGUILERA  GUSTAVO ABRAHAM", "FERNANDEZ  VERONICA ALEJANDRA", "MENDOZA  JAQUELINA ELIZABETH", "ALMADA FERNANDEZ  IRMA", "VILLARREAL  FERNANDO ARIEL", "PORTELA  PABLO EMILIANO", "LOPEZ  WALTER MATIAS", "ORFANO  LEONARDO GABRIEL", "FLORES  OMAR ESTEBAN", "RIOS  EMMANUEL GUILLERMO", "CENTORBI  RICARDO HERNAN", "ALVAREZ  SOLANGE VANINA", "MONTES  MARIA FERNANDA", "SALARIATO  IGNACIO DAVID", "MELI  VALERIA ELIZABETH", "MEDINA  ALBERTO DANIEL", "ANDINO  HUGO", "GOMEZ CORIA  OSCAR SEBASTIAN", "MONGELOS  FACUNDO SEBASTIAN", "PALACIOS  HECTOR ANIBAL", "SUAREZ  MARCOS RAMON ANTONIO", "ECHEBARNE  WALTER OSCAR", "AICARDI  GASTON OSCAR", "PUNTILLO  ALEJANDRO DANIEL", "CALBANESE  NICOLAS EZEQUIEL", "PEREA  JUAN DOMINGO", "CARTOLANO  PABLO ANTONIO", "STARK  NAHUEL LEANDRO", "HAZAN  DARIO OMAR", "ESPINOZA TEZARA  LUIS ALEJANDRO", "IBAÑEZ  FLORENCIA CECILIA", "MOTTA  AGUSTIN", "BONAMICO  PATRICIA SUSANA", "FERNANDEZ  GABRIEL CARLOS", "PAPINI  ANDRES SERGIO", "ORTEGA ARIZA  NANCY DEL CARMEN", "GALINDEZ  LORENA VANESA", "FERNANDEZ  LEONARDO ATILIO", "CACERES  LEANDRO GASTON", "NUÑEZ  GONZALO ALEJANDRO", "VITALE  DIEGO GERMAN", "GARZON  VIRGINIA GABRIELA", "NAVARRO  MYRIAM ELIZABETH", "GUAYMAS  LILIANA GRACIELA", "SEGOVIA  GONZALO CARLOS EZEQUIEL", "BOIERO  MONICA SANDRA", "DIAZ  MAXIMILIANO HERNAN", "CORIA  GABRIELA ALEJANDRA", "VARGAS BIASON  IGNACIO TOMAS", "SUAREZ  MARCOS EMMANUEL", "GARRO  MAXIMILIANO", "SIMEAN  LEONARDO", "VIDELA HUBSCHER  ALBERTO FERNANDO", "AGUIAR  ALEXANDRO PAUL", "ORONA   RAFAEL MARCELO", "FIGUEROA ROJAS  MAXIMINO JOSE", "RUIZ  VICTORIA", "ARMOA  AXEL MARTIN", "VARAS  DIEGO ISMAEL", "MOYANO  PAULA", "ULLOA  FABIAN LEONARDO", "LEIVA  ANTONELLA DANIELA", "LLANOS MEDINA  DIEGO ROMER", "CONIL   ALBERTO SEBASTIAN", "BARDELLI  MARIANO DIEGO", "RUGIERO  CAROLINA AILEN", "COLLAZO  AGUSTIN RAMIRO", "PORRAS VIVAS  HENDRYNA ANNALITH", "ALVAREZ   FEDERICO RODRIGO", "IBARRA  PATRICIO RAMON", "SEGUNDO  JUAN MANUEL", "LESCANO VILCHEZ  MARCELO JORGE", "DE LORENZO CANEO  PABLO", "MARTINEZ  LUCAS NICOLAS", "GOMEZ POU  TOMAS", "BALDOVINO   ENRIQUE EDUARDO", "CORONA OLGUIN  FERNANDO PATRICIO", "GIRONS  GISELA PAOLA", "ROJAS ASCANIO  PATRICIO JULIAN", "MEDRANO ALANOCA  ARACELI BELEN", "CONTRERAS DURAN  ROSANGELA", "IBARRA  MATIAS EZEQUIEL", "ENCINA CARABAJAL  ABIGAIL DE LOS ANGELES", "NAVAS  PABLO NAHUEL", "OJEDA  EZEQUIEL DANIEL", "PUENTE  JUAN IGNACIO", "SERRANO  CRISTINA BELEN", "PEREZ  FEDERICO ALBERTO", "PERONACE  NATALIA CAROLINA", "FONSECA SARMIENTO  DANIEL FELIPE", "MORENO  CAMILA ANDREA", "AOUADA PONTOREIRO  SANTIAGO", "CEREZO  VALERIA DANIELA", "SAENZ  BRENDA SALOME SOLANGE", "GALLAFENT  HANNAH LAURA", "MOSQUERA  MATIAS ANDRES", "BENEDUCE  MAURO EZEQUIEL", "CHAPERO  IVAN EZEQUIEL", "ADRIAZOLA  BRIAN EMANUEL", "GARCIA GUTIERREZ  THIAGO DANTE", "RAJCZAKOWSKI  VANINA FLORENCIA", "GONZALEZ  SOFIA", "MEJIAS MALAVE  RUBEN ALEJANDRO", "FEISTEL  AYELEN JULIETA", "GONZALEZ  FACUNDO DAVID", "GRECO  GASTON EZEQUIEL", "VALLE CARDAMA  FLORENCIA INES", "RACCANELLO  VERONICA BEATRIZ", "ESCUDERO  FEDERICO SILVESTRE", "ARAQUE PARRA  EDUARDO ENRIQUE", "ESCOBAR  GUSTAVO ARIEL", "ESCALANTE  GERONIMO EMANUEL", "D´ALOI  JONATHAN", "AGUADO  CARLOS ALBERTO", "RAMOS  ENZO DAMIAN", "ACUÑA  SANTIAGO GABRIEL", "MOLINA  ALAN NICOLAS", "FERRERI  BRUNO NICOLAS", "PARRA  LUZ ROCIO", "ROSSETTI IÑIGUEZ  MAGALI ORIANA", "SOSA  NICOLAS ARIEL", "PIÑEIRO NATALE  VICTORIA", "BRAVO  DAIANA MICAELA", "MARTINEZ  ALEJANDRO MAXIMILIANO", "TEIJEIRO  GABRIEL OSCAR", "FISCHER  GASTON ELIAS", "ESPINOSA  EMILIANO DANIEL", "SILVEIRA  JORGE EZEQUIEL", "GONZALEZ  JOSE LUIS", "GUTIERREZ  JUAN PABLO", "SERRA  MILAGROS NATALIE", "FRAGALE  FRANCO", "YURQUINA  JONATHAN", "BAEZ  MATIAS", "ESCOBAR  CESAR RAFAEL", "FERNADEZ BIGI  GASTON ARIEL", "STENTA  GUILLERMINA CARLA", "CAÑETE ALBERDI   FERMIN", "VALLEJO   LUIS ALEJANDRO", "LEAL   CARLOS DANIEL", "MAGARIÑOS   CRISTIAN OMAR", "ESCALANTE   FLORENCIA", "MUÑOZ REALPE   JUAN CARLOS", "AYALA   MARCELO RUBEN", "PEDREIRA   FERNANDO", "PANDOLFO   LEONARDO", "CORPUS   PATRICIA VIRGINIA", "POGGI   MÓNICA CLAUDIA", "DI CHIARA   MELISA JENIFFER", "LANCELLOTTI   RICARDO ROBERTO", "NECEFOR   MARINA ANABEL", "DAVILA   MARTHA ALEJANDRA", "PAROLI   YAMILA PAULA", "RUIZ LUQUE   ELENA MARIA", "ROSSI   FLORENCIA NATALIA", "ARIAS   CHRISTIAN DARIO", "BANCHERO   MARIA CECILIA", "LOCAMPO   AGUSTINA BELEN", "CARUSO   GISELA", "GOMEZ BUSTAMANTE   MAXIMILIANO FELIX", "RUSSO   MAURO FABIAN", "GONZALEZ SUCRE   KARLA HELENA", "GRELA   DENISE AGATA", "ALONSO   CECILIA INES"]

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
              {premiosSorteados < 5 && <p className='text-5xl font-semibold'>Sorteo {premiosSorteados} : {premiosSorteados < 4 ? "$130.000" : (premiosSorteados < 5 ? "$180.000" : premiosSorteados < 5 ? "$180.000" : "$180.000")}</p>}

              {premiosSorteados > 4 ? <button onClick={fullReset}>Empezar de nuevo</button> : <Button data={data} sorteo={sorteo} setSorteo={setSorteo} />}
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
