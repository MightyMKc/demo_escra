
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
   //  if(radio4.checked){
   //     var klasse = radio4.value;
   //  }
   //  if(radio5.checked){
   //     var klasse = radio5.value;
   //  }
   //  if(radio6.checked){
   //     var klasse = radio6.value;
   //  }
   //  if(radio7.checked){
   //     var klasse = radio7.value;
   //  }
   //  if(radio8.checked){
   //     var klasse = radio8.value;
   //  }
    
 
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

function abfrageabbruch(klasse){
   const Teilnehmerliste = [];
   const Bezeichner= 'Endergebnis'
   const Orte = ['Oberlangen','Leer','Wesuwe','Haren','Isterberg']; 

   for(i=0; i<5; i++){

       referenz= Bezeichner+klasse+Orte[i]
       
       const prasearray = localStorage.getItem(referenz);
       let array1 = JSON.parse(prasearray);
       if(array1 === 0){
           return 1;
       }
           else{
               break;
           } 
   }


}

function verschachteltesArray(MultiDimiension){

   const EindimArray= [];

   for(i=0; i<5;i++){

       
       for(k=0;k<15;k++){
           if(MultiDimiension[i][k]=== 0)
           {
               break;
           }
           else{EindimArray.push(MultiDimiension[i][k]);} 
       }

   }

   return EindimArray;
}
function storeFinalliste(Klasse, dedup){

   if(Klasse=='Open'){
       const arrayopen = JSON.stringify(dedup);
       localStorage.setItem("FinalteilnehmerOpen",arrayopen)
   }
   if(Klasse=='Amateur'){
       const arrayamateur = JSON.stringify(dedup);
       localStorage.setItem("FinalteilnehmerAmateur",arrayamateur)
   }
   if(Klasse=='Newcomer'){
       const arraynewcomer = JSON.stringify(dedup);
       localStorage.setItem("FinalteilnehmerNewcomer",arraynewcomer)
   }
}

function deDupp(x){
   const uniqueSet = new Set();

   // Durchlaufe alle Arrays in x und konvertiere sie zu Strings
   for (const innerArray of x) {
   const stringRepresentation = innerArray.join(','); // Konvertiert das Array in einen String
     uniqueSet.add(stringRepresentation); // Fügt den String zum Set hinzu
   }

   // Konvertiere die eindeutigen Strings wieder in Arrays
   const uniqueArrays = Array.from(uniqueSet, str => str.split(','));

   for (let i = 0, x=1; i < uniqueArrays.length; i++, x++) {
       
       uniqueArrays[i].unshift(x);

     }

   return uniqueArrays;


}

