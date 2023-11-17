


//Jedes Array als localStorage Objekt speichern, damit die Rechnerei los gehen kann auf den anderen Seiten

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
     const arrayasStringOO = JSON.stringify(dataArray);
     localStorage.setItem("Starter", arrayasStringOO);
      
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



