var express = require('express');
var app = new express();
var parser = require('body-parser');

var port = 3122;

app.get('/',function (req,res){
    res.render('./../app/index.ejs',{});
}).use(express.static(__dirname + '/../temp')).listen(port);

app.use(parser.json());
app.use(parser.urlencoded({extended:false}));
require('./routes/items.js')(app);
