//Arrays mit Global Scope zur Übergabe an localStorage für die Teilnehmerlisten
//Oberlangen
let arrayOpenOberlangen = [];let arrayAmateuerOberlangen = [];let arrayNewcomerOberlangen = [];let arraySeniorOberlangen = [];
let arrayHandicapOberlangen = [];let arrayYouthOberlangen = [];let arrayJuniorOberlangen = [];let arrayKiddyOberlangen = [];
//Leer
let arrayOpenLeer = [];let arrayAmateuerLeer = [];let arrayNewcomerLeer = [];let arraySeniorLeer = [];let arrayHandicapLeer = [];
let arrayYouthLeer = [];let arrayJuniorLeer = [];let arrayKiddyLeer = [];
//Wesuwe
let arrayOpenWesuwe = [];let arrayAmateuerWesuwe = [];let arrayNewcomerWesuwe = [];let arraySeniorWesuwe = [];
let arrayHandicapWesuwe = [];let arrayYouthWesuwe = [];let arrayJuniorWesuwe = [];let arrayKiddyWesuwe = [];
//Haren
let arrayOpenHaren = [];let arrayAmateuerHaren = [];let arrayNewcomerHaren = [];let arraySeniorHaren = [];
let arrayHandicapHaren = [];let arrayYouthHaren = [];let arrayJuniorHaren = [];let arrayKiddyHaren = [];
//Isterberg
let arrayOpenIsterberg = [];let arrayAmateuerIsterberg = [];let arrayNewcomerIsterberg = [];
let arraySeniorIsterberg = [];let arrayHandicapIsterberg = [];let arrayYouthIsterberg = [];
let arrayJuniorIsterberg = [];let arrayKiddyIsterberg = [];



