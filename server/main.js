var express = require('express');
var app = new express();
var port = 3122;

app.get('/',function (req,res){
    res.render('./../app/index.ejs',{});
}).use(express.static(__dirname + '/../temp')).listen(port);
