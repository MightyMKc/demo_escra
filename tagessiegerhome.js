var ArrayAll;

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

function abc(){
   console.log('Auswahlresult ist leer bzw. undefidnerd');
}
function holen_der_Auswahl(){

  
    const JSON_Ref = "StarterErgebnis" + abfrage_disp();
    
    const resultref = localStorage.getItem(JSON_Ref);
    console.log(JSON_Ref);
    const auswahlresult = JSON.parse(resultref);
    // evtl hier typconfirmation wenn keine Daten zu den Staretern vorlegen bzw. ergebnisse
    
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

function getArraylocalStorage_Vorname_Nachname_Pferd(platzhalter1,platzhalter2){

   const Teilnehmerliste = [];
   const prasearray = localStorage.getItem( platzhalter1+platzhalter2);
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
   let  platzhalter1 = 'StarterErgebnis';
   let  platzhalter2 = ['Flagrace','Polebending' ,'Keyholerace','Barrelrace','Mixedrace'];
   
   let Teilnehmerliste= [];
   
    //Teilnehmerlisteuebergabe besteht aus Vorname,Nachname,Pferd
    Teilnehmerliste=getArraylocalStorage_Vorname_Nachname_Pferd(platzhalter1,platzhalter2[0]);
    return Teilnehmerliste;         
}

function ErgebnisseausdenArraysauslesen(NamenArray)
{  
   let neueListe = NamenArray;
   ArrayDiziplinen= ['Polebending', 'Flagrace' ,'Keyholerace','Barrelrace','Mixedrace'];
   let Ergebnisarray;
   //Schleife drum 
   for(i=0;i<5;i++){
   const JSON_Ref = "StarterErgebnis" + ArrayDiziplinen[i];
    
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

function storelocalStorageGesamt(Finalarray){

   
   
   
    
    
         const arrayasStringIY = JSON.stringify(Finalarray);
         localStorage.setItem("EndergebnisEvent", arrayasStringIY);
      
  
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
   
   Name1 = 'ESCRA_EVENT'
   
   var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');

   const filename= Name1  + utc;
   
   
   
   //csvhandeling 
   exportTableToCSV(filename);



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
      ArrayAll =ErgebnisseausdenArraysauslesen(NamenArray);
      console.log (ArrayAll);
      // ArrayALL die Gesamtpunktzahl hinzufügen
      const ErgebnisGesamt = add_gesamtpunktzahl(ArrayAll);
      console.log(ErgebnisGesamt);
      // ErgebnisGesamt sortieren nach Gesamtpunktzahl
      const Arraysorted=sortierung_nachPaltzundaddPlatz(ErgebnisGesamt);
      // Tabelle füllen
      gesamtpunktanzahltabellefüllen(Arraysorted);
      //Speichern der Gesamtpunktzahlarrays
      
      storelocalStorageGesamt(Arraysorted);
      btn_hidden('uebernehmen');
      btn_visible('reset');

   }

}



function bauereferenzarraynochmalzurKontrolle(){

   
   const AlleDis = ['ErgebnisFlagrace','ErgebnisPolebending','ErgebnisKeyholerace','ErgebnisMixedrace']
   var alleReferenzen=[];
   const eindeutigeNamen=VornameNachnamePferdArray();





   //Referenzensetzten in neue Variable
   for(i=0; i< AlleDis.length; i++){
      alleReferenzen[i]=AlleDis[i]+abfrage_radio()+abfrage_ort();
   }

  
         ErgebnisFlagraceArray= JSON.parse(localStorage.getItem(alleReferenzen[0]));
         ErgebnisPolebendingArray = JSON.parse(localStorage.getItem(alleReferenzen[1]));
         ErgebnisKeyholeraceArray= JSON.parse(localStorage.getItem(alleReferenzen[2]));
         ErgebnisMixedraceArray = JSON.parse(localStorage.getItem(alleReferenzen[3]));


     
      
      var FlagracenurPunkteundName = ErgebnisFlagraceArray.map(function (eintrag) {
         // Extrahiere die ersten drei Elemente und den letzten Eintrag als String
         return [eintrag[0], eintrag[1], eintrag[2], eintrag[eintrag.length - 1].toString()];
     });

     var PolebendingnurPunkteundName = ErgebnisPolebendingArray.map(function (eintrag) {
      // Extrahiere die ersten drei Elemente und den letzten Eintrag als String
      return [eintrag[0], eintrag[1], eintrag[2], eintrag[eintrag.length - 1].toString()];
  });

    var KeyholeracenurPunkteundName = ErgebnisKeyholeraceArray.map(function (eintrag) {
    // Extrahiere die ersten drei Elemente und den letzten Eintrag als String
    return [eintrag[0], eintrag[1], eintrag[2], eintrag[eintrag.length - 1].toString()];
   });


   var MixedracenurPunkteundName = ErgebnisMixedraceArray.map(function (eintrag) {
      // Extrahiere die ersten drei Elemente und den letzten Eintrag als String
      return [eintrag[0], eintrag[1], eintrag[2], eintrag[eintrag.length - 1].toString()];
     });
   
     console.log(FlagracenurPunkteundName);
     console.log(PolebendingnurPunkteundName);
     console.log(KeyholeracenurPunkteundName);
     console.log(MixedracenurPunkteundName);

     

     //Polebending,Polebending,Keyhohle,Mixedrace

     for (let i = 0; i < eindeutigeNamen.length; i++) {
      // Extrahiere die Werte 0-2 aus dem aktuellen Eintrag in eindeutigeNamen
      const currentEntry = eindeutigeNamen[i];
      const valuesToCheck = currentEntry.slice(0, 3);
  
      // Suche nach den Werten 0-2 in FlagracenurPunkteundName
      const foundEntry = FlagracenurPunkteundName.find(entry => {
          const comparisonValues = entry.slice(0, 3);
          return JSON.stringify(comparisonValues) === JSON.stringify(valuesToCheck);
      });
  
      // Wenn ein Eintrag gefunden wurde, füge den letzten Wert hinzu
      if (foundEntry) {
          const lastValue = foundEntry[3];
          eindeutigeNamen[i].push(lastValue);
      }
  }

  for (let i = 0; i < eindeutigeNamen.length; i++) {
   // Extrahiere die Werte 0-2 aus dem aktuellen Eintrag in eindeutigeNamen
   const currentEntry = eindeutigeNamen[i];
   const valuesToCheck = currentEntry.slice(0, 3);

   // Suche nach den Werten 0-2 in FlagracenurPunkteundName
   const foundEntry = PolebendingnurPunkteundName.find(entry => {
       const comparisonValues = entry.slice(0, 3);
       return JSON.stringify(comparisonValues) === JSON.stringify(valuesToCheck);
   });

   // Wenn ein Eintrag gefunden wurde, füge den letzten Wert hinzu
   if (foundEntry) {
       const lastValue = foundEntry[3];
       eindeutigeNamen[i].push(lastValue);
   }
}

for (let i = 0; i < eindeutigeNamen.length; i++) {
   // Extrahiere die Werte 0-2 aus dem aktuellen Eintrag in eindeutigeNamen
   const currentEntry = eindeutigeNamen[i];
   const valuesToCheck = currentEntry.slice(0, 3);

   // Suche nach den Werten 0-2 in FlagracenurPunkteundName
   const foundEntry = KeyholeracenurPunkteundName.find(entry => {
       const comparisonValues = entry.slice(0, 3);
       return JSON.stringify(comparisonValues) === JSON.stringify(valuesToCheck);
   });

   // Wenn ein Eintrag gefunden wurde, füge den letzten Wert hinzu
   if (foundEntry) {
       const lastValue = foundEntry[3];
       eindeutigeNamen[i].push(lastValue);
   }
}

for (let i = 0; i < eindeutigeNamen.length; i++) {
   // Extrahiere die Werte 0-2 aus dem aktuellen Eintrag in eindeutigeNamen
   const currentEntry = eindeutigeNamen[i];
   const valuesToCheck = currentEntry.slice(0, 3);

   // Suche nach den Werten 0-2 in FlagracenurPunkteundName
   const foundEntry = MixedracenurPunkteundName.find(entry => {
       const comparisonValues = entry.slice(0, 3);
       return JSON.stringify(comparisonValues) === JSON.stringify(valuesToCheck);
   });

   // Wenn ein Eintrag gefunden wurde, füge den letzten Wert hinzu
   if (foundEntry) {
       const lastValue = foundEntry[3];
       eindeutigeNamen[i].push(lastValue);
   }
}

console.log(eindeutigeNamen);
     


   

}

