let tbody = document.querySelector('tbody');
let thead = document.querySelector('#table-heading');
let eu = document.querySelector('#eu');
let books = document.querySelector('#books');
let bridges = document.querySelector('#bridges');
let birds = document.querySelector('#birds');
let image = document.querySelector('#loading');
let nav = document.querySelector('#nav');
let heading = document.querySelector('#heading');





sendEurope();
eu.addEventListener('click', sendEurope);
books.addEventListener('click', sendBooks);
bridges.addEventListener('click', sendBridges);
birds.addEventListener('click', sendBirds);








function sendBirds() {
    heading.innerHTML = "List of birds";
    resetColor()
    birds.style.background = "gray";
    nav.style.background = 'url("img/birds.jpg")';
    clearTable();
    let xml = new XMLHttpRequest();
    xml.open('get', "http://mysafeinfo.com/api/data?list=birdsus&format=json");
    xml.onreadystatechange = function () {
        if (xml.readyState == 4 && xml.status == 200) {
            displayData(xml);
        }
    }
    xml.send();
}

function sendBridges() {
    heading.innerHTML = "List of bridges";
    resetColor()
    bridges.style.background = "gray";
    nav.style.background = 'url("img/bridge.jpg")';
    clearTable();
    let xml = new XMLHttpRequest();
    xml.open('get', "http://mysafeinfo.com/api/data?list=bridges_status_ak&format=json");
    xml.onreadystatechange = function () {
        if (xml.readyState == 4 && xml.status == 200) {
            displayData(xml);
        }
    }
    xml.send();
}




function sendBooks() {
    heading.innerHTML = "List of books";
    resetColor()
    books.style.background = "gray";
    nav.style.background = 'url("img/books.jpg")';
    clearTable();
    let xml = new XMLHttpRequest();
    xml.open('get', "http://mysafeinfo.com/api/data?list=comicbooksales&format=json");
    xml.onreadystatechange = function () {
        if (xml.readyState == 4 && xml.status == 200) {
            displayData(xml);
        }
    }
    xml.send();
}
function sendEurope() {
    heading.innerHTML = "List of countries";
    resetColor()
    nav.style.background = 'url("img/eu.jpg")';
    eu.style.background = "gray";
    clearTable();
    let xml = new XMLHttpRequest();
    xml.open('get', "http://mysafeinfo.com/api/data?list=europeanunion&format=json");
    xml.onreadystatechange = function () {
        if (xml.readyState == 4 && xml.status == 200) {
            displayData(xml);
        }
    }
    xml.send();
}

function displayData(xml) {
    image.style.display = "none"
    let data = JSON.parse(xml.responseText);
    let first = data[0];
    let text = "";
    for (prop in first) {
        text += '<th>' + prop + '</th>';
    }
    thead.innerHTML = text;
    text = "";
    data.forEach(function (e, i) {
        text += '<tr>'
        for (p in e) {
            text += '<td>' + e[p] + '</td>'
        }
        text += '<tr>'
    });

    tbody.innerHTML = text;

    


}
function clearTable() {
    text = "";
    tbody.innerHTML = text;
    thead.innerHTML = text;
    image.style.display = "block";
    
}
function resetColor() {
 eu.style.background = "#17a2b8"; 
 books.style.background = "#17a2b8";   
 birds.style.background = "#17a2b8";   
 bridges.style.background = "#17a2b8";   
 
}


