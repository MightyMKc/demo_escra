let ErgebnisArray;

function abfrage_radio(){
    //Definierung Radio Buttons
    let radio1 = document.getElementById('Open');
    let radio2 = document.getElementById('Amateur');
    let radio3 = document.getElementById('Newcomer');
    
   
    //Eingabeüberpfüfung
  
    if(radio1.checked){
        var klasse = radio1.value;
     }
     if(radio2.checked){
        var klasse = radio2.value;
     }
     if(radio3.checked){
        var klasse = radio3.value;
     }
        
  
    const Klasse = klasse;
    
    if(Klasse == undefined){
  
        alert("Klasse wurde nicht angeben");
    }
  
    
  
    return Klasse;
  }
  function abfrage_diziplin(){

  
    //Definierung Radio Buttons
    let radio1 = document.getElementById('Flagrace');
    let radio2 = document.getElementById('Polebending');
    let radio3 = document.getElementById('Keyholerace');
    let radio4 = document.getElementById('Barrelrace');
    let radio5 = document.getElementById('Mixedrace');
    
    
    //Eingabeüberpfüfung
    
    if(radio1.checked){
        var klasse = radio1.value;
     }
    if(radio2.checked){
        var klasse = radio2.value;
     }
    if(radio3.checked){
         var klasse = radio3.value;
    }
    if(radio4.checked){
        var klasse = radio4.value;
    }
    if(radio5.checked){
        var klasse = radio5.value;
    }
     
    
    const Disziplin = klasse;
    
    if(Disziplin== undefined){
    
        alert("Disziplin wurde nicht angeben");
    }
    
    
    
    return Disziplin;
}

function arrayfinalteilnehmerholen(abfrage_radio){
    let teilnehmer;
    const Teilnehmerliste = [];

    const Klassen= ['Open','Amateur','Newcomer'];
    if(abfrage_radio==Klassen[0]){
        const ref= "FinalteilnehmerOpen";
        const resultref= localStorage.getItem(ref);
        teilnehmer = JSON.parse(resultref);
    }
    if(abfrage_radio==Klassen[1]){
        const ref= "FinalteilnehmerAmateur";
        const resultref= localStorage.getItem(ref);
        teilnehmer= JSON.parse(resultref);
    }
    if(abfrage_radio==Klassen[2]){
        const ref = "FinalteilnehmerNewcomer";
        const resultref= localStorage.getItem(ref);
        teilnehmer= JSON.parse(resultref);
    }

    for (let i = 0; i < teilnehmer.length; i++) {
        // Erstelle ein neues Array mit den  3 Elementen aus jedem inneren Array
        const subArray = teilnehmer[i].slice(1, 4);
        Teilnehmerliste.push(subArray);
      }

    

    return Teilnehmerliste;
}

function updateValue(rowIdx, colIdx, input,gespeichertesArray) {
    gespeichertesArray[rowIdx][colIdx] = parseFloat(input.value); // In Zahl umwandeln und Array-Wert aktualisieren
    ErgebnisArray = gespeichertesArray;
  }
  
// Funktion, um den Zusatzwert im Array zu aktualisieren
function updateZusatzwert(rowIdx, zusatzwertIdx, input,gespeichertesArray) {
    gespeichertesArray[rowIdx][zusatzwertIdx + 4] = input.value; // Array-Wert aktualisieren (4, da die Zusatzwerte nach den ursprünglichen Werten kommen)
    ErgebnisArray = gespeichertesArray;
  }




