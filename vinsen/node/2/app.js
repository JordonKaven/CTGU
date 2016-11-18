/**
 * Created by Apple on 16/11/12.
 */

var http = require('http');
var connect = require('connect');
var parseUrl = require('url').parse;
var fs = require('fs');


var app = connect();


app.use(function (req, res, next) {
    res.send = function send(html) {
        res.writeHead(200, {'content-type': 'text/html;charset = utf-8'});
        res.end(html);
    };
    next();
});

app.use(function (req, res, next) {
    var info = parseUrl(req.url, true);
    req.pathname = info.pathname;
    req.query = info.query;
    next();
});

app.use(function (req, res, next) {
    if (req.pathname == '/index') {
        fs.readFile('./view/index.html', function (err, data) {
            res.writeHead(200, {'content-type': 'text/html;charset=UTF-8'});
            res.end(data);
        });
    }else {
        next();
    }
});

app.use(function (req, res, next) {

});


var server = http.createServer(function (req, res) {
    if (req.url == '/index') {
        fs.readFile("./view/index.html", function (err, data) {
            res.writeHead(200, {'content-type': 'text/html;charset=UTF-8'});
            res.end(data);
        });
    } else if (req.url == '/css/index.css') {
        fs.readFile("./view/css/index.css", function (err, data) {
            res.writeHead(200, {'content-type': 'text/html;charset=UTF-8'});
            res.end(data);
        });
    } else {
        res.end("nononononono");
    }
});

// var server = http.createServer(app);

server.listen(3001);
