import './App.scss';
import Button from './components/Button/Button';
import ListWinners from './components/ListWinners/ListWinners';
import React, {useEffect, useState} from 'react';
import Confetti from 'react-confetti'
import RandomNames from './components/RandomNames/RandomNames';
import loop from './components/assets/images/loop.mp4';
import logoloop from './components/assets/images/logo.mov';


function App() {
  const [sorteo, setSorteo] = useState("btn");
  const [premiosSorteados, setPremiosSorteados] = useState(1);
  const { width, height } = '100%'

  const data = ["MILAGROS AGUSTINA ABACA TOVARES", "ALEJANDRA ANGELICA ABADIA", "EUGENIA NATALIA ABALLAY", "FRANCO SANTIAGO ABALLAY", "JESUS MIGUEL ACOSTA", "SANTIAGO FRANCISCO ACOSTA", "MELANI JACQUELINE ACOSTA CARVAJAL", "MARCOS OSCAR ACOSTA CUNTO", "CLAUDIO FRANCISCO ADARO", "ROLANDO CEFERINO AGUERO", "VIOLETA INES AGÜERO", "RAMIRO ADRIAN AGÜERO", "NANCY ELENA AGUILERA", "ANDRES MARCELO AGUILERA", "CRISTIAN GERMAN AGUILERA", "MARIA JORGELINA AHUMADA", "SERGIO ULISES ALARRIBERA", "ARIEL ALBERTO ALARRIBERA DIAZ", "LEOPOLDO A. ALBARRACIN ELASCHE", "ROGER MURIEL ALE", "ROBERTO JAVIER ALGAÑARAZ", "GERARDO LUIS ALSINA CAPUTO", "EBER ALAN WILLIAM ALVAREZ", "LUIS RAMON ALVAREZ", "LUIS HERNAN ALVAREZ", "RODRIGO NICOLAS ALVAREZ", "EXEQUIEL EMILIANO ALVAREZ ARANDA", "FACUNDO LUIS AMARFIL", "HERNAN ANDINO", "EDUARDO ANGEL NICOLAS APARICIO", "GABRIELA ALEJANDRA APARICIO", "LEONARDO JAVIER ARACENA ARBO", "MARIO ANDRES ARANCIBIA", "BRAIAN NAHUEL ARANCIBIA PRINGLES", "SERGIO ALBERTO ARAOZ", "CLAUDIO AGUSTIN ARAOZ", "ANALIA FABIANA ARAVENA CASTRO", "JAQUELINA VERONICA ARAYA", "MARIA INES ARIZA TOMBA", "FERNANDO EXEQUIEL ARRAES KOZEL", "CLARA LILA ARREDONDO", "MARIO RUBEN ARREDONDO", "FEDERICO ARIEL ARREDONDO", "JORGE LUIS ARREDONDO", "HEBER JEREMIAS ARRIETA", "CARLA GABRIELA ARROYO PEREYRA", "CINTHIA YANELA ARUSTIZIA RAMIREZ", "RAMONA VERONICA ATAMPIZ", "JULIA ATENCIO", "CARLOS ADRIAN ATENCIO GOMEZ", "CINTIA SUSANA AUBONE DEMARTINI", "RAMIRO JOEL AUCE ELIZONDO", "DANIEL GUSTAVO AVALO IRANZO", "ROCIO ALEJANDRA AVALO MONTAÑO", "JESICA ROMINA AVELLA", "SANTIAGO JOSE AVENDAÑO", "MARIANO ENRIQUE AVENDAÑO FUENTES", "ELBA SUSANA AVILA", "NELIDA PAMELA AVILA", "SILVANA EUFEMIA AVILA HIDALGO", "ROCIO MALEN AYLAN", "IRENE ELEONORA AZCURRA", "AGOSTINA LILIA BALDERRAMO PALMA", "CRISTIAN FEDERICO BALMACEDA", "FERNANDO MARCELO BALMACEDA OYOLA", "GERARDO BALVERDE VAZQUEZ", "SILVANA LORENA BARBOZA", "HERNAN ANDRES BARCELO", "ANDRES LEONEL BARLETTA", "GERARDO ROBERTO OCTAVIO BASSO", "FACUNDO GABRIEL BAZAN", "FABRICIO BECERRA RODRIGUEZ", "HUGO GABRIEL BENEGA ONTIVERO", "ANALIA VERONICA BENITEZ", "MATHIAS GABRIEL BERNAL JORQUERA", "MARTIN EDUARDO BERNAL MUÑOZ", "FEDERICO ALFONSO BERNALEZ", "JORGE MARIO BIANCO", "ANALIA MERCEDES BILBAO", "JOSE JAVIER BOGNI", "MARIANA NOEMI BOGNI", "CRISTIAN SERGIO BONILLA", "SEBASTIAN ANDRES BONOMO PONCE", "DANIELA BEATRIZ BOSONI", "URSULA ANALIA BRAVO", "MARIO ENRIQUE BRAVO", "JULIETA PAULA BRAVO LEONARDELLI", "SERGIO LUIS BRITO", "JONATHAN ARIEL BRIZUELA MENDEZ", "FELIX DARIO BUENO ECHEVARRIA", "AGOSTINA BUFFAGNI RIBES", "DIEGO BURGOS PEÑA", "BRUNO EXEQUIEL BUSTOS", "NATALIA NOEMI CABALLERO AGUIRRE", "RAUL EDUARDO CABANAY", "DIEGO MAURICIO CACERES", "JORGE ENRIQUE CACERES LUJAN", "LEANDRO AGUSTIN CALDERON VILLAFAÑE", "PAULA NAHIR CALVO VIDELA", "SERGIO ABELARDO CAMISAY", "HEBE GABRIELA CAMPOS", "ANDREA VANESA CANGIALOSI MODICA", "ELVIO DAVID CAPRARO FUENTES", "LORENA SILVANA CARABAJAL MIRANDA", "GINA MICAELA CARDO", "CRISTIAN RUBEN CARMONA CORTEZ", "NATALIA YANINA CARRIZO", "EDUARDO WASHINGTON CARRIZO", "MATIAS JESUS CARRIZO", "JORGE DAVID CARRIZO BRIZUELA", "FRANCO JAVIER CARRIZO GARRO", "JESICA DAIANA CARRIZO MONTAÑO", "JUAN ANTONIO CARRIZO QUIROGA", "GERMAN LEONARDO CARRIZO TORRES", "MARIA SOL CARUSO", "GERMAN ALEXANDER CASIBAR", "ALEJANDRO VICTOR CASSANELLI MARTINEZ", "DANIEL ERNESTO CASTAÑEDA", "MIGUEL ALEJANDRO CASTAÑON", "JOSE ALEJANDRO CASTILLA RUBIO", "RAUL ALBERTO CASTILLO", "MARIA BELEN CASTILLO", "ABEL OMAR CASTRO", "MAURICIO MARTIN CASTRO", "JORGE EMANUEL CASTRO", "ADIRENE CASTRO", "ALEXIS GASTON CASTRO", "ANA PAULA CASTRO FERNANDEZ", "BENJAMIN NICOLAS CASTRO MARADONA", "LEONARDO ARIEL CASTRO SANCHEZ", "HECTOR RENE CATACATA", "MIGUEL ALFREDO CELADOR", "CECILIA IVANA CENTENO", "NOEL MARILIN CHACON OVIEDO", "MAXIMILIANO NICOLAS CHAPARRO ONTIVEROS", "ORLANDO VICTOR LUIS CHAVARRIA", "MARIA FLORENCIA CHAVEZ MARTINEZ", "RENATO JAVIER CHIRINO GOMEZ", "VALERIA DEL CARMEN CHUMBITA CARMONA", "SANTIAGO NICOLAS COCCO TAPIA", "FEDERICO JESUS CODORNIU BALMACEDA", "MAURO ALBERTO COITINHO", "CLAUDIA MARIA DEL VALLE COPPOLA", "DAMIAN GERMAN CORIA", "EDUARDO GABRIEL ALBERTO CORREA", "MAXIMILIANO ARIEL CORREA", "PAOLA ALEJANDRA CORREA PAEZ", "RUBEN ARIEL CORTEZ", "DARIO RUBEN COSTA", "SABINA ELIZABETH COTILLA VIDAL", "JOSE FACUNDO CRUBELLIER", "GUADALUPE CRUZ GODOY", "SERGIO FABIAN CUÑARRO", "EMIR NAIM DAGFAL MARTINEZ", "MARIA LUZ DATES ZARATE", "LEONARDO IVAN DAVILA LANDRA", "VICTOR MAURICIO DE LA TORRE", "RITA ALEJANDRA DE VITA", "FABRICIO MANUEL DELGADO", "CRISTIAN ROGER DELGADO", "JORGE EMMANUEL DELGADO", "RICARDO ANTONIO DELL ORO LOPEZ", "ALFREDO EMMANUEL DELPODIO", "LEONARDO GABRIEL DIAZ", "FRANCO FEDERICO DIAZ", "CRISTIAN DANIEL DIAZ", "FEDERICO GASTON DIAZ", "PEDRO FABIAN DIAZ BUSTOS", "MARCELO GUSTAVO DOHMEN", "JUAN DANIEL DOMIJAN DEYMIE", "CARLOS ALBERTO DOMINGUEZ", "HECTOR ENRIQUE DONOSO", "VICTOR MANUEL DONOSO RIOS", "WILLIAN ALFREDO DURAN", "LORENA VANESA ECHEVARRIA", "RUBEN DARIO EJARQUE", "JUAN IGNACIO ESCOBAR", "ROBERTO CRISTIAN ESCUDERO", "ORLANDO DANIEL ESPEJO", "JONATAN MATIAS ESPINOZA", "GABRIELA NATALI ETCHEPARE", "PABLO LEONARDO FARIAS", "ALBERTO LEONARDO FARIAS", "NESTOR JAVIER FELIX", "MARISA ISABEL FERNANDEZ", "ROMAN HUGO DANIEL FERNANDEZ", "EDUARDO MARIO FERNANDEZ", "ROSANA SONIA FERNANDEZ", "NICOLAS EDUARDO FERNANDEZ", "EZEQUIEL HERNAN FERNANDEZ CORZO", "KARINA GISELA FERNANDEZ HIDALGO", "SERGIO FABIAN FERNANDEZ MERCADO", "JUAN PABLO FERNANDEZ ROMERA", "JUAN ADOLFO FERNANDEZ ROSALES", "MARIA PAULA FERNANDEZ VERDUGO", "RENZO FRANCISCO FERRANDIZ MONTIEL", "LEONARDO ALBERTO FERREYRA CACHI", "GERARDO DANIEL FIGUEROA", "WALTER ADRIAN FLORES", "DANIEL ALEJANDRO FLORES", "MARIA EUGENIA FLORES", "JOSE LUIS FLORES", "MARIA AYELEN FONZALIDA", "ALEJANDRO HUGO FRIAS", "MIGUEL ALEJANDRO FUENTES", "SERGIO FABIAN FUENTES", "MARIELA ALEJANDRA FUNES", "DIEGO ENRIQUE FUNES", "MARIA DE LOS ANGELES FUNES FAJARDO", "MARIA PIA GAIA AMOROS", "CARLOS ARIEL GALDEANO", "MARIA LAURA GALIFI", "DIEGO ALEJANDRO GALLARDO", "CLAUDIO ALBERTO GALLARDO", "FRANCO MARTIN GALLARDO", "LOURDES BELEN GALLART PEREZ", "PABLO EZEQUIEL GALVAN BOSQUE", "ARIEL ANDRES GANAM", "SILVIO CRISTIAN GARAY", "SANTIAGO JOAQUIN GARAY", "MAURICIO MIGUEL GARCIA", "ROLANDO FRANCISCO JAVIER GARCIA", "CINTIA PAOLA GARCIA", "ADRIAN ANTONIO GARCIA", "MARIA DEL MILAGRO GARCIA", "AMELIA VERONICA GARCIA CAÑADA", "JORGELINA LILIANA GARCIA GONZALEZ", "DARIO SEBASTIAN GARCIA LUCERO", "ARIEL ALEJANDRO GARCIA MORAL", "MATIAS OMAR GARIN", "ENZO RODRIGO GARRAMUÑO", "GERMAN GABRIEL GARRAMUÑO", "FABRIZIO JESUS GARRAMUÑO", "VIVIANA SONIA GARRIDO", "VANINA VERONICA GARRIDO", "CLAUDIO FERNANDO GATICA CAMPUS", "PABLO OMAR GELVEZ", "JAVIER HERMAN GELVEZ", "SILVANA GABRIELA GIL", "JUAN JESUS GIL CASTRO", "GONZALO ARIEL GIMENEZ", "GABRIEL EXEQUIEL GIMENEZ LLABRES", "LUIS RENZO GIMENEZ MATURANO", "DANIEL MATIAS GIMENEZ ROMERO", "HECTOR ULISES GIULIANO", "PATRICIA MARIANA GODOY", "JULIETA GODOY", "MARIANELA SOLANGE GODOY VALENCIA", "MARIA MILAGRO GOLDSTEIN TORRES", "MARIELA ROSA GOMEZ", "GUSTAVO FABIAN GOMEZ", "ROBERTO JOSE GOMEZ", "ELIANA SOLEDAD GOMEZ ANSBERCK", "NATALIA VANESA GONZALEZ", "MARISA ALEJANDRA GONZALEZ", "MARCELO LEONARDO GONZALEZ", "MARIA CECILIA GONZALEZ", "GERMAN ANDRES GONZALEZ", "MARIANELA DE LOS ANGELES GONZALEZ", "VANIA JIMENA GONZALEZ", "SERGIO ANTONIO GONZALEZ", "VICTOR FEDERICO DE J. GONZALEZ", "GONZALO CRISTIAN GONZALEZ", "MAURO ANDRES GONZALEZ", "RICARDO RUBEN GONZALEZ", "NATALIA V. GONZALEZ ABARCA", "MARCELO ALEJANDRO GONZALEZ CARRILLO", "FACUNDO EMILIANO GONZALEZ FERNANDEZ", "MARIO ALBERTO GONZALEZ IBAZETA", "AGUSTIN EMMANUEL GONZALEZ VACCA", "JORGE FEDERICO GORIA", "EDUARDO GRANERO", "ESTEBAN FEDERICO GROF", "ROMINA NATALIA GUAJARDO", "MARCELO ADRIAN GUALPA", "ANA MABEL GUARDIA", "ROLANDO ALFREDO GUARDIA BALAGUER", "LEANDRO EZEQUIEL GUARDIA GARCIA", "LEANDRO RUBEN GUARDIA GODOY", "FACUNDO RAUL GUERRA CARMONA", "MARCELO JAVIER GUERRERO", "ERNESTO DANIEL GUTIERREZ", "MARIA LOURDES GUTIERREZ VALLECILLO", "PEDRO ENRIQUE GUZMAN", "CAMILA BELEN GUZMAN ICAZATI", "ENZO EMANUEL GUZMAN TEJADA", "EVA GISELA HART", "PABLO ANDRES HEREDIA", "ADRIANA MAGALI HERNANDEZ PRIETO", "EMILIANO ANTONIO HERRERA", "DARIO SEBASTIAN HERRERA", "JORGE ALBERTO HIDALGO", "OSCAR GONZALO HOLLGER", "ELIZABETH CRISTINA HUERTA DARONI", "NATALI BELEN IBACETA", "ANDRES DARDO IBAÑEZ", "GASTON IBAÑEZ CHAVEZ", "MARCO JOSE IBARBE", "MARCOS SEBASTIAN IBARROLA", "RICARDO ARIEL IBAZETA", "VIVIANA ALICIA IBAZETA RUIZ", "EDUARDO DANIEL IGNES", "ALEJANDRO OMAR INFANTE", "GONZALO GABRIEL INNELLA ROMERO", "MARTHA BEATRIZ ITURRIETA", "JUAN ANDRES JIRON STEFAN", "JOSE DAVID JOFRE", "JORGE EMANUEL JOFRE", "SERGIO DIEGO JOFRE FUNES", "MONICA GABRIELA JOFRE LARA", "CRISTIAN ESTEBAN JORGE", "DAMIAN ISMAEL LACIAR GONZALEZ", "SABRINA MARIBEL LAIN NAVAS", "LEONARDO ESTEBAN LANDEROS CARTA", "ROXANA BEATRIZ LAPLAGNE", "NOLBERTO DAVID LARA", "DORA BEATRIZ LARROSA", "MATIAS ALEJANDRO LEALES", "MARIA CAROLINA LEGUIZAMON", "ARNALDO JUAN LEIVA", "DENISE BELEN LEIVA", "MARIA ALICIA LEIVA ORELLANO", "GABRIEL ALEJANDRO LEON GIL", "FRANCO DANIEL LEPEZ", "MARIA XIMENA LIGOULE", "FACUNDO LEANDRO LLOVERAS KUMMEL", "LEONARDO NAHUEL LOBOS LEIVA", "JUAN MANUEL LOPEZ", "MARIANO RAUL LOPEZ", "ITALO ARIEL LOPEZ", "ENRIQUE OMAR LOPEZ", "DIEGO CLAUDIO LOPEZ", "IGNACIO GABRIEL LOPEZ GOMEZ", "CAROLINA JOHANA LOPEZ RIVEROS", "MATIAS SEBASTIAN LOPEZ TURCHETTI", "MARTIN FABRICIO LOZANO", "MARIA ROSA LUCERO", "VALERIA VANESA LUCERO", "SERGIO GASTON LUNA", "MARIA FERNANDA LUNA", "DEBORA LORENA LUNA PIZARRO", "JOEL ANTONIO MACIAS GARCIA", "OSCAR JACINTO MALBRAN PARRA", "FEDERICO ROBERTO MALDONADO ALMIRON", "CARLOS GERMAN MALLEA PACHECO", "HECTOR MATIAS MALLEA VIDELA", "LUIS REINERIO MANRIQUE", "MAURICIO ALBERTO MANRIQUE", "MARIA BELEN MANRIQUE", "MANUEL MANRIQUE", "MARCELO DANIEL MARCONI", "JAVIER EMMANUEL MARDONES", "ANGEL JAVIER MARIÑO PEÑA", "CESAR SEBASTIAN MARQUEZ", "VERONICA DEL VALLE MARQUEZ ARANCIBIA", "OSCAR GUSTAVO MARTIN", "HECTOR FACUNDO MARTIN", "NOELIA BEATRIZ MARTIN JAS", "JUAN MIGUEL MARTIN OSSA", "SEBASTIAN GUILLERMO MARTINEZ", "TADEO DANIEL MARTINEZ", "OSCAR DANIEL MARTINEZ", "JUAN LEONARDO MARTINEZ PALACIO", "GUIDO GIUSEPPE MARZANO SOLIS", "FEDERICO OSCAR MAS PINTO", "BRUNO AGUSTIN MASCIOPINTO", "PABLO DAVID MATURANO", "LUCRECIA MELINA MAUREIRA EJEA", "VANINA DEL VALLE MAZA", "GIULIANO MEDICI FERNANDEZ", "DAMIAN ANTONIO MEDINA", "MATIAS ANDRES MELIAN", "MARIELA ROSANA MENA", "GIMENA MENDEZ", "MARIA INES MENTESANA", "GONZALO ROGELIO MERCADO NAVARRO", "MATIAS RODRIGO MERELES JUAREZ", "MELISA CINTIA MERINO", "GUSTAVO ALFONSO MIRA CABRERA", "JUAN ESTEBAN MIRANDA HEREDIA", "GUSTAVO MIRIANI", "GUSTAVO ARIEL MOLINA", "ALBERTO SEBASTIAN MOLINA", "SEBASTIAN VALENTIN MOLINA ANSBERKA", "SEBASTIAN EMANUEL MONTAÑO", "JORGE RODOLFO MONTESINO ARAGON", "JUAN DARIO MONTIGEL", "MARIO ALBERTO MONTORO", "JUAN JOSE MONTOSA", "WALTER FABIAN MORALES", "KARINA DEL VALLE MORALES", "LAURA INES GEMA MORALES", "FEDERICO GERMAN MORALES", "FERNANDO ALBERTO MORALES", "MAYRA GABRIELA MORALES QUIROGA", "MARCELO EDUARDO MORAN", "JOSE MANUEL MORAN CASTRO", "LILIANA ANDREA MORANDI", "VALENTINA GRETEL MORANDI CORDERO", "MARTIN NELSON MORENO", "ANABELA NAHIR MORENO", "LILIANA CARINA MORILLA", "RICARDO DEMETRIO MOSTAZO", "ANGELA VALERIA MOYA PORTILLO", "VICTORIA ADRIANA ANALIA MOYANO", "GABRIEL MAXIMILIANO MULET", "RENZO OSCAR MUNIZAGA", "VICTOR NICOLAS MUÑOS GOMEZ", "OSCAR FABIAN MUÑOZ", "MARIA DE LOURDES MUÑOZ CARRATU", "LEONARDO MARIO MUÑOZ GUAYMAIN", "JAVIER MAXIMILIANO NACIF", "FACUNDO ELIAN NARANJO ALBAREZ", "JORGE ANDRES NARVAEZ", "CECILIA ALEJANDRA NAVARRO", "LEANDRO MAXIMILIANO NAVARRO", "MARIA CRISTINA NEHIN HERRERA", "ENZO DANIEL NEIRA", "OSCAR ALFREDO NIEVAS ROBLES", "ANDRES GUSTAVO NOGUERA", "GABRIEL ANDRES NUÑEZ", "PABLO CARLOS OCAMPO", "MARIELA VIVIANA OCAMPO", "MARIA INES OCAMPO SESE", "ELENA ANTONIA OLIVARES", "FRANCO NICOLAS OLIVARES", "MARIA EUGENIA OLIVARES MORENO", "DANIELA BELEN OLIVERA SIGALAT", "CRISTIAN OLMEDO", "STELLA MARIS OLMO", "HORACIO FEDERICO OLMOS", "FERNANDO WALTER ONTIVERO", "ALFREDO MIGUEL ONTIVEROS GROSSO", "JUAN MARTIN ORDIENCO", "ANDRES JAVIER ORDINES MOLINA", "SERGIO ALFREDO ORO", "CECILIA MARIEL ORO ROLDAN", "CRISTIAN NAHUEL OROPEL", "SANTIAGO ARIEL OROPEL QUINTEROS", "JOSE LUIS ORTEGA", "EDGARDO GUSTAVO ORTEGA RODRIGUEZ", "SILVANA VERONICA ORTEGA RUIZ", "GLADYS VANESA ORTIZ", "MAURICIO EXEQUIEL ORTIZ", "ESTELA ALEJANDRA ORTIZ GONZALEZ", "ANDREA VIVIANA OTAROLA VEA", "OSCAR MARCELO OVIEDO", "CHRISTIAN ARIEL PACHECO", "MARIA AGUSTINA PACHECO TOZZI", "VALERIA NATALI PAEZ", "SUSANA EDITH PAEZ", "CARLOS EMANUEL PAEZ", "CARLOS ALBERTO PAEZ", "MAURICIO GERMAN PAEZ", "MATHIAS JOAQUIN PAEZ", "ANGEL AGUSTIN PAEZ", "ALEXANDER SERGIO PAEZ GONZALEZ", "VANESA MARIA LUZ PAEZ MILIAN", "DIEGO SEBASTIAN PAEZ MOYANO", "PABLO NICOLAS PAEZ NARANJO", "RODRIGO SEBASTIAN PALACIOS", "BRIAN JOSE PALACIOS", "STELLA RITA PALMA", "FABRICIO ROMAN PAOLONI", "VICTOR MANUEL PAREDES", "CECILIA ELIZABETH PAREDES PEREZ", "JUAN CARLOS PASTEN", "JOSE ANTONIO PASTOR", "AUGUSTO PASTORE GARCIA", "OSVALDO MAURICIO PATON OLIVARES", "FANNY CARINA PAULIELLO", "JOSE JAVIER PEDROZO", "CRISTIAN ANDRES PELAEZ FONTELA", "VOIGUE YAMIL PELLIZZARI BILLINGER", "JORGE GUSTAVO PEÑA", "FERNANDO OMAR PEÑA", "IVAN GABRIEL PEÑA", "MARIA DANIELA PEÑA", "MATIAS HERNAN PEÑA SEGADO", "GABRIEL MATIAS PEÑALOZA", "EVANGELINA BEATRIZ PEREYRA", "MARIA LUISA PEREYRA", "OSCAR FRANCISCO PEREYRA", "RICARDO EZEQUIEL PEREYRA", "BRAIAN NAHUEL PEREYRA CANO", "RAUL MARCELO PEREZ", "JORGELINA VALERIA PEREZ", "NATALIA GABRIELA PEREZ FERNANDEZ", "MICAELA FLORENCIA PEREZ FLORES", "MARCOS FEDERICO PEREZ LOPEZ", "MAXIMILIANO PEREZ RIVEROS", "MARISA NELLA PIETRUCCI", "MAURICIO RICARDO PIZARRO", "AIDA DEL CARMEN PIZARRO PENINO", "FEDERICO JAVIER PLAZA", "LUCAS EDUARDO PRADO", "MAXIMILIANO PRIMUCCI", "AGOSTINA BELEN PUGLIESE", "JAVIER EDUARDO PUIME", "GABRIEL FERNANDO QUINTERO", "MARCELO ADRIAN QUINTEROS", "SILVIA MARCELA QUIROGA", "CINTIA FATIMA QUIROGA", "JUAN PABLO QUIROGA POBLETE", "WALTER RUBEN MARCELO QUIROZ", "HECTOR ROLANDO QUIROZ RODRIGUEZ", "MONICA VALERIA QUIROZ VARGAS", "JOSE EDUARDO RAMIREZ", "ORLANDO ANDRES RAMIREZ ARRIAGADA", "ALEJANDRO SEBASTIAN RAMOS ANDREOLLI", "NELSON DARIO RECABARREN RIVAS", "GASTON ALBERTO REINA", "NATALIA SOLEDAD REINA BORGES", "CARLOS DAVID REYMUNDO", "JUAN JOSE RICHARTE ROMERA", "MAURO RODRIGO RICOTTI", "VANINA DEL CARMEN RIOFRIO", "GERARDO MATIAS RIOS", "ALVARO FEDERICO RIOS GALLEGO", "LUCIANO EZEQUIEL RIOS PALACIO", "DANIEL ANTONIO RIOS RODRIGUEZ", "JUAN ARIEL RIVAS", "WILSON MARCELO RIVAS BRIZUELA", "JUAN JOSE RIVAS RODRIGUEZ", "ALBERTO SEBASTIAN RIVERO", "NATALIA VANESA RIVEROS", "VICTORIA RIVEROS", "FRANKLIN EMILIO RIVEROS", "MATIAS ESEQUIEL RIVEROS ESPINOZA", "MARIA FATIMA RIVEROS FAYOS", "LEANDRO DANIEL RODANO DELUIGI", "CRISTIAN EZEQUIEL RODRIGO YANADEL", "CARLOS ALBERTO RODRIGUEZ", "ALEJANDRO RAMON RODRIGUEZ", "MARIO ANDRES RODRIGUEZ", "LEANDRO EMILIO RODRIGUEZ", "PAULA SUSANA RODRIGUEZ", "MAGALI RODRIGUEZ", "FEDERICO NAHUEL RODRIGUEZ", "FRANCO ULISES RODRIGUEZ", "SERGIO JONATAN RODRIGUEZ AGÑERO", "GABRIELA IVANA RODRIGUEZ DARONI", "PAMELA EDITH RODRIGUEZ GOMEZ", "JORGE LUIS RODRIGUEZ TREO", "MARISOL GISEL ROJAS", "SANTIAGO ROJAS DALL OCCHIO", "CARLA MARCELA ROJAS RIOS", "LUIS MARTIN ROJO", "ERIC ABEL ROLDAN", "GABRIEL EMANUEL ROLDAN ELIZONDO", "MARCOS OMAR ROMERO", "PABLO SEBASTIAN ROMERO", "MARTIN GABRIEL ROMERO", "AGOSTINA ROMERO", "TAMARA JAQUELINE ROMERO", "LENA MARIEL ROMERO FLORES", "MARCELO OMAR ROMERO LOPEZ", "MARIA FLORENCIA ROMERO PEREZ", "ANA LAURA ROMEU RIOS", "MARIELA INES ROSALES", "WALTER DANIEL ROSALES", "PABLO GERMAN ROSALES", "EMILIO JESUS ROSAS", "ROGELIO MAURICIO RUARTE", "PABLO IGNACIO RUARTE", "GERARDO ERNESTO RUIZ", "FERNANDO RAUL RUIZ", "DAVID ALEJANDRO RUIZ ACOSTA", "MIGUEL ANGEL SABINA BOLADO", "LEANDRO EZEQUIEL SALDAÑO PUJADO", "LUCAS JOEL SALEME DOÑA", "EDUARDO NICOLAS SALINAS", "NICOLAS RODOLFO SALINAS ARCHERITO", "ARTURO JESUS SANCHEZ", "ERIC SEBASTIAN SANCHEZ", "ALBERTO DANIEL SANCHEZ", "LEONARDO SEBASTIAN SANCHEZ", "GERMAN EZEQUIEL SANCHEZ", "ROCIO BELEN SANCHEZ", "LUIS MARIA SANCHEZ CAMARGO", "LEYSA SANCHEZ HERRERA", "FERNANDO IVAN SANCHEZ LIMA", "SERGIO HERNAN SANCHEZ LOPEZ", "DAVID ADRIAN SANCHEZ MARTI", "MARIA AGOSTINA SANCHEZ ORUSTE", "FACUNDO AGUSTIN SANCHEZ PEREZ", "ELEODORO EDUARDO SANCHEZ SCHALL", "MATIAS ALEJANDRO SANTANDER", "XIMENA SABRINA SANZ", "ARMANDO GERARDO SAPUTO", "MARIA CRISTINA SARMIENTO DIAZ", "FRANCO MATIAS SAVALL GRILLO", "WALDO EMILIANO SEGOVIA D ASARO", "SERGIO DANIEL SEGURA", "GERMAN ARIEL SEVASTEI", "GERARDO SIERRA", "AGUSTIN FRANCISCO SILLERO LOPEZ", "MAXIMILIANO PABLO SILVA", "CRISTIAN JAVIER SILVA", "FRANCO MARTIN SILVA CHAMORRO", "DANIEL ENRIQUE SIREROL SOLERA", "DANIA MICAELA SOLAR ABRAN", "MARIA LAURA SOLER LOPEZ", "JORGE ARIEL SOLERA", "CRISTIAN DANIEL SORIA", "GONZALO GABRIEL SORIA CORIA", "DANIEL JORGE SOSA", "LEANDRO EMANUEL SOSA", "RUBENS DARIO SOSA GARCIA", "ROCIO SOLEDAD SOSA OVIEDO", "MARIA FLORENCIA SOTOMAYOR", "VALERIA SOLEDAD SPINELLA", "ROLANDO IVAN SUAREZ", "GUSTAVO ADOLFO SUAREZ GIL", "MARIO ALBERTO SUESA", "LUIS MARCELO TAILLANT", "FRANCISCO GERMAN TAPIA BALDIS", "ENRIQUE FEDERICO TEJADA", "CARMEN CARINA TEJADA", "ANDREA ROSALIA TEJADA", "MARIANA DANIELA TEJADA", "LUCIANA INES TEJADA", "MARCIO HERNAN TEJADA", "MAXIMILIANO DAVID TELLO", "FLORENCIA KEREN TELLO ABREGU", "PABLO JAVIER TELLO PEREZ", "MARIA LORENA TEMOLI", "MARTIN ARIEL TERRERA", "LISANDRO TINTO ESPIN", "FERNANDO ARIEL TOLEDO", "MARIO ALBERTO TOLEDO", "LORENA BEATRIZ TOMSIG", "PABLO ENRIQUE TORRES", "MIGUEL ADRIAN TORRES OYOLA", "MARIA ALEJANDRA TRAMONTIN", "EMILIA TRENTACOSTE", "ANDRES GUSTAVO TRIBOLO", "JUAN GREGORIO TRIGO", "FABIAN ARIEL TRONCOSO ARMADA", "PABLO ARIEL TUMBARELLO ARCHERITO", "HILDA GRACIELA UNALI", "LEONARDO DANIEL VALDEZ", "GABRIELA CRISTINA VARAS", "NICOLAS ANDRES VARAS ROMBOLA", "CARLOS JONATAN VARELA", "ROBERTO ARIEL VARELA BUSTOS", "CLAUDIO ARIEL VARGAS", "DANIEL JORGE VARGAS", "JUAN PABLO VARGAS", "DIEGO ALEJANDRO VARGAS ALBEIRO", "JONATHAN EMANUEL VARGAS CARRETERO", "GUILLERMO ANGEL NICOLAS VARGAS FERNANDEZ", "GUADALUPE MERCEDES GEMA VARGAS KRAUSE", "SALVADOR ANTONIO VARGAS QUIROGA", "NILDA ESTELA VEDIA", "NICOLAS ALBERTO VEDIA", "RAMON SEBASTIAN VEGA RODRIGUEZ", "CARLOS FERNANDO VEGA VALDEZ", "MARIA CANDELARIA VELASCO RODRIGUEZ", "CARLA ESTEFANIA VENTRICE", "MARIA SILVIA VERA", "JORGE DANIEL VERA", "JUAN MARCELO VERGARA", "MARIANELA BEATRIZ VERGARA", "CINTIA YANINA VERGARA ALVAREZ", "FEDERICO ARIEL VIDABLE", "LUIS FABIAN VIDAL ILLANES", "FACUNDO EDUARDO VIDAURRE", "CLAUDIO GUSTAVO VIDELA", "DANIEL IGNACIO VIDELA", "EMANUEL RAFAEL VIEYRA", "MARIA FERNANDA VILA", "CRISTIAN ADRIAN VILA CORIA", "EDUARDO SEBASTIAN VILDOSO VERA", "OSVALDO AGUSTIN VILLA RIVERO", "MARTIN GONZALO VILLALBA ARMANI", "MARIO OSVALDO VILLAVICENCIO", "VERONICA LORENA VILLEGA", "DARIO ANIBAL VILLEGAS", "JOAQUIN JOEL VILLEGAS FUNES", "ADRIAN EMMANUEL VILLEGAS MARTINEZ", "ALEXANDER ESEQUIEL VIVAREZ GARRO", "CARLA VIZCAINO CATANZARO", "LAURA BEATRIZ YACANTE", "ARIEL ADOLFO YACANTE PEREYRA", "RAUL EZEQUIEL YAFAR", "JUANA DEL CARMEN YUBEL", "ANDRES MIGUEL YUTZIS", "ESTEBAN FRANCISCO YUVERO", "SEBASTIAN FEDERICO ZABALA BARIFUSA", "VICTORIA NOEMI ZABALETA", "FEDERICO ZAEHNSDORF", "FRANCO MATIAS ZALAZAR", "WALTER JAVIER ZAMORA", "MARIA JOSE ZAPATA", "ALEJANDRO FEDERICO ZARATE", "GERMAN MATIAS ZARATE HEREDIA", "FRANCO ADRIAN ZAVALLA", "CARLOS ANTONIO ZELKO DE LOS SANTOS"]

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
    <div className="App"> 
      <img alt='Logo' className='brand' src={require("./components/assets/images/logo2.png")} />
      {/* <video className='' autoPlay loop muted>
          <source src={logoloop} type='video/quicktime' />
      </video> */}
      {sorteo === "btn" ? 
      <>
      <RandomNames sorteo={sorteo} setSorteo={setSorteo} />
      <div className='flex flex-col m-4'>
      <p className='text-5xl font-semibold'>Sorteo {premiosSorteados}: { premiosSorteados < 7 ? "$70.000" : (premiosSorteados < 10 ? "$100.000" : premiosSorteados < 12 ? "$150.000" : "$300.000" ) }</p>
      
      {premiosSorteados > 12 ? <button onClick={fullReset}>Empezar de nuevo</button> : <Button data={data} sorteo={sorteo} setSorteo={setSorteo} />}
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