//Jedes Array als localStorage Objekt speichern, damit die Rechnerei los gehen kann auf den anderen Seiten
function teilnehmerlistespeichern(){ 

    //Oberlangen
    const arrayasStringOO = JSON.stringify(arrayOpenOberlangen);
    const arrayasStringOA = JSON.stringify(arrayAmateuerOberlangen);
    const arrayasStringON = JSON.stringify(arrayNewcomerOberlangen);
    const arrayasStringOS = JSON.stringify(arraySeniorOberlangen);
    const arrayasStringOH = JSON.stringify(arrayHandicapOberlangen);
    const arrayasStringOY = JSON.stringify(arrayYouthOberlangen);
    const arrayasStringOJ = JSON.stringify(arrayJuniorOberlangen);
    const arrayasStringOK = JSON.stringify(arrayKiddyOberlangen);


    // Array im Local Storage speichern Oberlangen
    localStorage.setItem("OpenOberlangen", arrayasStringOO);
    localStorage.setItem("AmateurOberlangen", arrayasStringOA);
    localStorage.setItem("NewcomerOberlangen", arrayasStringON);
    localStorage.setItem("SeniorOberlangen", arrayasStringOS);
    localStorage.setItem("HandicapOberlangen", arrayasStringOH);
    localStorage.setItem("YouthOberlangen", arrayasStringOY);
    localStorage.setItem("JuniorOberlangen", arrayasStringOJ);
    localStorage.setItem("KiddyOberlangen", arrayasStringOK);

    //Leer
    const arrayasStringLO = JSON.stringify(arrayOpenLeer);
    const arrayasStringLA = JSON.stringify(arrayAmateuerLeer);
    const arrayasStringLN = JSON.stringify(arrayNewcomerLeer);
    const arrayasStringLS = JSON.stringify(arraySeniorLeer);
    const arrayasStringLH = JSON.stringify(arrayHandicapLeer);
    const arrayasStringLY = JSON.stringify(arrayYouthLeer);
    const arrayasStringLJ = JSON.stringify(arrayJuniorLeer);
    const arrayasStringLK = JSON.stringify(arrayKiddyLeer);


    // Array im Local Storage speichern Leer
    localStorage.setItem("OpenLeer", arrayasStringLO);
    localStorage.setItem("AmateurLeer", arrayasStringLA);
    localStorage.setItem("NewcomerLeer", arrayasStringLN);
    localStorage.setItem("SeniorLeer", arrayasStringLS);
    localStorage.setItem("HandicapLeer", arrayasStringLH);
    localStorage.setItem("YouthLeer", arrayasStringLY);
    localStorage.setItem("JuniorLeer", arrayasStringLJ);
    localStorage.setItem("KiddyLeer", arrayasStringLK);
    
    //Wesuwe
    const arrayasStringWO = JSON.stringify(arrayOpenWesuwe);
    const arrayasStringWA = JSON.stringify(arrayAmateuerWesuwe);
    const arrayasStringWN = JSON.stringify(arrayNewcomerWesuwe);
    const arrayasStringWS = JSON.stringify(arraySeniorWesuwe);
    const arrayasStringWH = JSON.stringify(arrayHandicapWesuwe);
    const arrayasStringWY = JSON.stringify(arrayYouthWesuwe);
    const arrayasStringWJ = JSON.stringify(arrayJuniorWesuwe);
    const arrayasStringWK = JSON.stringify(arrayKiddyWesuwe);


    // Array im Local Storage speichern Wesuwe
    localStorage.setItem("OpenWesuwe", arrayasStringWO);
    localStorage.setItem("AmateurWesuwe", arrayasStringWA);
    localStorage.setItem("NewcomerWesuwe", arrayasStringWN);
    localStorage.setItem("SeniorWesuwe", arrayasStringWS);
    localStorage.setItem("HandicapWesuwe", arrayasStringWH);
    localStorage.setItem("YouthWesuwe", arrayasStringWY);
    localStorage.setItem("JuniorWesuwe", arrayasStringWJ);
    localStorage.setItem("KiddyWesuwe", arrayasStringWK);

    //Haren
    const arrayasStringHO = JSON.stringify(arrayOpenHaren);
    const arrayasStringHA = JSON.stringify(arrayAmateuerHaren);
    const arrayasStringHN = JSON.stringify(arrayNewcomerHaren);
    const arrayasStringHS = JSON.stringify(arraySeniorHaren);
    const arrayasStringHH = JSON.stringify(arrayHandicapHaren);
    const arrayasStringHY = JSON.stringify(arrayYouthHaren);
    const arrayasStringHJ = JSON.stringify(arrayJuniorHaren);
    const arrayasStringHK = JSON.stringify(arrayKiddyHaren);


    // Array im Local Storage speichern Haren
    localStorage.setItem("OpenHaren", arrayasStringHO);
    localStorage.setItem("AmateurHaren", arrayasStringHA);
    localStorage.setItem("NewcomerHaren", arrayasStringHN);
    localStorage.setItem("SeniorHaren", arrayasStringHS);
    localStorage.setItem("HandicapHaren", arrayasStringHH);
    localStorage.setItem("YouthHaren", arrayasStringHY);
    localStorage.setItem("JuniorHaren", arrayasStringHJ);
    localStorage.setItem("KiddyHaren", arrayasStringHK);
    
    //Isterberg
    const arrayasStringIO = JSON.stringify(arrayOpenIsterberg);
    const arrayasStringIA = JSON.stringify(arrayAmateuerIsterberg);
    const arrayasStringIN = JSON.stringify(arrayNewcomerIsterberg);
    const arrayasStringIS = JSON.stringify(arraySeniorIsterberg);
    const arrayasStringIH = JSON.stringify(arrayHandicapIsterberg);
    const arrayasStringIY = JSON.stringify(arrayYouthIsterberg);
    const arrayasStringIJ = JSON.stringify(arrayJuniorIsterberg);
    const arrayasStringIK = JSON.stringify(arrayKiddyIsterberg);


    // Array im Local Storage speichern Isterberg
    localStorage.setItem("OpenIsterberg", arrayasStringIO);
    localStorage.setItem("AmateurIsterberg", arrayasStringIA);
    localStorage.setItem("NewcomerIsterberg", arrayasStringIN);
    localStorage.setItem("SeniorIsterberg", arrayasStringIS);
    localStorage.setItem("HandicapIsterberg", arrayasStringIH);
    localStorage.setItem("YouthIsterberg", arrayasStringIY);
    localStorage.setItem("JuniorIsterberg", arrayasStringIJ);
    localStorage.setItem("KiddyIsterberg", arrayasStringIK);

}
//Funktion Tabelle auslesen und in ein Array speichern
function tableToArray() {
    const table = document.getElementById('tableStarter');
  
    if (!table) {
      console.error("Tabelle nicht gefunden. Stelle sicher, dass die ID korrekt ist.");
      return [];
    }
  
    const dataArray = [];
  
    // Durchlaufe jede Zeile der Tabelle (tr-Elemente)
    for (let i = 0; i < table.rows.length; i++) {
      const row = table.rows[i];
      const rowData = [];
  
      // Durchlaufe jede Zelle der aktuellen Zeile (td- oder th-Elemente)
      for (let j = 0; j < row.cells.length; j++) {
        const cell = row.cells[j];
        rowData.push(cell.textContent.trim());
      }
  
      // Füge die aktuelle Zeile zum dataArray hinzu
      dataArray.push(rowData);
    }
  
    
     // Wie returnen dataArray;
      zuordnungzuklasseort(dataArray);
  }

