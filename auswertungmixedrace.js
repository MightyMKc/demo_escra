let MixedraceErgebnisArray;



function ErgebnisseSpeichern(){

  //Array bereinigung, leere Einträge löschen
  MixedraceErgebnisArray = MixedraceErgebnisArray.map(innerArray => innerArray.filter(item => item !== ''));
  //Aufruf Funktion Berechnung der Ergebnisse
  berechnungmixedrace();
  
  //Sortierung der Teilnehmer absteigend nach der Zeit und hinzufügen der Punkte als neuer Tupel
  PunktezuTeilnehmer_Platzierung();
  //Wenn Disqualifizert dann am Ende des Arrays schieben 
  Disquai_letzterEintag();
  //Funktion zum Ergbniss in localStorage speichern
  
  save_Ergebnis_local_Storage();
  

  

}

function save_Ergebnis_local_Storage(){
  //Ergebnissarray unabhänig von dem Ort/Klasse in JSONumwandlen
  const MixedraceErgebnisJSON = JSON.stringify(MixedraceErgebnisArray);
  //Das JSONarray in den richtigen localKeyspeichern
   const x = get_ergebnis_array();

  localStorage.setItem(x,MixedraceErgebnisJSON);
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
        arrayerebnis = "ErgebnisMixedraceOpenOberlangen";
      }
      if(auswahlklasse == "Amateur")
      {
        arrayerebnis = "ErgebnisMixedraceAmateurOberlangen"; 
      }
      if(auswahlklasse == "Newcomer")
      {
        arrayerebnis = "ErgebnisMixedraceNewcomerOberlangen";
      }
      if(auswahlklasse == "Senior")
      {
        arrayerebnis  = "ErgebnisMixedraceSeniorOberlangen";
      }
      if(auswahlklasse == "Handicap")
      {
        arrayerebnis = "ErgebnisMixedraceHandicapOberlangen";
      }
      if(auswahlklasse == "Youth")
      {
        arrayerebnis = "ErgebnisMixedraceYouthOberlangen";
      }
      if(auswahlklasse == "Junior")
      {
        arrayerebnis = "ErgebnisMixedraceJuniorOberlangen";
      }
      if(auswahlklasse == "Kiddy")
      {
        arrayerebnis = "ErgebnisMixedraceKiddyOberlangen";
      }
    }
  if(auswahlort == "Leer")
  {   
      if(auswahlklasse == "Open")
      {
        arrayerebnis = "ErgebnisMixedraceOpenLeer";
      }
      if(auswahlklasse == "Amateur")
      {
        arrayerebnis = "ErgebnisMixedraceAmateurLeer"; 
      }
      if(auswahlklasse == "Newcomer")
      {
        arrayerebnis = "ErgebnisMixedraceNewcomerLeer";
      }
      if(auswahlklasse == "Senior")
      {
        arrayerebnis  = "ErgebnisMixedraceSeniorLeer";
      }
      if(auswahlklasse == "Handicap")
      {
        arrayerebnis = "ErgebnisMixedraceHandicapLeer";
      }
      if(auswahlklasse == "Youth")
      {
        arrayerebnis = "ErgebnisMixedraceYouthLeer";
      }
      if(auswahlklasse == "Junior")
      {
        arrayerebnis = "ErgebnisMixedraceJuniorLeer";
      }
      if(auswahlklasse == "Kiddy")
      {
        arrayerebnis = "ErgebnisMixedraceKiddyLeer";
      }
 
  }      
  if(auswahlort == "Wesuwe")
  {
     if(auswahlklasse == "Open")
     {
       arrayerebnis = "ErgebnisMixedraceOpenWesuwe";
     }
     if(auswahlklasse == "Amateur")
     {
       arrayerebnis = "ErgebnisMixedraceAmateurWesuwe"; 
     }
     if(auswahlklasse == "Newcomer")
     {
       arrayerebnis = "ErgebnisMixedraceNewcomerWesuwe";
     }
     if(auswahlklasse == "Senior")
     {
       arrayerebnis  = "ErgebnisMixedraceSeniorWesuwe";
     }
     if(auswahlklasse == "Handicap")
     {
       arrayerebnis = "ErgebnisMixedraceHandicapWesuwe";
     }
     if(auswahlklasse == "Youth")
     {
       arrayerebnis = "ErgebnisMixedraceYouthWesuwe";
     }
     if(auswahlklasse == "Junior")
     {
       arrayerebnis = "ErgebnisMixedraceJuniorWesuwe";
     }
     if(auswahlklasse == "Kiddy")
     {
       arrayerebnis = "ErgebnisMixedraceKiddyWesuwe";
     }
 
  }
  if(auswahlort == "Haren")
  {
     if(auswahlklasse == "Open")
     {
       arrayerebnis = "ErgebnisMixedraceOpenHaren";
     }
     if(auswahlklasse == "Amateur")
     {
       arrayerebnis = "ErgebnisMixedraceAmateurHaren"; 
     }
     if(auswahlklasse == "Newcomer")
     {
       arrayerebnis = "ErgebnisMixedraceNewcomerHaren";
     }
     if(auswahlklasse == "Senior")
     {
       arrayerebnis  = "ErgebnisMixedraceSeniorHaren";
     }
     if(auswahlklasse == "Handicap")
     {
       arrayerebnis = "ErgebnisMixedraceHandicapHaren";
     }
     if(auswahlklasse == "Youth")
     {
       arrayerebnis = "ErgebnisMixedraceYouthHaren";
     }
     if(auswahlklasse == "Junior")
     {
       arrayerebnis = "ErgebnisMixedraceJuniorHaren";
     }
     if(auswahlklasse == "Kiddy")
     {
       arrayerebnis = "ErgebnisMixedraceKiddyHaren";
     }
 
  }
  if(auswahlort == "Isterberg")
  {
     if(auswahlklasse == "Open")
     {
       arrayerebnis = "ErgebnisMixedraceOpenIsterberg";
     }
     if(auswahlklasse == "Amateur")
     {
       arrayerebnis = "ErgebnisMixedraceAmateurIsterberg"; 
     }
     if(auswahlklasse == "Newcomer")
     {
       arrayerebnis = "ErgebnisMixedraceNewcomerIsterberg";
     }
     if(auswahlklasse == "Senior")
     {
       arrayerebnis  = "ErgebnisMixedraceSeniorIsterberg";
     }
     if(auswahlklasse == "Handicap")
     {
       arrayerebnis = "ErgebnisMixedraceHandicapIsterberg";
     }
     if(auswahlklasse == "Youth")
     {
       arrayerebnis = "ErgebnisMixedraceYouthIsterberg";
     }
     if(auswahlklasse == "Junior")
     {
       arrayerebnis = "ErgebnisMixedraceJuniorIsterberg";
     }
     if(auswahlklasse == "Kiddy")
     {
       arrayerebnis = "ErgebnisMixedraceKiddyIsterberg";
     }
 
  }
 
  //Return Referenz für local Storage
  return arrayerebnis;
}


