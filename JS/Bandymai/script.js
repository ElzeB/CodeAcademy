function createTable () {

    let body = document.querySelector('body');

    let table = document.createElement('table');

    let tableBody = document.createElement('tableBody');

    table.appendChild(tableBody);

    for (i = 0; i < 2; i++) {
        let tr = document.createElement('tr');
        tableBody.appendChild(tr);
        

        for (j = 0; j < 1; j++) {
            let td = document.createElement('td');
            tr.appendChild(td);
            let rowText = document.createTextNode("Labas");
            td.appendChild(rowText);
            
        }
    }
    body.appendChild(table);


}

createTable();