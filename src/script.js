// Create a request variable and assign a new XMLHttpRequest object to it.
const request = new XMLHttpRequest();
let data;

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://team1540.catlin.edu:8443', true);

request.onload = function () {
    console.log(this.response);
    data = JSON.parse(request.response);
};


// Send request
request.send();