import './App.scss';
import Button from './components/Button/Button';
import ListWinners from './components/ListWinners/ListWinners';
import React, {useEffect, useState} from 'react';
import Confetti from 'react-confetti'
import RandomNames from './components/RandomNames/RandomNames';
import loop from './components/assets/images/fondo.mp4';
import logoloop from './components/assets/images/logo.mov';


function App() {
  const [sorteo, setSorteo] = useState("btn");
  const [premiosSorteados, setPremiosSorteados] = useState(1);
  const { width, height } = '100%'

  const data = ["OLDANI GUSTAVO ALBERTO", "REANO MAURICIO", "MARCOTE HORACIO JOSE", "GONZALEZ ANDREA VERONICA", "DI LOLLO CARINA ANDREA", "AFFAICH VICTORIA LAURA", "BALDASSARRE JAVIER ANDRES", "BOTTIGLIERI ANALIA KARINA", "CHIRINO BARBANO HECTOR GABRIEL", "PRESSIANI GILDA", "PERLO FERNANDO MARCELO", "CUEVAS ANIBAL WALTER", "CHAVARRIA DIEGO ENRIQUE", "VENUTA JOSE LUIS", "VIDELA JUAN IGNACIO", "BENITEZ HUGO MANUEL", "VIDAL JUAN ESTEBAN", "FURLAN ADRIAN LUIS", "TEJADA MARTIN ALEJANDRO", "TAIANO NORBERTO", "LUENGO CRISTIAN FABIO", "PUCCI CECILIA INES", "LUCHENTE DANIEL ERNESTO", "GIMENEZ RUBEN ARIEL", "ALBERINO ANGEL ALFREDO", "ANTON JUAN MAURICIO", "D ANGELO SERGIO HERNAN", "GILLIGAN DIEGO MANUEL", "REPOSSI FEDERICO ANTONIO", "POZZOLI GONZALO", "VALLARO CLAUDIO DANIEL", "PALACIOS SERGIO HUGO", "BRITEZ DARDO OSCAR", "MENTA HECTOR EDUARDO", "CACCIARELLI LUCAS DANIEL", "BETTERA DANIEL ALFREDO", "ACCAME ERNESTO HORACIO", "STOISA JUAN PABLO", "GALEANO MARIANO ANDRES", "GARCIA JORGE LUIS", "GNUS MIGUEL DARIO", "JAIME HIERREZUELO MARCOS", "CARAMÁNICO CHRISTIAN LUIS", "CAMPI SERGIO RUBEN", "SORIA RODRIGO DANIEL", "SUAREZ TORRES FERNANDO CARLOS", "OSORIO GABRIEL OMAR", "TEUBER SANCHEZ PABLO FABIAN", "MARTINEZ MARTIN ESTEBAN", "HERRERO ALDERETE FEDERICO RAUL", "RAMIREZ DIEGO FRANCISCO", "RUIZ MARIA DANIELA", "FORTUNATI ADRIAN", "VILLA HUGO GERMAN", "SCIPIONE HORACIO MIGUEL", "KUSZEK GERMAN ROBERTO", "PELAYTAY CORICH JULIO MAXIMILIANO", "TOSTO MARIANO CARLOS", "LORENZINI MAXIMILIANO", "ARIAS GERMAN AGUSTIN", "BULLONES MARCOS MEDARDO", "DIAZ FERNANDO DANIEL", "BRIZUELA MARTIN ENRIQUE", "GAMBINO PABLO OMAR", "LUETIC STEVE ROGER", "DEDOMENICI SEBASTIAN", "OVANDO DONATI DIEGO EMANUEL", "CELA HECTOR OSVALDO", "SANCHEZ LEONARDO JOAQUIN", "ALBIERO GASTON FRANCO JESUS", "CASIMIRO CLAUDIO ADRIAN", "DELLA SAVIA ISABEL NORMA", "CUENCA MANUEL SANTIAGO", "COSTA ABRAHAM ADOLFO", "TRILLO ARIEL FEDERICO", "BIANCHI ANTONIO FABRICIO", "D AMICO CLAUDIA MARIA", "ALVAREZ ROSANA PATRICIA", "ROIS VERONICA MARIA", "SOSA ALEJO ARIEL", "FAVRE ALFREDO ALBERTO", "CATTANEO JORGE ANDRES", "MATOSO GERMAN HUGO", "GIGLIO MARIA SOLEDAD", "AYUB HERNAN JORGE", "GERMAN PABLO LEONEL", "LO RUSSO SERGIO OSCAR", "MILANI NATALIA SUSANA", "GRABUSKA MARIANA LAURA", "RENGIFO RICARDO GASTON", "SOSA GUILLERMO EZEQUIEL", "MORGANTI FEDERICO ESTEBAN", "MOSCHETTI NESTOR DARIO", "KRAMER GONZALO FABIAN", "FASANO SILVIA NORA", "GARCIA JUAN IGNACIO", "GOMEZ JOSE MARIA", "LOMBARDO NICOLAS MARIANO", "CHERASCO MONICA LUISA", "CAMPORA DANIEL FERNANDO", "GIULIANO LAURA DANIELA", "FREIRE CLAUDIO ALEJANDRO", "BRAGONE GASTON DANIEL", "VIGNAU LILIA", "CONTIGIANI CARLOS ALBERTO", "FERNANDEZ BUCCHI IGNACIO", "FALOTICO CARLOS ALFONSO", "RICCIONI GASTON HERNAN", "TIANO VIRGINIA DIANA", "BONGIORNO CAROLINA GISELA", "SCHMALE GUILLERMO EMILIO", "D ALESSANDRO FERNANDO ARIEL", "PARMA PABLO DAVID", "LORENZO VALERIA PAULA", "LA MORTE ALBERTO", "RELLAN MARIANA", "PARAMO MARTIN GUSTAVO", "AHUMADA PABLO SILVESTRE", "POSSE DIEGO", "TEVEZ GUSTAVO LEOPOLDO", "PEREYRA FERNANDEZ MARCOS JAVIER", "RAVENNA ALEJANDRO GABRIEL", "ANTONELLI HERNAN ARIEL", "DIMARCO HÉCTOR MARTÍN", "MANUALE DAMIÁN HORACIO", "DI FEDERICO LUCIANO ANDRÉS", "SERRA CYNTHIA LIS", "PARQUET ESTELA BETINA", "BO NICOLAS ENRIQUE", "BERIG LEANDRO DAMIAN", "DELGADO OSCAR FABIAN", "BELLOC PABLO ROBERTO", "FOSSAS MARIANO JAVIER", "GIORDANO ROBERTO ARIEL", "GARCIA HUGO JAVIER", "LITTLE CAROLINA", "CHANGO FACUNDO RUBEN", "PICCINI MARIA LIZA", "DELLA BUSCA VERONICA ANDREA", "FERNANDEZ URIEL LUIS", "ROMAN HUGO GABRIEL", "URBINI JOSE MARIA", "MARANGONI WALTER ALEJANDRO", "KING DEBORA RUTH", "GARCILAZO MARA ELIZABETH", "CELLARIO PATRICIA DEBORAH", "GARRO CARLOS ALEJANDRO", "GARCIA GIAMMATTEO MARIA MARTHA", "IGLESIAS JAVIER HORACIO", "PATZKE MELINA ANABELLA", "BISCEGLIA SILVANA BEATRIZ", "FULGENZI PATRICIA MONICA", "PITA LUZ MARIA", "LENZI ELEONORA", "PUGLIESE ANALIA SILVINA", "GABRIELLI DANIEL ANGEL", "RUZO ANALIA GABRIELA", "CASTILLO MIRTA VALERIA", "PEREZ DAMIAN EZEQUIEL", "FILIPUZZI GABRIEL OMAR", "BOSCH FEDERICO DAMIAN", "CERETTI GANCHEGUI SEBASTIAN MARTIN", "LA ROCCA SERGIO CLAUDIO", "CONDE MARIA FLORENCIA", "GRADIN MICAELA", "DIAZ GASTON ARIEL", "CILVETI DIEGO MAXIMILIANO", "LATANSE CECILIA RITA", "RUIZ LETICIA PAULA", "CUARONI WALTER IVAN", "PEDUTTI MATIAS ARIEL", "COLINA MARIA DEL ROSARIO", "GONZALEZ DEL MONACO MARIA EUGENIA", "SUAREZ VIGIL MARIA DEL PILAR", "CULLA FLORENCIA DANIELA", "MUSSO LUIS MAXIMILIANO", "FERNANDEZ EZEQUIEL MARTIN", "MANAI SEBASTIAN ERNESTO", "MOMBLANC RAUL ENRIQUE", "BUSTAMANTE ANALIA VERONICA", "FERRARI DEBORAH LUCIANA", "KIPRIZLIAN JOHANNA", "COSCIA MATÍAS AUGUSTO", "SOLVEYRA DANIEL ALEJANDRO", "HERNANDEZ MARIA SOLEDAD", "NIADA DELFINA", "FRUNCILLO JUAN ALBERTO", "MANZANO XIMENA SOLEDAD", "ZUKERAN PAMELA DENISE", "MARCENARO MARTIN DARIO", "GUSSONI BRENDA ILEANA", "ALVAREZ MARIA LAURA", "AQUINO MATIAS ALBERTO", "FERNANDEZ RODRIGO SEBASTIAN", "SANCHEZ CESAR NAPOLEON", "FERRARI ROMINA SOLEDAD", "FURLAN SILVIA ROSANA", "PENELA CARMEN KARINA", "SELVAGGI LEONARDO EZEQUIEL", "FERRARI ALEJANDRO MARTIN", "MAZZOLA ALEJANDRO SALVADOR", "ORELLANA ROMINA VANESA", "ANGEL VANESA", "BRIZUELA EDGARDO ARIEL", "LOTO SEBASTIAN DOMINGO", "RIVERO JOAQUIN SEBASTIAN", "GONZALEZ ROXANA ELIZABETH", "MURAY LUIS ALBERTO", "ROMERO VICTOR HUGO", "LEIVA ADRIAN ALBERTO", "ORQUERA JORGE DANIEL", "AIROLDE MATIAS RODOLFO", "TOLEDO JONATHAN GABRIEL", "LAZARY ELIZABETH BLANCA", "PRAT PABLO GERARDO", "PONCE CARINA NOEMI", "MAIDANA PABLO DANIEL", "PINTOS MARIA DE LOS ANGELES", "FERNANDEZ PABLO ANIBAL", "VAIO CRISTIAN GABRIEL", "DUARTE SABRINA ANALIA", "IVULICH DENIS JAVIER", "BIANCHI LUCAS HERNAN", "ACOSTA RAMON ALFREDO", "YEMI YAMIL RICARDO", "SAGANIAS ANGELA DEL VALLE", "ZAMUDIO FABIAN ALBERTO", "ALBERTARIO ANDRÉS FERNANDO", "VIDELA ELIANA BEATRIZ", "HERNANDEZ SANDRA MARICEL", "MADEO MARIA LAURA", "GOTTAS MICAELA", "IGLESIAS SANDRA MARCELA", "DAVERIO ALBERTO LUIS", "HAUCK DIEGO ANDRES", "ZUCOTTI JAZMIN LEIZA", "GALARZA OSVALDO MARTIN", "PETRUZZI PAOLA SUSANA", "ALVAREZ FLORES CESAR JOSE", "ROTHACHER MARIA SILVINA", "OSTINELLI MARINA NATALIA", "BUTTI MABEL ALEJANDRA", "ANTOGNINI JORGE OSCAR", "MERLO VERONICA ANSELMA", "OLMEDO RODRIGUEZ MARIELA ANAHÍ", "OBREGON INES", "RISSO PATRON JUAN CARLOS", "BESSEGA DIEGO IGNACIO", "BERTELLO GUSTAVO HORACIO", "FERNANDEZ MARIA VICTORIA", "MARTIN JORGE ALBERTO", "INNOCENTI CARLOS ALBERTO", "ABDALA JORGE MATIAS", "BIANCO LAUREANO JOSE", "GINER MARCOS ALEJANDRO", "CACERES MARTIN ALFREDO", "NUÑEZ JOSE EMILIANO", "SUSPERREGUI SERGIO VICTOR", "LLEOPAR GUSTAVO GUILLERMO", "TABARES GUILLERMO JAVIER", "SERVIOLI NOELIA LUCIA", "LESCANO EMILIANO JAVIER", "VERON MARIANO ALEJANDRO", "PONCE AMORINA LORENA", "GAVINO CASERTA MARIA FABIANA", "DIBARBORA CLAUDIO RODOLFO", "MUÑOZ SERGIO AGUSTIN", "GOMEZ PORTILLO SILVIA", "GALARZA HERMINDA YOLANDA", "VALDEZ GERMAN DANIEL", "ALCARAZ MAURICIO SEBASTIAN", "SCHAMUN IGNACIO", "BERTOSSI OITANA DIEGO MARTIN", "CONTIGIANI SERGIO RODOLFO", "WERTEÑO NICOLAS EMANUEL", "NUÑEZ LUIS DARIO", "SALVO FEDERICO BARTOLO", "LEMA DANIELA VANESA", "BRACCO MARIA PIA", "TILLAR CARLOS ALBERTO", "MARTINA ALVARO ESTEBAN", "RIQUELME MARIANO JAVIER", "FRANKS CAROLINA", "CATTANEO CARLA ROMINA", "BARRERA LUCERO EDUARDO DANIEL", "BALLA SEBASTIAN HORACIO", "ANRRIQUE JUAN MARCELO", "MUCILLI NICOLAS MARCOS", "SUBELDIA WILLIAM ANDRES", "GARRIDO MARIO RICARDO", "LUNGRIN CLAUDIO FABIAN", "VITULLI SILVINA", "NAVARRO LEONARDO BENITO", "MANDZIUK JESICA DAIANA", "BARRIOS RAUL GASTON", "MENDOZA MARIA EUGENIA", "REVELLO CAROLINA EMILIA", "FERNANDEZ RODOLFO JAVIER", "KEIL NICOLAS", "MALDONADO DANIEL ALBERTO", "TORRES IRENE RITA", "WUNDERLICH AMORINA PAOLA", "LOPEZ JUAN MANUEL", "ALTAMIRANO MAXIMILIANO MATIAS", "ZAVATTARO GABRIELA", "ALVAREZ CESAR ALEJANDRO", "FIELE LEANDRO IVAN", "PARISI AGUSTIN NICOLAS", "GONZALEZ LUNA LEONARDO RAUL", "CONTRERAS BRICEÑO JOSGRY ELIZABETH", "ALVAREZ FRANCISCO MANUEL", "HANSEN JULIAN", "GONZALEZ JUAN MANUEL", "DI DOMENICO GABRIEL", "FERRARESE SILVINA LAURA", "RODRIGUEZ CARLOS MIGUEL", "ZAMUDIO HERMES SEBASTIAN", "MORAN LUCAS MATIAS", "ABDALA ADRIAN EDUARDO", "ROMANAZZI CARLOS ALBERTO", "SANTOS ARIEL ALEJANDRO", "BON LEONARDO MATIAS", "RIVERA NORBERTO RUBEN", "MARTIN MAURO SEBASTIAN", "SEMERIA RIVAS MAIELLA VICTORIA", "MEDINA DANIELA ANDREA", "CAPOLUNGO ROBERTO MATÍAS", "MORETTI ARIEL EDGARDO", "FURQUET MATIAS CATRIEL", "JAURENA MARIELA ANABEL", "BARRIOS PABLO ISAIAS", "COSTABEL MICAELA SILVIA", "PINASCO LUCIANA MARIA", "LOPEZ CROSS ANDRÉS GERARDO", "TELLO RODRÍGUEZ YUDY PATRICIA", "CONDORI ARROYO WILDER YHONY", "VERDICCHIO SILVINA", "GARCIA LUCIANA", "GARCIA LUCAS", "SAFATLI GABRIEL", "LORENZO ANDREA CHRISTINA", "ALA MARIA EMILIA", "PALOMEQUE CAMILA ROCIO", "QUIROGA DANTE OMAR", "MARTINEZ MONICA LILIANA", "BARALLOBRE HERNAN GONZALO", "SALZOTTI DARIO ALEJANDRO", "LOPEZ MARIA LEONOR", "VARONE MARCELA ALEJANDRA", "MANCUSO NATALIA LORENA", "GHIANO BRUNETTA LUCAS EZEQUIEL", "BASTOS BARROS MIRO ANA RAQUEL", "MASTANDREA MARIA DEL CARMEN", "MARIANI MATIAS GASTON", "VILLEGAS ZAMBRANO ANGEL GABRIEL", "CASTILLO MAINERO ADOLFO ENRIQUE", "NICOSIA DANILA TAMARA", "PEDRA LUCIANO ALEJANDRO", "CASTILLO VANINA NOELIA", "D ALOISIO ANDRES", "MARQUEZ LARA JUAN PABLO", "BONOMO PABLO MARIANO", "FRESCA MARCELO NICOLAS", "GUTIERREZ ALEJANDRO", "GUTIERREZ NOELIA SOLEDAD", "SANCHEZ NUÑEZ JOSSELYN DELCARMEN", "BEHAR LIOR", "RICCHINI NAHUEL ALEJANDRO", "SAEZ SAEZ SILVIA MONICA", "GIRLANDO FERNANDO JAVIER", "POGGIO ESTEBAN MARTIN", "PAGANI PALMBAUM SOFIA", "FUCHS JUAN IGNACIO", "CARBALLO LUCAS", "LOSI GASTON EDUARDO", "GRISPO PABLO DANIEL", "ARSCOTT PASI BRIAN", "BERTONCELLO LUCILA YANINA", "SARTORE MARTIN DIEGO", "VILLALBA HUGO ALEJANDRO", "MIGLIORISI FRANCO", "MARANZANA MAXIMILIANO", "BALDIVIEZO ABEL DAMIAN", "PEURIOT FERNANDO DANIEL", "PURITA FERNANDO ARIEL", "LEIVA ELIANA BEATRIZ", "ANTIN GONZALO EZEQUIEL", "GAMITO ARIANA BEATRIZ", "LOPEZ MARIELA NOEMI", "LUZKO BELEN", "ALVAREZ GUSTAVO ARIEL", "ROLANDO MARTIN CARLOS", "CUBASSO CARLOS ALBERTO", "AGUIRRE ANGEL FEDERICO", "BOLZANI MARIELA ALEJANDRA", "BORZONE JORGE EUGENIO", "FRAGA CLAUDIA", "CALVETE FERNANDO RODRIGO", "CAMILETTI NOELIA DANIELA", "COUCHE DANIEL JUAN RAMON", "CARNAVAL SILVIA VERONICA", "GUAITA MARIA SILVINA", "DELGADO FRANCIA MARIANO MARTIN", "TUSMAN GERMAN EDUARDO", "VAZQUEZ MARIA VICTORIA", "MALDONADO FLORENCIA", "CASENTINI VALERIA ALICIA", "RAMIREZ GUANIPA SERGIO JOSE", "MERINO MARIA BELEN", "FLORES SEGURA PEDRO ANDRES", "PINI GASTON", "CEBALLOS WALTER", "MARTINEZ MARIA CELESTE", "SCHONFELD ANGEL SEBASTIAN", "MONCAYO GABRIEL ALBERTO", "SAMUDIO DELGADO YORLY ANDREINA", "RANGEL UZCÁTEGUI EZEQUIEL RAMON", "RIO NICOLAS", "BERTILLER EMMANUEL PABLO EDUARDO", "ALUMA MARÍA VERÓNICA", "DURAN MATIAS", "GIOVAGNORIO JUAN JOSE", "RODRIGUEZ DAIANA", "TOLOZA DAYANIRA", "AVILA MARIANGELA", "BOUCHARD JOSE DANIEL", "GONZALEZ ARVELAIZ JESUS ALBERTO", "CASTILLO NORMA JACQUELINE", "FLORES PEREYRA NAHUEL", "SAVELLI IVAN ARIEL", "SAAVEDRA LEANDRO", "YUDI HERNAN", "DIEZ BOITO MARIA TERESA", "BOAGLIO BORIS", "GAUDRY SOL MARIA FLORENCIA", "GONZALEZ JESICA LORENA", "LANDAETA OVIEDO MILAGROS COROMOTO", "LOPEZ GIACINTI LUCILA", "DIAZ MELGAR SEBASTIAN", "MOTA VALOR ZULEVY DEL VALLE", "BEVACQUA PABLO MARTIN", "ADON MAXIMILIANO DAVID", "PEDRAZA CARLOS DAMIAN", "VAZQUEZ FEDERICO MAURICIO", "ROBLEDO RIVEROS JOHANA GISELA", "FLORES LOPEZ JUAN PABLO", "ANDREAU LORENA ELIZABET", "MORALES ANGEL PABLO", "ACUÑA VENCE LEANDRO EZEQUIEL", "LONTOYA FIAMA NATALIA", "RUHL PEDRO HERNAN", "FONTAN BLANCH NICOLAS ALEJANDRO", "GAMEZ CAROLINA ELIZABETH", "SANGUINETTI ANDREA LUCIA", "GAZZA BELEN ANAHI", "RICCIARI MARCO DAMIAN", "TELLO MATIAS AGUSTIN", "PIRRAGLIA ORNELLA SANDRA", "BENVENUTTO JOSE ENRIQUE", "INGLESE ANDREA", "GOMEZ DE MERCADO HERNAN FRANCISCO", "BARTOLOMEO MATIAS EZEQUIEL", "CASA IRINA", "VULCANO JULIETA ALEJANDRA", "RAMIREZ SEBASTIAN", "PONFERRADA MARIANA INES", "ROBINSON IGNACIO ARIEL", "LOTERO CAMILA GISELLE", "PRADO ALEJANDRA ANABELLA", "FIORI DIEGO HERNAN", "SAMBADE LAURA BEATRIZ", "ALOISI JUAN PABLO", "BUTMAN MAGALI", "VARGAS NELSON ARIEL", "SAPORITO WALTER DAMIAN", "NUÑEZ CHRISTIAN LIONEL", "SALINAS FABIAN", "GADALETA ANDRES FEDERICO", "NEUMANN GABRIELA LAURA", "CICCHINI NICOLAS EZEQUIEL", "SENDRA CECILIA", "LUCIO CARLA", "BENITO PERUZZI MARIANA", "BRACCO MALCO", "ROULLOT ROCIO", "MARCONI SERGIO", "COLL MARIA", "STEIMBERG JOANNA MARISA", "VALLEJOS MATIAS EZEQUIEL", "PEQUEÑO JESSICA BELEN", "PONZIO MAIA AYELEN", "NOVOTNY AGUSTINA", "WOLFL MICHELLE", "VIZCARRA MELINA PATRICIA JORGELINA", "PALAVECINO MARTIN", "ROVELLI JUAN HORACIO", "CALVIÑO VICTORIA", "USECHE RIOS ISAMAR", "ACOSTA MONOFF ESTANISLAO", "PANESSI MARIA VALERIA", "MORALES BETANIA SINAI", "MARTINEZ ESTEBAN IVAN", "SILVA GUILLERMO FERNANDO", "LACQUANITI LUCIANA", "KRAUSE JUAN MARTIN", "BAUTISTA REYES JANSELT DAYAN", "SABINO ROMINA MARCELA", "CIAPPE CYNTHIA BEATRIZ", "AVALOS LUCAS FEDERICO", "POSTIGO MANUELA", "TRIDENTE GARABAN STEFANO RAYNIER", "GIGENA NATALIA GISELLE", "BUSTOS SEBASTIAN GABRIEL", "RODRIGUEZ ANDREA PAOLA", "CASTELO NICOLAS SILVIO", "IANNUZZI ANA", "OBANDO ENZO", "JUAREZ ANDREA SOLEDAD", "AMAYA MORALES DANIELA CAROLINA", "SOSA VANINA ELIZABETH", "TEJEDA MATIAS", "TORTOSA MARQUEZ MARIA GUADALUPE", "ASIS BETSABE", "SEGUEL RICARDO DARIO", "RECABARREN MATIAS", "CAYRE NICOLAS", "MATTIAS LIONEL", "PINTOS PAOLA DANIELA", "ROJAS ALEJANDRO ANTONIO", "SALAS ALEJANDRO JAVIER", "JEREZ JOSE MARTIN", "ROJAS CRISTINA", "GONZALEZ MARIA", "BERRA MARIA", "TORRILLA CLAUDIA", "FABRO NORBERTO", "BUSSO FEDERICO", "CARRERA EMANUEL", "ALEMANNO FEDERICO NICOLAS", "AURELIO ARACELI", "BENITEZ NADIA SOLEDAD", "MUFFAROTTO BRUNO MARCELO", "SCHNEIDER RUSSI CLAUDIA MARIANA", "FAROPPA ROMINA", "MARTIN MARIANA", "QUATROMANO NOELI CECILIA", "PARDO SEBASTIAN", "GUARNERA ALAN", "MOYANO OCHOA VERONICA", "PADRON DIEGO", "FERREYRA SHYLA", "ORLANDO JUAN ELIAS", "SALINAS ROGELIO OMAR", "SAPORITI GISELLE ALEXANDRA", "MEEUS TOMAS AUGUSTO", "ANDREOCCI MAXIMILIANO JAVIER", "CHOLFO MARTIN ENRIQUE", "SIGNORIO JOAQUIN", "FERREYRA CARINA", "SERRANO RODRIGO EZEQUIEL", "CALABRESE AZUL", "IANNE DIEGO", "MORENO CASTILLO ROSANNA PASTORA", "IZZO GABRIEL", "LOPEZ MARIA FLORENCIA", "CARRIZO NOELIA", "MARADONA PABLO ARIEL", "FIALA DANIEL", "PERSICHINI SOFIA", "TOTO AYELEN", "SANTADINO LUCIA", "DE FILIPPO CECILIA", "COSTABILE PABLO", "PALILLO MATIAS", "ANGIULI LOMBARDO SOL JOSEFINA", "ARMAS GARCIA CESAR", "RAMOS GONZALO GASTÓN", "FISCHMAN MELISA LARA", "LOPEZ VERA", "CHAVEZ ANA BELEN", "GONZALEZ EUNICE BEATRIZ", "OVIEDO VIVIANA", "NAVARRA YESICA", "ORTEGA FACUNDO MIGUEL", "GOMEZ JULIETA", "CONTE MELISA", "GIANFRINI ANTONELLA", "MIHOVILCEVIC IGNACIO LEANDRO", "STELLA ILEANA ELENA", "PERISUTTI DIAMELA", "BATALLER GONZALO", "DOMINGUEZ YOHANA", "GARCIA NICOLAS", "CORDOBA MAURICIO", "MORA SEBASTIAN", "VICENTE GASTON", "GROPPO SEBASTIAN", "BEDOYA PATRICIA KARIN", "GONZALEZ BARBARA MARIEL", "MALTA TIAGO NICOLAS", "ANGIULLI MAURO JAVIER", "LUCAS DEL CORAZON JESUS FRANCESE BLANCO", "CASTIÑEIRAS ROMINA NOELIA", "LAVECCHIA PATRICIO JUAN IGNACIO", "ALVARENGA CARLOS PAUL", "CARBONE ROBERTO", "PRAT EDUARDO ANDRÉS", "BELLUZZO NATALIA DENISE", "RODRIGUEZ LUCIA BELEN", "VAZQUEZ ESTEBAN JAVIER", "GENTILE JORGE REYNALDO", "HUBER ANA", "MERLINO JULIAN", "VIOLA FRANCO", "MOLTENI MARIA YAMILA", "SPEROTTO AGUSTINA", "BERTACCINI  PABLO ALEJANDRO", "CASTRO  OMAR AGUSTIN", "MUZIO  FEDERICO IGNACIO", "GONZALEZ  HERNAN JAVIER", "CASAL  MARCELA ANDREA", "GALARZA  GUSTAVO EMILIO", "MANSON ASTOUL  GEORGINA MARÍA", "URRIBARRI  HERNAN", "VIDAL  WALTER EDUARDO", "REGUEIRO  PABLO ALFONSO", "PONCE  SUSANA INES", "BALTORE  JUAN PABLO CRISTIAN", "BASSO  MARIO FERNANDO", "MONTEIRO FRANQUEIRA  EDUARDO ALBERTO", "SANCHEZ  JAVIER NICOLAS", "PONCE  CLAUDIA ALEJANDRA", "SEMENIUK  ARIEL LEONARDO", "ZELWIANSKI  ANDREA JUDITH", "BARRIONUEVO  CESAR LUIS", "MONTIVERO  FLAVIO JAVIER", "DE MATTIA  LUIS ARIEL", "DE LUCA  LUCIANO MATIAS", "SHIMABUKURO  ROMINA VALERIA", "GODOY  VANESA VERONICA", "ORTIZ  MONICA INES", "FRANCO  MARIA INES", "ZABALA  PABLO DANIEL", "ENRRST  LILIANA CECILIA", "SANTA CRUZ AGUILERA  GUSTAVO ABRAHAM", "FERNANDEZ  VERONICA ALEJANDRA", "MENDOZA  JAQUELINA ELIZABETH", "ALMADA FERNANDEZ  IRMA", "VILLARREAL  FERNANDO ARIEL", "PORTELA  PABLO EMILIANO", "LOPEZ  WALTER MATIAS", "ORFANO  LEONARDO GABRIEL", "RIOS  EMMANUEL GUILLERMO", "CENTORBI  RICARDO HERNAN", "SALARIATO  IGNACIO DAVID", "MEDINA  ALBERTO DANIEL", "ANDINO  HUGO", "GOMEZ CORIA  OSCAR SEBASTIAN", "MONGELOS  FACUNDO SEBASTIAN", "PALACIOS  HECTOR ANIBAL", "ECHEBARNE  WALTER OSCAR", "AICARDI  GASTON OSCAR", "PUNTILLO  ALEJANDRO DANIEL", "CALBANESE  NICOLAS EZEQUIEL", "PEREA  JUAN DOMINGO", "CARTOLANO  PABLO ANTONIO", "STARK  NAHUEL LEANDRO", "HAZAN  DARIO OMAR", "ESPINOZA TEZARA  LUIS ALEJANDRO", "IBAÑEZ  FLORENCIA CECILIA", "MOTTA  AGUSTIN", "BONAMICO  PATRICIA SUSANA", "FERNANDEZ  GABRIEL CARLOS", "PAPINI  ANDRES SERGIO", "GALINDEZ  LORENA VANESA", "FERNANDEZ  LEONARDO ATILIO", "CACERES  LEANDRO GASTON", "NUÑEZ  GONZALO ALEJANDRO", "GARZON  VIRGINIA GABRIELA", "NAVARRO  MYRIAM ELIZABETH", "SEGOVIA  GONZALO CARLOS EZEQUIEL", "BOIERO  MONICA SANDRA", "DIAZ  MAXIMILIANO HERNAN", "CORIA  GABRIELA ALEJANDRA", "VARGAS BIASON  IGNACIO TOMAS", "SUAREZ  MARCOS EMMANUEL", "GARRO  MAXIMILIANO", "AGUIAR  ALEXANDRO PAUL", "ORONA   RAFAEL MARCELO", "FIGUEROA ROJAS  MAXIMINO JOSE", "ARMOA  AXEL MARTIN", "ULLOA  FABIAN LEONARDO", "LEIVA  ANTONELLA DANIELA", "CONIL   ALBERTO SEBASTIAN", "BARDELLI  MARIANO DIEGO", "RUGIERO  CAROLINA AILEN", "COLLAZO  AGUSTIN RAMIRO", "ALVAREZ   FEDERICO RODRIGO", "SEGUNDO  JUAN MANUEL", "LESCANO VILCHEZ  MARCELO JORGE", "DE LORENZO CANEO  PABLO", "GOMEZ POU  TOMAS", "BALDOVINO   ENRIQUE EDUARDO", "ROJAS ASCANIO  PATRICIO JULIAN", "MEDRANO ALANOCA  ARACELI BELEN", "IBARRA  MATIAS EZEQUIEL", "ENCINA CARABAJAL  ABIGAIL DE LOS ANGELES", "NAVAS  PABLO NAHUEL", "PERONACE  NATALIA CAROLINA", "FONSECA SARMIENTO  DANIEL FELIPE", "AOUADA PONTOREIRO  SANTIAGO", "SAENZ  BRENDA SALOME SOLANGE", "GALLAFENT  HANNAH LAURA", "MOSQUERA  MATIAS ANDRES", "BENEDUCE  MAURO EZEQUIEL", "CHAPERO  IVAN EZEQUIEL", "ADRIAZOLA  BRIAN EMANUEL", "RAJCZAKOWSKI  VANINA FLORENCIA", "FEISTEL  AYELEN JULIETA", "ESPINOZA  SERGIO IVAN", "GONZALEZ  FACUNDO DAVID", "GRECO  GASTON EZEQUIEL", "HERBEL  DIEGO SEBASTIAN", "VALLE CARDAMA  FLORENCIA INES", "RACCANELLO  VERONICA BEATRIZ", "ARAQUE PARRA  EDUARDO ENRIQUE", "ESCALANTE  GERONIMO EMANUEL", "D´ALOI  JONATHAN", "RAMOS  ENZO DAMIAN", "ACUÑA  SANTIAGO GABRIEL", "MOLINA  ALAN NICOLAS", "FERRERI  BRUNO NICOLAS", "PARRA  LUZ ROCIO", "ROSSETTI IÑIGUEZ  MAGALI ORIANA", "SOSA  NICOLAS ARIEL", "PIÑEIRO NATALE  VICTORIA", "MARTINEZ  ALEJANDRO MAXIMILIANO", "TEIJEIRO  GABRIEL OSCAR", "FISCHER  GASTON ELIAS", "ESPINOSA  EMILIANO DANIEL", "GUTIERREZ  JUAN PABLO", "SERRA  MILAGROS NATALIE", "FRAGALE  FRANCO", "ESCOBAR  CESAR RAFAEL", "FERNADEZ BIGI  GASTON ARIEL", "STENTA  GUILLERMINA CARLA", "MAGARIÑOS   CRISTIAN OMAR", "ESCALANTE   FLORENCIA", "AYALA   MARCELO RUBEN", "PANDOLFO   LEONARDO", "CORPUS   PATRICIA VIRGINIA", "POGGI   MÓNICA CLAUDIA", "DI CHIARA   MELISA JENIFFER", "LANCELLOTTI   RICARDO ROBERTO", "NECEFOR   MARINA ANABEL", "DAVILA   MARTHA ALEJANDRA", "PAROLI   YAMILA PAULA", "RUIZ LUQUE   ELENA MARIA", "ROSSI   FLORENCIA NATALIA", "BANCHERO   MARIA CECILIA", "LOCAMPO   AGUSTINA BELEN", "CARUSO   GISELA", "GOMEZ BUSTAMANTE   MAXIMILIANO FELIX", "RUSSO   MAURO FABIAN", "GRELA   DENISE AGATA", "ALONSO   CECILIA INES"]

  useEffect(()=>{
    localStorage.getItem("etapa") && setPremiosSorteados(Number(localStorage.getItem("etapa"))+1)
    console.log("etapa al cargar: ", premiosSorteados)
  },[])

  function fullReset(){
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
      {premiosSorteados < 12 && <p className='text-5xl font-semibold'>Sorteo {premiosSorteados}: { premiosSorteados < 6 ? "$70.000" : (premiosSorteados < 9 ? "$100.000" : premiosSorteados < 11 ? "$150.000" : "$300.000" ) }</p>}
      
      
      {premiosSorteados > 11 ? <button onClick={fullReset}>Empezar de nuevo</button> : <Button data={data} sorteo={sorteo} setSorteo={setSorteo} />}
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
      numberOfPieces={150}
      wind={0.01}
      gravity={0.05}
    />
      </>
      }
       {/* <ListWinners /> */}
       
    </div>
    <div className=''>
      <video className='' autoPlay loop muted>
          <source src={loop} type='video/mp4' />
      </video>
      {/* <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div> */}
    </div>
    </>
  );
}

export default App;
