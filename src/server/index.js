const express = require('express');
const rp = require('request-promise');

const app = express();

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

app.use(express.static('dist'));
app.get('/api/getIn', (req, res) => {
    //res.end("{\"Zachary Robinson\":\"1579382958904\",\"Eric Wang\":\"1579370720199\",\"Kristin Cohrs\":\"1579383585246\",\"Dylan Smith\":\"1579382956820\",\"Mick L.\":\"1579370244114\",\"Joshua Negreanu\":\"1579381689703\",\"Liam Wang\":\"1579382952976\",\"Tiffany Toh\":\"1579382962426\",\"Caleb Cress\":\"1579380072660\"}")
    rp(options)
        .then(function (repos) {
            res.end(JSON.stringify(repos));
        })
        .catch(function (err) {
            // API call failed...
            res.end('API Request Failed ' + err);
        });
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
