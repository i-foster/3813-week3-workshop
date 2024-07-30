var express = require('express');
var app = express();
var http = require('http').Server(app)


app.use(express.static(__dirname + '/www'));

let server = http.listen(3000, function(){ 
    let host = server.address().address;
    let port = server.address().port;
    console.log("my first node server!");
    console.log("server listerning on: " + host + 
        "port: " + port)
})

app.get('/test', function (req, res) {
    res.sendFile(__dirname + '/www/test.html');
    });

app.get('/login', function (req, res) {
    res.sendFile(__dirname + '/www/login.html');
    });

app.get('/account', function (req, res) {
    res.sendFile(__dirname + '/www/account.html');
    });
    