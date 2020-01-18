const http = require('http');
const rp = require('request-promise');

const hostname = '127.0.0.1';
const port = 3000;

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

let options = {
    uri: 'https://team1540.catlin.edu:8443/timesheet/loggedin',
    headers: {
        'User-Agent': 'Request-Promise'
    },
    auth: {
        'user': 'cluckedin',
        'pass': 'beanmachine',
        'sendImmediately': false
    },
    json: true // Automatically parses the JSON string in the response
};

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    rp(options)
        .then(function (repos) {
            res.end(JSON.stringify(repos));
        })
        .catch(function (err) {
            // API call failed...
            res.end('API Request Failed ' + err);
        });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
