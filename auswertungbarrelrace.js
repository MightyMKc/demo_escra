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
   const x = get_ergebnis_array();

  localStorage.setItem(x,BarrelRaceErgebnisJSON);
  console.log(get_ergebnis_array());
  btn_hidden('ErgebnisseSpeichern');
}


function get_ergebnis_array(){

  const auswahlort = abfrage_ort();
  const auswahlklasse = abfrage_radio();
  let arrayerebnis = "error";
  
  if(auswahlort == "Oberlangen"){   
      if(auswahlklasse == "Open")
      {
        arrayerebnis = "ErgebnisBarrelraceOpenOberlangen";
      }
      if(auswahlklasse == "Amateur")
      {
        arrayerebnis = "ErgebnisBarrelraceAmateurOberlangen"; 
      }
      if(auswahlklasse == "Newcomer")
      {
        arrayerebnis = "ErgebnisBarrelraceNewcomerOberlangen";
      }
      if(auswahlklasse == "Senior")
      {
        arrayerebnis  = "ErgebnisBarrelraceSeniorOberlangen";
      }
      if(auswahlklasse == "Handicap")
      {
        arrayerebnis = "ErgebnisBarrelraceHandicapOberlangen";
      }
      if(auswahlklasse == "Youth")
      {
        arrayerebnis = "ErgebnisBarrelraceYouthOberlangen";
      }
      if(auswahlklasse == "Junior")
      {
        arrayerebnis = "ErgebnisBarrelraceJuniorOberlangen";
      }
      if(auswahlklasse == "Kiddy")
      {
        arrayerebnis = "ErgebnisBarrelraceKiddyOberlangen";
      }
    }
  if(auswahlort == "Leer")
  {   
      if(auswahlklasse == "Open")
      {
        arrayerebnis = "ErgebnisBarrelraceOpenLeer";
      }
      if(auswahlklasse == "Amateur")
      {
        arrayerebnis = "ErgebnisBarrelraceAmateurLeer"; 
      }
      if(auswahlklasse == "Newcomer")
      {
        arrayerebnis = "ErgebnisBarrelraceNewcomerLeer";
      }
      if(auswahlklasse == "Senior")
      {
        arrayerebnis  = "ErgebnisBarrelraceSeniorLeer";
      }
      if(auswahlklasse == "Handicap")
      {
        arrayerebnis = "ErgebnisBarrelraceHandicapLeer";
      }
      if(auswahlklasse == "Youth")
      {
        arrayerebnis = "ErgebnisBarrelraceYouthLeer";
      }
      if(auswahlklasse == "Junior")
      {
        arrayerebnis = "ErgebnisBarrelraceJuniorLeer";
      }
      if(auswahlklasse == "Kiddy")
      {
        arrayerebnis = "ErgebnisBarrelraceKiddyLeer";
      }
 
  }      
  if(auswahlort == "Wesuwe")
  {
     if(auswahlklasse == "Open")
     {
       arrayerebnis = "ErgebnisBarrelraceOpenWesuwe";
     }
     if(auswahlklasse == "Amateur")
     {
       arrayerebnis = "ErgebnisBarrelraceAmateurWesuwe"; 
     }
     if(auswahlklasse == "Newcomer")
     {
       arrayerebnis = "ErgebnisBarrelraceNewcomerWesuwe";
     }
     if(auswahlklasse == "Senior")
     {
       arrayerebnis  = "ErgebnisBarrelraceSeniorWesuwe";
     }
     if(auswahlklasse == "Handicap")
     {
       arrayerebnis = "ErgebnisBarrelraceHandicapWesuwe";
     }
     if(auswahlklasse == "Youth")
     {
       arrayerebnis = "ErgebnisBarrelraceYouthWesuwe";
     }
     if(auswahlklasse == "Junior")
     {
       arrayerebnis = "ErgebnisBarrelraceJuniorWesuwe";
     }
     if(auswahlklasse == "Kiddy")
     {
       arrayerebnis = "ErgebnisBarrelraceKiddyWesuwe";
     }
 
  }
  if(auswahlort == "Haren")
  {
     if(auswahlklasse == "Open")
     {
       arrayerebnis = "ErgebnisBarrelraceOpenHaren";
     }
     if(auswahlklasse == "Amateur")
     {
       arrayerebnis = "ErgebnisBarrelraceAmateurHaren"; 
     }
     if(auswahlklasse == "Newcomer")
     {
       arrayerebnis = "ErgebnisBarrelraceNewcomerHaren";
     }
     if(auswahlklasse == "Senior")
     {
       arrayerebnis  = "ErgebnisBarrelraceSeniorHaren";
     }
     if(auswahlklasse == "Handicap")
     {
       arrayerebnis = "ErgebnisBarrelraceHandicapHaren";
     }
     if(auswahlklasse == "Youth")
     {
       arrayerebnis = "ErgebnisBarrelraceYouthHaren";
     }
     if(auswahlklasse == "Junior")
     {
       arrayerebnis = "ErgebnisBarrelraceJuniorHaren";
     }
     if(auswahlklasse == "Kiddy")
     {
       arrayerebnis = "ErgebnisBarrelraceKiddyHaren";
     }
 
  }
  if(auswahlort == "Isterberg")
  {
     if(auswahlklasse == "Open")
     {
       arrayerebnis = "ErgebnisBarrelraceOpenIsterberg";
     }
     if(auswahlklasse == "Amateur")
     {
       arrayerebnis = "ErgebnisBarrelraceAmateurIsterberg"; 
     }
     if(auswahlklasse == "Newcomer")
     {
       arrayerebnis = "ErgebnisBarrelraceNewcomerIsterberg";
     }
     if(auswahlklasse == "Senior")
     {
       arrayerebnis  = "ErgebnisBarrelraceSeniorIsterberg";
     }
     if(auswahlklasse == "Handicap")
     {
       arrayerebnis = "ErgebnisBarrelraceHandicapIsterberg";
     }
     if(auswahlklasse == "Youth")
     {
       arrayerebnis = "ErgebnisBarrelraceYouthIsterberg";
     }
     if(auswahlklasse == "Junior")
     {
       arrayerebnis = "ErgebnisBarrelraceJuniorIsterberg";
     }
     if(auswahlklasse == "Kiddy")
     {
       arrayerebnis = "ErgebnisBarrelraceKiddyIsterberg";
     }
 
  }
 
  //Return Referenz für local Storage
  return arrayerebnis;
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

    const auswahl = get_referenz_array();
    
  
    const storedArrayAsString = localStorage.getItem(auswahl);
    
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

function updateValue(rowIdx, colIdx, input,gespeichertesArray) {
    gespeichertesArray[rowIdx][colIdx] = parseFloat(input.value); // In Zahl umwandeln und Array-Wert aktualisieren
    BarrelraceErgebnisArray = gespeichertesArray;
  }
  
// Funktion, um den Zusatzwert im Array zu aktualisieren
function updateZusatzwert(rowIdx, zusatzwertIdx, input,gespeichertesArray) {
    gespeichertesArray[rowIdx][zusatzwertIdx + 4] = input.value; // Array-Wert aktualisieren (4, da die Zusatzwerte nach den ursprünglichen Werten kommen)
    BarrelraceErgebnisArray = gespeichertesArray;
  }

  function abfrage_ort(){
  
    //Definierung Radio Buttons
    let radio11 = document.getElementById('Oberlangen');
    let radio22 = document.getElementById('Leer');
    let radio33 = document.getElementById('Wesuwe');
    let radio44 = document.getElementById('Haren');
    let radio55 = document.getElementById('Isterberg');
  
   
    //Eingabeüberpfüfung
  
    if(radio11.checked){
        var ort = radio11.value;
     }
     if(radio22.checked){
        var ort = radio22.value;
     }
     if(radio33.checked){
        var ort = radio33.value;
     }
     if(radio44.checked){
        var ort = radio44.value;
     }
     if(radio55.checked){
        var ort = radio55.value;
     }
    
     
  
    const Ort = ort;
    
    if(Ort == undefined){
  
        alert("Klasse wurde nicht angeben");
    }
  
    return Ort;
  }
  
  function abfrage_radio(){
  //Definierung Radio Buttons
  let radio1 = document.getElementById('Open');
  let radio2 = document.getElementById('Amateur');
  let radio3 = document.getElementById('Newcomer');
  let radio4 = document.getElementById('Senior');
  let radio5 = document.getElementById('Handicap');
  let radio6 = document.getElementById('Youth');
  let radio7 = document.getElementById('Junior');
  let radio8 = document.getElementById('Kiddy');
  
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
   if(radio6.checked){
      var klasse = radio6.value;
   }
   if(radio7.checked){
      var klasse = radio7.value;
   }
   if(radio8.checked){
      var klasse = radio8.value;
   }
   
  
  const Klasse = klasse;
  
  if(Klasse == undefined){
  
      alert("Klasse wurde nicht angeben");
  }
  
  
  
  return Klasse;
  }
  
  function get_referenz_array(){

    const auswahlort = abfrage_ort();
    const auswahlklasse = abfrage_radio();
    let arrayreferenz = "error";
    
    if(auswahlort == "Oberlangen")
    {   
        if(auswahlklasse == "Open")
        {
          arrayreferenz = "OpenOberlangen";
        }
        if(auswahlklasse == "Amateur")
        {
          arrayreferenz = "AmateurOberlangen"; 
        }
        if(auswahlklasse == "Newcomer")
        {
          arrayreferenz = "NewcomerOberlangen";
        }
        if(auswahlklasse == "Senior")
        {
          arrayreferenz  = "SeniorOberlangen";
        }
        if(auswahlklasse == "Handicap")
        {
          arrayreferenz = "HandicapOberlangen";
        }
        if(auswahlklasse == "Youth")
        {
          arrayreferenz = "YouthOberlangen";
        }
        if(auswahlklasse == "Junior")
        {
          arrayreferenz = "JuniorOberlangen";
        }
        if(auswahlklasse == "Kiddy")
        {
          arrayreferenz = "KiddyOberlangen";
        }
        
   
    }
    if(auswahlort == "Leer")
    {   
        if(auswahlklasse == "Open")
        {
          arrayreferenz = "OpenLeer";
        }
        if(auswahlklasse == "Amateur")
        {
          arrayreferenz = "AmateurLeer"; 
        }
        if(auswahlklasse == "Newcomer")
        {
          arrayreferenz = "NewcomerLeer";
        }
        if(auswahlklasse == "Senior")
        {
          arrayreferenz  = "SeniorLeer";
        }
        if(auswahlklasse == "Handicap")
        {
          arrayreferenz = "HandicapLeer";
        }
        if(auswahlklasse == "Youth")
        {
          arrayreferenz = "YouthLeer";
        }
        if(auswahlklasse == "Junior")
        {
          arrayreferenz = "JuniorLeer";
        }
        if(auswahlklasse == "Kiddy")
        {
          arrayreferenz = "KiddyLeer";
        }
   
    }      
    if(auswahlort == "Wesuwe")
    {
       if(auswahlklasse == "Open")
       {
         arrayreferenz = "OpenWesuwe";
       }
       if(auswahlklasse == "Amateur")
       {
         arrayreferenz = "AmateurWesuwe"; 
       }
       if(auswahlklasse == "Newcomer")
       {
         arrayreferenz = "NewcomerWesuwe";
       }
       if(auswahlklasse == "Senior")
       {
         arrayreferenz  = "SeniorWesuwe";
       }
       if(auswahlklasse == "Handicap")
       {
         arrayreferenz = "HandicapWesuwe";
       }
       if(auswahlklasse == "Youth")
       {
         arrayreferenz = "YouthWesuwe";
       }
       if(auswahlklasse == "Junior")
       {
         arrayreferenz = "JuniorWesuwe";
       }
       if(auswahlklasse == "Kiddy")
       {
         arrayreferenz = "KiddyWesuwe";
       }
   
    }
    if(auswahlort == "Haren")
    {
       if(auswahlklasse == "Open")
       {
         arrayreferenz = "OpenHaren";
       }
       if(auswahlklasse == "Amateur")
       {
         arrayreferenz = "AmateurHaren"; 
       }
       if(auswahlklasse == "Newcomer")
       {
         arrayreferenz = "NewcomerHaren";
       }
       if(auswahlklasse == "Senior")
       {
         arrayreferenz  = "SeniorHaren";
       }
       if(auswahlklasse == "Handicap")
       {
         arrayreferenz = "HandicapHaren";
       }
       if(auswahlklasse == "Youth")
       {
         arrayreferenz = "YouthHaren";
       }
       if(auswahlklasse == "Junior")
       {
         arrayreferenz = "JuniorHaren";
       }
       if(auswahlklasse == "Kiddy")
       {
         arrayreferenz = "KiddyHaren";
       }
   
    }
    if(auswahlort == "Isterberg")
    {
       if(auswahlklasse == "Open")
       {
         arrayreferenz = "OpenIsterberg";
       }
       if(auswahlklasse == "Amateur")
       {
         arrayreferenz = "AmateurIsterberg"; 
       }
       if(auswahlklasse == "Newcomer")
       {
         arrayreferenz = "NewcomerIsterberg";
       }
       if(auswahlklasse == "Senior")
       {
         arrayreferenz  = "SeniorIsterberg";
       }
       if(auswahlklasse == "Handicap")
       {
         arrayreferenz = "HandicapIsterberg";
       }
       if(auswahlklasse == "Youth")
       {
         arrayreferenz = "YouthIsterberg";
       }
       if(auswahlklasse == "Junior")
       {
         arrayreferenz = "JuniorIsterberg";
       }
       if(auswahlklasse == "Kiddy")
       {
         arrayreferenz = "KiddyIsterberg";
       }
   
    }
   
    //Return Referenz für local Storage
    return arrayreferenz;
   }
   
   function btn_hidden(schmalz){
    var btn = document.getElementById(schmalz);
    btn.style.visibility = 'hidden';
    
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

 