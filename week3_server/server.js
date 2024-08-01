var express = require('express');
const { request } = require('http');
var app = express();
var http = require('http').Server(app)
var BodyParser = require('body-parser');

app.use (BodyParser.json());

app.use(express.static(__dirname + '/www'));



let server = http.listen(3000, function(){ 
    let host = server.address().address;
    let port = server.address().port;
    console.log("my first node server!");
    console.log("server listerning on: " + host + 
        "port: " + port)
})


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/www/index.html');
    });

    
app.get('/test', function (req, res) {
    res.sendFile(__dirname + '/www/test.html');
    });

app.get('/login', function (req, res) {
    res.sendFile(__dirname + '/www/login.html');
    });

app.get('/account', function (req, res) {
    res.sendFile(__dirname + '/www/account.html');
    });


app.post('/logged', function(req, res) {

    let details = [
        {"email":"i@com","password":"izaiah"},
        {"email":"k@com","password":"kayle"},
        {"email":"s@com","password":"sacha"}
    ];

    if (!req.body) {
        return res.sendStatus(400);
    }

    var user = {};
    user.email = req.body.email;
    user.password = req.body.password;
    user.valid = false;

    for(let i = 0; i < details.length; i++){
        if (user.email == details[i].email && user.password == details[i].password ) {
            console.log("you are corret")        
            user.valid = true;
            //express.response.redirect("/account")
        }else{
            console.log("username or password does not match")
            user.valid = false;
        }
    }

    res.send(user)
       //res.sendFile(__dirname + '/www/account.html');
  });