function createTableWithInputs(gespeichertesArray) {

    
    
  
  
    const table = document.getElementById('tabelleberechnungflagrace');
  
    for (let i = 0; i < gespeichertesArray.length; i++) {
        const row = document.createElement('tr');
  
        for (let j = 0; j < gespeichertesArray[i].length; j++) {
            const cell = document.createElement('td');
  
            // Wenn der Index 0 ist, handelt es sich um die Indexnummer und ist nicht bearbeitbar
            if (j === 0) {
                cell.textContent = gespeichertesArray[i][j];
            } else {
                const input = document.createElement('input');
                input.type = "text";
                input.value = gespeichertesArray[i][j];
                input.addEventListener('change', updateValue.bind(null, i, j, input, gespeichertesArray)); // Änderungsereignis hinzufügen
                cell.appendChild(input);
                if (j === 0 || j === 1) {
                  input.disabled = true;
                }
            }
  
            row.appendChild(cell);
        }
  
        // Zusatzwerte hinzufügen
        for (let k = 0; k < 2; k++) {
            const zusatzwertCell = document.createElement('td');
            const zusatzwertInput = document.createElement('input');
            zusatzwertInput.type = "text";
            zusatzwertInput.value = ""; // Leeres Feld für den Zusatzwert
            zusatzwertInput.addEventListener('change', updateZusatzwert.bind(null, i, k, zusatzwertInput,gespeichertesArray)); // Änderungsereignis hinzufügen
            zusatzwertCell.appendChild(zusatzwertInput);
            row.appendChild(zusatzwertCell);
        }
        for (let k = 0; k < 1; k++) {
            const zusatzwertCell = document.createElement('td');
            const zusatzwertInput = document.createElement('input');
            zusatzwertInput.type = "checkbox";
            zusatzwertInput.value = "Disqualifiziert"; // Leeres Feld für den Zusatzwert
            zusatzwertInput.addEventListener('change', updateZusatzwert.bind(null, i, 3, zusatzwertInput,gespeichertesArray)); // Änderungsereignis hinzufügen
            zusatzwertCell.appendChild(zusatzwertInput);
            row.appendChild(zusatzwertCell);
        }
  
        table.appendChild(row);
    }
    
    btn_hidden('uebernahme');
   
  }

  function btn_hidden(schmalz){
    var btn = document.getElementById(schmalz);
    btn.style.visibility = 'hidden';
    
  }

  function leerundNan(array){

    var gefiltertesArray1 = [];
    var gefiltertesArray2 = [];
  
  // Durchlaufe das mehrdimensionale Array und filtere 'leer' Werte
  for (var i = 0; i < array.length; i++) {
    var innerArray = array[i];
    var gefiltertesInnerArray = [];
  
    for (var j = 0; j < innerArray.length; j++) {
      if (innerArray[j] !== 'leer') { // Hier prüfen wir auf 'leer'
        gefiltertesInnerArray.push(innerArray[j]);
      }
    }
  
    gefiltertesArray1.push(gefiltertesInnerArray);
  }
  
  const mehrdimensionalesArray = gefiltertesArray1;
  
  //undefinded Werte
  
  for (var i = 0; i < mehrdimensionalesArray.length; i++) {
    var innerArray = mehrdimensionalesArray[i];
    var gefiltertesInnerArray = [];
  
    for (var j = 0; j < innerArray.length; j++) {
      if (typeof innerArray[j] !== 'undefined') {
        gefiltertesInnerArray.push(innerArray[j]);
      }
    }
  
    gefiltertesArray2.push(gefiltertesInnerArray);
  }
  
  return gefiltertesArray2;
  
  
  }
  


// Funktion zum Aufbau der Tabelle mit den jeweiligen Werten
function FinalteilnehmerinTabelle(){

    //Teilnehmer Array aufbauen nur Namen reinkloppen, deshalb Klasse abfraegen
    const Finalteilnehmer= arrayfinalteilnehmerholen(abfrage_radio());
    //Teilnehmerliste in Tabelle einfügen
    createTableWithInputs(Finalteilnehmer.slice(0,15));

}


