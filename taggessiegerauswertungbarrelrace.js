let BarrelraceErgebnisArray;



function ErgebnisseSpeichern(){

  //Array bereinigung, leere Einträge löschen
  BarrelraceErgebnisArray = BarrelraceErgebnisArray.map(innerArray => innerArray.filter(item => item !== ''));
  //Aufruf Funktion Berechnung der Ergebnisse
  berechnugbarrelerace();
  
  //Sortierung der Teilnehmer absteigend nach der Zeit und hinzufügen der Punkte als neuer Tupel
  PunktezuTeilnehmer_Platzierung();
  //Wenn Disqualifizert dann am Ende des Arrays schieben 
  Disquai_letzterEintag();
  //Funktion zum Ergbniss in localStorage speichern
  
  save_Ergebnis_local_Storage();
  

  

}

function save_Ergebnis_local_Storage(){
  //Ergebnissarray unabhänig von dem Ort/Klasse in JSONumwandlen
  const BarrelRaceErgebnisJSON = JSON.stringify(BarrelraceErgebnisArray);
  //Das JSONarray in den richtigen localKeyspeichern
   const x = 'StarterErgebnisBarrelrace';

  localStorage.setItem(x,BarrelRaceErgebnisJSON);
 
}





function Disquai_letzterEintag(){

  for (let i = 0; i < BarrelraceErgebnisArray.length; i++) {
    if (BarrelraceErgebnisArray[i].length > 6) {
      const indexDisqualifiziert = BarrelraceErgebnisArray[i].indexOf('Disqualifiziert');
      if (indexDisqualifiziert !== -1) {
        BarrelraceErgebnisArray[i].splice(indexDisqualifiziert, 1);
        BarrelraceErgebnisArray[i].push('Disqualifiziert');
      }
    }
  }

}

function berechnugbarrelerace(){

    ///For-Schleife zur Berechnung der Ergebnisse
    for (let i = 0; i < BarrelraceErgebnisArray.length; i++) {
  
      const Zeitwert = BarrelraceErgebnisArray[i][3]; // Zeitwert auslesen
      let floatNumber = Zeitwert_Umwandeln(Zeitwert);
     
  
      let Fehlerwert = BarrelraceErgebnisArray[i][4]; // Fehlerwert auslesen
      Fehlerwert= Fehlerwert *5 
      const Ergebnis  = floatNumber + Fehlerwert; // Fehlerwerte ausrechnen 
  
      BarrelraceErgebnisArray[i].push(Ergebnis.toString()); // Ergebnis als String dem Array hinzufügen
    }
  
    
  
  }

function PunktezuTeilnehmer_Platzierung(){

  for (let i = 0; i < BarrelraceErgebnisArray.length; i++) {

    if (BarrelraceErgebnisArray[i][5] === 'Disqualifiziert') {
      let temp = BarrelraceErgebnisArray[i][5]; // Temporärer Wert speichern
      BarrelraceErgebnisArray[i][5] = BarrelraceErgebnisArray[i][6]; // Wert aus letzter Spalte in vorletzte Spalte kopieren
      BarrelraceErgebnisArray[i][6] = '999'; // Wert in letzter Spalte auf '999' setzen
      BarrelraceErgebnisArray[i][6] = temp; // Temporären Wert in letzte Spalte kopieren
    }

    for (let j = i + 1; j < BarrelraceErgebnisArray.length; j++) {
      
      if (Zeitwert_Umwandeln(BarrelraceErgebnisArray[j][5]) < Zeitwert_Umwandeln(BarrelraceErgebnisArray[i][5])) {
        // Vertausche die Positionen der inneren Arrays, wenn die Wertigkeit in x[j] kleiner ist als in x[i]
        let temp = BarrelraceErgebnisArray[i];
        BarrelraceErgebnisArray[i] = BarrelraceErgebnisArray[j];
        BarrelraceErgebnisArray[j] = temp;
      }
    }
  }
    
  //punkte hinzufügen
  
  for (let i = 0, zusatzWert=30 ; i < 30 && i < BarrelraceErgebnisArray.length; i++) {
    if (BarrelraceErgebnisArray[i][6] === 'Disqualifiziert') {
      BarrelraceErgebnisArray[i].push((0).toString())
       }
      else{ 
            
            BarrelraceErgebnisArray[i].push((zusatzWert).toString());
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
    BarrelraceErgebnisArray = gespeichertesArray;
  }
  
// Funktion, um den Zusatzwert im Array zu aktualisieren
function updateZusatzwert(rowIdx, zusatzwertIdx, input,gespeichertesArray) {
    gespeichertesArray[rowIdx][zusatzwertIdx + 4] = input.value; // Array-Wert aktualisieren (4, da die Zusatzwerte nach den ursprünglichen Werten kommen)
    BarrelraceErgebnisArray = gespeichertesArray;
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

 