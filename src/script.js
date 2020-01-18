// Create a request variable and assign a new XMLHttpRequest object to it.
const request = new XMLHttpRequest();
let data;

let timeIn = new Date(1579370720199);
console.log(((timeIn.getHours() - 1) % 12) + 1 + ':' + (timeIn.getMinutes() < 10 ? '0' : '') + timeIn.getMinutes());

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://127.0.0.1:3000', true);

request.onload = function () {
    console.log(this.response);
    data = JSON.parse(request.response);
};


// Send request
request.send();