function berechnungen(){
  //Abfrage welche Diziplin
  const  AuswahlDisziplin = abfrage_diziplin();
  console.log(AuswahlDisziplin);
  //ALLE leeeren Eintrräge und undefinded einträge löschen vor berechnung
  //WerteARRAY enthält alle Werte zum berechnen der Finalpunkte
  const WerteARRAY = leerundNan(ErgebnisArray);
  
  //Berechnungslogik if-abfrahe anschließend ausführen 
  if(AuswahlDisziplin=='Flagrace'){
    const array1= WerteARRAY;
    const Ergebnisarrayflagrace=berechnugflagrace(array1);
    const ErgebnismitPlatz= PunktezuTeilnehmer_Platzierung(Ergebnisarrayflagrace);
    const sortierteErgebnisse= Disquai_letzterEintag(ErgebnismitPlatz)
    console.log(sortierteErgebnisse);
    //Funktion zum ausblenden der Diziplin 
    const reff = 'Finalergebnisflagrace'
    speichern(sortierteErgebnisse, reff);
    let x = 'Ergebnis' + abfrage_diziplin() + abfrage_radio() + 'Finale';
    speichern(sortierteErgebnisse, x);
    btn_hidden(AuswahlDisziplin);
    inhalteclear();
    ErgebnisArray = [];
  }
  if(AuswahlDisziplin=='Polebending'){
    const array1= WerteARRAY;
    const ErgbnisPolebending = berechnungpolebending(array1);
    const ErgebnismitPlatz= PunktezuTeilnehmer_Platzierung(ErgbnisPolebending);
    const sortierteErgebnisse= Disquai_letzterEintag(ErgebnismitPlatz)
    console.log(sortierteErgebnisse);
    const reff = 'Finalergebnispolebending';
    speichern(sortierteErgebnisse, reff);
    let x = 'Ergebnis' + abfrage_diziplin() + abfrage_radio() + 'Finale';
    speichern(sortierteErgebnisse, x);
    btn_hidden(AuswahlDisziplin);
    inhalteclear();
    ErgebnisArray = [];
  }
  if(AuswahlDisziplin=='Keyholerace'){
    const array1= WerteARRAY;
    const Ergbniskeyhohlerace = berechnugkeyhohlerace(array1);
    const ErgebnismitPlatz= PunktezuTeilnehmer_Platzierung(Ergbniskeyhohlerace);
    const sortierteErgebnisse= Disquai_letzterEintag(ErgebnismitPlatz)
    console.log(sortierteErgebnisse);
    const reff = 'Finalergebniskeyholerace' 
    speichern(sortierteErgebnisse, reff);
    let x = 'Ergebnis' + abfrage_diziplin() + abfrage_radio() + 'Finale';
    speichern(sortierteErgebnisse, x);
    btn_hidden(AuswahlDisziplin);
    inhalteclear();
    ErgebnisArray = [];
  }
  if(AuswahlDisziplin=='Barrelrace'){
    const array1= WerteARRAY;
    const Ergbnisbarrelrace = berechnugbarrelerace(array1);
    const ErgebnismitPlatz= PunktezuTeilnehmer_Platzierung(Ergbnisbarrelrace);
    const sortierteErgebnisse= Disquai_letzterEintag(ErgebnismitPlatz)
    console.log(sortierteErgebnisse);
    const reff = 'Finalergebnisbarrelrace';
    speichern(sortierteErgebnisse, reff);
    let x = 'Ergebnis' + abfrage_diziplin() + abfrage_radio() + 'Finale';
    speichern(sortierteErgebnisse, x);
    btn_hidden(AuswahlDisziplin);
    inhalteclear();
    ErgebnisArray = [];
  }
  if(AuswahlDisziplin=='Mixedrace'){
    const array1= WerteARRAY;
    const Ergbnismixedrace = berechnungmixedrace(array1);
    const ErgebnismitPlatz= PunktezuTeilnehmer_Platzierung(Ergbnismixedrace);
    const sortierteErgebnisse= Disquai_letzterEintag(ErgebnismitPlatz)
    console.log(sortierteErgebnisse);
    const reff = 'Finalergebnismixedrace';
    speichern(sortierteErgebnisse, reff);
    let x = 'Ergebnis' + abfrage_diziplin() + abfrage_radio() + 'Finale';
    speichern(sortierteErgebnisse, x);
    gesamtresultfinal();
    btn_hidden(AuswahlDisziplin);
    inhalteclear();
    ErgebnisArray = [];
  }
 
  
}


