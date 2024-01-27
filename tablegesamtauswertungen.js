function main(){

    //Mainfunktion zum Aufbau der Wertungstabelle einer gesamten Klasse
    
    
   //Deklarierung der NamenArrays
   const ArrayNamenderStarterOpen = holen_der_Starter('Open');
   const ArrayNamenderStarterAmateur= holen_der_Starter('Amateur');
   const ArrayNamenderStarterNewcomer= holen_der_Starter('Newcomer');
   const ArrayNamenderStarterSenior= holen_der_Starter('Senior');
   const ArrayNamenderStarterHandicap= holen_der_Starter('Handicap');
   const ArrayNamenderStarterJunior= holen_der_Starter('Junior');
   const ArrayNamenderStarterKiddy= holen_der_Starter('Kiddy');

   

    
    
}







//Funktionen für Namenslisten 
function holen_der_Starter(Klasse){

    const Orte = ['Oberlangen','Leer', 'Wesuwe', 'Haren' , 'Isterberg'];
    // Klasse = 'Open';
    var ArrayausLocalStore = [];
    let vereintesArray= [];
   
    
        for(var i = 0; i < 5; i++){
        const JSON_Ref = Klasse + Orte[0];
        const resultref = localStorage.getItem(JSON_Ref);
        ArrayausLocalStore[i] = JSON.parse(resultref);
          
         }


         for(var i = 0; i < 5; i++){
            //Vorname,Nachname,Pferd Überschrift kicken
            ArrayausLocalStore[i].shift();
        
              
        }
         

         vereintesArray = [[...ArrayausLocalStore[0], ...ArrayausLocalStore[1],...ArrayausLocalStore[2], ...ArrayausLocalStore[3],...ArrayausLocalStore[4]]]
     
       const dedupArray=removeDuplicates(vereintesArray);

    return dedupArray;
}

function removeDuplicates(innerArray) {
    const seen = new Set();
    return innerArray[0].filter(value => {
        const stringValue = String(value); // Konvertiere das Element in einen String
        const lowerCaseValue = stringValue.toLowerCase();
        if (!seen.has(lowerCaseValue)) {
            seen.add(lowerCaseValue);
            return true;
        }
        return false;
    });
}





//AbfrageKlasse
function abfrage_klasse(){
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
//RestAnsicht
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