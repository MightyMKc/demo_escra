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
function abfrage_disp(){

    //Definierung Radio Buttons
    let radio11 = document.getElementById('Flagrace');
    let radio22 = document.getElementById('Polebending');
    let radio33 = document.getElementById('Keyholerace');
    let radio44 = document.getElementById('Barrelrace');
    let radio55 = document.getElementById('Mixedrace');
    let radio66 = document.getElementById('alle');
   
    //Eingabeüberpfüfung

    if(radio11.checked){
        var disziplin  = radio11.value;
     }
     if(radio22.checked){
        var disziplin  = radio22.value;
     }
     if(radio33.checked){
        var disziplin  = radio33.value;
     }
     if(radio44.checked){
        var disziplin  = radio44.value;
     }
     if(radio55.checked){
        var disziplin  = radio55.value;
     }
     if(radio66.checked){
      var disziplin  = radio66.value;
      }
    
     

    const disziplin1  = disziplin ;
    
    if(disziplin  == undefined){

        alert("Disziplin wurde nicht angeben");
    }

    return disziplin1 ;

}

function resettable(){
   //btn_visible('uebernehmen');
   //const tableBody = document.querySelector('#tabellergebnis tbody');
   //tableBody.innerHTML = '';
   //btn_hidden('reset');
   location.reload();

}

function btn_hidden(schmalz){
    var btn = document.getElementById(schmalz);
    btn.style.visibility = 'hidden';
    
  }
  
function btn_visible(schmalz2){
    var btn = document.getElementById(schmalz2);
    btn.style.visibility = "";
  
  }
function holen_der_Auswahl(){

  
    const JSON_Ref = "Ergebnis" + abfrage_disp() + abfrage_radio() + abfrage_ort();
    
    const resultref = localStorage.getItem(JSON_Ref);
    console.log(JSON_Ref);
    const auswahlresult = JSON.parse(resultref);
    // evtl hier typconfirmation wenn keine Daten zu den Staretern vorlegen bzw. ergebnisse
    console.log(auswahlresult);

    //Sortierung des Arrays aufgrund der vergebenen Punktzahl i[7]

    auswahlresult.sort((a, b) => b[6] - a[6]);




    //jedem Eintrag eine Platz Nr hinzufügen

    for (let i = 0, x=1; i < auswahlresult.length; i++, x++) {
        
        auswahlresult[i].unshift(x);

      }
   
    return auswahlresult;
   }
function ergebnistabelleaufbauen(){

    const tablearray = holen_der_Auswahl();
    const tableBody = document.querySelector('#tabellergebnis tbody');

  // Schleife durch das Daten-Array
  for (let i = 0; i < tablearray.length; i++) {
    const rowData = tablearray[i];
    const row = document.createElement('tr');

    // Schleife durch die Daten eines jeden Tupels
    for (let j = 0; j < rowData.length; j++) {
      const cellData = rowData[j];
      const cell = document.createElement('td');
      cell.textContent = cellData;
      row.appendChild(cell);
    }

    tableBody.appendChild(row);
  }
    
  

}

function getArraylocalStorage_Vorname_Nachname_Pferd(platzhalter1,platzhalter2,platzhalter3,platzhalter4){

   const Teilnehmerliste = [];
   const prasearray = localStorage.getItem( platzhalter1+platzhalter2+platzhalter3+platzhalter4);
   let array1 = JSON.parse(prasearray);

   for (let i = 0; i < array1.length; i++) {
      // Erstelle ein neues Array mit den ersten 3 Elementen aus jedem inneren Array
      const subArray = array1[i].slice(0, 3);
      Teilnehmerliste.push(subArray);
    }

   return Teilnehmerliste;
   
}

function tabelle_tageswertung_aufbau(){

   // Selektiere das <thead>-Element
   const thead = document.querySelector('#tabellergebnis thead');

   // Erstelle ein Array mit den gewünschten Spaltenüberschriften
   const spalten = ['Platz', 'Vorname', 'Nachname', 'Pferd', 'Pole-Bending', 'Flag-Race', 'Keyhohle-Race', 'Barrel-Race', 'Mixed-Race', 'Gesamtpunkte'];

      // Lösche die bestehenden Spaltenüberschriften im <thead>
   while (thead.firstChild) {
    thead.removeChild(thead.firstChild);
   }

   // Füge die neuen Spaltenüberschriften hinzu
   for (let i = 0; i < spalten.length; i++) {
    const th = document.createElement('th');
    th.textContent = spalten[i];
    thead.appendChild(th);
   }




}

