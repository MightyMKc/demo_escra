let PolebendingErgebnisArray;


function ErgebnisseSpeichern(){

  //Array bereinigung, leere Einträge löschen
  PolebendingErgebnisArray = PolebendingErgebnisArray.map(innerArray => innerArray.filter(item => item !== ''));
  //Aufruf Funktion Berechnung der Ergebnisse
  berechnugpolebending();
  
  //Sortierung der Teilnehmer absteigend nach der Zeit und hinzufügen der Punkte als neuer Tupel
  PunktezuTeilnehmer_Platzierung();
  //Wenn Disqualifizert dann am Ende des Arrays schieben 
  Disquai_letzterEintag();
  //Funktion zum Ergbniss in localStorage speichern
  save_Ergebnis_local_Storage();
  

  

}
function save_Ergebnis_local_Storage(){
  //Ergebnissarray unabhänig von dem Ort/Klasse in JSONumwandlen
  const PolebendingErgbnisJSON = JSON.stringify(PolebendingErgebnisArray);
  //Das JSONarray in den richtigen localKeyspeichern
  localStorage.setItem('StarterErgebnisPolebending',PolebendingErgbnisJSON);

}




function Disquai_letzterEintag(){

  for (let i = 0; i < PolebendingErgebnisArray.length; i++) {
    if (PolebendingErgebnisArray[i].length > 6) {
      const indexDisqualifiziert = PolebendingErgebnisArray[i].indexOf('Disqualifiziert');
      if (indexDisqualifiziert !== -1) {
        PolebendingErgebnisArray[i].splice(indexDisqualifiziert, 1);
        PolebendingErgebnisArray[i].push('Disqualifiziert');
      }
    }
  }

}



function berechnugpolebending(){

    ///For-Schleife zur Berechnung der Ergebnisse
    for (let i = 0; i < PolebendingErgebnisArray.length; i++) {
  
      const Zeitwert = PolebendingErgebnisArray[i][3]; // Zeitwert auslesen
      let floatNumber = Zeitwert_Umwandeln(Zeitwert);
     
  
      let Fehlerwert = PolebendingErgebnisArray[i][4]; // Fehlerwert auslesen
      Fehlerwert= Fehlerwert *5 
      const Ergebnis  = floatNumber + Fehlerwert; // Fehlerwerte ausrechnen 
  
      PolebendingErgebnisArray[i].push(Ergebnis.toString()); // Ergebnis als String dem Array hinzufügen
    }
  
    
  
  }

function PunktezuTeilnehmer_Platzierung(){

  for (let i = 0; i < PolebendingErgebnisArray.length; i++) {

    if (PolebendingErgebnisArray[i][5] === 'Disqualifiziert') {
      let temp = PolebendingErgebnisArray[i][5]; // Temporärer Wert speichern
      PolebendingErgebnisArray[i][5] = PolebendingErgebnisArray[i][6]; // Wert aus letzter Spalte in vorletzte Spalte kopieren
      PolebendingErgebnisArray[i][6] = '999'; // Wert in letzter Spalte auf '999' setzen
      PolebendingErgebnisArray[i][6] = temp; // Temporären Wert in letzte Spalte kopieren
    }

    for (let j = i + 1; j < PolebendingErgebnisArray.length; j++) {
      
      if (Zeitwert_Umwandeln(PolebendingErgebnisArray[j][5]) < Zeitwert_Umwandeln(PolebendingErgebnisArray[i][5])) {
        // Vertausche die Positionen der inneren Arrays, wenn die Wertigkeit in x[j] kleiner ist als in x[i]
        let temp = PolebendingErgebnisArray[i];
        PolebendingErgebnisArray[i] = PolebendingErgebnisArray[j];
        PolebendingErgebnisArray[j] = temp;
      }
    }
  }

  
  //punkte hinzufügen
  
  for (let i = 0, zusatzWert=30 ; i < 30 && i < PolebendingErgebnisArray.length; i++) {
    if (PolebendingErgebnisArray[i][6] === 'Disqualifiziert') {
      PolebendingErgebnisArray[i].push((0).toString())
       }
      else{
            PolebendingErgebnisArray[i].push((zusatzWert).toString());
            zusatzWert--;
          }
  }

  

  

}


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
    
    
  }

function updateValue(rowIdx, colIdx, input,gespeichertesArray) {
    gespeichertesArray[rowIdx][colIdx] = parseFloat(input.value); // In Zahl umwandeln und Array-Wert aktualisieren
    PolebendingErgebnisArray = gespeichertesArray;
  }
  
// Funktion, um den Zusatzwert im Array zu aktualisieren
function updateZusatzwert(rowIdx, zusatzwertIdx, input,gespeichertesArray) {
    gespeichertesArray[rowIdx][zusatzwertIdx + 4] = input.value; // Array-Wert aktualisieren (4, da die Zusatzwerte nach den ursprünglichen Werten kommen)
    PolebendingErgebnisArray = gespeichertesArray;
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
  
  function btn_visible(){
    var schmalz2 = document.getElementById('ErgebnisseSpeichern');
    schmalz2.style.visibility = "";
  
  }