function gesamtresultfinal(){

  const gespeicherteErgebnissrefernezen=['Finalergebnisflagrace','Finalergebnispolebending','Finalergebniskeyholerace','Finalergebnisbarrelrace','Finalergebnismixedrace'];
  const Finalteilnehmer= arrayfinalteilnehmerholen(abfrage_radio());
  const resultx=ErgebnisseausdenArraysauslesen(Finalteilnehmer,gespeicherteErgebnissrefernezen);

  const resultfinal= gesamtergebnis(resultx);

  const reffinal= 'Gesamtergebnisfinalarraysatzohneplatz'+abfrage_radio();
  speichern(resultfinal,reffinal);
} 

function gesamtergebnis(AllePunktearray){

  for (let i = 0; i < AllePunktearray.length; i++) {
      const unterArray = AllePunktearray[i];
      let summe = 0;
    
      // Durchlaufe die Werte von Index 3 bis 7 und berechne die Summe
      for (let j = 3; j <= 7; j++) {
          if(isNaN(unterArray[j])){
              unterArray[j]='0'; 
          }
         if(unterArray[j]!='Disqualifiziert'){
            summe += parseInt(unterArray[j], 10);
         }
        
      }
      let x = String(summe)
      // Füge die Summe am Ende des Unterrays hinzu
      
      unterArray.push(x);
    }
    
    return AllePunktearray;

}

function Punktehinzufügen(Liste,x)
{
   

   for (let i = 0; i < Liste.length; i++) {
       let gefunden = false; // Eine Flagge, um zu überprüfen, ob die Werte gefunden wurden
     
       for (let j = 0; j < x.length; j++) {
         if (
           Liste[i][0] === x[j][0] &&
           Liste[i][1] === x[j][1] &&
           Liste[i][2] === x[j][2]
         ) {
           // Füge den letzten Wert aus x dem Array Liste hinzu
           Liste[i].push(x[j][x[j].length - 1]);
           gefunden = true; // Markiere, dass die Werte gefunden wurden
           break; // Beende die innere Schleife, da das Element gefunden wurde
         }
       }
     
       if (!gefunden) {
         // Wenn die Werte nicht gefunden wurden, füge '0' hinzu
         Liste[i].push('0');
       }
     }
     
     return Liste;
     
}


function ErgebnisseausdenArraysauslesen(NamenArray,refernezen)
{  
  let neueListe = NamenArray;
  console.log(neueListe);
  
  ArrayFinal= refernezen;
  let Ergebnisarray;
  
  //Schleife drum 
  for(i=0;i<5;i++){
  const JSON_Ref = ArrayFinal[i];

  
   
  const resultref = localStorage.getItem(JSON_Ref);
  
  const auswahlresult = JSON.parse(resultref);
  
  // Funktionaufruf um letzten Punkte jeweiligen Teilnehmer hinzuzufügen 
  Ergebnisarray=Punktehinzufügen(neueListe,auswahlresult)
  }
  // evtl hier typconfirmation wenn keine Daten zu den Staretern vorlegen bzw. ergebnisse


  return Ergebnisarray;


  


}


function speichern(arrayergebnis,Referenz){
  //Ergebnissarray unabhänig von dem Ort/Klasse in JSONumwandlen
  const ErgebnisJSON = JSON.stringify(arrayergebnis);
  //Das JSONarray in den richtigen localKeyspeichern
  localStorage.setItem(Referenz,ErgebnisJSON);
}