function VornameNachnamePferdArray(){
   // Holen der Starter der jeweiligen Klasse und Ortes
   let  platzhalter1 = 'Ergebnis';
   let  platzhalter2 = ['Flagrace','Polebending' ,'Keyholerace','Barrelrace','Mixedrace'];
   let  platzhalter3 = abfrage_radio();
   let  platzhalter4 = abfrage_ort();
   let Teilnehmerliste= [];
   
    //Teilnehmerlisteuebergabe besteht aus Vorname,Nachname,Pferd
    Teilnehmerliste=getArraylocalStorage_Vorname_Nachname_Pferd(platzhalter1,platzhalter2[0],platzhalter3,platzhalter4);
    return Teilnehmerliste;         
}

function ErgebnisseausdenArraysauslesen(NamenArray)
{  
   let neueListe = NamenArray;
   ArrayDiziplinen= ['Polebending', 'Flagrace' ,'Keyholerace','Barrelrace','Mixedrace'];
   let Ergebnisarray;
   //Schleife drum 
   for(i=0;i<5;i++){
   const JSON_Ref = "Ergebnis" + ArrayDiziplinen[i] + abfrage_radio() + abfrage_ort();
    
   const resultref = localStorage.getItem(JSON_Ref);
   console.log(JSON_Ref);
   const auswahlresult = JSON.parse(resultref);
   // Funktionaufruf um letzten Punkte jeweiligen Teilnehmer hinzuzufügen 
   Ergebnisarray=Punktehinzufügen(neueListe,auswahlresult)
   }
   // evtl hier typconfirmation wenn keine Daten zu den Staretern vorlegen bzw. ergebnisse
 

   return Ergebnisarray;


   //console.log(neueListe);


}


function Punktehinzufügen(Liste,x)
{
   for (let i = 0; i < Liste.length; i++) {
      for (let j = 0; j < x.length; j++) {
        if (
          Liste[i][0] === x[j][0] &&
          Liste[i][1] === x[j][1] &&
          Liste[i][2] === x[j][2]
        ) {
          // Füge den letzten Wert aus x dem Array Liste hinzu
          Liste[i].push(x[j][x[j].length - 1]);
          break; // Beende die innere Schleife, da das Element gefunden wurde
        }
      }
    }

    return Liste;

}