function Disquai_letzterEintag(){

  for (let i = 0; i < MixedraceErgebnisArray.length; i++) {
    if (MixedraceErgebnisArray[i].length > 6) {
      const indexDisqualifiziert = MixedraceErgebnisArray[i].indexOf('Disqualifiziert');
      if (indexDisqualifiziert !== -1) {
        MixedraceErgebnisArray[i].splice(indexDisqualifiziert, 1);
        MixedraceErgebnisArray[i].push('Disqualifiziert');
      }
    }
  }

}

function berechnungmixedrace(){

    ///For-Schleife zur Berechnung der Ergebnisse
    for (let i = 0; i < MixedraceErgebnisArray.length; i++) {
  
      const Zeitwert = MixedraceErgebnisArray[i][3]; // Zeitwert auslesen
      let floatNumber = Zeitwert_Umwandeln(Zeitwert);
     
  
      let Fehlerwert = MixedraceErgebnisArray[i][4]; // Fehlerwert auslesen
      Fehlerwert= Fehlerwert *5 
      const Ergebnis  = floatNumber + Fehlerwert; // Fehlerwerte ausrechnen 
  
      MixedraceErgebnisArray[i].push(Ergebnis.toString()); // Ergebnis als String dem Array hinzufügen
    }
  
    
  
  }

function PunktezuTeilnehmer_Platzierung(){

  for (let i = 0; i < MixedraceErgebnisArray.length; i++) {

    if (MixedraceErgebnisArray[i][5] === 'Disqualifiziert') {
      let temp = MixedraceErgebnisArray[i][5]; // Temporärer Wert speichern
      MixedraceErgebnisArray[i][5] = MixedraceErgebnisArray[i][6]; // Wert aus letzter Spalte in vorletzte Spalte kopieren
      MixedraceErgebnisArray[i][6] = '999'; // Wert in letzter Spalte auf '999' setzen
      MixedraceErgebnisArray[i][6] = temp; // Temporären Wert in letzte Spalte kopieren
    }

    for (let j = i + 1; j < MixedraceErgebnisArray.length; j++) {
      
      if (Zeitwert_Umwandeln(MixedraceErgebnisArray[j][5]) < Zeitwert_Umwandeln(MixedraceErgebnisArray[i][5])) {
        // Vertausche die Positionen der inneren Arrays, wenn die Wertigkeit in x[j] kleiner ist als in x[i]
        let temp = MixedraceErgebnisArray[i];
        MixedraceErgebnisArray[i] = MixedraceErgebnisArray[j];
        MixedraceErgebnisArray[j] = temp;
      }
    }
  }
    
  //punkte hinzufügen
  
  for (let i = 0, zusatzWert=30 ; i < 30 && i < MixedraceErgebnisArray.length; i++) {
    if (MixedraceErgebnisArray[i][6] === 'Disqualifiziert') {
      MixedraceErgebnisArray[i].push((0).toString())
       }
      else{ 
            
            MixedraceErgebnisArray[i].push((zusatzWert).toString());
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
    MixedraceErgebnisArray = gespeichertesArray;
  }
  
// Funktion, um den Zusatzwert im Array zu aktualisieren
function updateZusatzwert(rowIdx, zusatzwertIdx, input,gespeichertesArray) {
    gespeichertesArray[rowIdx][zusatzwertIdx + 4] = input.value; // Array-Wert aktualisieren (4, da die Zusatzwerte nach den ursprünglichen Werten kommen)
    MixedraceErgebnisArray = gespeichertesArray;
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

 