function zuordnungzuklasseort(dataArray){
    
    // Diese Funktion speichert die eingetragenen Teilnehmer aus dem HTML Table in ein Array mit dem Ortsnamen&Klasse
    let ort = abfrage_ort();
    let klasse = abfrage_radio();
    let abfrageteilnehmer = [];
    abfrageteilnehmer = dataArray

    if(ort == "Oberlangen")
    {   
        if(klasse == "Open")
        {
            arrayOpenOberlangen = abfrageteilnehmer;
        }
        if(klasse == "Amateur")
        {
            arrayAmateuerOberlangen = abfrageteilnehmer; 
        }
        if(klasse == "Newcomer")
        {
            arrayNewcomerOberlangen = abfrageteilnehmer;
        }
        if(klasse == "Senior")
        {
            arraySeniorOberlangen  = abfrageteilnehmer;
        }
        if(klasse == "Handicap")
        {
            arrayHandicapOberlangen = abfrageteilnehmer;
        }
        if(klasse == "Youth")
        {
            arrayYouthOberlangen = abfrageteilnehmer;
        }
        if(klasse == "Junior")
        {
            arrayJuniorOberlangen = abfrageteilnehmer;
        }
        if(klasse == "Kiddy")
        {
             arrayKiddyOberlangen = abfrageteilnehmer;
        }
        

    }
    if(ort == "Leer")
    {
        if(klasse == "Open")
        {
            arrayOpenLeer = abfrageteilnehmer;
        }
        if(klasse == "Amateur")
        {
            arrayAmateuerLeer = abfrageteilnehmer; 
        }
        if(klasse == "Newcomer")
        {
             arrayNewcomerLeer = abfrageteilnehmer;
        }
        if(klasse == "Senior")
        {
            arraySeniorLeer  = abfrageteilnehmer;
        }
        if(klasse == "Handicap")
        {
            arrayHandicapLeer = abfrageteilnehmer;
        }
        if(klasse == "Youth")
        {
            arrayYouthLeer = abfrageteilnehmer;
        }
        if(klasse == "Junior")
        {
            arrayJuniorLeer = abfrageteilnehmer;
        }
        if(klasse == "Kiddy")
        {
             arrayKiddyLeer = abfrageteilnehmer;
        }
        

    }
    if(ort == "Wesuwe")
    {
        if(klasse == "Open")
        {
            arrayOpenWesuwe = abfrageteilnehmer;
        }
        if(klasse == "Amateur")
        {
            arrayAmateuerWesuwe = abfrageteilnehmer; 
        }
        if(klasse == "Newcomer")
        {
            arrayNewcomerWesuwe = abfrageteilnehmer;
        }
        if(klasse == "Senior")
        {
            arraySeniorWesuwe  = abfrageteilnehmer;
        }
        if(klasse == "Handicap")
        {
            arrayHandicapWesuwe = abfrageteilnehmer;
        }
        if(klasse == "Youth")
        {
            arrayYouthWesuwe = abfrageteilnehmer;
        }
        if(klasse == "Junior")
        {
            arrayJuniorWesuwe = abfrageteilnehmer;
        }
        if(klasse == "Kiddy")
        {
             arrayKiddyWesuwe = abfrageteilnehmer;
        }

    }
    if(ort == "Haren")
    {
        if(klasse == "Open")
        {
            arrayOpenHaren = abfrageteilnehmer;
        }
        if(klasse == "Amateur")
        {
            arrayAmateuerHaren = abfrageteilnehmer; 
        }
        if(klasse == "Newcomer")
        {
            arrayNewcomerHaren = abfrageteilnehmer;
        }
        if(klasse == "Senior")
        {
            arraySeniorHaren  = abfrageteilnehmer;
        }
        if(klasse == "Handicap")
        {
            arrayHandicapHaren = abfrageteilnehmer;
        }
        if(klasse == "Youth")
        {
            arrayYouthHaren = abfrageteilnehmer;
        }
        if(klasse == "Junior")
        {
            arrayJuniorHaren = abfrageteilnehmer;
        }
        if(klasse == "Kiddy")
        {
             arrayKiddyHaren = abfrageteilnehmer;
        }

    }
    if(ort == "Isterberg")
    {
        if(klasse == "Open")
        {
            arrayOpenIsterberg = abfrageteilnehmer;
        }
        if(klasse == "Amateur")
        {
            arrayAmateuerIsterberg = abfrageteilnehmer; 
        }
        if(klasse == "Newcomer")
        {
            arrayNewcomerIsterberg = abfrageteilnehmer;
        }
        if(klasse == "Senior")
        {
            arraySeniorIsterberg  = abfrageteilnehmer;
        }
        if(klasse == "Handicap")
        {
            arrayHandicapIsterberg = abfrageteilnehmer;
        }
        if(klasse == "Youth")
        {
            arrayYouthIsterberg = abfrageteilnehmer;
        }
        if(klasse == "Junior")
        {
            arrayJuniorIsterberg = abfrageteilnehmer;
        }
        if(klasse == "Kiddy")
        {
             arrayKiddyIsterberg = abfrageteilnehmer;
        }

    }
    
    teilnehmerlistespeichern();
}

function tabelle_fnx() {
    //Diese Funktion ermöglicht die Eingabe der Teilnehmerdaten und manupulation des html-tables

    const vorname = document.getElementById('vorname').value;
    const nachname = document.getElementById('nachname').value;
    const pferd = document.getElementById('pferd').value;
    const error = document.getElementById('error');
    error.innerHTML = (!vorname || !nachname || !pferd) ? 'Vorname, Nachname und Pferd wurde nicht richtig eingetragen' : '';
    
    if (vorname && nachname && pferd) {    
       
            const tableElement = document.getElementById('tableStarter');
            const trElement = document.createElement('tr');
            const tbodyElement = document.createElement('tbody');
            const vornameEle = document.createElement('td');
            const nachnameEle = document.createElement('td');
            const pferdEle = document.createElement('td');

            vornameEle.innerHTML = vorname;
            nachnameEle.innerHTML = nachname;
            pferdEle.innerHTML = pferd;

            trElement.appendChild(vornameEle);
            trElement.appendChild(nachnameEle);
            trElement.appendChild(pferdEle);

            tbodyElement.appendChild(trElement);
            tableElement.appendChild(tbodyElement);
    }
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