function add_gesamtpunktzahl(AllePunktearray){

   for (let i = 0; i < AllePunktearray.length; i++) {
      const unterArray = AllePunktearray[i];
      let summe = 0;
    
      // Durchlaufe die Werte von Index 3 bis 7 und berechne die Summe
      for (let j = 3; j <= 7; j++) {
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

function sortierung_nachPaltzundaddPlatz(ErgebnisGesamt){
   
   ErgebnisGesamt.sort((a, b) => b[8] - a[8]);




    //jedem Eintrag ein Platz hinzufügen

    for (let i = 0, x=1; i < ErgebnisGesamt.length; i++, x++) {
        
      ErgebnisGesamt[i].unshift(x);

      }
   
      return ErgebnisGesamt;

}

function gesamtpunktanzahltabellefüllen(Array){

   const tableBody = document.querySelector('#tabellergebnis tbody');

   for (let i = 0; i < Array.length; i++) {
      const rowData = Array[i];
      const row = document.createElement('tr');
  
      // Schleife durch die Daten eines jeden Tupels
      for (let j = 0; j < rowData.length; j++) {
        const cellData = rowData[j];
        const cell = document.createElement('td');
        cell.textContent = cellData;
        row.appendChild(cell);
      }
  
      tableBody.appendChild(row);
    }

}


function defaultd(){

   if(abfrage_disp() != "alle")
   {
    ergebnistabelleaufbauen();
    btn_hidden('uebernehmen');
    btn_visible('reset');
   }
   else{
      
      
      //Teilnehmer werden aus dem Array gelesen Name,Nachname,Pferd
      const NamenArray=VornameNachnamePferdArray();
      //console.log(NamenArray);
      // Tabelle wird modifiziert mit Tageswertungsansicht für jeweilige Klasse 
      tabelle_tageswertung_aufbau();

      //Ergebnisarrays auslesen in ein neues Array Pole-Bending	Flag-Race	Keyhohle-Race	Barrel-Race	Mixed-Race
      //Array All hat alle Ergebnisse zu den Teilnehmern
      const ArrayAll =ErgebnisseausdenArraysauslesen(NamenArray);
      console.log (ArrayAll);
      // ArrayALL die Gesamtpunktzahl hinzufügen
      const ErgebnisGesamt = add_gesamtpunktzahl(ArrayAll);
      //console.log(ErgebnisGesamt);
      // ErgebnisGesamt sortieren nach Gesamtpunktzahl
      const Arraysorted=sortierung_nachPaltzundaddPlatz(ErgebnisGesamt);
      // Tabelle füllen
      gesamtpunktanzahltabellefüllen(Arraysorted);
      //Speichern der Gesamtpunktzahlarrays
      const Ort = abfrage_ort();
      const Dizi= abfrage_radio();
      storelocalStorageGesamt(Ort,Dizi,Arraysorted);
      btn_hidden('uebernehmen');
      btn_visible('reset');

   }

}

function storelocalStorageGesamt(Ort,Klasse,Finalarray){

   
   
   console.log(Ort);
   //Speichervariablen Oberlangen
   if(Ort=='Oberlangen'){

      if(Klasse=='Open'){
         console.log('Speicherung Oberlangen ');
         const arrayasStringOO = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisOpenOberlangen", arrayasStringOO);
      }
      if(Klasse=='Amateur'){
         const arrayasStringOA = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisAmateurOberlangen", arrayasStringOA);
      }
      if(Klasse=='Newcomer'){
         const arrayasStringON = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisNewcomerOberlangen", arrayasStringON);
      }
      if(Klasse=='Senior'){
         const arrayasStringOS = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisSeniorOberlangen", arrayasStringOS);
      }
      if(Klasse=='Handicap'){
         const arrayasStringOH = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisHandicapOberlangen", arrayasStringOH);
        
      }
      if(Klasse=='Youth'){
         const arrayasStringOY = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisYouthOberlangen", arrayasStringOY);
      }
      if(Klasse=='Junior'){
         const arrayasStringOJ = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisJuniorOberlangen", arrayasStringOJ);
      }
      if(Klasse=='Kiddy'){
         const arrayasStringOK = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisKiddyOberlangen", arrayasStringOK);

      }

   }
   if(Ort=='Leer'){

      if(Klasse=='Open'){
         const arrayasStringLO = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisOpenLeer", arrayasStringLO);
         console.log('Speicherung Leer');
      }
      if(Klasse=='Amateur'){
         const arrayasStringLA = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisAmateurLeer", arrayasStringLA);
      }
      if(Klasse=='Newcomer'){
         const arrayasStringLN = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisNewcomerLeer", arrayasStringLN);
      }
      if(Klasse='Senior'){
         const arrayasStringLS = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisSeniorLeer", arrayasStringLS);
      }
      if(Klasse='Handicap'){
         const arrayasStringLH = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisHandicapLeer", arrayasStringLH);
        
      }
      if(Klasse=='Youth'){
         const arrayasStringLY = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisYouthLeer", arrayasStringLY);
      }
      if(Klasse=='Junior'){
         const arrayasStringLJ = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisJuniorLeer", arrayasStringLJ);
      }
      if(Klasse=='Kiddy'){
         const arrayasStringLK = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisKiddyLeer", arrayasStringLK);

      }

   }
   if(Ort=='Wesuwe'){

      if(Klasse=='Open'){
         const arrayasStringWO = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisOpenWesuwe", arrayasStringWO);
         console.log('Speicherung Wesuwe');
      }
      if(Klasse=='Amateur'){
         const arrayasStringWA = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisAmateurWesuwe", arrayasStringWA);
      }
      if(Klasse=='Newcomer'){
         const arrayasStringWN = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisNewcomerWesuwe", arrayasStringWN);
      }
      if(Klasse=='Senior'){
         const arrayasStringWS = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisSeniorWesuwe", arrayasStringWS);
      }
      if(Klasse=='Handicap'){
         const arrayasStringWH = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisHandicapWesuwe", arrayasStringWH);
        
      }
      if(Klasse=='Youth'){
         const arrayasStringWY = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisYouthWesuwe", arrayasStringWY);
      }
      if(Klasse=='Junior'){
         const arrayasStringWJ = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisJuniorWesuwe", arrayasStringWJ);
      }
      if(Klasse=='Kiddy'){
         const arrayasStringLK = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisKiddyWesuwe", arrayasStringLK);

      }

   }
   if(Ort=='Haren'){

      if(Klasse='Open'){
         const arrayasStringHO = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisOpenHaren", arrayasStringHO);
         console.log('Speicherung Haren');
      }
      if(Klasse='Amateur'){
         const arrayasStringHA = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisAmateurHaren", arrayasStringHA);
      }
      if(Klasse=='Newcomer'){
         const arrayasStringHN = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisNewcomerHaren", arrayasStringHN);
      }
      if(Klasse=='Senior'){
         const arrayasStringHS = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisSeniorHaren", arrayasStringHS);
      }
      if(Klasse=='Handicap'){
         const arrayasStringHH = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisHandicapHaren", arrayasStringHH);
        
      }
      if(Klasse=='Youth'){
         const arrayasStringHY = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisYouthHaren", arrayasStringHY);
      }
      if(Klasse=='Junior'){
         const arrayasStringHJ = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisJuniorHaren", arrayasStringHJ);
      }
      if(Klasse=='Kiddy'){
         const arrayasStringHK = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisKiddyHaren", arrayasStringHK);

      }

   }
   if(Ort=='Isterberg'){

      if(Klasse=='Open'){
         const arrayasStringIO = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisOpenIsterberg", arrayasStringIO);
         console.log('Speicherung Isterberg');
      }
      if(Klasse=='Amateur'){
         const arrayasStringIA = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisAmateurIsterberg", arrayasStringIA);
      }
      if(Klasse=='Newcomer'){
         const arrayasStringIN = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisNewcomerIsterberg", arrayasStringIN);
      }
      if(Klasse=='Senior'){
         const arrayasStringIS = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisSeniorIsterberg", arrayasStringIS);
      }
      if(Klasse=='Handicap'){
         const arrayasStringIH = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisHandicapIsterberg", arrayasStringIH);
        
      }
      if(Klasse=='Youth'){
         const arrayasStringIY = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisYouthIsterberg", arrayasStringIY);
      }
      if(Klasse=='Junior'){
         const arrayasStringIJ = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisJuniorIsterberg", arrayasStringIJ);
      }
      if(Klasse=='Kiddy'){
         const arrayasStringIK = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisKiddyIsterberg", arrayasStringIK);

      }

   }
  
}


function exportTableToCSV(filename) {
    
   var csv = [];
   var rows = document.querySelectorAll("table tr");
   
   var table = document.querySelector("table");
   var thead = table.querySelector("thead");
   var headerCells = thead.querySelectorAll("th");

   var headerData = [];

   for (var i = 0; i < headerCells.length; i++) {
   headerData.push(headerCells[i].innerText);
   }

    
   console.log(headerData);
   csv.push(headerData);



   for (var i = 0; i < rows.length; i++) {
       var row = [], cols = rows[i].querySelectorAll("td, th");
       
       for (var j = 0; j < cols.length; j++) 
           row.push(cols[j].innerText);
       
       csv.push(row.join(","));        
   }

   // Download CSV file
   downloadCSV(csv.join("\n"), filename);
}

function downloadCSV(csv, filename) {
   var csvFile;
   var downloadLink;

   // CSV file
   csvFile = new Blob([csv], {type: "text/csv"});

   // Download link
   downloadLink = document.createElement("a");

   // File name
   downloadLink.download = filename;

   // Create a link to the file
   downloadLink.href = window.URL.createObjectURL(csvFile);

   // Hide download link
   downloadLink.style.display = "none";

   // Add the link to DOM
   document.body.appendChild(downloadLink);

   // Click download link
   downloadLink.click();
}


function csvdown() {
   
   Name1 = abfrage_radio();
   Name2 = abfrage_ort();   
   
   console.log(Name1);
   console.log(Name2);
   var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');

   const filename= Name1 + Name2 + utc;
   
   
   
   //csvhandeling 
   exportTableToCSV(filename);



}











