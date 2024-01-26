function main(){

    
    
   //
    const tablearrayOberlangen = holen_der_Auswahl(0);
    const tablearrayLeer= holen_der_Auswahl(1);
    const tablearrayWesuwe= holen_der_Auswahl(2);
    const tableHaren= holen_der_Auswahl(3);
    const tableIsterberg= holen_der_Auswahl(4);
    const tablefinale= getFinal();

    console.log(tablearrayOberlangen);
    console.log(tablearrayLeer);
    console.log(tablearrayWesuwe);
    console.log(tableHaren);
    console.log(tableIsterberg);
    console.log(tablefinale);
  
 
    Gesamtergebnisfinalarraysatzohneplatz

    
    
}

function getFinal(){

}

function getLocalStorage(AnfangsverweisString,ArraymitVerweisen,){

    const JSON_Ref = AnfangsverweisString + abfrage_radio() + ArraymitVerweisen;
    const resultref = localStorage.getItem(JSON_Ref);
    
    
    const ArrayausLocalStore = JSON.parse(resultref);
  

    return ArrayausLocalStore;
}

function holen_der_Auswahl(turnwert){

   
    

    const VerweiseOrte= ['Oberlangen','Leer', 'Wesuwe', 'Haren' , 'Isterberg'] 
    
    var OberlangenGesamtergebnis=[];
    var LeerGesamtergebnis=[];
    var WesuweGesamtergebnis=[];
    var HarenGesamtergebnis=[];
    var IsterbergGesamtergebnis=[];
    

    for (var i = 0; i < 5; i++) {
        
        var ergebnis = getLocalStorage("Endergebnis", VerweiseOrte[i]);
    
        // Je nach Wert von i die Ergebnisse in verschiedenen Variablen speichern
        switch (i) {
            case 0:
                OberlangenGesamtergebnis.push(ergebnis);
                
                break;
            case 1:
                LeerGesamtergebnis.push(ergebnis);
                break;
            case 2:
                WesuweGesamtergebnis.push(ergebnis);
                break;
            case 3:
                HarenGesamtergebnis.push(ergebnis);
                break;
            case 4:
                IsterbergGesamtergebnis.push(ergebnis);
                break;
            default:
                break;
        }
    }
    

    switch (turnwert) {
        case 0:
            return OberlangenGesamtergebnis;
        case 1:
            return LeerGesamtergebnis;
        case 2:
            return WesuweGesamtergebnis;
        case 3:
            return HarenGesamtergebnis;         
        case 4:
            return IsterbergGesamtergebnis;
        default:
        break;
    }
    


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
function resettable (){
   //btn_visible('uebernehmen');
   //const tableBody = document.querySelector('#tabellergebnis tbody');
   //tableBody.innerHTML = '';
   //btn_hidden('reset');
   location.reload();

}
//Export CSV Funktionen
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
 
 
 function csvdown(){
    
    Name1 = 'ESCRA_EVENT'
    
    var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
 
    const filename= Name1  + utc;
    
    
    
    //csvhandeling 
    exportTableToCSV(filename);
 
 
 
 }