//Tabelle nach berechnung aufräumen
function inhalteclear(){
  
  var tabelle = document.getElementById("tabelleberechnungflagrace");

// Annahme: Die Zeilen in der Tabelle sind als <tr> definiert
var zeilen = tabelle.getElementsByTagName("tr");

for (var i = 0; i < zeilen.length; i++) {
  var zeile = zeilen[i];
  var textfelder = zeile.getElementsByTagName("input"); // Annahme: Textboxen sind als <input> definiert

  if (textfelder.length >= 5) {
    // Überprüfe, ob mindestens 5 Textboxen in dieser Zeile existieren
    for (var j = 2; j < 5; j++) {
      // Setze den Wert der Textboxen in der 3. bis 5. Position auf ''
      textfelder[j].value = '';
    }
  }
}


}

/////Funktionen aus den anderen Seiten 
//Punnkte
function PunktezuTeilnehmer_Platzierung(FlagraceErgebnissArray){

  for (let i = 0; i < FlagraceErgebnissArray.length; i++) {

    if (FlagraceErgebnissArray[i][5] === 'Disqualifiziert') {
      let temp = FlagraceErgebnissArray[i][5]; // Temporärer Wert speichern
      FlagraceErgebnissArray[i][5] = FlagraceErgebnissArray[i][6]; // Wert aus letzter Spalte in vorletzte Spalte kopieren
      FlagraceErgebnissArray[i][6] = '999'; // Wert in letzter Spalte auf '999' setzen
      FlagraceErgebnissArray[i][6] = temp; // Temporären Wert in letzte Spalte kopieren
    }

    for (let j = i + 1; j < FlagraceErgebnissArray.length; j++) {
      
      if (Zeitwert_Umwandeln(FlagraceErgebnissArray[j][5]) < Zeitwert_Umwandeln(FlagraceErgebnissArray[i][5])) {
        // Vertausche die Positionen der inneren Arrays, wenn die Wertigkeit in x[j] kleiner ist als in x[i]
        let temp = FlagraceErgebnissArray[i];
        FlagraceErgebnissArray[i] = FlagraceErgebnissArray[j];
        FlagraceErgebnissArray[j] = temp;
      }
    }
  }
    
  //punkte hinzufügen
  
  for (let i = 0, zusatzWert=30 ; i < 30 && i < FlagraceErgebnissArray.length; i++) {
    if (FlagraceErgebnissArray[i][6] === 'Disqualifiziert') {
      FlagraceErgebnissArray[i].push((0).toString())
       }
      else{ 
            
          FlagraceErgebnissArray[i].push((zusatzWert).toString());
            zusatzWert--;
          }
  }

  
    return FlagraceErgebnissArray;
  

}

//Disquali letzter eintrag
function Disquai_letzterEintag(FlagraceErgebnissArray){

  for (let i = 0; i < FlagraceErgebnissArray.length; i++) {
    if (FlagraceErgebnissArray[i].length > 6) {
      const indexDisqualifiziert = FlagraceErgebnissArray[i].indexOf('Disqualifiziert');
      if (indexDisqualifiziert !== -1) {
        FlagraceErgebnissArray[i].splice(indexDisqualifiziert, 1);
        FlagraceErgebnissArray[i].push('Disqualifiziert');
      }
    }
  }

  return FlagraceErgebnissArray;

}


//berechnungbarrelrace
function berechnugflagrace(FlagraceErgebnissArray){
///For-Schleife zur Berechnung der Ergebnisse
  for (let i = 0; i < FlagraceErgebnissArray.length; i++) {

    const Zeitwert = FlagraceErgebnissArray[i][3]; // Zeitwert auslesen
    if(Zeitwert === null){
      Zeitwert=0;
     }
     floatNumber = Zeitwert_Umwandeln(Zeitwert);
 

    let Fehlerwert = FlagraceErgebnissArray[i][4]; // Fehlerwert auslesen
    Fehlerwert= Fehlerwert *5 
    const Ergebnis  = floatNumber + Fehlerwert; // Fehlerwerte ausrechnen 

    FlagraceErgebnissArray[i].push(Ergebnis.toString()); // Ergebnis als String dem Array hinzufügen
  }

  return FlagraceErgebnissArray;
}

