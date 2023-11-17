let FlagraceErgebnissArray;

function ErgebnisseSpeichern(){
  //Array bereinigen, leeren Eintrag
  FlagraceErgebnissArray = FlagraceErgebnissArray.map(innerArray => innerArray.filter(item => item !== ''));
  
  // Aufruf der Ergebnissberechnung
  berechnugflagrace();
  //Sortierung der Teilnehmer absteigend nach der Zeit und hinzufügen der Punkte als neuer Tupel
  PunktezuTeilnehmer_Platzierung();
  //Wenn Disqualifizert dann am Ende des Arrays schieben 
  Disquai_letzterEintag();
  //Funktion zum Ergbniss in localStorage speichern
  save_Ergebnis_local_Storage();
  

  
}

function Disquai_letzterEintag(){

  for (let i = 0; i < FlagraceErgebnissArray.length; i++) {
    if (FlagraceErgebnissArray[i].length > 6) {
      const indexDisqualifiziert = FlagraceErgebnissArray[i].indexOf('Disqualifiziert');
      if (indexDisqualifiziert !== -1) {
        FlagraceErgebnissArray[i].splice(indexDisqualifiziert, 1);
        FlagraceErgebnissArray[i].push('Disqualifiziert');
      }
    }
  }

}


function berechnugflagrace(){

  ///For-Schleife zur Berechnung der Ergebnisse
  for (let i = 0; i < FlagraceErgebnissArray.length; i++) {

    const Zeitwert = FlagraceErgebnissArray[i][3]; // Zeitwert auslesen
    if(Zeitwert === null){
      Zeitwert=0;
    }
    let floatNumber = Zeitwert_Umwandeln(Zeitwert);
   

    let Fehlerwert = FlagraceErgebnissArray[i][4]; // Fehlerwert auslesen
    Fehlerwert= Fehlerwert *5 
    const Ergebnis  = floatNumber + Fehlerwert; // Fehlerwerte ausrechnen 

    FlagraceErgebnissArray[i].push(Ergebnis.toString()); // Ergebnis als String dem Array hinzufügen
  }

  

}


function save_Ergebnis_local_Storage(){
  //Ergebnissarray unabhänig von dem Ort/Klasse in JSONumwandlen
  const FlagraceErgbnisJSON = JSON.stringify(FlagraceErgebnissArray);
  //Das JSONarray in den richtigen localKeyspeichern
  localStorage.setItem('StarterErgebnisFlagrace',FlagraceErgbnisJSON);
  btn_hidden('ErgebnisseSpeichern');
}


//Funktion Punktevergabe und Sortierung der Plätze
function PunktezuTeilnehmer_Platzierung(){

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

  

  

}

// Funktion, um die Tabelle mit Input-Feldern zu erstellen
function createTableWithInputs() {



  const storedArrayAsString = localStorage.getItem('Starter');
  
  const gespeichertesArray = JSON.parse(storedArrayAsString);
  
  //Überschriften rauskicken
  gespeichertesArray.splice(0,1)
  


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
  btn_visible();
}

function btn_hidden(schmalz){
  var btn = document.getElementById(schmalz);
  btn.style.visibility = 'hidden';
  
}

function btn_visible(){
  var schmalz2 = document.getElementById('ErgebnisseSpeichern');
  schmalz2.style.visibility = "";

}

// Funktion, um den Wert im Array zu aktualisieren
function updateValue(rowIdx, colIdx, input,gespeichertesArray) {
  gespeichertesArray[rowIdx][colIdx] = parseFloat(input.value); // In Zahl umwandeln und Array-Wert aktualisieren
  FlagraceErgebnissArray = gespeichertesArray;
}

// Funktion, um den Zusatzwert im Array zu aktualisieren
function updateZusatzwert(rowIdx, zusatzwertIdx, input,gespeichertesArray) {
  gespeichertesArray[rowIdx][zusatzwertIdx + 4] = input.value; // Array-Wert aktualisieren (4, da die Zusatzwerte nach den ursprünglichen Werten kommen)
  FlagraceErgebnissArray = gespeichertesArray;
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




