
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

      const returnGesamt = ErgebnisGesamt.slice(0,15)
      
 
     //jedem Eintrag ein Platz hinzufügen
 
     for (let i = 0, x=1; i < returnGesamt.length; i++, x++) {
         
        returnGesamt[i].unshift(x);
 
       }
    
       return returnGesamt;
 
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


  function CreateArrayFinal()
{
    //Auslesen der GesamtarraysErgebnisse und abschneiden nur 15 besten werden in final array geschreiben ohne punkte nur Namen werden gezogen
    // Gesamtergebnis arrays durchgehen und Namenliste der Teilnehmerlisten im ersten schritt erstellen
    const Klasse = abfrage_radio();
    //Funktion abfrage ob array leer bzw. belegt ist wenn nicht belegt dann abbruch mit alert
    if(abfrageabbruch(Klasse)==1){
        alert('Es liegen noch nicht alle Ergebnisse vor, Listenerzeugung wird abgebrochen');
    }
    else{
    const namen= namen_zusammentragen_alle();
    
    // Verschachteltes Array in ein neues Array schreiben
    const namenneu = verschachteltesArray(namen).filter(item => item !== undefined);
  
    // das Neue Array überprüfen und doppelte Einträge löschen
    const dedup_namen=deDupp(namenneu);
    const z = dedup_namen;
    //Array alle Namen einfach
    console.log(dedup_namen);
    // FUNKTION zum auslesen der Gesamtpunkte aus den jeweiligen Orten zu den eindeutigen teilnehmern
    const arraymitergebnisse=ErgebnisseausdenArraysauslesen(z);
    console.log(arraymitergebnisse);
    // Funkton zur Gesamtergebnis ermittlung und sortierung nach plätzen
    const ohneplatz = Platzierungentfernen(arraymitergebnisse);
    //Funktion gesamtwertungswert hinzufügen
    const mitGesamtergebnis = gesamtergebnis(ohneplatz);
    console.log(mitGesamtergebnis);
    const Teilnehmerliste_best15 = sortierung_nachPaltzundaddPlatz(mitGesamtergebnis);
    console.log(Teilnehmerliste_best15);
    // //Array speichern für Bewertungen
    storeFinalliste(Klasse,Teilnehmerliste_best15);
    // // Darstellen auf der Seite Tabelle aufbauen
     tabelleaufbauen(Teilnehmerliste_best15);
    }
 
}