//berechnungpolebending
function berechnungpolebending(PolebendingErgebnisArray){

  ///For-Schleife zur Berechnung der Ergebnisse
  for (let i = 0; i < PolebendingErgebnisArray.length; i++) {

    const Zeitwert = PolebendingErgebnisArray[i][3]; // Zeitwert auslesen
    let floatNumber = Zeitwert_Umwandeln(Zeitwert);
   

    let Fehlerwert = PolebendingErgebnisArray[i][4]; // Fehlerwert auslesen
    Fehlerwert= Fehlerwert *5 
    const Ergebnis  = floatNumber + Fehlerwert; // Fehlerwerte ausrechnen 

    PolebendingErgebnisArray[i].push(Ergebnis.toString()); // Ergebnis als String dem Array hinzufügen
  }

  return PolebendingErgebnisArray;
  

}

//berechnung keyholerace
function berechnugkeyhohlerace(KeyhohleRaceErgbnisArray){

  ///For-Schleife zur Berechnung der Ergebnisse
  for (let i = 0; i < KeyhohleRaceErgbnisArray.length; i++) {

    const Zeitwert = KeyhohleRaceErgbnisArray[i][3]; // Zeitwert auslesen
    let floatNumber = Zeitwert_Umwandeln(Zeitwert);
   

    let Fehlerwert = KeyhohleRaceErgbnisArray[i][4]; // Fehlerwert auslesen
    Fehlerwert= Fehlerwert *5 
    const Ergebnis  = floatNumber + Fehlerwert; // Fehlerwerte ausrechnen 

    KeyhohleRaceErgbnisArray[i].push(Ergebnis.toString()); // Ergebnis als String dem Array hinzufügen
  }
  
  return KeyhohleRaceErgbnisArray;
  

}
//berechnung barrelrace
function berechnugbarrelerace(BarrelraceErgebnisArray){

  ///For-Schleife zur Berechnung der Ergebnisse
  for (let i = 0; i < BarrelraceErgebnisArray.length; i++) {

    const Zeitwert = BarrelraceErgebnisArray[i][3]; // Zeitwert auslesen
    let floatNumber = Zeitwert_Umwandeln(Zeitwert);
   

    let Fehlerwert = BarrelraceErgebnisArray[i][4]; // Fehlerwert auslesen
    Fehlerwert= Fehlerwert *5 
    const Ergebnis  = floatNumber + Fehlerwert; // Fehlerwerte ausrechnen 

    BarrelraceErgebnisArray[i].push(Ergebnis.toString()); // Ergebnis als String dem Array hinzufügen
  }

  return BarrelraceErgebnisArray;

}

//berechnung mixedrace
function berechnungmixedrace(MixedraceErgebnisArray){

  ///For-Schleife zur Berechnung der Ergebnisse
  for (let i = 0; i < MixedraceErgebnisArray.length; i++) {

    const Zeitwert = MixedraceErgebnisArray[i][3]; // Zeitwert auslesen
    let floatNumber = Zeitwert_Umwandeln(Zeitwert);
   

    let Fehlerwert = MixedraceErgebnisArray[i][4]; // Fehlerwert auslesen
    Fehlerwert= Fehlerwert *5 
    const Ergebnis  = floatNumber + Fehlerwert; // Fehlerwerte ausrechnen 

    MixedraceErgebnisArray[i].push(Ergebnis.toString()); // Ergebnis als String dem Array hinzufügen
  }

  
  return MixedraceErgebnisArray;
}


function Zeitwert_Umwandeln(commaString) {
    // Prüfe, ob ein Komma im String vorhanden ist
    if (commaString.includes(',')) {
      // Ersetze das Komma durch einen Punkt und parsiere den String als Float
      return parseFloat(commaString.replace(',', '.'));
    } else {
      // Wenn kein Komma gefunden wurde, gib den String als Float zurück
      return parseFloat(commaString);
    }
  }
  
  