function tabelleaufbauen(Array){

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

function namen_zusammentragen_alle(){

   const Klasse =abfrage_radio();
   const Bezeichner= 'Endergebnis'
   const Orte = ['Oberlangen','Leer','Wesuwe','Haren','Isterberg']; 
   
   let Liste_mitallen_Namen_allerOrte_einerKlasse = [];

   for(i=0; i<5; i++){

       referenz= Bezeichner+Klasse+Orte[i]
       
       if(getArraylocalStorage_Vorname_Nachname_Pferd(referenz)!==0){
           Liste_mitallen_Namen_allerOrte_einerKlasse[i]=getArraylocalStorage_Vorname_Nachname_Pferd(referenz);
       }
      
       
   }

   
   return  Liste_mitallen_Namen_allerOrte_einerKlasse;

}

function Platzierungentfernen(zusammengetragen){

   //1. Platzierungen aus Array entfernen
   for (const innerArray of zusammengetragen) {
       innerArray.shift();
     }
     return zusammengetragen;
}


function Punktehinzufügen(Liste,x)
{
   

   for (let i = 0; i < Liste.length; i++) {
       let gefunden = false; // Eine Flagge, um zu überprüfen, ob die Werte gefunden wurden
     
       for (let j = 0; j < x.length; j++) {
         if (
           Liste[i][1] === x[j][1] &&
           Liste[i][2] === x[j][2] &&
           Liste[i][3] === x[j][3]
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

   


function ersetzeNaNMitNull(arr) {
   for (let i = 0; i < arr.length; i++) {
     if (Array.isArray(arr[i])) {
       // Wenn das Element ein Array ist, rufe die Funktion rekursiv auf
       ersetzeNaNMitNull(arr[i]);
     } else if (isNaN(arr[i])) {
       // Wenn das Element NaN ist, ersetze es durch '0'
       arr[i] = 0;
     }
   }
 }
 


function ErgebnisseausdenArraysauslesen(NamenArray)
{  
  let neueListe = NamenArray;
  
  ArrayOrte= ['Oberlangen', 'Leer', 'Wesuwe', 'Haren', 'Isterberg'];
  let Ergebnisarray;
  
  //Schleife drum 
  for(i=0;i<5;i++){
  const JSON_Ref = "Endergebnis" +  abfrage_radio() + ArrayOrte[i];

  
   
  const resultref = localStorage.getItem(JSON_Ref);
  
  const auswahlresult = JSON.parse(resultref);
  
  // Funktionaufruf um letzten Punkte jeweiligen Teilnehmer hinzuzufügen 
  Ergebnisarray=Punktehinzufügen(neueListe,auswahlresult)
  }
  // evtl hier typconfirmation wenn keine Daten zu den Staretern vorlegen bzw. ergebnisse


  return Ergebnisarray;


  //console.log(neueListe);


}



function getArraylocalStorage_Vorname_Nachname_Pferd(referenzlocal){

   const Teilnehmerliste = [];
   
   const prasearray = localStorage.getItem(referenzlocal);
   let array1 = JSON.parse(prasearray);
   
   if(array1 !== 0){

       for (let i = 0; i < array1.length; i++) {
           // Erstelle ein neues Array mit den  3 Elementen aus jedem inneren Array
           const subArray = array1[i].slice(1, 4);
           Teilnehmerliste.push(subArray);
         }
         
         
         
         
    
        return Teilnehmerliste
       
   }
   else{

       return 0;
   }
   
       
}




function sortierung_nachPaltzundaddPlatz(ErgebnisGesamt){
  
   ErgebnisGesamt.sort((a, b) => {
       // Zugriff auf den Wert nach "Gesamtergebnis" in jedem Array
       const wertA = parseInt(a[a.length - 1], 10); // Das vorletzte Element
       const wertB = parseInt(b[b.length - 1], 10); // Das vorletzte Element
     
       // Sortiere absteigend, indem wertB von wertA abgezogen wird
       return wertB - wertA;
     });

     
     

    //jedem Eintrag ein Platz hinzufügen

    for (let i = 0, x=1; i < ErgebnisGesamt.length; i++, x++) {
        
      ErgebnisGesamt[i].unshift(x);

      }
   
      return ErgebnisGesamt;

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


function finalwertehinzufügen(Liste,x){

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

function entferneErstenWert(arr) {
  return arr.map(subArray => subArray.slice(1));
}

function ErgebnisseausdendiziArraysauslesen(NamenArray){

    let neueListe = NamenArray;
    Orte=['Oberlangen','Leer','Wesuwe','Haren','Isterberg'];
    let Ergebnisarray;
    //Schleife drum 
    for(i=0;i<5;i++){
    const JSON_Ref = "Ergebnis" + abfrage_disp() + abfrage_radio() + Orte[i];
     
    const resultref = localStorage.getItem(JSON_Ref);
    console.log(JSON_Ref);
    const auswahlresult = JSON.parse(resultref);
    
    // Funktionaufruf um letzten Punkte jeweiligen Teilnehmer hinzuzufügen 
    console.log(auswahlresult);
    Ergebnisarray=finalwertehinzufügen(neueListe,auswahlresult)
    }
    // evtl hier typconfirmation wenn keine Daten zu den Staretern vorlegen bzw. ergebnisse
  
 
    return Ergebnisarray;





}




 function CreateArrayFinal()
{
   //Auslesen der GesamtarraysErgebnisse und abschneiden nur 15 besten werden in final array geschreiben ohne punkte nur Namen werden gezogen
   // Gesamtergebnis arrays durchgehen und Namenliste der Teilnehmerlisten im ersten schritt erstellen
   const Klasse = abfrage_radio();
   const dizi = abfrage_disp();
   //Funktion abfrage ob array leer bzw. belegt ist wenn nicht belegt dann abbruch mit alert
   if(abfrageabbruch(Klasse)==1){
       alert('Es liegen noch nicht alle Ergebnisse vor, Listenerzeugung wird abgebrochen');
   }
   else{

    if(dizi=='alle'){

      // Gesamtergebnisse
      const namen= namen_zusammentragen_alle();
   
       // Verschachteltes Array in ein neues Array schreiben
      const namenneu = verschachteltesArray(namen).filter(item => item !== undefined);
      //console.log(namenneu);
      // das Neue Array überprüfen und doppelte Einträge löschen
     
      dedup_namen=deDupp(namenneu);
      //console.log(dedup_namen);
       const z = dedup_namen;
      //Array alle Namen einfach
      //console.log(dedup_namen);
      // FUNKTION zum auslesen der Gesamtpunkte aus den jeweiligen Orten zu den eindeutigen teilnehmern
      const arraymitergebnisse=ErgebnisseausdenArraysauslesen(z);
      //console.log(arraymitergebnisse);
      //Funkton zur Gesamtergebnis ermittlung und sortierung nach plätzen
      const ohneplatz = Platzierungentfernen(arraymitergebnisse);
      
      const ObjektGesamtEregbnissemitFinale =ArraytoObject(ohneplatz);
      
  //Finalwerte aus den Arrays rauslesen
  //Mit object auf     
    


     
  
   // storeFinalliste(Klasse,Teilnehmerliste);
  //  // // Darstellen auf der Seite Tabelle aufbauen
    tabelleaufbauen(GesamtEregbnissemitFinale);
    //btn_hidden('Finallisteerzeugen');
    //btn_visible('reset');


    }
    else{
      //Für Polebending etc. einzelne Ansicht generieren 
      const namen= namen_zusammentragen_alle();
   
     // Verschachteltes Array in ein neues Array schreiben
      const namenneu = verschachteltesArray(namen).filter(item => item !== undefined);
 
    // das Neue Array überprüfen und doppelte Einträge löschen
      const dedup_namen=deDupp(namenneu);
      const z =  entferneErstenWert(dedup_namen);
      console.log(z);
      //Dieses Array hat alle Werte der verscheiden Orte zur ausgewählten Disziplin
      const arraymitergebnisse=ErgebnisseausdendiziArraysauslesen(z);
      console.log(arraymitergebnisse);
      Add_Finalwerte_Diziabheangig(arraymitergebnisse);
      const finaly = gesamtergebnisfinall(arraymitergebnisse);
      const Teilnehmerliste = sortierung_nachPaltzundaddPlatz(finaly);
      tabelleaufbauen(Teilnehmerliste);
      btn_hidden('Finallisteerzeugen');
      btn_visible('reset');

    }
   
   }
   

}

function endgültigefinalbewertung(z,zuüberprofen){

 
  for (let i = 0; i < zuüberprofen.length; i++) {
    let currentZuÜberprüfen = zuüberprofen[i];
  
    for (let j = 0; j < z.length; j++) {
      let currentZ = z[j];
  
      // Überprüfen, ob Vorname, Nachname und Pferd übereinstimmen
      if (
        currentZ[0] === currentZuÜberprüfen[0] &&
        currentZ[1] === currentZuÜberprüfen[1] &&
        currentZ[2] === currentZuÜberprüfen[2]
      ) {
        // Wenn Übereinstimmung gefunden, füge z[6] zu zuüberprofen hinzu
        currentZuÜberprüfen.push(currentZ[6]);
        break; // Abbrechen, wenn eine Übereinstimmung gefunden wurde
      }
    }
  }
  
  
  return zuüberprofen
  

  
}

function finalwertefürobject(z,zuüberprofen){

  for (let i = 0; i < zuüberprofen.length; i++) {
    let currentZuÜberprüfen = zuüberprofen[i];
  
    for (let j = 0; j < z.length; j++) {
      let currentZ = z[j];
  
      // Überprüfen, ob Vorname, Nachname und Pferd übereinstimmen
      if (
        currentZ[0] === currentZuÜberprüfen[0] &&
        currentZ[1] === currentZuÜberprüfen[1] &&
        currentZ[2] === currentZuÜberprüfen[2]
      ) {
        // Wenn Übereinstimmung gefunden, füge z[6] zu zuüberprofen hinzu
        currentZuÜberprüfen.push(currentZ[8]);
        break; // Abbrechen, wenn eine Übereinstimmung gefunden wurde
      }
    }
  }

  for (let i = 0; i < zuüberprofen.length; i++) {
    // Extrahiere die Zahlen von x[3] bis x[6] und berechne ihre Summe
    let sum = zuüberprofen[i].slice(3, 9).map(Number).reduce((acc, curr) => acc + curr, 0);
  
    // Füge die Summe als neuen Wert zum Eintrag hinzu
    zuüberprofen[i].push(sum.toString());
  }


  
  
  return zuüberprofen

}


function ArraytoObject(BisFinale_nochohneFinale){

  if(abfrage_radio()=='Open'){
    var ArrayBezeichner = ['ErgebnisFlagraceOpenFinale', 'ErgebnisPolebendingOpenFinale' ,'ErgebnisKeyholeraceOpenFinale','ErgebnisBarrelraceOpenFinale','ErgebnisMixedraceOpenFinale'];
    var Teilnehmerliste = [];
    const prasearrayFlagrace = JSON.parse(localStorage.getItem(ArrayBezeichner[0]));
    const prasearrayPolebending = JSON.parse(localStorage.getItem(ArrayBezeichner[1]));
    const prasearrayKeyhohlerace = JSON.parse(localStorage.getItem(ArrayBezeichner[2]));
    const prasearrayBarrelrace = JSON.parse(localStorage.getItem(ArrayBezeichner[3]));
    const prasearrayMixedrace = JSON.parse(localStorage.getItem(ArrayBezeichner[4]));  
    
    //Namen holen zum Vergelcih
    for (let i = 0; i < prasearrayPolebending.length; i++) {
      // Erstelle ein neues Array mit den  3 Elementen aus jedem inneren Array
      const subArray = prasearrayPolebending[i].slice(0, 3);
      Teilnehmerliste.push(subArray);
    }


    var Teil0=endgültigefinalbewertung(prasearrayFlagrace,Teilnehmerliste)
    var Teil1= endgültigefinalbewertung(prasearrayPolebending,Teil0)
    var Teil2 =  endgültigefinalbewertung(prasearrayKeyhohlerace,Teil1)
    var Teil3 =  endgültigefinalbewertung(prasearrayBarrelrace,Teil2)
    var Teil4 = endgültigefinalbewertung(prasearrayMixedrace,Teil3)
    


    for (let i = 0; i < Teil4.length; i++) {
      // Extrahiere die Zahlen von x[3] bis x[6] und berechne ihre Summe
      let sum = Teil4[i].slice(3, 8).map(Number).reduce((acc, curr) => acc + curr, 0);
    
      // Füge die Summe als neuen Wert zum Eintrag hinzu
      Teil4[i].push(sum.toString());
    }
    
    
    

    
   

  }
  if(abfrage_radio=='Amateur'){
    var ArrayBezeichner = ['ErgebnisFlagraceOpenFinale', 'ErgebnisPolebendingOpenFinale' ,'ErgebnisKeyholeraceOpenFinale','ErgebnisBarrelraceOpenFinale','ErgebnisMixedraceOpenFinale'];
    var Teilnehmerliste = [];
    const prasearrayFlagrace = JSON.parse(localStorage.getItem(ArrayBezeichner[0]));
    const prasearrayPolebending = JSON.parse(localStorage.getItem(ArrayBezeichner[1]));
    const prasearrayKeyhohlerace = JSON.parse(localStorage.getItem(ArrayBezeichner[2]));
    const prasearrayBarrelrace = JSON.parse(localStorage.getItem(ArrayBezeichner[3]));
    const prasearrayMixedrace = JSON.parse(localStorage.getItem(ArrayBezeichner[4]));  
    let Teilnehmer= [] ; 
    //Namen holen zum Vergelcih
    for (let i = 0; i < prasearrayPolebending.length; i++) {
      // Erstelle ein neues Array mit den  3 Elementen aus jedem inneren Array
      const subArray = prasearrayPolebending[i].slice(0, 3);
      Teilnehmerliste.push(subArray);
    }


    var Teil0=endgültigefinalbewertung(prasearrayFlagrace,Teilnehmerliste)
    var Teil1= endgültigefinalbewertung(prasearrayPolebending,Teil0)
    var Teil2 =  endgültigefinalbewertung(prasearrayKeyhohlerace,Teil1)
    var Teil3 =  endgültigefinalbewertung(prasearrayBarrelrace,Teil2)
    var Teil4 = endgültigefinalbewertung(prasearrayMixedrace,Teil3)
    


    for (let i = 0; i < Teil4.length; i++) {
      // Extrahiere die Zahlen von x[3] bis x[6] und berechne ihre Summe
      let sum = Teil4[i].slice(3, 8).map(Number).reduce((acc, curr) => acc + curr, 0);
    
      // Füge die Summe als neuen Wert zum Eintrag hinzu
      Teil4[i].push(sum.toString());
    }
    
    
  }
  if(abfrage_radio=='Newcomer'){
    var ArrayBezeichner = ['ErgebnisFlagraceOpenFinale', 'ErgebnisPolebendingOpenFinale' ,'ErgebnisKeyholeraceOpenFinale','ErgebnisBarrelraceOpenFinale','ErgebnisMixedraceOpenFinale'];
    var Teilnehmerliste = [];
    const prasearrayFlagrace = JSON.parse(localStorage.getItem(ArrayBezeichner[0]));
    const prasearrayPolebending = JSON.parse(localStorage.getItem(ArrayBezeichner[1]));
    const prasearrayKeyhohlerace = JSON.parse(localStorage.getItem(ArrayBezeichner[2]));
    const prasearrayBarrelrace = JSON.parse(localStorage.getItem(ArrayBezeichner[3]));
    const prasearrayMixedrace = JSON.parse(localStorage.getItem(ArrayBezeichner[4]));  
    let Teilnehmer= [] ; 
    //Namen holen zum Vergelcih
    for (let i = 0; i < prasearrayPolebending.length; i++) {
      // Erstelle ein neues Array mit den  3 Elementen aus jedem inneren Array
      const subArray = prasearrayPolebending[i].slice(0, 3);
      Teilnehmerliste.push(subArray);
    }


    var Teil0=endgültigefinalbewertung(prasearrayFlagrace,Teilnehmerliste);
    var Teil1= endgültigefinalbewertung(prasearrayPolebending,Teil0);
    var Teil2 =  endgültigefinalbewertung(prasearrayKeyhohlerace,Teil1);
    var Teil3 =  endgültigefinalbewertung(prasearrayBarrelrace,Teil2);
    var Teil4 = endgültigefinalbewertung(prasearrayMixedrace,Teil3);
    


    for (let i = 0; i < Teil4.length; i++) {
      // Extrahiere die Zahlen von x[3] bis x[6] und berechne ihre Summe
      let sum = Teil4[i].slice(3, 8).map(Number).reduce((acc, curr) => acc + curr, 0);
    
      // Füge die Summe als neuen Wert zum Eintrag hinzu
      Teil4[i].push(sum.toString());
    }
    
    

  }



  

  const mitfinale= finalwertefürobject(Teil4,BisFinale_nochohneFinale,);










  //Object erstellen mit den jeweiligen Weret mit FInale   
  let result = [];

  for (let i = 0; i < mitfinale.length; i++) {
    let obj = {
        vorname: mitfinale[i][0],
        nachname: mitfinale[i][1],
        pferd: mitfinale[i][2],
        ergebnisOberlangen: mitfinale[i][3],
        ergebnisLeer: mitfinale[i][4],
        ergebnisWesuwe: mitfinale[i][5],
        ergebnisHaren: mitfinale[i][6],
        ergebnisIsterberg: mitfinale[i][7],
        ergebnisFinale: mitfinale[i][8],
        ergebnisGesamtpunkte:mitfinale[i][9]
        
    };
    result.push(obj);
  }

    console.log(result);
    return(result);

 


}


function Add_Finalwerte_Diziabheangig(Arrayohneplatz){

  const gespeicherteErgebnissrefernezen=['Finalergebnisflagrace','Finalergebnispolebending','Finalergebniskeyholerace','Finalergebnisbarrelrace','Finalergebnismixedrace'];

  //Das Array hatt alle Werte drin außer vom Finale 

  const UebergebenesArray= Arrayohneplatz;
 

  if(abfrage_disp()=='Flagrace'){
    const z = gespeicherteErgebnissrefernezen[0]
    const resultref = localStorage.getItem(z);
    const auswahlresult = JSON.parse(resultref);
    finalwertehinzufügen(UebergebenesArray,auswahlresult);

  }
  if(abfrage_disp()=='Polebending'){
    const z = gespeicherteErgebnissrefernezen[1]
    const resultref = localStorage.getItem(z);
    const auswahlresult = JSON.parse(resultref);
    finalwertehinzufügen(UebergebenesArray,auswahlresult);

  }
  if(abfrage_disp()=='Keyholerace'){
    const z = gespeicherteErgebnissrefernezen[2]
    const resultref = localStorage.getItem(z);
    const auswahlresult = JSON.parse(resultref);
    finalwertehinzufügen(UebergebenesArray,auswahlresult);

  }
  if(abfrage_disp()=='Barrelrace'){
    const z = gespeicherteErgebnissrefernezen[3]
    const resultref = localStorage.getItem(z);
    const auswahlresult = JSON.parse(resultref);
    finalwertehinzufügen(UebergebenesArray,auswahlresult);

  }
  if(abfrage_disp()=='Mixedrace'){
    const z = gespeicherteErgebnissrefernezen[4]
    const resultref = localStorage.getItem(z);
    const auswahlresult = JSON.parse(resultref);
    finalwertehinzufügen(UebergebenesArray,auswahlresult);

  }




}

function gesamtergebnisfinall(AllePunktearray){

  for (let i = 0; i < AllePunktearray.length; i++) {
      const unterArray = AllePunktearray[i];
      let summe = 0;
    
      // Durchlaufe die Werte von Index 3 bis 7 und berechne die Summe
      for (let j = 3; j <= 8; j++) {
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